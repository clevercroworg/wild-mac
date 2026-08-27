import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getAllResources, createResource } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search') || '';

    const resources = await getAllResources({ category, search });
    return NextResponse.json(
      { success: true, count: resources.length, resources },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (err) {
    console.error('API /api/resources GET error:', err);
    return NextResponse.json({ error: 'Failed to fetch resources' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized: Admin session required' }, { status: 401 });
    }

    const body = await request.json();
    if (!body.title || !body.description) {
      return NextResponse.json({ error: 'Resource title and description are required' }, { status: 400 });
    }

    const newResource = await createResource(body);

    // Instant On-Demand Cache Revalidation on Vercel
    try {
      revalidatePath('/resources');
      revalidatePath('/');
      revalidatePath('/admin/resources');
      revalidatePath('/admin');
    } catch (revalErr) {
      console.warn('revalidatePath warning:', revalErr.message);
    }

    return NextResponse.json({ success: true, resource: newResource }, { status: 201 });
  } catch (err) {
    console.error('API /api/resources POST error:', err);
    return NextResponse.json({ error: 'Failed to create resource' }, { status: 500 });
  }
}
