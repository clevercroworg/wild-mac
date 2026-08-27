import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  authenticateAdmin,
  createSessionToken,
  getAdminSession,
  updateAdminPasswordInDb,
} from '@/lib/auth';

const COOKIE_NAME = 'wildmac_admin_session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const adminUser = await authenticateAdmin(email, password);
    if (!adminUser) {
      return NextResponse.json({ error: 'Invalid admin credentials. Access denied.' }, { status: 401 });
    }

    const token = createSessionToken(adminUser.email);
    const cookieStore = await cookies();

    cookieStore.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return NextResponse.json({
      success: true,
      message: 'Admin authenticated successfully against database',
      user: { email: adminUser.email, role: adminUser.role },
    });
  } catch (err) {
    console.error('Auth POST error:', err);
    return NextResponse.json({ error: 'Internal server authentication error: ' + err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    return NextResponse.json({
      authenticated: true,
      user: { email: session.email },
    });
  } catch (err) {
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
    return NextResponse.json({ success: true, message: 'Logged out successfully' });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to logout' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Current and new password are required' }, { status: 400 });
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ error: 'New password must be at least 8 characters long' }, { status: 400 });
    }

    // Verify current password first
    const verified = await authenticateAdmin(session.email, currentPassword);
    if (!verified) {
      return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 });
    }

    // Update in MongoDB
    const updated = await updateAdminPasswordInDb(session.email, newPassword);
    if (!updated) {
      return NextResponse.json({ error: 'Failed to update password in database' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Password updated successfully in database!' });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
