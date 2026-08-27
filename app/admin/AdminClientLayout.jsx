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
  PlusCircle,
  Plus,
} from 'lucide-react';
import LionLogo from '@/components/LionLogo';
import { ToastProvider } from '@/components/AdminToast';

export default function AdminClientLayout({ children, adminUser }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const navItems = [
    { name: 'Executive Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Blog Articles', href: '/admin/blogs', icon: FileText, badge: 'Articles' },
    { name: 'Knowledge Resources', href: '/admin/resources', icon: FolderDown, badge: 'Downloads' },
    { name: 'Database & Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <ToastProvider>
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F4F5F7', position: 'relative' }}>
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
            flexShrink: 0,
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

            {/* Quick Create Button */}
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
                {adminUser?.email || 'admin@wildmac.com'}
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
            MOBILE DRAWER OVERLAY & SIDEBAR
            ------------------------------------------------------------- */}
        {mobileNavOpen && (
          <div
            onClick={() => setMobileNavOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 34, 0.65)',
              backdropFilter: 'blur(4px)',
              zIndex: 9999,
              display: 'flex',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '280px',
                maxWidth: '85vw',
                backgroundColor: '#0F1722',
                color: '#E1E7EE',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '4px 0 24px rgba(0,0,0,0.3)',
                animation: 'slideInLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div>
                {/* Mobile Header */}
                <div style={{ padding: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <LionLogo size={30} />
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: '#FFFFFF' }}>
                      WILDMAC
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileNavOpen(false)}
                    style={{ background: 'none', border: 'none', color: '#FFFFFF', padding: '0.4rem', cursor: 'pointer' }}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <nav style={{ padding: '1rem 0.75rem' }}>
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileNavOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1rem',
                          marginBottom: '0.35rem',
                          borderRadius: '4px',
                          fontSize: '0.92rem',
                          fontWeight: isActive ? 600 : 450,
                          color: isActive ? '#FFFFFF' : '#9BAEC0',
                          backgroundColor: isActive ? 'rgba(201, 59, 43, 0.25)' : 'transparent',
                          borderLeft: isActive ? '3px solid var(--accent-red)' : '3px solid transparent',
                          textDecoration: 'none',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <Icon size={18} color={isActive ? 'var(--accent-red)' : '#7E91A6'} />
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span style={{ fontSize: '0.65rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Footer */}
              <div style={{ padding: '1.25rem 1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#0B1119' }}>
                <div style={{ fontSize: '0.78rem', color: '#E1E7EE', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {adminUser?.email || 'admin@wildmac.com'}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <Link
                    href="/"
                    target="_blank"
                    style={{ color: '#9BAEC0', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
                  >
                    <ExternalLink size={14} />
                    <span>View Public Website</span>
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    style={{ color: 'var(--accent-red)', fontSize: '0.82rem', background: 'none', border: 'none', textAlign: 'left', padding: '0.4rem 0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <LogOut size={14} />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------
            MAIN CONTENT VIEW AREA
            ------------------------------------------------------------- */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, width: '100%' }}>
          {/* Top Navbar Header */}
          <header
            style={{
              height: '56px',
              backgroundColor: 'var(--bg-pure-white)',
              borderBottom: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 1rem',
              position: 'sticky',
              top: 0,
              zIndex: 80,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
              <button
                type="button"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="admin-mobile-toggle"
                aria-label="Toggle navigation menu"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.35rem',
                  display: 'none',
                  color: 'var(--text-ink)',
                }}
              >
                {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
              <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                WILDMAC CMS
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link
                href="/admin/blogs/editor"
                className="btn btn-editorial"
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', gap: '0.3rem' }}
              >
                <Plus size={13} color="var(--accent-red)" />
                <span className="admin-header-btn-text">Write Article</span>
              </Link>
              <Link
                href="/admin/resources/editor"
                className="btn btn-editorial"
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', gap: '0.3rem' }}
              >
                <Plus size={13} color="var(--accent-red)" />
                <span className="admin-header-btn-text">Add Resource</span>
              </Link>
            </div>
          </header>

          {/* Dynamic Page Content */}
          <main style={{ flex: 1, padding: '1.5rem 1rem', maxWidth: '1280px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }} className="admin-main-container">
            {children}
          </main>
        </div>

        <style jsx global>{`
          @media (max-width: 900px) {
            .admin-desktop-sidebar {
              display: none !important;
            }
            .admin-mobile-toggle {
              display: flex !important;
              align-items: center;
              justify-content: center;
            }
            .admin-main-container {
              padding: 1.25rem 0.85rem !important;
            }
          }
          @media (max-width: 500px) {
            .admin-header-btn-text {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </ToastProvider>
  );
}
