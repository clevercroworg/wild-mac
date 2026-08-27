import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { getMongoDb } from '@/lib/db/mongodb';
import { isCloudinaryConfigured } from '@/lib/cloudinary';
import { getAllBlogs, getAllResources } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = await getMongoDb();
    let dbStatus = 'offline';
    let blogCount = 0;
    let resourceCount = 0;
    let adminCount = 0;

    if (db) {
      try {
        await db.command({ ping: 1 });
        dbStatus = 'connected';
        blogCount = await db.collection('blogs').countDocuments();
        resourceCount = await db.collection('resources').countDocuments();
        adminCount = await db.collection('admins').countDocuments();
      } catch (err) {
        dbStatus = 'error: ' + err.message;
      }
    }

    const cloudinaryActive = isCloudinaryConfigured();
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'Not set';

    return NextResponse.json({
      success: true,
      database: {
        status: dbStatus,
        name: process.env.MONGODB_DB || 'wildmac_db',
        blogCount,
        resourceCount,
        adminCount,
      },
      cloudinary: {
        active: cloudinaryActive,
        cloudName,
      },
      serverTime: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Force re-fetch blogs and resources from DB
    await getAllBlogs({ includeDrafts: true });
    await getAllResources({ includeDrafts: true });

    return NextResponse.json({
      success: true,
      message: 'In-memory cache purged and synced with live MongoDB Atlas database.',
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
