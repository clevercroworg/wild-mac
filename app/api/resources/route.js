import { NextResponse } from 'next/server';
import { getAllResources, createResource } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search') || '';

    const resources = await getAllResources({ category, search });
    return NextResponse.json({ success: true, count: resources.length, resources });
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
    return NextResponse.json({ success: true, resource: newResource }, { status: 201 });
  } catch (err) {
    console.error('API /api/resources POST error:', err);
    return NextResponse.json({ error: 'Failed to create resource' }, { status: 500 });
  }
}
