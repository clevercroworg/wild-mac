'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Compass, Target, ArrowDownRight } from 'lucide-react';

export default function WildmacHero() {
  return (
    <section
      className="wildmac-hero-section"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-paper-white)',
        borderBottom: '1px solid var(--border-subtle)',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Atmospheric Blue Field Underlay */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '52%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(234, 242, 247, 0.65) 0%, rgba(215, 232, 241, 0.35) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, flex: '1 0 auto', display: 'flex', alignItems: 'center' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: '4.5rem',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* ===============================================================
              LEFT / 55–60% — BRAND PROPOSITION & DUAL CTAS
              =============================================================== */}
          <div className="hero-text-col" style={{ maxWidth: '640px' }}>
            {/* Top Micro Label */}
            <div className="page-load-seq-1" style={{ marginBottom: '1.75rem' }}>
              <span
                className="editorial-stamp"
                style={{
                  letterSpacing: '0.16em',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-deep-blue)',
                }}
              >
                WILDMAC / IDEAS • EXPERIENCE • ACTION
              </span>
            </div>

            {/* Main Heading (H1) */}
            <h1
              className="hero-main-title page-load-seq-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: 'var(--text-ink)',
                marginBottom: '1.75rem',
              }}
            >
              BUILD WITH PURPOSE.<br />
              GROW WITH STRATEGY.
            </h1>

            {/* 1px Editorial Red Accent Line */}
            <div className="page-load-seq-2 reveal-divider" style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

            {/* Supporting Copy */}
            <p
              className="lead hero-lead-text page-load-seq-3"
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
                color: 'var(--text-deep-blue)',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
                maxWidth: '560px',
              }}
            >
              Wildmac provides practical coaching, strategic guidance and knowledge-driven solutions to help individuals, professionals and businesses make confident decisions and achieve meaningful growth.
            </p>

            {/* Dual Action CTAs */}
            <div className="hero-actions-row page-load-seq-4" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link
                href="/services"
                className="btn btn-primary"
                style={{
                  padding: '0.95rem 2rem',
                  fontSize: '0.92rem',
                  gap: '0.65rem',
                }}
              >
                <span>Explore Our Services</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/consultation"
                className="btn btn-secondary"
                style={{
                  padding: '0.95rem 1.85rem',
                  fontSize: '0.92rem',
                  gap: '0.5rem',
                }}
              >
                <span>Book a Consultation</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Ecosystem Pillars Footer Indicator */}
            <div
              className="page-load-seq-4"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-light)',
                flexWrap: 'wrap',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.25rem',
              }}
            >
              <span>01 COACHING</span>
              <span>•</span>
              <span>02 STRATEGY</span>
              <span>•</span>
              <span>03 KNOWLEDGE</span>
              <span>•</span>
              <span>04 COMMUNITY</span>
            </div>
          </div>

          {/* ===============================================================
              RIGHT / 40–45% — LAYERED STRATEGIC CAMPAIGN COMPOSITION
              =============================================================== */}
          <div
            className="hero-visual-stage page-load-seq-5"
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Atmospheric Backplate Box */}
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                width: '92%',
                height: '108%',
                backgroundColor: 'var(--bg-mist-blue)',
                borderRadius: '2px',
                border: '1px solid var(--border-subtle)',
                zIndex: 0,
              }}
            />

            {/* Main Primary Strategic Photograph */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '460px',
                aspectRatio: '4 / 3.2',
                backgroundColor: 'var(--bg-pure-white)',
                padding: '0.75rem',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 24px 50px -15px rgba(23, 50, 71, 0.18)',
                borderRadius: '2px',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: '1px' }}>
                <img
                  src="/images/service-business.jpg"
                  alt="Wildmac Strategy & Advisory Practice"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Visual Label Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    backgroundColor: 'rgba(17, 24, 32, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: '#fff',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '2px',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                  }}
                >
                  WM // STRATEGIC FRAMEWORK
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Photographic Card (Bottom-Left: People & Dialogue) */}
            <div
              style={{
                position: 'absolute',
                bottom: '-2.25rem',
                left: '-2rem',
                zIndex: 2,
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                boxShadow: '0 16px 36px -8px rgba(23, 50, 71, 0.22)',
                padding: '0.6rem',
                borderRadius: '2px',
                maxWidth: '240px',
              }}
              className="hidden-mobile"
            >
              <div style={{ position: 'relative', width: '100%', height: '110px', overflow: 'hidden', borderRadius: '1px', marginBottom: '0.5rem' }}>
                <img
                  src="/images/community-dialogue.jpg"
                  alt="Collaborative conversation & coaching"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '0.2rem 0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                  <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-red)' }} />
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-deep-blue)', textTransform: 'uppercase' }}>
                    COLLABORATIVE CLARITY
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 650, color: 'var(--text-ink)', margin: 0, lineHeight: 1.25 }}>
                  Purpose → Strategy → Action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================
          SUBTLE SCROLL INVITATION & CHAPTER TRANSITION
          =================================================================== */}
      <div className="container" style={{ position: 'relative', zIndex: 1, marginTop: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.25rem',
            fontSize: '0.75rem',
            color: 'var(--text-light)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>01</span>
            <span>//</span>
            <span style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>ENTER THE WILDMAC ECOSYSTEM</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-deep-blue)' }}>
            <span>Coaching</span>
            <span>•</span>
            <span>Consulting</span>
            <span>•</span>
            <span>Knowledge</span>
            <span>•</span>
            <span>Experience</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .wildmac-hero-section {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
            min-height: auto !important;
          }
          .hero-visual-stage {
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
