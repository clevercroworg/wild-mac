'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export default function WhyWildmac() {
  const [expandedMobileIndex, setExpandedMobileIndex] = useState(0);

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
        <div className="reveal-on-scroll" style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
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

        {/* -------------------------------------------------------------
            DESKTOP VIEW (> 768px): 5 Distinct Editorial Strengths Cards
            ------------------------------------------------------------- */}
        <div className="why-desktop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
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

        {/* -------------------------------------------------------------
            MOBILE VIEW (<= 768px): Compact Single-Expand Accordion List
            ------------------------------------------------------------- */}
        <div className="why-mobile-accordion">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {strengths.map((item, idx) => {
              const isExpanded = expandedMobileIndex === idx;
              return (
                <div
                  key={item.number}
                  style={{
                    backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.07)' : 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid',
                    borderColor: isExpanded ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                    borderLeft: isExpanded ? '3px solid var(--accent-red)' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedMobileIndex(isExpanded ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '1.1rem 1.25rem',
                      background: 'none',
                      border: 'none',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                        {item.number}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 650, color: '#FFFFFF', margin: 0 }}>
                        {item.title}
                      </h3>
                    </div>
                    <div style={{ color: isExpanded ? 'var(--accent-red)' : '#9BAEC0', flexShrink: 0 }}>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div style={{ padding: '0 1.25rem 1.25rem 2.85rem', color: '#D7E8F1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Closing Bar */}
        <div
          style={{
            marginTop: '3.5rem',
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

      <style jsx>{`
        .why-desktop-grid {
          display: grid;
        }
        .why-mobile-accordion {
          display: none;
        }

        @media (max-width: 768px) {
          .why-desktop-grid {
            display: none !important;
          }
          .why-mobile-accordion {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
