import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/db/mongodb';
import fs from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), 'data', 'db');
const MESSAGES_FILE = path.join(DB_DIR, 'community_messages.json');

const INITIAL_MESSAGES = [
  {
    id: 'msg-1',
    channel: 'general-discussion',
    author: 'Rodney Almeida',
    role: 'Founder & Author',
    isHost: true,
    avatar: '/images/author-portrait.jpg',
    content: 'Welcome to the Wildmac community forum. This is a sanctuary for founders, builders, and unhurried thinkers. Feel free to introduce yourself, share what you are building, or pose an operational question.',
    createdAt: new Date(Date.now() - 3600000 * 24 * 3).toISOString(),
  },
  {
    id: 'msg-2',
    channel: 'founders-strategy',
    author: 'Vikram Joshi',
    role: 'Tech Founder, Bengaluru',
    isHost: false,
    content: 'The article on "The Quiet Strength of Restraint in Business" resonated deeply. We recently cut 2 low-margin product lines to focus entirely on core B2B infrastructure. The immediate focus shift is already palpable.',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
  },
  {
    id: 'msg-3',
    channel: 'unhurried-living',
    author: 'Maria D’Souza',
    role: 'Architect, Goa',
    isHost: false,
    content: 'Implementing the 90-minute morning silence routine this week has noticeably improved creative drafting output. Grateful for the framework.',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
  {
    id: 'msg-4',
    channel: 'wealth-real-estate',
    author: 'Anand Mehta',
    role: 'Family Office Principal, Mumbai',
    isHost: false,
    content: 'Evaluating coastal heritage properties in Goa using the property evaluation matrix from the resources tab. The risk-adjusted criteria helps filter through speculative hype very quickly.',
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
  },
  {
    id: 'msg-5',
    channel: 'engineering-systems',
    author: 'Sunil Rao',
    role: 'Civil Systems Lead',
    isHost: false,
    content: 'Great to see the addition of Engineering & Technical Advisory. Long-term structural integrity and contractor verification are often overlooked during early planning.',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  }
];

function readLocalMessages() {
  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }
    if (!fs.existsSync(MESSAGES_FILE)) {
      fs.writeFileSync(MESSAGES_FILE, JSON.stringify(INITIAL_MESSAGES, null, 2), 'utf8');
      return INITIAL_MESSAGES;
    }
    const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return INITIAL_MESSAGES;
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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const channel = searchParams.get('channel') || 'general-discussion';

    const db = await getMongoDb();
    if (db) {
      try {
        const col = db.collection('community_messages');
        const count = await col.countDocuments();
        if (count === 0) {
          await col.insertMany(INITIAL_MESSAGES);
        }
        const messages = await col.find({ channel }).sort({ createdAt: 1 }).toArray();
        return NextResponse.json({ success: true, messages: messages.map(m => ({ ...m, _id: m._id.toString() })) });
      } catch (err) {
        console.error('MongoDB community messages fetch error:', err);
      }
    }

    // Local fallback
    const all = readLocalMessages();
    const filtered = all.filter((m) => m.channel === channel);
    return NextResponse.json({ success: true, messages: filtered });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { channel, author, role, content } = body;

    if (!author || !content || !content.trim()) {
      return NextResponse.json({ error: 'Author name and message content are required' }, { status: 400 });
    }

    const newMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      channel: channel || 'general-discussion',
      author: author.trim(),
      role: role?.trim() || 'Community Member',
      isHost: author.toLowerCase().includes('rodney almeida') || author.toLowerCase().includes('admin'),
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };

    const db = await getMongoDb();
    if (db) {
      try {
        await db.collection('community_messages').insertOne({ ...newMessage });
      } catch (err) {
        console.error('MongoDB community message insert error:', err);
      }
    }

    // Local JSON update
    const all = readLocalMessages();
    all.push(newMessage);
    writeLocalMessages(all);

    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
