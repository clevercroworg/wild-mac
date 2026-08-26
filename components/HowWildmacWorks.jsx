import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowWildmacWorks() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      desc: "Deep listening and rigorous situational analysis to untangle underlying realities from surface-level symptoms.",
      detail: "Initial consultation & diagnostic assessment"
    },
    {
      number: "02",
      title: "Identify",
      desc: "Pinpointing the highest-leverage constraints, hidden blind spots, and critical growth opportunities.",
      detail: "Strategic priority mapping"
    },
    {
      number: "03",
      title: "Strategize",
      desc: "Designing a clear, actionable roadmap with concrete milestones tailored to your operational constraints.",
      detail: "Custom framework & action architecture"
    },
    {
      number: "04",
      title: "Act",
      desc: "Executing decisive, high-impact moves with disciplined momentum, accountability, and clarity.",
      detail: "Implementation & milestone execution"
    },
    {
      number: "05",
      title: "Review",
      desc: "Evaluating outcomes, calibrating strategy against market feedback, and compounding durable long-term results.",
      detail: "Iterative review & long-term alignment"
    }
  ];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
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

        {/* 5-Step Progressive Horizontal/Vertical Cards Flow */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
          {steps.map((step, idx) => (
            <div
              key={step.number}
              style={{
                backgroundColor: 'var(--bg-paper-white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                    {step.number}
                  </span>
                  {idx < steps.length - 1 && (
                    <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }} className="hidden-mobile">
                      →
                    </span>
                  )}
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-ink)', marginBottom: '0.65rem' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {step.desc}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
