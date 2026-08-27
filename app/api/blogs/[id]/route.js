import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getBlogById, getBlogBySlug, updateBlog, deleteBlog } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

    return NextResponse.json(
      { success: true, blog },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
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

    // Instant On-Demand Cache Revalidation on Vercel
    try {
      revalidatePath('/blog');
      revalidatePath(`/blog/${updatedBlog.slug}`);
      if (body.slug && body.slug !== updatedBlog.slug) {
        revalidatePath(`/blog/${body.slug}`);
      }
      revalidatePath('/');
      revalidatePath('/admin/blogs');
      revalidatePath('/admin');
    } catch (revalErr) {
      console.warn('revalidatePath warning:', revalErr.message);
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

    // Instant On-Demand Cache Revalidation on Vercel
    try {
      revalidatePath('/blog');
      revalidatePath('/');
      revalidatePath('/admin/blogs');
      revalidatePath('/admin');
    } catch (revalErr) {
      console.warn('revalidatePath warning:', revalErr.message);
    }

    return NextResponse.json({ success: true, message: 'Article deleted successfully' });
  } catch (err) {
    console.error('API /api/blogs/[id] DELETE error:', err);
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
  }
}
