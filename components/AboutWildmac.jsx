'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function AboutWildmac() {
  const continuumSteps = [
    { label: 'PURPOSE', desc: 'Rooting goals in genuine human clarity' },
    { label: 'CLARITY', desc: 'Untangling assumptions and noise' },
    { label: 'STRATEGY', desc: 'Building structured, executable plans' },
    { label: 'ACTION', desc: 'Disciplined, sustainable momentum' },
  ];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Top Header & Manifesto Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1.25fr)',
            gap: '4.5rem',
            alignItems: 'center',
            marginBottom: '3.5rem',
          }}
          className="about-split-grid"
        >
          {/* Left: Heading & Narrative */}
          <div className="reveal-on-scroll">
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">ABOUT WILDMAC</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.14,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              Guidance for Better Decisions and Meaningful Growth.
            </h2>

            <p className="lead" style={{ fontSize: '1.15rem', color: 'var(--text-deep-blue)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Wildmac is a coaching, consulting and knowledge-driven brand created to support individuals, professionals, entrepreneurs and businesses in navigating important decisions and discovering new opportunities.
            </p>

            <p className="hidden-mobile" style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Our approach combines experience, practical thinking and structured guidance across business, personal growth, real estate, investment education, branding and digital marketing.
            </p>

            {/* Purpose Continuum Flow */}
            <div style={{ backgroundColor: 'var(--bg-ice-blue)', border: '1px solid var(--border-subtle)', padding: '1.25rem 1.5rem', borderRadius: '2px', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-deep-blue)' }}>
                  THE PROGRESSION FRAMEWORK
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-red)', fontWeight: 600 }}>04 STAGES</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                {continuumSteps.map((step, idx) => (
                  <React.Fragment key={step.label}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--text-ink)' }}>
                        {step.label}
                      </span>
                    </div>
                    {idx < continuumSteps.length - 1 && (
                      <span style={{ color: 'var(--accent-red)', fontWeight: 700, fontSize: '0.85rem' }}>→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                <span>Discover Wildmac</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/services" className="editorial-link">
                <span>View Scope of Practice</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: Dual Editorial Photography Spread (People + Strategy Environment) */}
          <div className="reveal-image-mask" style={{ position: 'relative' }}>
            {/* Background Mist Plate */}
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                width: '94%',
                height: '108%',
                backgroundColor: 'var(--bg-mist-blue)',
                borderRadius: '2px',
                zIndex: 0,
              }}
            />

            {/* Primary Large Image: Collaborative Strategy / People in Discussion */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                backgroundColor: 'var(--bg-pure-white)',
                padding: '0.75rem',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-book)',
                borderRadius: '2px',
                width: '100%',
                maxWidth: '460px',
                marginLeft: 'auto',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '1px' }}>
                <img
                  src="/images/community-dialogue.jpg"
                  alt="Thoughtful advisory conversation and strategic discussion"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'rgba(17, 24, 32, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '2px',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                  }}
                >
                  WM // COLLABORATIVE DISCOVERY
                </div>
              </div>

              <div style={{ padding: '0.75rem 0.25rem 0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-light)', borderTop: '1px solid var(--border-subtle)', marginTop: '0.65rem' }}>
                <span>PEOPLE • STRATEGY • CLARITY</span>
                <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>STRATEGIC PERSPECTIVE</span>
              </div>
            </div>

            {/* Overlapping Secondary Inset Image (Bottom Left) */}
            <div
              style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '-1.5rem',
                zIndex: 2,
                backgroundColor: 'var(--bg-pure-white)',
                padding: '0.5rem',
                border: '1px solid var(--border-medium)',
                boxShadow: '0 16px 36px -10px rgba(17, 24, 32, 0.2)',
                borderRadius: '2px',
                width: '200px',
              }}
              className="hidden-mobile"
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src="/images/author-workspace.jpg"
                  alt="Planning artifacts and structured notebooks"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ display: 'block', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 600, padding: '0.4rem 0.2rem 0' }}>
                STRUCTURED ACTION
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
