'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function MajorConsultationCTA() {
  return (
    <section
      className="section-py-lg"
      style={{
        backgroundColor: 'var(--text-ink)',
        color: '#FAFAF7',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.9fr)',
            gap: '4.5rem',
            alignItems: 'center',
          }}
          className="cta-section-grid"
        >
          {/* Left Column: Heading, Supporting Narrative & Action CTAs */}
          <div className="reveal-on-scroll">
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#BFDCEB' }}>
                WM / CONSULTATION // TAKE THE NEXT STEP
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)',
                color: '#FFFFFF',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              Ready to Move Forward with Greater Clarity?
            </h2>

            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.5rem' }} />

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                color: '#D7E8F1',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '580px',
              }}
            >
              Whether you are building a business, seeking personal direction, exploring real estate, improving your investment knowledge or strengthening your brand, Wildmac can help you identify the next step.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link
                href="/consultation"
                className="btn btn-primary"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-ink)',
                  borderColor: '#FFFFFF',
                  padding: '0.95rem 2rem',
                  fontSize: '0.92rem',
                  gap: '0.6rem',
                }}
              >
                <span>Book a Consultation</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/919657080490?text=Hello%20Rodney,%20I%20would%20like%20to%20inquire%20about%20a%20strategic%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  padding: '0.95rem 1.85rem',
                  fontSize: '0.92rem',
                  gap: '0.6rem',
                }}
              >
                <WhatsAppIcon size={16} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Directional Architectural Imagery Spread */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                width: '92%',
                height: '106%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '2px',
                boxShadow: '0 24px 50px -15px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '1px' }}>
                <img
                  src="/images/service-realestate.jpg"
                  alt="Contemporary architectural pavilion representing forward vision and strategic clarity"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'rgba(17, 24, 32, 0.9)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '2px',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                  }}
                >
                  FORWARD DIRECTION // PURPOSE & STRATEGY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cta-section-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
