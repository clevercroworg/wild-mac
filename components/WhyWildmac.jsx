import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function WhyWildmac() {
  const strengths = [
    {
      number: "01",
      title: "Practical Guidance",
      description: "Grounded in real-world operational feasibility rather than abstract consulting theories or empty motivational platitudes."
    },
    {
      number: "02",
      title: "Experience-Based Perspective",
      description: "Distilled from more than 25 years of engineering discipline, multi-venture business ownership, and deep authorial reflection."
    },
    {
      number: "03",
      title: "Multi-Disciplinary Knowledge",
      description: "Bridging business growth, personal psychology, property mechanics, investment temperament, and digital brand storytelling."
    },
    {
      number: "04",
      title: "Personalized Approach",
      description: "Confidential, direct, and unhurried dialogues focused on your unique circumstances, resources, and decision horizons."
    },
    {
      number: "05",
      title: "Purposeful Growth",
      description: "Building sustainable momentum that aligns high commercial ambition with inner clarity, family values, and enduring peace."
    }
  ];

  return (
    <section
      className="section-py-lg"
      style={{
        backgroundColor: 'var(--text-navy)',
        color: '#FAFAF7',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ maxWidth: '680px', marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BFDCEB' }}>
              WM / WHY WILDMAC? // OUR EDGE
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)',
              color: '#FFFFFF',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            Experience-Led Guidance with a Practical Approach.
          </h2>

          <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.5rem' }} />

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: '#D7E8F1',
              lineHeight: 1.65,
            }}
          >
            Wildmac focuses on understanding every goal individually and providing guidance that is practical, structured and relevant to real-world challenges.
          </p>
        </div>

        {/* 5 Distinct Editorial Strengths */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {strengths.map((item) => (
            <div
              key={item.number}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '2.25rem 2rem',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--accent-red)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                    {item.number}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#FFFFFF', lineHeight: 1.25, marginBottom: '0.85rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.94rem', color: '#C0CFDB', lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Closing Bar */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <span style={{ fontSize: '0.9rem', color: '#BFDCEB', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            “Grounded in discipline. Driven by clarity. Measured by results.”
          </span>
          <Link
            href="/consultation"
            className="btn btn-primary"
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--text-ink)',
              borderColor: '#FFFFFF',
              padding: '0.85rem 1.85rem',
              fontSize: '0.9rem',
              gap: '0.5rem',
            }}
          >
            <span>Start a Conversation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
