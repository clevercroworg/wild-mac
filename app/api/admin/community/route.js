import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/db/mongodb';
import { verifySessionToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), 'data', 'db');
const MESSAGES_FILE = path.join(DB_DIR, 'community_messages.json');

function readLocalMessages() {
  try {
    if (!fs.existsSync(MESSAGES_FILE)) return [];
    return JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function writeLocalMessages(messages) {
  try {
    if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
    return true;
  } catch {
    return false;
  }
}

// Ensure caller is authenticated admin
async function checkAuth() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('wildmac_admin_session')?.value;
    return verifySessionToken(token);
  } catch {
    return null;
  }
}

export async function GET() {
  const session = await checkAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const db = await getMongoDb();
    if (db) {
      const col = db.collection('community_messages');
      const messages = await col.find({}).sort({ createdAt: -1 }).toArray();
      return NextResponse.json({
        success: true,
        messages: messages.map((m) => ({ ...m, _id: m._id.toString() })),
      });
    }

    const local = readLocalMessages().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return NextResponse.json({ success: true, messages: local });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  const session = await checkAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { channel, content, authorName, authorRole } = body;

    if (!content || !content.trim()) {
      return NextResponse.json({ error: 'Message content is required' }, { status: 400 });
    }

    const newMsg = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      channel: channel || 'general-discussion',
      author: authorName?.trim() || 'Rodney Almeida',
      role: authorRole?.trim() || 'Founder & Principal Advisor',
      isHost: true,
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };

    const db = await getMongoDb();
    if (db) {
      try {
        await db.collection('community_messages').insertOne({ ...newMsg });
      } catch (err) {
        console.error('MongoDB insert error in admin community:', err);
      }
    }

    const local = readLocalMessages();
    local.push(newMsg);
    writeLocalMessages(local);

    return NextResponse.json({ success: true, message: newMsg });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  const session = await checkAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }

    const db = await getMongoDb();
    if (db) {
      try {
        await db.collection('community_messages').deleteOne({ id });
      } catch (err) {
        console.error('MongoDB delete error in admin community:', err);
      }
    }

    const local = readLocalMessages();
    const updated = local.filter((m) => m.id !== id);
    writeLocalMessages(updated);

    return NextResponse.json({ success: true, deletedId: id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
