import { NextResponse } from 'next/server';
import { getResourceById, updateResource, deleteResource } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const resource = await getResourceById(id);

    if (!resource) {
      return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, resource });
  } catch (err) {
    console.error('API /api/resources/[id] GET error:', err);
    return NextResponse.json({ error: 'Failed to fetch resource' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized: Admin session required' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    const updatedResource = await updateResource(id, body);
    if (!updatedResource) {
      return NextResponse.json({ error: 'Resource not found or could not be updated' }, { status: 404 });
    }

    return NextResponse.json({ success: true, resource: updatedResource });
  } catch (err) {
    console.error('API /api/resources/[id] PUT error:', err);
    return NextResponse.json({ error: 'Failed to update resource' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized: Admin session required' }, { status: 401 });
    }

    const { id } = await params;
    const deleted = await deleteResource(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Resource not found or already deleted' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Resource deleted successfully' });
  } catch (err) {
    console.error('API /api/resources/[id] DELETE error:', err);
    return NextResponse.json({ error: 'Failed to delete resource' }, { status: 500 });
  }
}
