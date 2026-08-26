'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { servicesData } from '@/data/services';
import LionLogo from '@/components/LionLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', isDropdown: true },
    { name: 'Books', href: '/books' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/#resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo with Lion Emblem */}
          <Link href="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <LionLogo size={28} color="var(--text-ink)" />
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ letterSpacing: '0.06em', fontWeight: 600 }}>WILDMAC</span>
              <span className="nav-brand-dot" aria-hidden="true" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                const isServicesActive = pathname.startsWith('/services');
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`nav-item ${isServicesActive ? 'active' : ''}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={13} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-fast)' }} />
                    </Link>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '280px',
                          backgroundColor: 'var(--bg-pure-white)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '2px',
                          boxShadow: '0 16px 36px -10px rgba(24, 51, 72, 0.16)',
                          padding: '0.75rem 0',
                          zIndex: 150,
                        }}
                      >
                        <div style={{ padding: '0.4rem 1.25rem 0.65rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          ADVISORY MODULES
                        </div>
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '0.65rem 1.25rem',
                              fontSize: '0.86rem',
                              color: 'var(--text-deep-blue)',
                              transition: 'background-color var(--transition-fast)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--bg-ice-blue)';
                              e.currentTarget.style.color = 'var(--text-ink)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--text-deep-blue)';
                            }}
                          >
                            <span style={{ fontWeight: 500 }}>{service.title}</span>
                            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)' }}>{service.number}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href || (link.href !== '/' && !link.href.includes('#') && pathname.startsWith(link.href));
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
            <Link href="/consultation" className="btn btn-primary" style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem', gap: '0.5rem' }}>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
          <Link href="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
            <span>WILDMAC</span>
            <span className="nav-brand-dot" aria-hidden="true" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-navy)', padding: '0.5rem' }}
          >
            <X size={26} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.65rem',
                    color: isActive ? 'var(--accent-red)' : 'var(--text-navy)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                  }}
                >
                  {isActive && <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />}
                  <span>{link.name}</span>
                </Link>
              </div>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '1.75rem', borderTop: '1px solid var(--border-subtle)' }}>
          <Link
            href="/consultation"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ width: '100%', padding: '0.9rem', fontSize: '0.92rem' }}
          >
            <span>Book a Consultation</span>
            <ArrowRight size={15} />
          </Link>
          <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-light)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
            BUILD WITH PURPOSE. GROW WITH STRATEGY.
          </p>
        </div>
      </div>
    </>
  );
}
