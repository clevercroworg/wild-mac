'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

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
        <div className="reveal-on-scroll" style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
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

        {/* -------------------------------------------------------------
            DESKTOP VIEW (> 768px): Axis + 5-Step Cards Grid
            ------------------------------------------------------------- */}
        <div className="how-desktop-view">
          {/* Continuous Visual Flow Axis */}
          <div style={{ position: 'relative', marginBottom: '3rem' }}>
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
                  onClick={() => setActiveStep(idx)}
                  className="card-interactive"
                  style={{
                    backgroundColor: isActive ? 'var(--bg-ice-blue)' : 'var(--bg-pure-white)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--text-deep-blue)' : 'var(--border-subtle)',
                    borderTop: isActive ? '3px solid var(--accent-red)' : '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    padding: '2rem 1.5rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                        {step.number}
                      </span>
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        STAGE
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                      {step.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 600 }}>
                    <CheckCircle2 size={13} color="var(--accent-red)" />
                    <span>{step.detail}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------------------
            MOBILE VIEW (<= 768px): Compact Interactive Stepper Tabs
            ------------------------------------------------------------- */}
        <div className="how-mobile-stepper">
          {/* Top Horizontal Step Selector Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.75rem',
              marginBottom: '1.25rem',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: '0.65rem 1rem',
                    backgroundColor: isActive ? 'var(--text-deep-blue)' : 'var(--bg-pure-white)',
                    color: isActive ? '#FFFFFF' : 'var(--text-deep-blue)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--text-deep-blue)' : 'var(--border-subtle)',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: isActive ? 'var(--accent-red)' : 'var(--text-light)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                    {step.number}
                  </span>
                  <span>{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <div
            style={{
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-medium)',
              borderLeft: '4px solid var(--accent-red)',
              borderRadius: '2px',
              padding: '1.5rem 1.25rem',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                STAGE {steps[activeStep].number}
              </span>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>
                {steps[activeStep].detail}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.5rem' }}>
              {steps[activeStep].title}
            </h3>

            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: '0 0 1.25rem 0' }}>
              {steps[activeStep].desc}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Tap tabs above to explore next step
              </span>
              <button
                type="button"
                onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-ink)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  cursor: 'pointer',
                }}
              >
                <span>Next Stage</span>
                <ChevronRight size={14} color="var(--accent-red)" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .how-desktop-view {
          display: block;
        }
        .how-mobile-stepper {
          display: none;
        }

        @media (max-width: 768px) {
          .how-desktop-view {
            display: none !important;
          }
          .how-mobile-stepper {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
