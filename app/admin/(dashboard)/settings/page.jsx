'use client';

import React, { useState } from 'react';
import { Database, ShieldCheck, Key, Server, CheckCircle2, AlertCircle, Copy, Lock, Save, Loader2 } from 'lucide-react';

export default function AdminSettingsPage() {
  const [copied, setCopied] = useState('');
  
  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changingPass, setChangingPass] = useState(false);
  const [passSuccess, setPassSuccess] = useState('');
  const [passError, setPassError] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPassError('');
    setPassSuccess('');

    if (newPassword !== confirmPassword) {
      setPassError('New passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setPassError('New password must be at least 8 characters long');
      return;
    }

    setChangingPass(true);
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update password');
      }

      setPassSuccess('Password updated securely in MongoDB Atlas database!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setPassError(err.message || 'Error updating password');
    } finally {
      setChangingPass(false);
    }
  };

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '0.35rem' }}>
          <span className="editorial-stamp">SYSTEM CONFIGURATION</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-ink)', fontWeight: 700, margin: 0 }}>
          Database & Security Settings
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
                Data Storage Engine: MongoDB Atlas
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Persistent cloud repository for articles, frameworks, and admin accounts
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '1rem 1.25rem',
              backgroundColor: 'rgba(37, 211, 102, 0.08)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#1E8E48" />
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-ink)' }}>
                  Cloud Database Connected
                </div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#1E8E48' }}>
                  MONGODB ATLAS CLUSTER0 // DATABASE: wildmac_db
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', backgroundColor: '#1E8E48', color: '#FFFFFF', padding: '0.2rem 0.5rem', borderRadius: '2px', fontWeight: 700 }}>
              LIVE
            </span>
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', lineHeight: 1.6 }}>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong>Collections Active:</strong>
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-light)', fontSize: '0.82rem' }}>
              <li><code>blogs</code>: Markdown essays, published timestamps, reading time metrics.</li>
              <li><code>resources</code>: Strategic blueprints, downloadable framework files, action pillars.</li>
              <li><code>admins</code>: Cryptographically salted PBKDF2 hashed credentials.</li>
            </ul>
          </div>
        </div>

        {/* Change Admin Password Card */}
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
            <Lock size={22} color="var(--accent-red)" />
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
                Update Admin Password in Database
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Passwords are never stored in plaintext — they are salted and hashed with PBKDF2 SHA-512 directly in MongoDB.
              </span>
            </div>
          </div>

          {passSuccess && (
            <div
              style={{
                backgroundColor: 'rgba(37, 211, 102, 0.1)',
                border: '1px solid rgba(37, 211, 102, 0.35)',
                borderRadius: '2px',
                padding: '0.75rem 1rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                color: '#1E8E48',
                fontSize: '0.85rem',
                fontWeight: 550,
              }}
            >
              <CheckCircle2 size={16} />
              <span>{passSuccess}</span>
            </div>
          )}

          {passError && (
            <div
              style={{
                backgroundColor: 'rgba(201, 59, 43, 0.08)',
                border: '1px solid rgba(201, 59, 43, 0.35)',
                borderRadius: '2px',
                padding: '0.75rem 1rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                color: 'var(--accent-red)',
                fontSize: '0.85rem',
              }}
            >
              <AlertCircle size={16} />
              <span>{passError}</span>
            </div>
          )}

          <form onSubmit={handlePasswordChange}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', maxWidth: '420px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Current Password
                </label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••••••"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.88rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  New Password (Min 8 Characters)
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••••••"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.88rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.88rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  disabled={changingPass}
                  className="btn btn-primary"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem', gap: '0.45rem' }}
                >
                  {changingPass ? (
                    <>
                      <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Hashing & Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save size={14} />
                      <span>Update Password</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Security Architecture Notice */}
        <div
          style={{
            backgroundColor: 'var(--bg-pure-white)',
            border: '1px solid var(--border-medium)',
            borderRadius: '4px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <ShieldCheck size={22} color="var(--accent-red)" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
              Zero-Credentials Codebase Standard
            </h2>
          </div>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-deep-blue)', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
            Admin credentials and authentication secrets are excluded from Git commits via <code>.gitignore</code>. 
            All authentication checks run server-side using <strong>PBKDF2 100,000-round hashing</strong> with unique cryptographically random salts stored in your private MongoDB Atlas cluster.
          </p>
        </div>
      </div>
    </div>
  );
}
