'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function WhoWeHelp() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const audiences = [
    {
      number: "01",
      title: "Entrepreneurs & Business Owners",
      tag: "FOUNDERS & LEADERS",
      description: "Navigating operational bottlenecks, scaling challenges, team leadership dynamics, and high-stakes commercial crossroads with objective, experience-led perspective.",
      cta: "Explore Business Coaching"
    },
    {
      number: "02",
      title: "Startups & Emerging Brands",
      tag: "EARLY-STAGE VENTURES",
      description: "Establishing durable brand foundations, customer positioning, and commercial focus before capital is deployed.",
      cta: "Explore Brand Foundations"
    },
    {
      number: "03",
      title: "Working Professionals",
      tag: "CAREER & LEADERSHIP",
      description: "Navigating career inflection points, executive leadership transitions, and aligning professional ambition with personal sovereignty.",
      cta: "Explore Professional Growth"
    },
    {
      number: "04",
      title: "Individuals Seeking Personal Growth",
      tag: "LIFE & PURPOSE",
      description: "Designing deliberate daily habits, auditing time and capital allocation, and building unshakeable internal clarity.",
      cta: "Explore Life Coaching"
    },
    {
      number: "05",
      title: "Property Buyers & Investors",
      tag: "REAL ESTATE & CAPITAL",
      description: "Evaluating property decisions through an unhurried, conservative lens to protect capital and build intergenerational value.",
      cta: "Explore Real Estate Strategy"
    },
    {
      number: "06",
      title: "Businesses Building Their Digital Presence",
      tag: "BRANDING & DIGITAL",
      description: "Crafting distinct visual identities and dignified digital experiences that turn audience attention into lasting respect and commercial results.",
      cta: "Explore Digital Strategy"
    }
  ];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="editorial-stamp">WHO WE HELP</span>
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
            Supporting People and Businesses at Different Stages of Growth.
          </h2>
          <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
            Wildmac works with individuals and organizations seeking clarity, direction and practical strategies to achieve their goals.
          </p>
        </div>

        {/* Large Typographic Index (Row by Row) */}
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-subtle)' }}>
          {audiences.map((aud, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={aud.number}
                onMouseEnter={() => setHoveredIndex(index)}
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingTop: '1.75rem',
                  paddingBottom: '1.75rem',
                  transition: 'background-color var(--transition-fast)',
                  position: 'relative',
                  backgroundColor: isHovered ? 'var(--bg-ice-blue)' : 'transparent',
                }}
              >
                {/* Active Red Marker Indicator on Left */}
                {isHovered && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: '4px',
                      backgroundColor: 'var(--accent-red)',
                    }}
                  />
                )}

                <div
                  style={{
                    paddingLeft: isHovered ? '1.5rem' : '0.5rem',
                    paddingRight: '1rem',
                    display: 'grid',
                    gridTemplateColumns: '80px 1.4fr 1.6fr auto',
                    gap: '2rem',
                    alignItems: 'center',
                    transition: 'padding var(--transition-fast)',
                  }}
                  className="audience-index-row"
                >
                  {/* Large Number */}
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: isHovered ? 'var(--accent-red)' : 'var(--text-light)',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {aud.number}
                  </span>

                  {/* Large Title */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
                        fontWeight: 650,
                        color: isHovered ? 'var(--text-ink)' : 'var(--text-deep-blue)',
                        lineHeight: 1.25,
                        margin: 0,
                      }}
                    >
                      {aud.title}
                    </h3>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginTop: '0.25rem' }}>
                      {aud.tag}
                    </span>
                  </div>

                  {/* Explanatory Line / Description */}
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                    {aud.description}
                  </p>

                  {/* CTA Action */}
                  <div style={{ whiteSpace: 'nowrap' }}>
                    <Link
                      href="/consultation"
                      className="editorial-link"
                      style={{
                        fontSize: '0.85rem',
                        color: isHovered ? 'var(--accent-red)' : 'var(--text-deep-blue)',
                      }}
                    >
                      <span>Discuss Goals</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .audience-index-row {
            grid-template-columns: 50px 1fr !important;
            gap: 1rem !important;
          }
          .audience-index-row p, .audience-index-row div:last-child {
            grid-column: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
