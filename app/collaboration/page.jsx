import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Compass, ArrowUpRight, ArrowRight, ShieldCheck, FileText, CheckCircle2, Linkedin } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'National & International Collaborations — Wildmac & Rodney Almeida',
  description: 'Direct institutional, commercial, and philanthropic collaboration channels with Rodney Almeida. No intermediaries or generic forms — direct desk communication.',
};

export default function CollaborationPage() {
  const domains = [
    {
      number: '01',
      title: 'Enterprise & Board Advisory',
      desc: 'High-level strategic counsel for expanding corporations, family offices, and founder-led organizations navigating inflection points and capital allocation.',
    },
    {
      number: '02',
      title: 'Real Estate & Sanctuary Development',
      desc: 'Joint venture partnerships for architectural retreats, eco-living sanctuaries, and boutique hospitality developments across Goa and coastal India.',
    },
    {
      number: '03',
      title: 'Keynotes & Leadership Masterclasses',
      desc: 'Invited addresses and executive intensives on unhurried leadership, engineering discipline, strategic clarity, and life stewardship.',
    },
    {
      number: '04',
      title: 'International Publishing & Media',
      desc: 'Global distribution alliances, cross-language book translations, audiobooks, and syndicated strategic essays.',
    },
    {
      number: '05',
      title: 'Philanthropic & Social Ventures',
      desc: 'Co-creating social infrastructure including community ashrams in Cancona, elder care havens in Taleigao, and youth financial literacy programs.',
    },
  ];

  return (
    <>
      {/* ===================================================================
          01 — HERO SECTION WITH WIDE CINEMATIC BOARDROOM BACKGROUND
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          minHeight: '82vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Full Wide Architectural Background Photograph */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          <img
            src="/images/collaboration-hero-wide.jpg"
            alt="Global executive boardroom and strategic summit lounge"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
            }}
          />
          {/* Calibrated Editorial Gradient Mask for Pristine Contrast */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(250, 250, 247, 0.97) 0%, rgba(250, 250, 247, 0.93) 48%, rgba(250, 250, 247, 0.82) 75%, rgba(250, 250, 247, 0.55) 100%)',
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">GLOBAL PARTNERSHIPS & ALLIANCES</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.08,
                marginBottom: '1.5rem',
                letterSpacing: '-0.025em',
                fontWeight: 700,
              }}
            >
              National & International Collaborations.
            </h1>

            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.7, marginBottom: '2.25rem' }}>
              Wildmac partners with ambitious founders, institutions, authors, and investors worldwide. We operate with zero intermediaries and direct principal-to-principal dialogue with Rodney De Almeida.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.65rem 1.15rem', backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--border-medium)', borderRadius: '2px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', boxShadow: 'var(--shadow-subtle)' }}>
              <ShieldCheck size={16} color="var(--accent-red)" />
              <span>DIRECT DESK PROTOCOL // NO FORMS OR THIRD PARTIES</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — DIRECT CONTACT DESK (NO FORM AS REQUESTED)
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">DIRECT PRINCIPAL REACH</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              How to Reach Rodney Almeida & The Advisory Desk.
            </h2>
            <p style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              For serious national and international proposals, please reach out directly through the verified communication channels below.
            </p>
          </div>

          {/* 3 Direct Channels Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '3.5rem' }}>
            {/* Channel 1: Email Direct */}
            <div
              style={{
                backgroundColor: 'var(--bg-paper-white)',
                border: '1px solid var(--border-medium)',
                borderTop: '3px solid var(--accent-red)',
                borderRadius: '2px',
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(201, 59, 43, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--accent-red)' }}>
                  <Mail size={22} />
                </div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  MEMOS & FORMAL PROPOSALS
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-ink)', margin: '0.5rem 0 0.75rem 0', fontWeight: 650 }}>
                  Direct Executive Email
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Send detailed project briefs, institutional memoranda, and partnership outlines directly to the desk.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a
                  href="mailto:contactmacalmeida@gmail.com?subject=Strategic%20Collaboration%20Proposal"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.86rem' }}
                >
                  <span>contactmacalmeida@gmail.com</span>
                  <ArrowRight size={14} />
                </a>
                <a
                  href="mailto:rodusalmeida@gmail.com?subject=Strategic%20Collaboration%20Proposal"
                  style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textAlign: 'center', textDecoration: 'none', padding: '0.25rem 0' }}
                >
                  alt: rodusalmeida@gmail.com
                </a>
              </div>
            </div>

            {/* Channel 2: WhatsApp Hotline Direct */}
            <div
              style={{
                backgroundColor: 'var(--bg-paper-white)',
                border: '1px solid var(--border-medium)',
                borderTop: '3px solid #25D366',
                borderRadius: '2px',
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(37, 211, 102, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: '#25D366' }}>
                  <WhatsAppIcon size={24} color="#25D366" />
                </div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  INSTANT ADVISORY DIALOGUE
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-ink)', margin: '0.5rem 0 0.75rem 0', fontWeight: 650 }}>
                  WhatsApp & Phone Hotline
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  For real-time discussions, confidential speaking inquiries, and alliance scheduling directly with Rodney.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a
                  href="https://wa.me/919657080490?text=Hello%20Rodney%2C%20I%20am%20reaching%20out%20to%20discuss%20a%20strategic%20collaboration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.88rem', borderColor: '#25D366', color: 'var(--text-ink)', gap: '0.5rem' }}
                >
                  <WhatsAppIcon size={16} color="#25D366" />
                  <span>+91 96570 80490 (WhatsApp)</span>
                  <ArrowUpRight size={14} color="#25D366" />
                </a>
                <a
                  href="tel:+917776022622"
                  style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textAlign: 'center', textDecoration: 'none', padding: '0.25rem 0' }}
                >
                  Direct Call: +91 77760 22622
                </a>
              </div>
            </div>

            {/* Channel 3: Headquarters & In-Person Retreats */}
            <div
              style={{
                backgroundColor: 'var(--bg-paper-white)',
                border: '1px solid var(--border-medium)',
                borderTop: '3px solid var(--text-deep-blue)',
                borderRadius: '2px',
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--bg-ice-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--text-deep-blue)' }}>
                  <MapPin size={22} />
                </div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  STUDIO & RESIDENTIAL LOCATION
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-ink)', margin: '0.5rem 0 0.75rem 0', fontWeight: 650 }}>
                  Caranzalem, Goa HQ
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Executive advisory office and creative studio in Caranzalem & Cancona, Goa, with global digital desk availability.
                </p>
              </div>

              <div style={{ padding: '0.65rem 0.85rem', backgroundColor: 'var(--bg-pure-white)', border: '1px solid var(--border-subtle)', borderRadius: '2px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', textAlign: 'center' }}>
                AG-1 Samarth Residency, Caranzalem, Goa 403002
              </div>
            </div>
          </div>

          {/* Submission Guidelines Note */}
          <div style={{ backgroundColor: 'var(--bg-ice-blue)', border: '1px solid var(--border-medium)', borderLeft: '4px solid var(--accent-red)', padding: '1.5rem 1.75rem', borderRadius: '2px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text-ink)', margin: '0 0 0.5rem 0' }}>
              Guidelines for Collaboration Inquiries
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-deep-blue)', lineHeight: 1.65, margin: 0 }}>
              To ensure focused evaluation, please include: (1) Organization / Personal background, (2) Strategic objective and synergy with Wildmac, (3) Proposed timeline and resource allocation. Rodney personally reviews all principal inquiries within 48 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 — COLLABORATION PILLARS
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">DOMAINS OF ENGAGEMENT</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.15,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Five Arenas for High-Impact Synergy.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              We partner selectively where engineering discipline and human purpose create lasting value.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {domains.map((domain) => (
              <div
                key={domain.number}
                className="card-interactive"
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '2rem 1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                    {domain.number}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.75rem' }}>
                  {domain.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                  {domain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MajorConsultationCTA />
    </>
  );
}
