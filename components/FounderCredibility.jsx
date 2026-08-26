'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Compass, Award } from 'lucide-react';

export default function FounderCredibility() {
  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div
          className="founder-section-grid reveal-on-scroll"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.2fr)',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Authentic Portrait of Rodney Almeida */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '490px' }}>
            {/* Background Mist Plate */}
            <div
              style={{
                position: 'absolute',
                top: '-0.75rem',
                left: '-0.75rem',
                width: '100%',
                height: '103%',
                backgroundColor: 'var(--bg-mist-blue)',
                borderRadius: '2px',
                zIndex: 0,
              }}
            />

            {/* Main Portrait Card */}
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
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4 / 3.4', overflow: 'hidden', borderRadius: '1px' }}>
                <img
                  src="/images/author.jpeg"
                  alt="Rodney Almeida, Founder of Wildmac"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'rgba(17, 24, 32, 0.88)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '2px',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                  }}
                >
                  FOUNDER // RODNEY ALMEIDA
                </div>
              </div>

              {/* Credential Status Bar */}
              <div style={{ padding: '0.85rem 0.5rem 0.4rem', borderTop: '1px solid var(--border-subtle)', marginTop: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <span style={{ color: 'var(--text-ink)', fontWeight: 600 }}>RODNEY ALMEIDA</span>
                  <span style={{ color: 'var(--accent-red)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
                    25+ YEARS EXPERIENCE
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
                  <span>ENGINEERING</span>
                  <span>•</span>
                  <span>4 BOOKS</span>
                  <span>•</span>
                  <span>STRATEGY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Credibility & Vision */}
          <div style={{ maxWidth: '620px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">THE VISION BEHIND WILDMAC</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Founded on Experience, Knowledge and Purpose.
            </h2>

            <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-pure-white)', borderLeft: '3px solid var(--accent-red)', marginBottom: '1.75rem', borderRadius: '0 2px 2px 0', border: '1px solid var(--border-subtle)', borderLeftWidth: '3px', borderLeftColor: 'var(--accent-red)' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text-ink)', margin: 0, lineHeight: 1.5 }}>
                “Experience creates perspective. Perspective becomes useful when shared.”
              </p>
            </div>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-deep-blue)', marginBottom: '1.25rem' }}>
              Wildmac was founded by Rodney Almeida, an Electrical Engineering graduate with more than 25 years of professional experience and a journey shaped by learning, leadership and adventure.
            </p>

            <p className="hidden-mobile" style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              As the author of four published books, Rodney brings together his professional background, personal insights and passion for helping people make better decisions. Wildmac transforms this vision into a platform for coaching, strategic guidance, education and meaningful growth.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link href="/about" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '0.9rem' }}>
                <span>Read Our Story</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/consultation" className="editorial-link" style={{ fontSize: '0.88rem' }}>
                <span>Book a Conversation</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .founder-section-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
