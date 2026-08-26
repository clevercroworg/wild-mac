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
            MOBILE VIEW (<= 768px): Vertical Connected Timeline Stepper
            ------------------------------------------------------------- */}
        <div className="how-mobile-timeline">
          <div style={{ position: 'relative', paddingLeft: '1.75rem' }}>
            {/* Vertical Connecting Line */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                bottom: '24px',
                left: '11px',
                width: '2px',
                backgroundColor: 'var(--border-medium)',
                zIndex: 0,
              }}
            />

            {/* 5 Vertical Step Nodes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {steps.map((step, idx) => (
                <div
                  key={step.number}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: 'var(--bg-pure-white)',
                    border: '1px solid var(--border-subtle)',
                    borderLeft: '3px solid var(--accent-red)',
                    borderRadius: '2px',
                    padding: '1.1rem 1.15rem',
                    boxShadow: 'var(--shadow-subtle)',
                  }}
                >
                  {/* Timeline Dot on the left */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.2rem',
                      left: '-2.15rem',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--text-deep-blue)',
                      color: '#FFFFFF',
                      border: '2px solid #FFFFFF',
                      boxShadow: '0 0 0 1px var(--text-deep-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                    }}
                  >
                    {idx + 1}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 650, color: 'var(--text-ink)', margin: 0 }}>
                      {step.title}
                    </h3>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 600, textTransform: 'uppercase' }}>
                      {step.detail}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .how-desktop-view {
          display: block;
        }
        .how-mobile-timeline {
          display: none;
        }

        @media (max-width: 768px) {
          .how-desktop-view {
            display: none !important;
          }
          .how-mobile-timeline {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
