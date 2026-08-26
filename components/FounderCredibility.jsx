'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FounderCredibility() {
  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
            gap: '4.5rem',
            alignItems: 'center',
          }}
          className="founder-section-grid"
        >
          {/* Left Column: Authentic Portrait of Rodney Almeida */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '-1rem',
                left: '-1rem',
                width: '90%',
                height: '106%',
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
                maxWidth: '420px',
                margin: '0 auto',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src="/images/author-portrait.jpg"
                  alt="Rodney Almeida, Founder of Wildmac"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '0.85rem 0.5rem 0.25rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', borderTop: '1px solid var(--border-subtle)', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span>RODNEY ALMEIDA // FOUNDER</span>
                <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>25+ YEARS EXPERIENCE</span>
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

            <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-pure-white)', borderLeft: '3px solid var(--accent-red)', marginBottom: '1.75rem', borderRadius: '0 2px 2px 0' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text-ink)', margin: 0, lineHeight: 1.5 }}>
                “Experience creates perspective. Perspective becomes useful when shared.”
              </p>
            </div>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-deep-blue)', marginBottom: '1.25rem' }}>
              Wildmac was founded by Rodney Almeida, an Electrical Engineering graduate with more than 25 years of professional experience and a journey shaped by learning, leadership and adventure.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              As the author of four published books, Rodney brings together his professional background, personal insights and passion for helping people make better decisions. Wildmac transforms this vision into a platform for coaching, strategic guidance, education and meaningful growth.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn-primary" style={{ padding: '0.9rem 1.85rem' }}>
                <span>Read Our Story</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/consultation" className="editorial-link">
                <span>Book a Conversation with Rodney</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .founder-section-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
