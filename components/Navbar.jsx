'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Mail,
  MessageSquare,
  Heart,
  BookOpen,
  Compass,
  Building,
  DollarSign,
  HelpCircle,
  Users,
  Briefcase,
  FileText,
  Sparkles,
  Newspaper,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import LionLogo from '@/components/LionLogo';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'services' | 'literature' | 'community' | null
  const [mobileSectionOpen, setMobileSectionOpen] = useState({
    services: false,
    literature: false,
    community: false,
  });

  const dropdownContainerRef = useRef(null);
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
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleMobileSection = (section) => {
    setMobileSectionOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const isServicesActive = pathname.startsWith('/services') || pathname === '/pricing' || pathname === '/consultation';
  const isLiteratureActive = pathname.startsWith('/books') || pathname.startsWith('/resources') || pathname.startsWith('/blog') || pathname === '/faq';
  const isCommunityActive = pathname.startsWith('/community') || pathname.startsWith('/future-projects') || pathname === '/work-with-us' || pathname === '/collaboration';

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container" ref={dropdownContainerRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo with Lion Emblem */}
          <Link
            href="/"
            className="nav-brand"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
          >
            <LionLogo size={44} />
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ letterSpacing: '0.06em', fontWeight: 650, fontSize: '1.4rem', color: 'var(--text-ink)' }}>WILDMAC</span>
              <span className="nav-brand-dot" aria-hidden="true" />
            </div>
          </Link>

          {/* Clean Desktop Navigation (Grouped into 4 Core Pillars) */}
          <nav className="nav-links" aria-label="Main Navigation" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {/* 1. About */}
            <Link
              href="/about"
              className={`nav-item ${pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>

            {/* 2. Advisory & Practice (Dropdown) */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`nav-item ${isServicesActive ? 'active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.4rem 0',
                  fontSize: '0.9rem',
                }}
              >
                <span>Services</span>
                <ChevronDown
                  size={13}
                  style={{
                    transform: openDropdown === 'services' ? 'rotate(180deg)' : 'none',
                    transition: 'transform var(--transition-fast)',
                  }}
                />
              </button>

              {openDropdown === 'services' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-20px',
                    width: '360px',
                    backgroundColor: 'var(--bg-pure-white)',
                    border: '1px solid var(--border-medium)',
                    boxShadow: 'var(--shadow-dropdown)',
                    borderRadius: '4px',
                    padding: '1rem',
                    zIndex: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', color: 'var(--text-light)', textTransform: 'uppercase' }}>
                      ADVISORY DISCIPLINES
                    </span>
                    <Link
                      href="/pricing"
                      onClick={() => setOpenDropdown(null)}
                      style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 650, textDecoration: 'none' }}
                    >
                      VIEW PRICING →
                    </Link>
                  </div>

                  <Link
                    href="/services"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      padding: '0.5rem 0.65rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-ink)',
                      fontWeight: 600,
                      textDecoration: 'none',
                      borderRadius: '3px',
                      backgroundColor: 'rgba(23, 50, 71, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <span>All Practice Disciplines Overview</span>
                    <ArrowRight size={13} color="var(--accent-red)" />
                  </Link>

                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services#${service.id}`}
                      onClick={() => setOpenDropdown(null)}
                      style={{
                        padding: '0.45rem 0.65rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-deep-blue)',
                        textDecoration: 'none',
                        borderRadius: '3px',
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
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)' }}>{service.number}</span>
                    </Link>
                  ))}

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem', marginTop: '0.35rem' }}>
                    <Link
                      href="/pricing"
                      onClick={() => setOpenDropdown(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.45rem 0.65rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-ink)',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      <DollarSign size={14} color="var(--accent-red)" />
                      <span>Advisory Tiers & Retainer Pricing</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Books & Knowledge (Dropdown) */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpenDropdown('literature')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`nav-item ${isLiteratureActive ? 'active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.4rem 0',
                  fontSize: '0.9rem',
                }}
              >
                <span>Books & Knowledge</span>
                <ChevronDown
                  size={13}
                  style={{
                    transform: openDropdown === 'literature' ? 'rotate(180deg)' : 'none',
                    transition: 'transform var(--transition-fast)',
                  }}
                />
              </button>

              {openDropdown === 'literature' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-20px',
                    width: '320px',
                    backgroundColor: 'var(--bg-pure-white)',
                    border: '1px solid var(--border-medium)',
                    boxShadow: 'var(--shadow-dropdown)',
                    borderRadius: '4px',
                    padding: '1rem',
                    zIndex: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  <div style={{ paddingBottom: '0.4rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', color: 'var(--text-light)', textTransform: 'uppercase' }}>
                      BOOKS & RESOURCES
                    </span>
                  </div>

                  <Link
                    href="/books"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.55rem 0.65rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-deep-blue)',
                      textDecoration: 'none',
                      borderRadius: '3px',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-ice-blue)'; e.currentTarget.style.color = 'var(--text-ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-deep-blue)'; }}
                  >
                    <BookOpen size={16} color="var(--accent-red)" />
                    <div>
                      <div style={{ fontWeight: 600 }}>Books</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>4 published works by Rodney Almeida</div>
                    </div>
                  </Link>

                  <Link
                    href="/resources"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.55rem 0.65rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-deep-blue)',
                      textDecoration: 'none',
                      borderRadius: '3px',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-ice-blue)'; e.currentTarget.style.color = 'var(--text-ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-deep-blue)'; }}
                  >
                    <FileText size={16} color="var(--accent-red)" />
                    <div>
                      <div style={{ fontWeight: 600 }}>Free Guides & Resources</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>Checklists, templates & PDF guides</div>
                    </div>
                  </Link>

                  <Link
                    href="/blog"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.55rem 0.65rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-deep-blue)',
                      textDecoration: 'none',
                      borderRadius: '3px',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-ice-blue)'; e.currentTarget.style.color = 'var(--text-ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-deep-blue)'; }}
                  >
                    <Newspaper size={16} color="var(--accent-red)" />
                    <div>
                      <div style={{ fontWeight: 600 }}>Blogs & Articles</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>Essays on strategy, business & life</div>
                    </div>
                  </Link>

                  <Link
                    href="/faq"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.55rem 0.65rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-deep-blue)',
                      textDecoration: 'none',
                      borderRadius: '3px',
                      borderTop: '1px solid var(--border-subtle)',
                      marginTop: '0.25rem',
                      paddingTop: '0.65rem',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-ice-blue)'; e.currentTarget.style.color = 'var(--text-ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-deep-blue)'; }}
                  >
                    <HelpCircle size={16} color="var(--accent-red)" />
                    <div>
                      <div style={{ fontWeight: 600 }}>FAQs</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>Common questions & clear answers</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Community & Projects (Dropdown) */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpenDropdown('community')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`nav-item ${isCommunityActive ? 'active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.4rem 0',
                  fontSize: '0.9rem',
                }}
              >
                <span>Community</span>
                <ChevronDown
                  size={13}
                  style={{
                    transform: openDropdown === 'community' ? 'rotate(180deg)' : 'none',
                    transition: 'transform var(--transition-fast)',
                  }}
                />
              </button>

              {openDropdown === 'community' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-20px',
                    width: '320px',
                    backgroundColor: 'var(--bg-pure-white)',
                    border: '1px solid var(--border-medium)',
                    boxShadow: 'var(--shadow-dropdown)',
                    borderRadius: '4px',
                    padding: '1rem',
                    zIndex: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  <div style={{ paddingBottom: '0.4rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', color: 'var(--text-light)', textTransform: 'uppercase' }}>
                      COMMUNITY & PROJECTS
                    </span>
                  </div>

                  <Link
                    href="/community"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.55rem 0.65rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-deep-blue)',
                      textDecoration: 'none',
                      borderRadius: '3px',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-ice-blue)'; e.currentTarget.style.color = 'var(--text-ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-deep-blue)'; }}
                  >
                    <MessageSquare size={16} color="var(--accent-red)" />
                    <div>
                      <div style={{ fontWeight: 600 }}>Community Chat & Forum</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>Join discussions with readers & founders</div>
                    </div>
                  </Link>

                  <Link
                    href="/future-projects"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.55rem 0.65rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-deep-blue)',
                      textDecoration: 'none',
                      borderRadius: '3px',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-ice-blue)'; e.currentTarget.style.color = 'var(--text-ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-deep-blue)'; }}
                  >
                    <Building size={16} color="var(--accent-red)" />
                    <div>
                      <div style={{ fontWeight: 600 }}>Future Projects</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>Ashram, elder care & farm in Goa</div>
                    </div>
                  </Link>

                  <Link
                    href="/work-with-us"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.55rem 0.65rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-deep-blue)',
                      textDecoration: 'none',
                      borderRadius: '3px',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-ice-blue)'; e.currentTarget.style.color = 'var(--text-ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-deep-blue)'; }}
                  >
                    <Briefcase size={16} color="var(--accent-red)" />
                    <div>
                      <div style={{ fontWeight: 600 }}>Work With Us</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>Join our team or partner with us</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Contact */}
            <Link
              href="/contact"
              className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA & Mobile Donate Button */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
            {/* Donate Button (Restrained, Elegant) */}
            <Link
              href="/donate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.38rem 0.85rem',
                backgroundColor: pathname === '/donate' ? 'var(--accent-red)' : 'rgba(201, 59, 43, 0.08)',
                color: pathname === '/donate' ? '#FFFFFF' : 'var(--accent-red)',
                border: '1px solid',
                borderColor: pathname === '/donate' ? 'var(--accent-red)' : 'rgba(201, 59, 43, 0.35)',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 650,
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
              }}
            >
              <Heart size={12} fill={pathname === '/donate' ? '#FFFFFF' : 'var(--accent-red)'} />
              <span>Donate</span>
            </Link>

            {/* Desktop Book Consultation Button */}
            <Link href="/consultation" className="btn btn-primary nav-desktop-cta" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem', gap: '0.45rem', whiteSpace: 'nowrap' }}>
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
          REDESIGNED MOBILE NAVIGATION DRAWER (ACCORDION PILLARS)
          =================================================================== */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Drawer Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <Link href="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <LionLogo size={38} />
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ letterSpacing: '0.06em', fontWeight: 650, fontSize: '1.3rem', color: 'var(--text-ink)' }}>WILDMAC</span>
              <span className="nav-brand-dot" aria-hidden="true" />
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'var(--bg-ice-blue)',
              border: '1px solid var(--border-medium)',
              borderRadius: '3px',
              cursor: 'pointer',
              color: 'var(--text-ink)',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Nav Links Area */}
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.25rem', marginBottom: '1.5rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 650,
                color: pathname === '/' ? 'var(--accent-red)' : 'var(--text-ink)',
                textDecoration: 'none',
                padding: '0.6rem 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 650,
                color: pathname === '/about' ? 'var(--accent-red)' : 'var(--text-ink)',
                textDecoration: 'none',
                padding: '0.6rem 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              About Rodney Almeida
            </Link>

            {/* Mobile Section 1: Services */}
            <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0' }}>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', textDecoration: 'none' }}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('services')}
                  style={{ background: 'none', border: '1px solid var(--border-medium)', borderRadius: '2px', padding: '0.3rem 0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={14} style={{ transform: mobileSectionOpen.services ? 'rotate(180deg)' : 'none' }} />
                </button>
              </div>

              {mobileSectionOpen.services && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingLeft: '0.75rem', marginTop: '0.25rem' }}>
                  <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.86rem', color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'none', padding: '0.35rem 0' }}>
                    • Advisory Tiers & Pricing
                  </Link>
                  {servicesData.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services#${s.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', textDecoration: 'none', padding: '0.35rem 0' }}
                    >
                      {s.number} — {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Section 2: Books & Knowledge */}
            <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0' }}>
                <Link
                  href="/books"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', textDecoration: 'none' }}
                >
                  Books & Knowledge
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('literature')}
                  style={{ background: 'none', border: '1px solid var(--border-medium)', borderRadius: '2px', padding: '0.3rem 0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={14} style={{ transform: mobileSectionOpen.literature ? 'rotate(180deg)' : 'none' }} />
                </button>
              </div>

              {mobileSectionOpen.literature && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingLeft: '0.75rem', marginTop: '0.25rem' }}>
                  <Link href="/books" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', textDecoration: 'none', padding: '0.35rem 0' }}>
                    • Books
                  </Link>
                  <Link href="/resources" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', textDecoration: 'none', padding: '0.35rem 0' }}>
                    • Free Guides & Resources
                  </Link>
                  <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', textDecoration: 'none', padding: '0.35rem 0' }}>
                    • Blogs & Articles
                  </Link>
                  <Link href="/faq" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', textDecoration: 'none', padding: '0.35rem 0' }}>
                    • FAQs
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Section 3: Community & Projects */}
            <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0' }}>
                <Link
                  href="/community"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', textDecoration: 'none' }}
                >
                  Community & Projects
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('community')}
                  style={{ background: 'none', border: '1px solid var(--border-medium)', borderRadius: '2px', padding: '0.3rem 0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={14} style={{ transform: mobileSectionOpen.community ? 'rotate(180deg)' : 'none' }} />
                </button>
              </div>

              {mobileSectionOpen.community && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingLeft: '0.75rem', marginTop: '0.25rem' }}>
                  <Link href="/community" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', textDecoration: 'none', padding: '0.35rem 0' }}>
                    • Community Chat & Forum
                  </Link>
                  <Link href="/future-projects" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', textDecoration: 'none', padding: '0.35rem 0' }}>
                    • Future Projects
                  </Link>
                  <Link href="/work-with-us" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.85rem', color: 'var(--text-deep-blue)', textDecoration: 'none', padding: '0.35rem 0' }}>
                    • Work With Us
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 650,
                color: 'var(--accent-red)',
                textDecoration: 'none',
                padding: '0.6rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <Heart size={18} fill="var(--accent-red)" />
              <span>Donate & Social Impact</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 650,
                color: pathname === '/contact' ? 'var(--accent-red)' : 'var(--text-ink)',
                textDecoration: 'none',
                padding: '0.6rem 0',
              }}
            >
              Contact Direct Desk
            </Link>
          </nav>
        </div>

        {/* Drawer Bottom CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link
            href="/consultation"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.9rem' }}
          >
            <span>Book a Consultation</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href="https://wa.me/919657080490"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              color: '#25D366',
              padding: '0.65rem',
              backgroundColor: 'rgba(37, 211, 102, 0.08)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              borderRadius: '2px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            <WhatsAppIcon size={16} />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
