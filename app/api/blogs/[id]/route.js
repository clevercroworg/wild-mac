import { NextResponse } from 'next/server';
import { getBlogById, getBlogBySlug, updateBlog, deleteBlog } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    let blog = await getBlogById(id);
    if (!blog) {
      blog = await getBlogBySlug(id);
    }

    if (!blog) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (err) {
    console.error('API /api/blogs/[id] GET error:', err);
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
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

    const updatedBlog = await updateBlog(id, body);
    if (!updatedBlog) {
      return NextResponse.json({ error: 'Article not found or could not be updated' }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (err) {
    console.error('API /api/blogs/[id] PUT error:', err);
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized: Admin session required' }, { status: 401 });
    }

    const { id } = await params;
    const deleted = await deleteBlog(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Article not found or already deleted' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Article deleted successfully' });
  } catch (err) {
    console.error('API /api/blogs/[id] DELETE error:', err);
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
  }
}
