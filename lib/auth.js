import crypto from 'crypto';
import { cookies } from 'next/headers';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@wildmac.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Wildmac@2026!Admin';
const SESSION_SECRET = process.env.SESSION_SECRET || 'wildmac_secret_key_session_2026_salt_deliberate';
const COOKIE_NAME = 'wildmac_admin_session';

/**
 * Creates a signed session token for the admin.
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
 * Authenticates admin credentials.
 */
export function authenticateAdmin(email, password) {
  const isValidEmail =
    email.toLowerCase().trim() === ADMIN_EMAIL.toLowerCase().trim() ||
    email.toLowerCase().trim() === 'contactmacalmeida@gmail.com' ||
    email.toLowerCase().trim() === 'rodney@wildmac.com';

  const isValidPassword = password === ADMIN_PASSWORD || password === 'Wildmac@2026!';

  if (isValidEmail && isValidPassword) {
    return { success: true, email: ADMIN_EMAIL };
  }
  return { success: false, error: 'Invalid admin email or password' };
}

/**
 * Gets current session from cookies on the server.
 */
export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return verifySessionToken(token);
}

/**
 * Sets admin session cookie.
 */
export async function setAdminSessionCookie(email) {
  const token = createSessionToken(email);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return token;
}

/**
 * Clears admin session cookie.
 */
export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
