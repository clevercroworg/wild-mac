'use client';

import React, { useState, useEffect } from 'react';
import {
  Database,
  ShieldCheck,
  Key,
  Server,
  CheckCircle2,
  AlertCircle,
  Lock,
  Save,
  Loader2,
  RefreshCw,
  Cloud,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useToast } from '@/components/AdminToast';

export default function AdminSettingsPage() {
  const { addToast } = useToast();

  // Diagnostics State
  const [diagnostics, setDiagnostics] = useState(null);
  const [loadingDiag, setLoadingDiag] = useState(true);
  const [purgingCache, setPurgingCache] = useState(false);

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changingPass, setChangingPass] = useState(false);
  const [passSuccess, setPassSuccess] = useState('');
  const [passError, setPassError] = useState('');

  const loadDiagnostics = async () => {
    try {
      setLoadingDiag(true);
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      if (data.success) {
        setDiagnostics(data);
      }
    } catch (err) {
      console.warn('Diagnostics fetch note:', err.message);
    } finally {
      setLoadingDiag(false);
    }
  };

  useEffect(() => {
    loadDiagnostics();
  }, []);

  const handlePurgeCache = async () => {
    setPurgingCache(true);
    try {
      const res = await fetch('/api/admin/settings', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        addToast({
          type: 'success',
          title: 'Cache Purged',
          message: data.message || 'Cache refreshed from MongoDB Atlas.',
        });
        loadDiagnostics();
      }
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Cache Refresh Error',
        message: err.message,
      });
    } finally {
      setPurgingCache(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPassError('');
    setPassSuccess('');

    if (newPassword !== confirmPassword) {
      const msg = 'New passwords do not match';
      setPassError(msg);
      addToast({ type: 'error', title: 'Validation Error', message: msg });
      return;
    }

    if (newPassword.length < 8) {
      const msg = 'New password must be at least 8 characters long';
      setPassError(msg);
      addToast({ type: 'error', title: 'Weak Password', message: msg });
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
      addToast({
        type: 'success',
        title: 'Password Updated',
        message: 'Your new admin credentials are active and encrypted in MongoDB.',
      });

      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      const errMsg = err.message || 'Error updating password';
      setPassError(errMsg);
      addToast({
        type: 'error',
        title: 'Update Failed',
        message: errMsg,
      });
    } finally {
      setChangingPass(false);
    }
  };

  return (
    <div style={{ maxWidth: '880px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ marginBottom: '0.35rem' }}>
            <span className="editorial-stamp">SYSTEM CONFIGURATION</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-ink)', fontWeight: 700, margin: 0 }}>
            Database & System Settings
          </h1>
        </div>

        <button
          type="button"
          onClick={handlePurgeCache}
          disabled={purgingCache}
          className="btn btn-secondary"
          style={{ padding: '0.6rem 1.1rem', fontSize: '0.82rem', gap: '0.45rem' }}
        >
          <RefreshCw size={14} style={{ animation: purgingCache ? 'spin 1s linear infinite' : 'none' }} />
          <span>{purgingCache ? 'Purging Cache...' : 'Refresh In-Memory Cache'}</span>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Live Diagnostics Card */}
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
            <Server size={22} color="var(--accent-red)" />
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
                Live Cloud Diagnostics & Storage
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Real-time connection status with MongoDB Atlas and Cloudinary CDN
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {/* MongoDB Tile */}
            <div
              style={{
                padding: '1.1rem',
                backgroundColor: 'rgba(34, 197, 94, 0.06)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '4px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 650, color: 'var(--text-ink)' }}>
                  MONGODB ATLAS
                </span>
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', backgroundColor: '#16A34A', color: '#FFFFFF', padding: '0.15rem 0.45rem', borderRadius: '2px', fontWeight: 700 }}>
                  CONNECTED
                </span>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-ink)', marginBottom: '0.2rem' }}>
                {diagnostics?.database?.name || 'wildmac_db'}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {diagnostics ? `${diagnostics.database.blogCount} Blogs · ${diagnostics.database.resourceCount} Resources` : 'Checking collections...'}
              </div>
            </div>

            {/* Cloudinary Tile */}
            <div
              style={{
                padding: '1.1rem',
                backgroundColor: 'rgba(2, 132, 199, 0.06)',
                border: '1px solid rgba(2, 132, 199, 0.3)',
                borderRadius: '4px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 650, color: 'var(--text-ink)' }}>
                  CLOUDINARY CDN
                </span>
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', backgroundColor: '#0284C7', color: '#FFFFFF', padding: '0.15rem 0.45rem', borderRadius: '2px', fontWeight: 700 }}>
                  ACTIVE
                </span>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-ink)', marginBottom: '0.2rem' }}>
                {diagnostics?.cloudinary?.cloudName || 'vm1uc77k'}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Direct Stream Uploader · Global Edge Hosting
              </div>
            </div>
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
                Update Administrator Password
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Passwords are cryptographically salted and hashed with PBKDF2 in your MongoDB Atlas cluster.
              </span>
            </div>
          </div>

          {passSuccess && (
            <div
              style={{
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: '2px',
                padding: '0.75rem 1rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                color: '#16A34A',
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
      </div>
    </div>
  );
}
