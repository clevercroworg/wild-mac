'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronDown, ChevronRight, Mail, MessageSquare, Heart } from 'lucide-react';
import { servicesData } from '@/data/services';
import LionLogo from '@/components/LionLogo';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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

  // Auto expand mobile services if currently on a services page
  useEffect(() => {
    if (pathname.startsWith('/services')) {
      setMobileServicesOpen(true);
    }
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/', num: '01' },
    { name: 'About', href: '/about', num: '02' },
    { name: 'Services', href: '/services', isDropdown: true, num: '03' },
    { name: 'Pricing', href: '/pricing', num: '04' },
    { name: 'Books', href: '/books', num: '05' },
    { name: 'Resources', href: '/resources', num: '06' },
    { name: 'Community', href: '/community', num: '07' },
    { name: 'Projects', href: '/future-projects', num: '08' },
    { name: 'FAQ', href: '/faq', num: '09' },
    { name: 'Blog', href: '/blog', num: '10' },
    { name: 'Donate', href: '/donate', num: '11', isHighlight: true },
    { name: 'Contact', href: '/contact', num: '12' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo with Lion Emblem */}
          <Link href="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <LionLogo size={50} />
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ letterSpacing: '0.06em', fontWeight: 600, fontSize: '1.45rem' }}>WILDMAC</span>
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

                    {/* Desktop Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '0',
                          width: '320px',
                          backgroundColor: 'var(--bg-pure-white)',
                          border: '1px solid var(--border-medium)',
                          boxShadow: 'var(--shadow-dropdown)',
                          borderRadius: '2px',
                          padding: '0.75rem',
                          zIndex: 150,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                        }}
                      >
                        <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.35rem' }}>
                          <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', color: 'var(--text-light)', textTransform: 'uppercase' }}>
                            ADVISORY SERVICES & MODULES
                          </span>
                        </div>
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            style={{
                              padding: '0.6rem 0.75rem',
                              fontSize: '0.85rem',
                              color: 'var(--text-deep-blue)',
                              textDecoration: 'none',
                              borderRadius: '2px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              transition: 'all var(--transition-fast)',
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

              if (link.isHighlight) {
                const isDonateActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.32rem 0.85rem',
                      backgroundColor: isDonateActive ? 'var(--accent-red)' : 'rgba(201, 59, 43, 0.08)',
                      color: isDonateActive ? '#FFFFFF' : 'var(--accent-red)',
                      border: '1px solid',
                      borderColor: isDonateActive ? 'var(--accent-red)' : 'rgba(201, 59, 43, 0.35)',
                      borderRadius: '999px',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 650,
                      textDecoration: 'none',
                      transition: 'all var(--transition-fast)',
                      boxShadow: '0 2px 6px rgba(201, 59, 43, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent-red)';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = 'var(--accent-red)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isDonateActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(201, 59, 43, 0.08)';
                        e.currentTarget.style.color = 'var(--accent-red)';
                        e.currentTarget.style.borderColor = 'rgba(201, 59, 43, 0.35)';
                      }
                    }}
                  >
                    <Heart size={12} fill={isDonateActive ? '#FFFFFF' : 'var(--accent-red)'} />
                    <span>{link.name}</span>
                  </Link>
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

          {/* Action CTA & Mobile Donate Button */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Direct Mobile Header Donate Button */}
            <Link
              href="/donate"
              className="mobile-header-donate-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.38rem 0.8rem',
                backgroundColor: pathname === '/donate' ? 'var(--accent-red)' : 'rgba(201, 59, 43, 0.08)',
                color: pathname === '/donate' ? '#FFFFFF' : 'var(--accent-red)',
                border: '1px solid',
                borderColor: pathname === '/donate' ? 'var(--accent-red)' : 'rgba(201, 59, 43, 0.35)',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(201, 59, 43, 0.12)',
              }}
            >
              <Heart size={12} fill={pathname === '/donate' ? '#FFFFFF' : 'var(--accent-red)'} />
              <span>DONATE</span>
            </Link>

            {/* Desktop Book Consultation Button */}
            <Link href="/consultation" className="btn btn-primary nav-desktop-cta" style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem', gap: '0.5rem' }}>
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
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* ===================================================================
          REDESIGNED MOBILE NAVIGATION DRAWER (WITH INTERACTIVE SERVICES DROPDOWN)
          =================================================================== */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Drawer Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <Link href="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <LionLogo size={42} />
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ letterSpacing: '0.06em', fontWeight: 600, fontSize: '1.35rem' }}>WILDMAC</span>
              <span className="nav-brand-dot" aria-hidden="true" />
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'var(--bg-ice-blue)',
              border: '1px solid var(--border-medium)',
              borderRadius: '2px',
              cursor: 'pointer',
              color: 'var(--text-ink)',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Nav Links Area */}
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.25rem', marginBottom: '1.5rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => {
              if (link.isDropdown) {
                const isServicesActive = pathname.startsWith('/services');
                return (
                  <div
                    key={link.name}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      paddingBottom: '0.5rem',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {/* Services Row with Expand Button */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 0',
                      }}
                    >
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.45rem',
                          fontWeight: 650,
                          color: isServicesActive ? 'var(--accent-red)' : 'var(--text-ink)',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                        }}
                      >
                        <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 600 }}>
                          {link.num}
                        </span>
                        <span>{link.name}</span>
                      </Link>

                      {/* Expand / Collapse Button */}
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-label="Expand Services Dropdown"
                        style={{
                          background: mobileServicesOpen ? 'var(--text-deep-blue)' : 'var(--bg-ice-blue)',
                          color: mobileServicesOpen ? '#FFFFFF' : 'var(--text-deep-blue)',
                          border: '1px solid',
                          borderColor: mobileServicesOpen ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                          borderRadius: '2px',
                          padding: '0.4rem 0.65rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          cursor: 'pointer',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        <span>{mobileServicesOpen ? 'HIDE' : 'EXPLORE'}</span>
                        <ChevronDown
                          size={14}
                          style={{
                            transform: mobileServicesOpen ? 'rotate(180deg)' : 'none',
                            transition: 'transform var(--transition-fast)',
                          }}
                        />
                      </button>
                    </div>

                    {/* Smooth Animated Expandable Services Drawer Menu */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateRows: mobileServicesOpen ? '1fr' : '0fr',
                        opacity: mobileServicesOpen ? 1 : 0,
                        visibility: mobileServicesOpen ? 'visible' : 'hidden',
                        marginTop: mobileServicesOpen ? '0.45rem' : '0',
                        marginBottom: mobileServicesOpen ? '0.75rem' : '0',
                        transition: 'grid-template-rows 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, margin 0.35s ease, visibility 0.35s',
                      }}
                    >
                      <div style={{ overflow: 'hidden' }}>
                        <div
                          style={{
                            backgroundColor: 'var(--bg-pure-white)',
                            border: '1px solid var(--border-medium)',
                            borderLeft: '3px solid var(--accent-red)',
                            borderRadius: '2px',
                            padding: '0.85rem 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            transform: mobileServicesOpen ? 'translateY(0)' : 'translateY(-10px)',
                            transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          <div style={{ paddingBottom: '0.4rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                              PRACTICE MODULES
                            </span>
                            <Link
                              href="/services"
                              onClick={() => setMobileMenuOpen(false)}
                              style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                            >
                              <span>ALL MODULES</span>
                              <ChevronRight size={12} />
                            </Link>
                          </div>

                          {servicesData.map((s) => (
                            <Link
                              key={s.id}
                              href={`/services#${s.id}`}
                              onClick={() => setMobileMenuOpen(false)}
                              style={{
                                padding: '0.55rem 0.5rem',
                                fontSize: '0.88rem',
                                color: 'var(--text-ink)',
                                textDecoration: 'none',
                                borderBottom: '1px solid var(--border-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderRadius: '2px',
                                transition: 'background-color 0.2s ease',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 600 }}>
                                  {s.number}
                                </span>
                                <span style={{ fontWeight: 550, color: 'var(--text-deep-blue)' }}>{s.title}</span>
                              </div>
                              <ChevronRight size={13} color="var(--text-light)" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.isHighlight) {
                // Donate button is placed directly on the top mobile navbar header bar
                return null;
              }

              const isActive = pathname === link.href || (link.href !== '/' && !link.href.includes('#') && pathname.startsWith(link.href));
              return (
                <div
                  key={link.name}
                  style={{
                    borderBottom: '1px solid var(--border-subtle)',
                    padding: '0.75rem 0',
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.45rem',
                      fontWeight: 650,
                      color: isActive ? 'var(--accent-red)' : 'var(--text-ink)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 600 }}>
                      {link.num}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Action Footer */}
        <div
          style={{
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-paper-white)',
          }}
        >
          <Link
            href="/consultation"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem', marginBottom: '1rem' }}
          >
            <span>Book a Consultation</span>
            <ArrowRight size={15} />
          </Link>

          {/* Desk Contact Quick Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem', padding: '0 0.25rem' }}>
            <a href="mailto:contactmacalmeida@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'inherit', textDecoration: 'none' }}>
              <Mail size={12} color="var(--accent-red)" />
              <span>contactmacalmeida@gmail.com</span>
            </a>
            <a href="https://wa.me/919657080490" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>
              <WhatsAppIcon size={13} color="#25D366" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--text-light)', textAlign: 'center', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
            BUILD WITH PURPOSE. GROW WITH STRATEGY.
          </p>
        </div>
      </div>
    </>
  );
}
