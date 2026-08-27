'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Users,
  Send,
  Sparkles,
  ShieldCheck,
  Hash,
  User,
  ArrowRight,
  LogIn,
  LogOut,
  Compass,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import LionLogo from '@/components/LionLogo';

const CHANNELS = [
  {
    id: 'general-discussion',
    name: 'general-discussion',
    title: 'General Inquiries & Welcome',
    description: 'Introductions, open reflections, and cross-disciplinary thoughts.',
  },
  {
    id: 'founders-strategy',
    name: 'founders-strategy',
    title: 'Founders & Business Strategy',
    description: 'Operational clarity, decision frameworks, and leadership insights.',
  },
  {
    id: 'unhurried-living',
    name: 'unhurried-living',
    title: 'Unhurried Living & Philosophy',
    description: 'Daily routines, reading reflections, and intentional life design.',
  },
  {
    id: 'wealth-real-estate',
    name: 'wealth-real-estate',
    title: 'Wealth & Real Estate',
    description: 'Capital stewardship, property evaluation, and generational preservation.',
  },
  {
    id: 'engineering-systems',
    name: 'engineering-systems',
    title: 'Engineering & Technical Builds',
    description: 'Technical project strategy, infrastructure, and architectural execution.',
  },
];

export default function CommunityPage() {
  const [activeChannel, setActiveChannel] = useState('general-discussion');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [newMessageText, setNewMessageText] = useState('');

  // User Profile / Auth state (stored in localStorage)
  const [userProfile, setUserProfile] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authName, setAuthName] = useState('');
  const [authRole, setAuthRole] = useState('Reader & Builder');
  const [authLocation, setAuthLocation] = useState('Goa, India');

  const messagesEndRef = useRef(null);

  // Load user profile on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wildmac_community_user');
      if (saved) {
        setUserProfile(JSON.parse(saved));
      }
    } catch {}
  }, []);

  // Fetch messages when channel changes
  useEffect(() => {
    let isMounted = true;
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/community/messages?channel=${activeChannel}`);
        const data = await res.json();
        if (isMounted && data.success) {
          setMessages(data.messages || []);
        }
      } catch (err) {
        console.error('Error fetching messages:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMessages();
    return () => { isMounted = false; };
  }, [activeChannel]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (!authName.trim()) return;

    const profile = {
      name: authName.trim(),
      role: `${authRole.trim()} • ${authLocation.trim()}`,
      joinedAt: new Date().toISOString(),
    };

    setUserProfile(profile);
    try {
      localStorage.setItem('wildmac_community_user', JSON.stringify(profile));
    } catch {}
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUserProfile(null);
    try {
      localStorage.removeItem('wildmac_community_user');
    } catch {}
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;

    if (!userProfile) {
      setShowAuthModal(true);
      return;
    }

    const payload = {
      channel: activeChannel,
      author: userProfile.name,
      role: userProfile.role,
      content: newMessageText.trim(),
    };

    setSending(true);
    try {
      const res = await fetch('/api/community/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success && data.message) {
        setMessages((prev) => [...prev, data.message]);
        setNewMessageText('');
      }
    } catch (err) {
      console.error('Failed to send message:', err);
    } finally {
      setSending(false);
    }
  };

  const currentChannelObj = CHANNELS.find((c) => c.id === activeChannel) || CHANNELS[0];

  return (
    <div style={{ backgroundColor: 'var(--bg-ice-blue)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* -------------------------------------------------------------
          01 — COMMUNITY HEADER & MANIFESTO
          ------------------------------------------------------------- */}
      <section
        style={{
          backgroundColor: 'var(--bg-paper-white)',
          borderBottom: '1px solid var(--border-subtle)',
          paddingTop: '3.5rem',
          paddingBottom: '3rem',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <div style={{ marginBottom: '0.85rem' }}>
              <span className="editorial-stamp">THE WILDMAC FORUM // READERS & BUILDERS</span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.12,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              An Unhurried Sanctuary for High-Judgment Minds.
            </h1>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              A dignified, private gathering space for founders, executives, investors, and thoughtful readers to discuss ideas, strategy, books, and deliberate living.
            </p>

            {/* Profile Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {userProfile ? (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(37, 211, 102, 0.08)',
                    border: '1px solid rgba(37, 211, 102, 0.3)',
                    borderRadius: '4px',
                  }}
                >
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#1E8E48', borderRadius: '50%' }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-ink)', fontWeight: 600 }}>
                    Logged in as <strong>{userProfile.name}</strong> <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>({userProfile.role})</span>
                  </span>
                  <button
                    onClick={handleLogout}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-red)',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: 0,
                      fontWeight: 600,
                    }}
                  >
                    <LogOut size={13} />
                    <span>Log Out</span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowAuthModal(true)}
                  className="btn btn-editorial"
                  style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem', gap: '0.45rem' }}
                >
                  <LogIn size={15} />
                  <span>Join Community / Sign In</span>
                </button>
              )}

              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
                • 124 ACTIVE MEMBERS • NO SPAM TOLERANCE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          02 — MAIN FORUM & CHAT ROOM STAGE
          ------------------------------------------------------------- */}
      <section className="container" style={{ marginTop: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem' }} className="community-grid">
          {/* LEFT: CHANNEL LIST & GUIDELINES */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Channels Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.25rem 1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', paddingLeft: '0.5rem', fontWeight: 650 }}>
                DISCUSSION CHANNELS
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {CHANNELS.map((channel) => {
                  const isActive = activeChannel === channel.id;
                  return (
                    <button
                      key={channel.id}
                      type="button"
                      onClick={() => setActiveChannel(channel.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '4px',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        backgroundColor: isActive ? 'var(--text-deep-blue)' : 'transparent',
                        color: isActive ? '#FFFFFF' : 'var(--text-ink)',
                        fontWeight: isActive ? 600 : 450,
                        fontSize: '0.88rem',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <Hash size={15} color={isActive ? 'var(--accent-red)' : 'var(--text-light)'} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {channel.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Code of Conduct Plate */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.25rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.75rem' }}>
                <ShieldCheck size={16} color="var(--accent-red)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-ink)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  COMMUNITY STANDARDS
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.15rem', fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
                <li>No marketing, sales funnels, or spam.</li>
                <li>Offer genuine nuance and lived experiences.</li>
                <li>Respect member confidentiality.</li>
              </ul>
            </div>

            {/* Direct Consultation Link */}
            <div
              style={{
                backgroundColor: 'var(--text-deep-blue)',
                color: '#FFFFFF',
                borderRadius: '6px',
                padding: '1.25rem',
              }}
            >
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Need Private 1-on-1 Advisory?
              </div>
              <p style={{ fontSize: '0.78rem', color: '#B3C5D7', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                Book an unhurried, direct confidential session with Rodney Almeida.
              </p>
              <Link
                href="/consultation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: '#FFFFFF',
                  backgroundColor: 'var(--accent-red)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '3px',
                  fontSize: '0.78rem',
                  fontWeight: 650,
                  textDecoration: 'none',
                }}
              >
                <span>Book Consultation</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* RIGHT: CHAT ROOM FEED */}
          <div
            style={{
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-medium)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              height: '680px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              overflow: 'hidden',
            }}
          >
            {/* Chat Room Top Bar */}
            <div
              style={{
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                backgroundColor: '#FBFDFE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Hash size={18} color="var(--accent-red)" />
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-ink)', margin: 0, fontFamily: 'var(--font-display)' }}>
                    {currentChannelObj.title}
                  </h2>
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.2rem', display: 'block' }}>
                  {currentChannelObj.description}
                </span>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                backgroundColor: '#FFFFFF',
              }}
            >
              {loading ? (
                <div style={{ textAlign: 'center', color: 'var(--text-light)', padding: '3rem', fontSize: '0.88rem' }}>
                  Connecting to #{activeChannel}...
                </div>
              ) : messages.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--text-light)', padding: '4rem 1rem' }}>
                  <MessageSquare size={32} color="var(--text-light)" style={{ margin: '0 auto 0.75rem auto', opacity: 0.5 }} />
                  <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem' }}>No messages yet in this channel.</p>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.82rem' }}>Be the first to share an insight or question.</p>
                </div>
              ) : (
                messages.map((msg) => {
                  const dateStr = new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  return (
                    <div
                      key={msg.id}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem',
                        paddingBottom: '0.5rem',
                      }}
                    >
                      {/* Avatar */}
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: msg.isHost ? 'var(--text-deep-blue)' : 'var(--bg-ice-blue)',
                          border: msg.isHost ? '2px solid var(--accent-red)' : '1px solid var(--border-medium)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: msg.isHost ? '#FFFFFF' : 'var(--text-deep-blue)',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          flexShrink: 0,
                          overflow: 'hidden',
                        }}
                      >
                        {msg.author.charAt(0).toUpperCase()}
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-ink)' }}>
                            {msg.author}
                          </span>
                          {msg.isHost && (
                            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', backgroundColor: 'rgba(201, 59, 43, 0.12)', color: 'var(--accent-red)', padding: '0.1rem 0.4rem', borderRadius: '2px', fontWeight: 700 }}>
                              FOUNDER
                            </span>
                          )}
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                            {msg.role}
                          </span>
                          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                            {dateStr}
                          </span>
                        </div>

                        <div
                          style={{
                            fontSize: '0.92rem',
                            color: 'var(--text-deep-blue)',
                            lineHeight: 1.6,
                            backgroundColor: '#F9FBFC',
                            padding: '0.75rem 1rem',
                            borderRadius: '4px',
                            border: '1px solid var(--border-subtle)',
                          }}
                        >
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSendMessage}
              style={{
                padding: '1rem 1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                backgroundColor: '#F9FBFC',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <input
                type="text"
                value={newMessageText}
                onChange={(e) => setNewMessageText(e.target.value)}
                placeholder={userProfile ? `Message #${activeChannel}...` : 'Join community or log in to post a message...'}
                disabled={sending}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '4px',
                  backgroundColor: '#FFFFFF',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={sending || !newMessageText.trim()}
                className="btn btn-primary"
                style={{
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.85rem',
                  gap: '0.4rem',
                  cursor: !newMessageText.trim() ? 'not-allowed' : 'pointer',
                  opacity: !newMessageText.trim() ? 0.6 : 1,
                }}
              >
                <Send size={15} />
                <span>Post</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          03 — SIGN UP / PROFILE MODAL
          ------------------------------------------------------------- */}
      {showAuthModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 34, 0.75)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '6px',
              maxWidth: '440px',
              width: '100%',
              padding: '2rem',
              boxShadow: 'var(--shadow-dropdown)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
                <LionLogo size={42} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-ink)', margin: 0, fontWeight: 700 }}>
                Join the Wildmac Forum
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '0.35rem', lineHeight: 1.5 }}>
                Enter your name and title to post in our private community discussion channels.
              </p>
            </div>

            <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.3rem' }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={authName}
                  onChange={(e) => setAuthName(e.target.value)}
                  placeholder="e.g. Rodney Almeida"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.9rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.3rem' }}>
                  Role or Background
                </label>
                <input
                  type="text"
                  value={authRole}
                  onChange={(e) => setAuthRole(e.target.value)}
                  placeholder="e.g. Founder, Architect, Investor, Reader"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.9rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.3rem' }}>
                  City / Location
                </label>
                <input
                  type="text"
                  value={authLocation}
                  onChange={(e) => setAuthLocation(e.target.value)}
                  placeholder="e.g. Goa, India or London, UK"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.9rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setShowAuthModal(false)}
                  style={{
                    flex: 1,
                    padding: '0.65rem',
                    backgroundColor: '#F0F4F8',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: 'var(--text-deep-blue)',
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem', justifyContent: 'center' }}
                >
                  Join Forum
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 860px) {
          .community-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
