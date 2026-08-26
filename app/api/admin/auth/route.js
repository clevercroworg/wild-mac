import { NextResponse } from 'next/server';
import { authenticateAdmin, setAdminSessionCookie, clearAdminSessionCookie, getAdminSession } from '@/lib/auth';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const authResult = authenticateAdmin(email, password);
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 });
    }

    await setAdminSessionCookie(authResult.email);

    return NextResponse.json({
      success: true,
      message: 'Admin authenticated successfully',
      user: { email: authResult.email },
    });
  } catch (err) {
    console.error('Auth POST error:', err);
    return NextResponse.json({ error: 'Internal server authentication error' }, { status: 500 });
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
    await clearAdminSessionCookie();
    return NextResponse.json({ success: true, message: 'Logged out successfully' });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to logout' }, { status: 500 });
  }
}
