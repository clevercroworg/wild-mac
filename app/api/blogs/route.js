import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getAllBlogs, createBlog } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search') || '';
    const includeDraftsParam = searchParams.get('includeDrafts');

    let includeDrafts = false;
    if (includeDraftsParam === 'true') {
      // Only allow seeing drafts if admin is authenticated
      const session = await getAdminSession();
      if (session) {
        includeDrafts = true;
      }
    }

    const blogs = await getAllBlogs({ includeDrafts, category, search });
    return NextResponse.json(
      { success: true, count: blogs.length, blogs },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (err) {
    console.error('API /api/blogs GET error:', err);
    return NextResponse.json({ error: 'Failed to fetch blog articles' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized: Admin session required' }, { status: 401 });
    }

    const body = await request.json();
    if (!body.title || !body.content) {
      return NextResponse.json({ error: 'Article title and content are required' }, { status: 400 });
    }

    const newBlog = await createBlog(body);

    // Instant On-Demand Cache Revalidation on Vercel
    try {
      revalidatePath('/blog');
      revalidatePath(`/blog/${newBlog.slug}`);
      revalidatePath('/');
      revalidatePath('/admin/blogs');
      revalidatePath('/admin');
    } catch (revalErr) {
      console.warn('revalidatePath warning:', revalErr.message);
    }

    return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
  } catch (err) {
    console.error('API /api/blogs POST error:', err);
    return NextResponse.json({ error: 'Failed to create blog article' }, { status: 500 });
  }
}
