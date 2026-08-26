import React from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, Phone, MapPin, Globe, Compass, ArrowUpRight, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
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
      desc: 'Co-creating social infrastructure including community ashrams, elder care havens, and youth financial literacy programs.',
    },
  ];

  return (
    <>
      {/* ===================================================================
          01 — HERO SECTION
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          paddingTop: '4.5rem',
          paddingBottom: '4rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">GLOBAL PARTNERSHIPS & ALLIANCES</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
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

            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Wildmac partners with ambitious founders, institutions, authors, and investors worldwide. We operate with zero intermediaries and direct principal-to-principal dialogue.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1rem', backgroundColor: 'var(--bg-ice-blue)', border: '1px solid var(--border-medium)', borderRadius: '2px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)' }}>
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

              <a
                href="mailto:rodney@wildmac.com?subject=Strategic%20Collaboration%20Proposal"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.88rem' }}
              >
                <span>rodney@wildmac.com</span>
                <ArrowRight size={14} />
              </a>
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
                  <MessageSquare size={22} />
                </div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  INSTANT ADVISORY DIALOGUE
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-ink)', margin: '0.5rem 0 0.75rem 0', fontWeight: 650 }}>
                  WhatsApp Direct Desk
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  For urgent scheduling, confidential speaking inquiries, and real-time alliance discussions.
                </p>
              </div>

              <a
                href="https://wa.me/919822158888?text=Hello%20Rodney%2C%20I%20am%20reaching%20out%20to%20discuss%20a%20strategic%20collaboration."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.88rem', borderColor: '#25D366', color: 'var(--text-ink)' }}
              >
                <span>+91 98221 58888</span>
                <ArrowUpRight size={14} color="#25D366" />
              </a>
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
                  LOCATION & STUDIO
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-ink)', margin: '0.5rem 0 0.75rem 0', fontWeight: 650 }}>
                  Goa & Mumbai HQ
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Primary executive sanctuary in Panaji / Cancona, Goa, with regular strategic consultations in Mumbai and Bangalore.
                </p>
              </div>

              <div style={{ padding: '0.65rem 0.85rem', backgroundColor: 'var(--bg-pure-white)', border: '1px solid var(--border-subtle)', borderRadius: '2px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', textAlign: 'center' }}>
                Panaji, Goa 403001, India
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
