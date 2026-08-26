import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

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
      {/* Subtle Atmospheric Grid Lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(215, 232, 241, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#BFDCEB' }}>
            WM / CONSULTATION // TAKE THE NEXT STEP
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.3rem, 5vw, 3.8rem)',
            color: '#FFFFFF',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}
        >
          Ready to Move Forward with Greater Clarity?
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: '#D7E8F1',
            lineHeight: 1.7,
            maxWidth: '680px',
            margin: '0 auto 2.75rem auto',
          }}
        >
          Whether you are building a business, seeking personal direction, exploring real estate, improving your investment knowledge or strengthening your brand, Wildmac can help you identify the next step.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <Link
            href="/consultation"
            className="btn btn-primary"
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--text-ink)',
              borderColor: '#FFFFFF',
              padding: '1rem 2.25rem',
              fontSize: '0.95rem',
              gap: '0.6rem',
            }}
          >
            <span>Book a Consultation</span>
            <ArrowRight size={15} />
          </Link>

          <a
            href="https://wa.me/?text=Hello%20Wildmac%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20strategic%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{
              color: '#FFFFFF',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              padding: '1rem 2rem',
              fontSize: '0.95rem',
              gap: '0.6rem',
            }}
          >
            <MessageSquare size={16} color="var(--accent-red)" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
