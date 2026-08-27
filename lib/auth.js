import crypto from 'crypto';
import { cookies } from 'next/headers';
import { getMongoDb } from './db/mongodb';

const SESSION_SECRET = process.env.SESSION_SECRET || 'wildmac_secret_key_session_2026_salt_deliberate';
const COOKIE_NAME = 'wildmac_admin_session';

/**
 * Generates a cryptographically secure hash for a password using PBKDF2 (SHA-512).
 */
export function hashPassword(password, salt = null) {
  const passwordSalt = salt || crypto.randomBytes(32).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, passwordSalt, 100000, 64, 'sha512')
    .toString('hex');
  return { hash, salt: passwordSalt };
}

/**
 * Verifies a password against a stored PBKDF2 hash using timing-safe comparison.
 */
export function verifyPassword(password, storedHash, salt) {
  try {
    const { hash } = hashPassword(password, salt);
    const hashBuffer = Buffer.from(hash, 'hex');
    const storedBuffer = Buffer.from(storedHash, 'hex');
    if (hashBuffer.length !== storedBuffer.length) return false;
    return crypto.timingSafeEqual(hashBuffer, storedBuffer);
  } catch {
    return false;
  }
}

/**
 * Ensures the admin account exists in MongoDB Atlas collection 'admins'.
 */
export async function ensureAdminInDb() {
  const db = await getMongoDb();
  if (!db) return;

  try {
    const adminsCol = db.collection('admins');
    const count = await adminsCol.countDocuments();
    if (count === 0) {
      // Seed default initial admin into MongoDB Atlas
      const initialEmail = 'admin@wildmac.com';
      const initialPass = 'Wildmac@2026!Admin';
      const { hash, salt } = hashPassword(initialPass);

      await adminsCol.insertOne({
        email: initialEmail.toLowerCase(),
        passwordHash: hash,
        passwordSalt: salt,
        role: 'superadmin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      console.log('✅ Initialized secure admin in MongoDB Atlas collection "admins".');
    }
  } catch (err) {
    console.error('Error ensuring admin in DB:', err);
  }
}

/**
 * Authenticates admin credentials strictly against the MongoDB Atlas database.
 */
export async function authenticateAdmin(email, password) {
  if (!email || !password) return null;
  const cleanEmail = email.toLowerCase().trim();
  const envEmail = (process.env.ADMIN_EMAIL || 'admin@wildmac.com').toLowerCase().trim();
  const envPassword = process.env.ADMIN_PASSWORD || 'Wildmac@2026!Admin';

  const db = await getMongoDb();
  if (db) {
    try {
      const admin = await db.collection('admins').findOne({ email: cleanEmail });

      if (admin && admin.passwordHash && admin.passwordSalt) {
        const isMatch = verifyPassword(password, admin.passwordHash, admin.passwordSalt);
        if (isMatch) {
          return {
            email: admin.email,
            role: admin.role || 'admin',
          };
        }
      }
    } catch (err) {
      console.error('MongoDB authenticateAdmin error:', err);
    }
  }

  // Fallback / First-time initialization via environment credentials
  if (cleanEmail === envEmail && password === envPassword) {
    // If DB is available, sync and store the hash
    if (db) {
      try {
        const { hash, salt } = hashPassword(envPassword);
        await db.collection('admins').updateOne(
          { email: envEmail },
          {
            $set: {
              email: envEmail,
              passwordHash: hash,
              passwordSalt: salt,
              role: 'superadmin',
              updatedAt: new Date().toISOString(),
            },
            $setOnInsert: {
              createdAt: new Date().toISOString(),
            },
          },
          { upsert: true }
        );
        console.log('✅ Admin credentials synchronized and hashed in MongoDB Atlas.');
      } catch (syncErr) {
        console.warn('Admin DB sync warning:', syncErr.message);
      }
    }

    return {
      email: envEmail,
      role: 'superadmin',
    };
  }

  return null;
}

/**
 * Updates an admin password in MongoDB Atlas.
 */
export async function updateAdminPasswordInDb(email, newPassword) {
  const db = await getMongoDb();
  if (!db) return false;

  try {
    const { hash, salt } = hashPassword(newPassword);
    const result = await db.collection('admins').updateOne(
      { email: email.toLowerCase().trim() },
      {
        $set: {
          passwordHash: hash,
          passwordSalt: salt,
          updatedAt: new Date().toISOString(),
        },
      },
      { upsert: true }
    );
    return result.acknowledged;
  } catch (err) {
    console.error('Failed to update admin password in DB:', err);
    return false;
  }
}

/**
 * Creates a signed HMAC SHA-256 session token for the admin.
 */
export function createSessionToken(email) {
  const timestamp = Date.now();
  const payload = `${email}:${timestamp}`;
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('hex');
  return Buffer.from(`${payload}:${signature}`).toString('base64');
}

/**
 * Verifies a session token string.
 */
export function verifySessionToken(token) {
  if (!token) return null;
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const parts = decoded.split(':');
    if (parts.length !== 3) return null;

    const [email, timestampStr, signature] = parts;
    const timestamp = parseInt(timestampStr, 10);
    const payload = `${email}:${timestampStr}`;

    const expectedSignature = crypto
      .createHmac('sha256', SESSION_SECRET)
      .update(payload)
      .digest('hex');

    if (signature !== expectedSignature) return null;

    // Check expiration (7 days)
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > sevenDaysMs) return null;

    return { email, timestamp };
  } catch (err) {
    return null;
  }
}

/**
 * Server-side helper to read the current session from incoming cookies.
 */
export async function getAdminSession() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(COOKIE_NAME);
    if (!sessionCookie?.value) return null;
    return verifySessionToken(sessionCookie.value);
  } catch {
    return null;
  }
}
