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
        <div className="two-col-grid" style={{ alignItems: 'flex-start' }}>
          {/* Left Column: Heading & Philosophy Continuum */}
          <div>
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
                marginBottom: '2rem',
              }}
            >
              Guidance for Better<br />
              Decisions and Meaningful<br />
              Growth.
            </h2>

            {/* Purpose Continuum Flow */}
            <div style={{ backgroundColor: 'var(--bg-ice-blue)', border: '1px solid var(--border-subtle)', padding: '1.5rem', borderRadius: '2px', maxWidth: '480px', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-deep-blue)' }}>
                  THE PROGRESSION FRAMEWORK
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-red)', fontWeight: 600 }}>04 STAGES</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                {continuumSteps.map((step, idx) => (
                  <React.Fragment key={step.label}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
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
          </div>

          {/* Right Column: Narrative Copy & Platform Scope */}
          <div style={{ maxWidth: '620px' }}>
            <p className="lead" style={{ fontSize: '1.18rem', color: 'var(--text-deep-blue)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Wildmac is a coaching, consulting and knowledge-driven brand created to support individuals, professionals, entrepreneurs and businesses in navigating important decisions and discovering new opportunities.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Our approach combines experience, practical thinking and structured guidance across business, personal growth, real estate, investment education, branding and digital marketing.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              We believe that sustainable progress begins with clarity of purpose, the right strategy and consistent action.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn-primary" style={{ padding: '0.9rem 1.85rem' }}>
                <span>Discover Wildmac</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/services" className="editorial-link">
                <span>View Scope of Practice</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
