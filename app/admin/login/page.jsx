'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Lock, Mail, Eye, EyeOff, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import LionLogo from '@/components/LionLogo';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/admin';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      router.push(redirectUrl);
      router.refresh();
    } catch (err) {
      setErrorMsg(err.message || 'Invalid credentials. Please verify your login details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '440px',
        backgroundColor: 'var(--bg-pure-white)',
        border: '1px solid var(--border-medium)',
        borderRadius: '4px',
        boxShadow: 'var(--shadow-dropdown)',
        padding: '2.5rem 2rem',
      }}
    >
      {/* Brand Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <LionLogo size={54} />
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--text-ink)' }}>
            WILDMAC
          </span>
          <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: 0, fontFamily: 'var(--font-mono)' }}>
          EXECUTIVE CMS // ADMIN PORTAL
        </p>
      </div>

      {/* Error Alert */}
      {errorMsg && (
        <div
          style={{
            backgroundColor: 'rgba(201, 59, 43, 0.08)',
            border: '1px solid rgba(201, 59, 43, 0.35)',
            borderRadius: '2px',
            padding: '0.75rem 1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.65rem',
            color: 'var(--accent-red)',
            fontSize: '0.85rem',
          }}
        >
          <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label
            style={{
              display: 'block',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-deep-blue)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.45rem',
              fontWeight: 650,
            }}
          >
            Admin Email
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@wildmac.com"
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.4rem',
                fontSize: '0.9rem',
                border: '1px solid var(--border-medium)',
                borderRadius: '2px',
                backgroundColor: 'var(--bg-paper-white)',
                color: 'var(--text-ink)',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <Mail
              size={15}
              color="var(--text-light)"
              style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
            />
          </div>
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: '1.75rem' }}>
          <label
            style={{
              display: 'block',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-deep-blue)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.45rem',
              fontWeight: 650,
            }}
          >
            Password
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              style={{
                width: '100%',
                padding: '0.75rem 2.5rem 0.75rem 2.4rem',
                fontSize: '0.9rem',
                border: '1px solid var(--border-medium)',
                borderRadius: '2px',
                backgroundColor: 'var(--bg-paper-white)',
                color: 'var(--text-ink)',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <Lock
              size={15}
              color="var(--text-light)"
              style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-light)',
                padding: '0.2rem',
              }}
            >
              {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-primary"
          style={{
            width: '100%',
            padding: '0.85rem',
            fontSize: '0.9rem',
            justifyContent: 'center',
            cursor: isLoading ? 'wait' : 'pointer',
            opacity: isLoading ? 0.7 : 1,
          }}
        >
          {isLoading ? (
            <span>Authenticating...</span>
          ) : (
            <>
              <span>Enter Admin Console</span>
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </form>

      {/* Security Notice & Credential Hint */}
      <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
          <ShieldCheck size={14} color="var(--accent-red)" />
          <span>Secure encrypted executive session</span>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--text-deep-blue)', textDecoration: 'underline' }}>
            ← Return to public website
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-ice-blue)',
        padding: '2rem 1.25rem',
      }}
    >
      <Suspense fallback={<div style={{ color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>LOADING CONSOLE...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
