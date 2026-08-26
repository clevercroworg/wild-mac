'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowDown, Clock, ShieldCheck, UserCheck } from 'lucide-react';
import ConsultationFlow from '@/components/ConsultationFlow';
import EditorialQuote from '@/components/EditorialQuote';
import Newsletter from '@/components/Newsletter';

function ConsultationContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  return (
    <>
      {/* ===================================================================
          HERO TYPE B: CONSULTATION — "THE CONVERSATION" (DEEP NAVY HERO)
          =================================================================== */}
      <section
        style={{
          backgroundColor: 'var(--text-ink)',
          color: '#FAFAF7',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '4rem',
          paddingBottom: '4.5rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.75rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#BFDCEB' }}>
                WM / THE CONSULTATION // ADVISORY PRACTICE
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                color: '#FFFFFF',
                lineHeight: '1.08',
                letterSpacing: '-0.025em',
                marginBottom: '1.75rem',
              }}
            >
              Some conversations<br />
              change the direction<br />
              of a life.
            </h1>

            <div style={{ width: '3rem', height: '2px', backgroundColor: 'var(--accent-red)', margin: '0 auto 2rem auto' }} />

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                color: '#DCECF4',
                lineHeight: '1.65',
                marginBottom: '3rem',
                maxWidth: '680px',
                margin: '0 auto 3rem auto',
              }}
            >
              “When you are ready to examine your decisions with unvarnished clarity, book a confidential session directly with Wild Mac.”
            </p>

            <a
              href="#booking-stage"
              className="btn btn-primary"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--text-ink)',
                borderColor: '#FFFFFF',
                padding: '1rem 2.25rem',
                fontSize: '0.95rem',
                gap: '0.65rem',
              }}
            >
              <span>Begin Confidential Booking</span>
              <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================================
          BOOKING FLOW STAGE
          =================================================================== */}
      <section id="booking-stage" className="section-py-lg" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">SESSION RESERVATION</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', color: 'var(--text-ink)', marginBottom: '1rem' }}>
              Schedule Your Dialogue
            </h2>
            <p className="lead" style={{ maxWidth: '580px', margin: '0 auto' }}>
              Complete the 3-step intake below. All discussions are strictly private and held via secure video call.
            </p>
          </div>

          {/* Interactive Intake Module */}
          <ConsultationFlow preselectedServiceId={preselectedService} />

          {/* Trust Guarantees */}
          <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <ShieldCheck size={20} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-ink)', marginBottom: '0.25rem' }}>Confidentiality Guaranteed</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Strict nondisclosure standard applied to all conversations.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <UserCheck size={20} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-ink)', marginBottom: '0.25rem' }}>Direct Author Dialogue</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>You will speak directly with Wild Mac, not an associate.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <Clock size={20} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-ink)', marginBottom: '0.25rem' }}>Unhurried Time</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Sessions are structured to allow genuine depth and conclusion.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <EditorialQuote
        quote="A single conversation with the right person at the right moment can save years of misdirected effort."
        attribution="Wild Mac"
        subtitle="THE VALUE OF PERSPECTIVE"
      />

      <Newsletter />
    </>
  );
}

export default function ConsultationPage() {
  return (
    <Suspense fallback={<div className="section-py text-center">Loading consultation room...</div>}>
      <ConsultationContent />
    </Suspense>
  );
}
