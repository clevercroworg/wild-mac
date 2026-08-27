'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Trash2,
  Send,
  Sparkles,
  ShieldCheck,
  Search,
  ExternalLink,
  RefreshCw,
  Hash,
  CheckCircle2,
  AlertCircle,
  Users,
} from 'lucide-react';

const CHANNELS = [
  { id: 'all', label: 'All Channels' },
  { id: 'general-discussion', label: '# general-discussion' },
  { id: 'founders-strategy', label: '# founders-strategy' },
  { id: 'unhurried-living', label: '# unhurried-living' },
  { id: 'wealth-real-estate', label: '# wealth-real-estate' },
  { id: 'engineering-systems', label: '# engineering-systems' },
];

export default function AdminCommunityModerationPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Host Announcement State
  const [announcementChannel, setAnnouncementChannel] = useState('general-discussion');
  const [announcementContent, setAnnouncementContent] = useState('');
  const [postingAnnouncement, setPostingAnnouncement] = useState(false);
  const [announcementSuccess, setAnnouncementSuccess] = useState(false);

  const fetchAllMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/community');
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
      }
    } catch (err) {
      console.error('Error fetching admin community messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const handleDeleteMessage = async (id) => {
    if (!window.confirm('Are you sure you want to permanently delete this message?')) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/community?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete message:', err);
    } finally {
      setDeletingId(null);
    }
  };

  const handlePostAnnouncement = async (e) => {
    e.preventDefault();
    if (!announcementContent.trim()) return;

    setPostingAnnouncement(true);
    try {
      const res = await fetch('/api/admin/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          channel: announcementChannel,
          content: announcementContent.trim(),
          authorName: 'Rodney Almeida',
          authorRole: 'Founder & Principal Advisor',
        }),
      });

      const data = await res.json();
      if (data.success && data.message) {
        setMessages((prev) => [data.message, ...prev]);
        setAnnouncementContent('');
        setAnnouncementSuccess(true);
        setTimeout(() => setAnnouncementSuccess(false), 3500);
      }
    } catch (err) {
      console.error('Failed to post announcement:', err);
    } finally {
      setPostingAnnouncement(false);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    const matchesChannel = selectedChannel === 'all' || msg.channel === selectedChannel;
    const matchesSearch =
      !searchQuery.trim() ||
      msg.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.role?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesChannel && matchesSearch;
  });

  return (
    <div style={{ padding: '2rem 2.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      {/* -------------------------------------------------------------
          01 — HEADER & TOP ACTIONS
          ------------------------------------------------------------- */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              MODERATION CONTROL
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#111827', margin: 0, fontWeight: 700 }}>
            Community Forum & Live Chat
          </h1>
          <p style={{ fontSize: '0.88rem', color: '#6B7280', margin: '0.25rem 0 0 0' }}>
            Review all live messages, remove spam with 1-click, or post verified announcements directly to readers.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={fetchAllMessages}
            disabled={loading}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.6rem 1rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#374151',
              cursor: 'pointer',
            }}
          >
            <RefreshCw size={14} className={loading ? 'spin' : ''} />
            <span>Refresh Feed</span>
          </button>

          <Link
            href="/community"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.6rem 1.15rem',
              backgroundColor: '#111827',
              color: '#FFFFFF',
              borderRadius: '4px',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <span>Open Public Forum</span>
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>

      {/* -------------------------------------------------------------
          02 — STAT METRICS
          ------------------------------------------------------------- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: '6px', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#6B7280', textTransform: 'uppercase' }}>TOTAL MESSAGES</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#111827', marginTop: '0.35rem' }}>{messages.length}</div>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: '6px', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#6B7280', textTransform: 'uppercase' }}>ACTIVE CHANNELS</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#111827', marginTop: '0.35rem' }}>5</div>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: '6px', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#6B7280', textTransform: 'uppercase' }}>MODERATION STATUS</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.45rem', color: '#16A34A', fontSize: '0.92rem', fontWeight: 650 }}>
            <ShieldCheck size={18} />
            <span>Active & Protected</span>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          03 — POST OFFICIAL ANNOUNCEMENT AS FOUNDER
          ------------------------------------------------------------- */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: '6px',
          padding: '1.5rem',
          marginBottom: '2.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Sparkles size={18} color="var(--accent-red)" />
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: 0 }}>
            Post Official Host Announcement (as Rodney Almeida)
          </h2>
        </div>
        <p style={{ fontSize: '0.82rem', color: '#6B7280', margin: '0 0 1.25rem 0' }}>
          Your message will appear with a verified <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>FOUNDER</span> badge in the selected community channel.
        </p>

        {announcementSuccess && (
          <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', padding: '0.75rem 1rem', borderRadius: '4px', color: '#065F46', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={16} />
            <span>Official announcement published successfully to #{announcementChannel}!</span>
          </div>
        )}

        <form onSubmit={handlePostAnnouncement} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ maxWidth: '320px' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>
              Target Channel
            </label>
            <select
              value={announcementChannel}
              onChange={(e) => setAnnouncementChannel(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 0.85rem',
                fontSize: '0.88rem',
                border: '1px solid #D1D5DB',
                borderRadius: '4px',
                backgroundColor: '#F9FAFB',
                cursor: 'pointer',
              }}
            >
              <option value="general-discussion"># general-discussion</option>
              <option value="founders-strategy"># founders-strategy</option>
              <option value="unhurried-living"># unhurried-living</option>
              <option value="wealth-real-estate"># wealth-real-estate</option>
              <option value="engineering-systems"># engineering-systems</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>
              Announcement Message
            </label>
            <textarea
              required
              rows={3}
              value={announcementContent}
              onChange={(e) => setAnnouncementContent(e.target.value)}
              placeholder="Type your official announcement or insight for community members..."
              style={{
                width: '100%',
                padding: '0.75rem 0.85rem',
                fontSize: '0.9rem',
                border: '1px solid #D1D5DB',
                borderRadius: '4px',
                backgroundColor: '#F9FAFB',
                boxSizing: 'border-box',
                outline: 'none',
                fontFamily: 'inherit',
                lineHeight: 1.5,
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              disabled={postingAnnouncement || !announcementContent.trim()}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem', gap: '0.45rem' }}
            >
              <Send size={14} />
              <span>{postingAnnouncement ? 'Publishing...' : 'Publish Official Announcement'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* -------------------------------------------------------------
          04 — MODERATION FEED & 1-CLICK DELETION
          ------------------------------------------------------------- */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: '6px',
          padding: '1.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
        }}
      >
        {/* Filter and Search Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          {/* Channel Filter Pills */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {CHANNELS.map((ch) => {
              const active = selectedChannel === ch.id;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setSelectedChannel(ch.id)}
                  style={{
                    padding: '0.4rem 0.75rem',
                    fontSize: '0.78rem',
                    fontWeight: active ? 650 : 500,
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: active ? '#111827' : '#E5E7EB',
                    backgroundColor: active ? '#111827' : '#F9FAFB',
                    color: active ? '#FFFFFF' : '#4B5563',
                    cursor: 'pointer',
                  }}
                >
                  {ch.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div style={{ position: 'relative', width: '280px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search author or message..."
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem 0.5rem 2.2rem',
                fontSize: '0.85rem',
                border: '1px solid #D1D5DB',
                borderRadius: '4px',
                backgroundColor: '#F9FAFB',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
            <Search size={15} color="#9CA3AF" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </div>

        {/* Message List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#6B7280', fontSize: '0.9rem' }}>
            Loading community messages...
          </div>
        ) : filteredMessages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3.5rem', color: '#9CA3AF' }}>
            <MessageSquare size={36} color="#D1D5DB" style={{ margin: '0 auto 0.5rem auto' }} />
            <p style={{ margin: 0, fontWeight: 600, color: '#4B5563' }}>No messages found.</p>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem' }}>Try clearing filters or search query.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {filteredMessages.map((msg) => {
              const isDeleting = deletingId === msg.id;
              const formattedDate = new Date(msg.createdAt).toLocaleString([], {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={msg.id}
                  style={{
                    border: '1px solid #E5E7EB',
                    borderRadius: '6px',
                    padding: '1.15rem 1.25rem',
                    backgroundColor: msg.isHost ? '#FFFDFD' : '#FFFFFF',
                    borderLeft: msg.isHost ? '3px solid var(--accent-red)' : '1px solid #E5E7EB',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '2px',
                          backgroundColor: '#EEF2F6',
                          color: '#374151',
                          fontWeight: 650,
                        }}
                      >
                        #{msg.channel}
                      </span>

                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827' }}>
                        {msg.author}
                      </span>

                      {msg.isHost && (
                        <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', backgroundColor: 'rgba(201, 59, 43, 0.1)', color: 'var(--accent-red)', padding: '0.1rem 0.4rem', borderRadius: '2px', fontWeight: 700 }}>
                          FOUNDER
                        </span>
                      )}

                      <span style={{ fontSize: '0.78rem', color: '#6B7280' }}>
                        • {msg.role}
                      </span>

                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginLeft: 'auto' }}>
                        {formattedDate}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.6, backgroundColor: '#F9FAFB', padding: '0.65rem 0.85rem', borderRadius: '4px' }}>
                      {msg.content}
                    </div>
                  </div>

                  {/* 1-Click Delete Button */}
                  <button
                    type="button"
                    onClick={() => handleDeleteMessage(msg.id)}
                    disabled={isDeleting}
                    title="Delete message"
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.08)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      color: '#DC2626',
                      borderRadius: '4px',
                      padding: '0.5rem 0.75rem',
                      cursor: isDeleting ? 'wait' : 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    <Trash2 size={14} />
                    <span>{isDeleting ? 'Deleting...' : 'Delete'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
