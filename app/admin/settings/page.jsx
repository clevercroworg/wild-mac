'use client';

import React, { useState } from 'react';
import { Database, ShieldCheck, Key, Server, CheckCircle2, AlertCircle, Copy, ExternalLink } from 'lucide-react';

export default function AdminSettingsPage() {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  const sampleEnvConfig = `# Wildmac Admin & Database Configuration
ADMIN_EMAIL=admin@wildmac.com
ADMIN_PASSWORD=Wildmac@2026!Admin
SESSION_SECRET=wildmac_secret_key_session_2026_salt_deliberate

# Optional Remote Database (PostgreSQL / Supabase / Neon)
DATABASE_URL=postgresql://user:password@host:5432/wildmac_db
`;

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '0.35rem' }}>
          <span className="editorial-stamp">SYSTEM CONFIGURATION</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-ink)', fontWeight: 700, margin: 0 }}>
          Database & Access Settings
        </h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Database Status Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-pure-white)',
            border: '1px solid var(--border-medium)',
            borderRadius: '4px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <Database size={22} color="var(--accent-red)" />
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
                Data Storage Engine
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Persistent content repository for blog essays and frameworks
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'var(--bg-paper-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '3px',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-deep-blue)' }}>
                Primary Storage: Local Atomic JSON Engine
              </span>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', backgroundColor: 'rgba(37, 211, 102, 0.12)', color: '#1E8E48', padding: '0.2rem 0.5rem', borderRadius: '2px', fontWeight: 700 }}>
                ● CONNECTED & ACTIVE
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              All articles and downloadable frameworks are atomically committed to <code>data/db/blogs.json</code> and <code>data/db/resources.json</code> with instant revalidation.
            </p>
          </div>

          {/* Remote DB Adapter Blueprint */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--text-ink)', margin: '0 0 0.5rem 0', fontWeight: 650 }}>
              Remote Database Integration Blueprint
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', lineHeight: 1.5, marginBottom: '1rem' }}>
              Whenever you wish to connect an external cloud database (e.g. Supabase, Neon PostgreSQL, or MongoDB), simply add the connection variables in <code>.env.local</code>. The unified DAO in <code>lib/db/</code> will seamlessly bridge the connection.
            </p>

            <div style={{ position: 'relative', backgroundColor: '#0F1722', borderRadius: '3px', padding: '1.25rem', color: '#E1E7EE', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', lineHeight: 1.6 }}>
              <button
                type="button"
                onClick={() => copyToClipboard(sampleEnvConfig, 'env')}
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '2px',
                  color: '#FFFFFF',
                  padding: '0.35rem 0.65rem',
                  fontSize: '0.7rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                {copied === 'env' ? <CheckCircle2 size={12} color="#25D366" /> : <Copy size={12} />}
                <span>{copied === 'env' ? 'COPIED' : 'COPY .ENV CONFIG'}</span>
              </button>
              <pre style={{ margin: 0, overflowX: 'auto' }}>{sampleEnvConfig}</pre>
            </div>
          </div>
        </div>

        {/* Security & Credentials Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-pure-white)',
            border: '1px solid var(--border-medium)',
            borderRadius: '4px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <Key size={22} color="var(--accent-red)" />
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
                Authentication Credentials
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Protected with HMAC SHA-256 session signatures & HTTP-only cookies
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-paper-white)', border: '1px solid var(--border-subtle)', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', display: 'block', marginBottom: '0.25rem' }}>
                ADMIN EMAIL
              </span>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-ink)' }}>
                admin@wildmac.com
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-paper-white)', border: '1px solid var(--border-subtle)', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', display: 'block', marginBottom: '0.25rem' }}>
                SESSION LIFETIME
              </span>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-ink)' }}>
                7 Days (Auto-Renewable)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
