'use client';

import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-paper)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span className="editorial-stamp">READER CONNECTION</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 3.5vw, 2.85rem)', fontWeight: 500, marginBottom: '1rem', color: 'var(--text-ink)' }}>
            Letters from Wild Mac
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '2.5rem' }}>
            “Occasional thoughts on life, books, purpose, and the road ahead.”
          </p>

          {status === 'success' ? (
            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-mist)', border: '1px solid var(--border-subtle)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <Check size={18} color="var(--accent-red)" />
              <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-navy)' }}>
                Thank you for subscribing. You will receive letters directly from the author's desk.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ flex: '1 1 300px', maxWidth: '420px', position: 'relative' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: '2.75rem', height: '3.2rem', fontSize: '0.95rem' }}
                  aria-label="Email address"
                />
                <Mail size={17} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary"
                style={{ height: '3.2rem', padding: '0 1.85rem' }}
              >
                <span>{status === 'loading' ? 'Subscribing…' : 'Subscribe →'}</span>
              </button>
            </form>
          )}

          <p style={{ fontSize: '0.8rem', color: 'var(--text-whisper)', marginTop: '1.25rem' }}>
            No marketing funnels. No spam. Unsubscribe with a single click at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
