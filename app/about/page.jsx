import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { aboutData } from '@/data/about';
import EditorialQuote from '@/components/EditorialQuote';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'About the Author',
  description: 'Behind the books is a life of questions, experience, and perspective. The story, philosophy, and background of Wild Mac.',
};

export default function AboutPage() {
  return (
    <>
      {/* ===================================================================
          HERO TYPE D/E: ABOUT — "THE PERSON BEHIND THE BOOKS" (MAGAZINE PROFILE)
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          minHeight: '82vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Left: Magazine Profile Headline */}
            <div style={{ maxWidth: '640px' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="editorial-stamp" style={{ letterSpacing: '0.15em' }}>
                  WM / THE AUTHOR // BIOGRAPHY
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
                Behind the books<br />
                is a life of questions,<br />
                experience, and perspective.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.25rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-deep-blue)' }}>
                  Founder / Wild Mac
                </span>
                <span style={{ color: 'var(--text-light)' }}>•</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  TWO DECADES OF TRIAL & PRACTICE
                </span>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="#story" className="btn btn-primary" style={{ padding: '0.9rem 1.85rem' }}>
                  <span>Read the Author Story</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/books" className="btn btn-secondary" style={{ padding: '0.9rem 1.85rem' }}>
                  <span>Explore Published Works</span>
                </Link>
              </div>
            </div>

            {/* Right: Oversized Authentic Portrait Spread (Breaking Grid Margins) */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '-8%',
                  left: '-6%',
                  width: '95%',
                  height: '114%',
                  backgroundColor: 'var(--bg-mist-blue)',
                  borderRadius: '2px',
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: 'var(--bg-pure-white)',
                  padding: '0.85rem',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-book)',
                  borderRadius: '2px',
                  width: '100%',
                  maxWidth: '460px',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img
                    src="/images/author-portrait.jpg"
                    alt="Wild Mac reviewing manuscripts in private library"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '0.85rem 0.5rem 0.35rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', borderTop: '1px solid var(--border-subtle)', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span>PORTRAIT // PRIVATE STUDY</span>
                  <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>WILD MAC ARCHIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          AUTHOR STORY & ESSAY
          =================================================================== */}
      <section id="story" className="section-py-lg" style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-pure-white)' }}>
        <div className="container-narrow">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">THE WRITER’S DISCIPLINE</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '2rem', color: 'var(--text-ink)', lineHeight: '1.2' }}>
              A life lived through questions.
            </h2>

            {aboutData.biography.map((paragraph, idx) => (
              <p key={idx} style={{ fontSize: '1.12rem', lineHeight: '1.85', color: 'var(--text-deep-blue)', marginBottom: '1.75rem' }}>
                {paragraph}
              </p>
            ))}

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/books" className="btn btn-primary">
                <span>Examine the Published Volumes</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/consultation" className="btn btn-secondary">
                <span>Book an Advisory Dialogue</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          FOUNDER QUOTE SPREAD
          =================================================================== */}
      <EditorialQuote
        quote={aboutData.founderMessage}
        attribution={aboutData.founderAttribution}
        subtitle="THE CORE COMMITMENT"
      />

      {/* ===================================================================
          PHILOSOPHY PILLARS
          =================================================================== */}
      <section className="section-py-lg" style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-paper-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span className="editorial-stamp" style={{ marginBottom: '0.75rem' }}>THE WILD MAC MANIFESTO</span>
            <h2 style={{ color: 'var(--text-ink)', marginBottom: '1rem' }}>
              Principles that guide our thinking.
            </h2>
            <p className="lead">
              These tenets inform every chapter we publish, every advisory session we conduct, and every project we undertake.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {aboutData.philosophyPillars.map((pillar) => (
              <div
                key={pillar.number}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2.25rem 1.75rem',
                  borderRadius: '2px',
                }}
              >
                <span className="chapter-number" style={{ display: 'block', marginBottom: '1rem' }}>
                  {pillar.number}
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text-ink)' }}>
                  {pillar.title}
                </h3>
                <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--border-subtle)', marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          TIMELINE OF EXPERIENCE
          =================================================================== */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="editorial-stamp" style={{ marginBottom: '0.75rem' }}>CHRONOLOGY</span>
            <h2 style={{ color: 'var(--text-ink)' }}>The Arc of Experience</h2>
            <p style={{ maxWidth: '520px', margin: '0 auto', marginTop: '0.75rem' }}>
              How decades of trial, business ownership, and reflection distilled into a unified body of work.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {aboutData.timelineMilestones.map((milestone, idx) => (
              <div
                key={idx}
                className="timeline-grid"
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  padding: '1.75rem 2rem',
                  borderRadius: '2px',
                  alignItems: 'flex-start',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-red)' }}>
                    {milestone.period}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginTop: '0.25rem', color: 'var(--text-ink)' }}>
                    {milestone.title}
                  </h4>
                </div>
                <div>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
