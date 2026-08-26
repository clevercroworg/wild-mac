import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';
import EditorialQuote from '@/components/EditorialQuote';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'Services & Advisory Modules',
  description: 'Experience becomes useful when it is shared. High-level advisory across business, life coaching, real estate, investment mindset, and brand presence.',
};

export default function ServicesPage() {
  return (
    <>
      {/* ===================================================================
          HERO: SERVICES — "EXPERIENCE BECOMES USEFUL WHEN IT IS SHARED"
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          minHeight: '82vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Left: Statement & Action */}
            <div style={{ maxWidth: '620px' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="editorial-stamp" style={{ letterSpacing: '0.15em' }}>
                  WM / EXPERIENCE → ACTION // ADVISORY PRACTICE
                </span>
              </div>

              <h1
                style={{
                  marginBottom: '1.75rem',
                  lineHeight: '1.08',
                  fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)',
                  color: 'var(--text-ink)',
                  letterSpacing: '-0.02em',
                }}
              >
                Experience becomes<br />
                useful when it is<br />
                shared.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--text-deep-blue)', marginBottom: '1.25rem', lineHeight: '1.65' }}>
                Thoughtful, unhurried dialogues around business decisions, personal direction, real estate positioning, and wealth mindset.
              </p>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2.25rem' }}>
                Every consultation is conducted directly with the author, offering confidential, high-judgment clarity tailored to your specific circumstances.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="/consultation" className="btn btn-primary" style={{ padding: '0.95rem 2rem' }}>
                  <span>Book a Consultation</span>
                  <ArrowRight size={15} />
                </Link>
                <a href="#modules" className="editorial-link">
                  <span>Explore the 5 Advisory Chapters</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right: Editorial 05 Service Index Stack */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  backgroundColor: 'var(--bg-ice-blue)',
                  border: '1px solid var(--border-medium)',
                  padding: '2.5rem 2rem',
                  borderRadius: '2px',
                  width: '100%',
                  maxWidth: '440px',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                  <span className="editorial-stamp">WM / SCOPE OF PRACTICE</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--accent-red)', fontWeight: 600 }}>
                    05
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {servicesData.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        backgroundColor: 'var(--bg-pure-white)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '2px',
                        transition: 'all var(--transition-fast)',
                        textDecoration: 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-red)', fontWeight: 600 }}>
                          {s.number}
                        </span>
                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-ink)', fontWeight: 600 }}>
                          {s.title}
                        </span>
                      </div>
                      <ArrowRight size={13} color="var(--text-light)" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SERVICES DETAILED MODULES (EDITORIAL CHAPTER MONOGRAPHS)
          =================================================================== */}
      <section id="modules" className="section-py-lg" style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-paper-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-subtle)',
                  overflow: 'hidden',
                }}
              >
                {/* 2-Column Split: Visual Storytelling Photograph & Core Details */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.15fr)',
                    alignItems: 'stretch',
                  }}
                  className="services-detail-grid"
                >
                  {/* Left Column: Authentic Editorial Photograph */}
                  <div style={{ position: 'relative', minHeight: '340px', backgroundColor: 'var(--bg-mist-blue)' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1.25rem',
                        left: '1.25rem',
                        backgroundColor: 'rgba(18, 26, 34, 0.82)',
                        backdropFilter: 'blur(6px)',
                        color: '#fff',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '2px',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                      }}
                    >
                      CHAPTER {service.number}
                    </div>
                  </div>

                  {/* Right Column: Narrative & Strategic Depth */}
                  <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {/* Top Header */}
                      <div style={{ marginBottom: '0.75rem' }}>
                        <span
                          className="editorial-stamp"
                          style={{
                            letterSpacing: '0.12em',
                            fontSize: '0.72rem',
                          }}
                        >
                          FOR / {service.whoItIsFor.split(',')[0]}
                        </span>
                      </div>

                      <h2
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                          color: 'var(--text-ink)',
                          lineHeight: 1.15,
                          marginBottom: '0.75rem',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {service.title}
                      </h2>

                      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--text-deep-blue)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                        {service.subtitle}
                      </p>

                      <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        {service.overview}
                      </p>

                      {/* Conversation Themes */}
                      <div style={{ marginBottom: '2rem' }}>
                        <span style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-deep-blue)', letterSpacing: '0.08em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                          TYPICAL CONVERSATION THEMES:
                        </span>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                          {service.conversationThemes.map((theme, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-deep-blue)', lineHeight: 1.55 }}>
                              <span style={{ color: 'var(--accent-red)', fontWeight: 700, marginTop: '0.1rem' }}>—</span>
                              <span>{theme}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Engagement Format */}
                      <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-ice-blue)', borderLeft: '2px solid var(--accent-red)', borderRadius: '0 2px 2px 0', marginBottom: '2.5rem' }}>
                        <span style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                          ENGAGEMENT FORMAT:
                        </span>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-ink)', margin: 0, lineHeight: 1.5 }}>
                          {service.approach}
                        </p>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>
                        Direct dialogue with Wild Mac
                      </span>
                      <Link
                        href={`/consultation?service=${service.id}`}
                        className="btn btn-primary"
                        style={{ padding: '0.85rem 1.75rem', fontSize: '0.88rem', gap: '0.5rem' }}
                      >
                        <span>Request Conversation</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <EditorialQuote
        quote="The best advice does not tell you what to do. It helps you see clearly what you already know you must do."
        attribution="Wild Mac"
        subtitle="THE ADVISORY STANCE"
      />

      <Newsletter />
    </>
  );
}
