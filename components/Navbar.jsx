'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Books', href: '/books' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <Link href="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
            <span>WILD MAC</span>
            <span className="nav-brand-dot" aria-hidden="true" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="nav-actions">
            <Link href="/consultation" className="btn btn-primary" style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}>
              <span>Book a Consultation</span>
              <ArrowRight size={14} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <Link href="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
            <span>WILD MAC</span>
            <span className="nav-brand-dot" aria-hidden="true" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-navy)' }}
          >
            <X size={26} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.85rem',
                  color: isActive ? 'var(--accent-red)' : 'var(--text-navy)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                {isActive && <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
          <Link
            href="/consultation"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ width: '100%', padding: '1rem' }}
          >
            <span>Book a Consultation</span>
            <ArrowRight size={16} />
          </Link>
          <p style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: 'var(--text-light)', textAlign: 'center' }}>
            Live deliberately.
          </p>
        </div>
      </div>
    </>
  );
}
