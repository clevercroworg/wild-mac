'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowWildmacWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Understand",
      desc: "Deep listening and situational diagnostics to untangle root realities from surface noise.",
      detail: "Diagnostic Analysis"
    },
    {
      number: "02",
      title: "Identify",
      desc: "Pinpointing the highest-leverage constraints, blind spots, and strategic growth avenues.",
      detail: "Constraint Mapping"
    },
    {
      number: "03",
      title: "Strategize",
      desc: "Designing an actionable, custom roadmap with concrete milestones tailored to your resources.",
      detail: "Action Architecture"
    },
    {
      number: "04",
      title: "Act",
      desc: "Executing decisive moves with structured discipline, accountability, and clarity.",
      detail: "Milestone Execution"
    },
    {
      number: "05",
      title: "Review",
      desc: "Evaluating real outcomes, calibrating direction against reality, and compounding long-term gains.",
      detail: "Iterative Alignment"
    }
  ];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="editorial-stamp">OUR APPROACH</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              color: 'var(--text-ink)',
              lineHeight: 1.15,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            A Clear Process for Moving Forward.
          </h2>
          <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
            A disciplined, 5-stage progression that transforms complex challenges into actionable momentum.
          </p>
        </div>

        {/* Continuous Visual Flow Axis with Traveling Red Marker */}
        <div style={{ position: 'relative', marginBottom: '3rem' }} className="hidden-mobile">
          <div style={{ height: '2px', backgroundColor: 'var(--border-medium)', position: 'absolute', top: '16px', left: '5%', right: '5%', zIndex: 0 }} />
          <div
            style={{
              height: '2px',
              backgroundColor: 'var(--accent-red)',
              position: 'absolute',
              top: '16px',
              left: '5%',
              width: `${(activeStep / (steps.length - 1)) * 90}%`,
              transition: 'width var(--transition-smooth)',
              zIndex: 1,
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', position: 'relative', zIndex: 2 }}>
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--accent-red)' : 'var(--bg-pure-white)',
                      border: '2px solid',
                      borderColor: isActive ? 'var(--accent-red)' : 'var(--border-strong)',
                      color: isActive ? '#FFFFFF' : 'var(--text-deep-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      marginBottom: '0.85rem',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {step.number}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--text-ink)' : 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5-Step Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--text-deep-blue)' : 'var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: isActive ? '0 12px 28px -6px rgba(23, 50, 71, 0.1)' : 'var(--shadow-subtle)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {isActive && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: 'var(--accent-red)' }} />
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: isActive ? 'var(--accent-red)' : 'var(--text-light)' }}>
                      {step.number}
                    </span>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      STAGE {idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.65rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {step.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-sans)', color: 'var(--text-deep-blue)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {step.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
