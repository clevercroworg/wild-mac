'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowDown, Clock, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';
import ConsultationFlow from '@/components/ConsultationFlow';

function ConsultationContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  return (
    <>
      {/* ===================================================================
          01 — CONSULTATION HERO: DEEP NAVY HIGH-CONTRAST
          =================================================================== */}
      <section
        style={{
          backgroundColor: 'var(--text-ink)',
          color: '#FAFAF7',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '4rem',
          paddingBottom: '4rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#BFDCEB' }}>
                WILDMAC // STRATEGIC INTAKE & CONSULTATION
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: '1.08',
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
              }}
            >
              Ready to Move Forward with Greater Clarity?
            </h1>

            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', margin: '0 auto 1.75rem auto' }} />

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
                color: '#D7E8F1',
                lineHeight: '1.65',
                marginBottom: '2.5rem',
              }}
            >
              Direct, unhurried advisory dialogues tailored to your business crossroads, personal growth, real estate positioning, investment education, or brand strategy.
            </p>

            {/* Credibility Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#BFDCEB', fontFamily: 'var(--font-mono)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} color="var(--accent-red)" />
                <span>45–60 MINUTE SESSION</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} color="var(--accent-red)" />
                <span>CONFIDENTIAL PRACTICE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — 3-STEP CONSULTATION FLOW CONTAINER
          =================================================================== */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <span className="editorial-stamp">RESERVATION PORTAL</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-ink)', marginTop: '0.5rem' }}>
              Request Your Consultation Window
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
              Complete the three-step intake below to reserve your strategic session.
            </p>
          </div>

          <ConsultationFlow preselectedServiceId={preselectedService} />

          {/* Alternative WhatsApp Direct Option */}
          <div style={{ maxWidth: '640px', margin: '3.5rem auto 0 auto', textAlign: 'center', padding: '1.75rem', backgroundColor: 'var(--bg-ice-blue)', border: '1px solid var(--border-subtle)', borderRadius: '2px' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
              PREFER IMMEDIATE CORRESPONDENCE?
            </span>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-deep-blue)', marginBottom: '1.25rem' }}>
              You can connect directly with our strategic desk via WhatsApp for quick questions or preliminary inquiries.
            </p>
            <a
              href="https://wa.me/?text=Hello%20Wildmac%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ backgroundColor: 'var(--bg-pure-white)', gap: '0.5rem' }}
            >
              <MessageSquare size={15} color="var(--accent-red)" />
              <span>Chat on WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ConsultationPage() {
  return (
    <Suspense fallback={<div className="container section-py" style={{ textAlign: 'center' }}>Loading Consultation Portal...</div>}>
      <ConsultationContent />
    </Suspense>
  );
}
