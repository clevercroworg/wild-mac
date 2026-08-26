'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  FolderDown,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ShieldAlert,
  Sparkles,
  PlusCircle,
} from 'lucide-react';
import LionLogo from '@/components/LionLogo';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [adminUser, setAdminUser] = useState(null);

  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (isLoginPage) {
      setIsCheckingAuth(false);
      return;
    }

    const verifySession = async () => {
      try {
        const res = await fetch('/api/admin/auth');
        const data = await res.json();
        if (res.ok && data.authenticated) {
          setAdminUser(data.user);
        } else {
          router.push(`/admin/login?redirect=${encodeURIComponent(pathname)}`);
        }
      } catch (err) {
        router.push(`/admin/login?redirect=${encodeURIComponent(pathname)}`);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    verifySession();
  }, [pathname, isLoginPage, router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (isCheckingAuth) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-ice-blue)',
          gap: '1rem',
        }}
      >
        <LionLogo size={48} />
        <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>
          VERIFYING EXECUTIVE CREDENTIALS...
        </div>
      </div>
    );
  }

  const navItems = [
    { name: 'Executive Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Blog Articles', href: '/admin/blogs', icon: FileText, badge: 'Articles' },
    { name: 'Knowledge Resources', href: '/admin/resources', icon: FolderDown, badge: 'Downloads' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F4F5F7' }}>
      {/* -------------------------------------------------------------
          SIDEBAR NAVIGATION (DESKTOP)
          ------------------------------------------------------------- */}
      <aside
        style={{
          width: '260px',
          backgroundColor: '#0F1722',
          color: '#E1E7EE',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'sticky',
          top: 0,
          height: '100vh',
          zIndex: 90,
        }}
        className="admin-desktop-sidebar"
      >
        {/* Top: Brand & Navigation */}
        <div>
          {/* Brand Header */}
          <div
            style={{
              padding: '1.5rem 1.25rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <LionLogo size={36} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.06em', color: '#FFFFFF' }}>
                  WILDMAC
                </span>
                <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />
              </div>
              <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#8A99AD', letterSpacing: '0.1em' }}>
                ADMIN CONSOLE
              </span>
            </div>
          </div>

          {/* Quick Create Buttons */}
          <div style={{ padding: '1rem 1.25rem 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link
              href="/admin/blogs/editor"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                backgroundColor: 'var(--accent-red)',
                color: '#FFFFFF',
                padding: '0.55rem 0.85rem',
                borderRadius: '2px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background var(--transition-fast)',
              }}
            >
              <PlusCircle size={14} />
              <span>NEW ARTICLE</span>
            </Link>
          </div>

          {/* Nav List */}
          <nav style={{ padding: '0.75rem 0.75rem' }}>
            <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#6A7D94', letterSpacing: '0.12em', padding: '0.5rem 0.75rem', textTransform: 'uppercase' }}>
              MANAGEMENT
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.7rem 0.85rem',
                    marginBottom: '0.2rem',
                    borderRadius: '3px',
                    fontSize: '0.86rem',
                    fontWeight: isActive ? 600 : 450,
                    color: isActive ? '#FFFFFF' : '#9BAEC0',
                    backgroundColor: isActive ? 'rgba(201, 59, 43, 0.2)' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--accent-red)' : '3px solid transparent',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Icon size={16} color={isActive ? 'var(--accent-red)' : '#7E91A6'} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.15rem 0.45rem', borderRadius: '2px', color: '#9BAEC0' }}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: User & Logout */}
        <div style={{ padding: '1rem 0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#0B1119' }}>
          <div style={{ padding: '0.5rem 0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#E1E7EE', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {adminUser?.email || 'Administrator'}
            </div>
            <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#25D366', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#25D366', borderRadius: '50%' }} />
              <span>SESSION ACTIVE</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <Link
              href="/"
              target="_blank"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 0.75rem',
                fontSize: '0.8rem',
                color: '#9BAEC0',
                textDecoration: 'none',
                borderRadius: '2px',
              }}
            >
              <ExternalLink size={13} />
              <span>View Public Site</span>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 0.75rem',
                fontSize: '0.8rem',
                color: 'var(--accent-red)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                borderRadius: '2px',
              }}
            >
              <LogOut size={14} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* -------------------------------------------------------------
          MAIN CONTENT VIEW AREA
          ------------------------------------------------------------- */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Navbar Header */}
        <header
          style={{
            height: '60px',
            backgroundColor: 'var(--bg-pure-white)',
            borderBottom: '1px solid var(--border-medium)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            position: 'sticky',
            top: 0,
            zIndex: 80,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              type="button"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="admin-mobile-toggle"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', display: 'none' }}
            >
              {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <div style={{ fontSize: '0.86rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 600 }}>
              WILDMAC EXECUTIVE CMS
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              href="/admin/blogs/editor"
              className="btn btn-editorial"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem', gap: '0.35rem' }}
            >
              <PlusCircle size={13} />
              <span>Write Article</span>
            </Link>
            <Link
              href="/admin/resources/editor"
              className="btn btn-editorial"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem', gap: '0.35rem' }}
            >
              <PlusCircle size={13} />
              <span>Add Resource</span>
            </Link>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main style={{ flex: 1, padding: '2rem 1.5rem', maxWidth: '1280px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
          {children}
        </main>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .admin-desktop-sidebar {
            display: none !important;
          }
          .admin-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
