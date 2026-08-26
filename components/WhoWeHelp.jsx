'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function WhoWeHelp() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const audiences = [
    {
      number: "01",
      title: "Entrepreneurs & Business Owners",
      mobileTitle: "Entrepreneurs & Owners",
      tag: "FOUNDERS & LEADERS",
      description: "Navigating operational bottlenecks, scaling challenges, team leadership dynamics, and high-stakes commercial crossroads with objective, experience-led perspective.",
      cta: "Explore Business Coaching",
      link: "/services#business"
    },
    {
      number: "02",
      title: "Startups & Emerging Brands",
      mobileTitle: "Startups & Brands",
      tag: "EARLY-STAGE VENTURES",
      description: "Establishing durable brand foundations, customer positioning, and commercial focus before capital is deployed.",
      cta: "Explore Brand Foundations",
      link: "/services#branding"
    },
    {
      number: "03",
      title: "Working Professionals",
      mobileTitle: "Working Professionals",
      tag: "CAREER & LEADERSHIP",
      description: "Navigating career inflection points, executive leadership transitions, and aligning professional ambition with personal sovereignty.",
      cta: "Explore Professional Growth",
      link: "/services#life"
    },
    {
      number: "04",
      title: "Individuals Seeking Personal Growth",
      mobileTitle: "Individuals Seeking Growth",
      tag: "LIFE & PURPOSE",
      description: "Designing deliberate daily habits, auditing time and capital allocation, and building unshakeable internal clarity.",
      cta: "Explore Life Coaching",
      link: "/services#life"
    },
    {
      number: "05",
      title: "Property Buyers & Investors",
      mobileTitle: "Property Buyers & Investors",
      tag: "REAL ESTATE & CAPITAL",
      description: "Evaluating property decisions through an unhurried, conservative lens to protect capital and build intergenerational value.",
      cta: "Explore Real Estate Strategy",
      link: "/services#realestate"
    },
    {
      number: "06",
      title: "Businesses Building Their Digital Presence",
      mobileTitle: "Digital Businesses",
      tag: "BRANDING & DIGITAL",
      description: "Crafting distinct visual identities and dignified digital experiences that turn audience attention into lasting respect and commercial results.",
      cta: "Explore Digital Strategy",
      link: "/services#branding"
    }
  ];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ maxWidth: '680px', marginBottom: '3rem' }}>
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

        {/* -------------------------------------------------------------
            DESKTOP VIEW (> 768px): Large Typographic Row by Row Index
            ------------------------------------------------------------- */}
        <div className="who-desktop-view">
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

        {/* -------------------------------------------------------------
            MOBILE VIEW (<= 768px): Compact 2-Column Grid + Detail Drawer
            ------------------------------------------------------------- */}
        <div className="who-mobile-view">
          {/* Compact 2-Column Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            {audiences.map((aud, idx) => {
              const isSelected = activeMobileIdx === idx;
              return (
                <button
                  key={aud.number}
                  type="button"
                  onClick={() => setActiveMobileIdx(idx)}
                  style={{
                    backgroundColor: isSelected ? 'var(--bg-ice-blue)' : 'var(--bg-paper-white)',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--text-deep-blue)' : 'var(--border-subtle)',
                    borderTop: isSelected ? '3px solid var(--accent-red)' : '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    padding: '0.85rem 0.75rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '80px',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: isSelected ? 'var(--accent-red)' : 'var(--text-light)' }}>
                    {aud.number}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 650, color: 'var(--text-ink)', lineHeight: 1.25 }}>
                    {aud.mobileTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Audience Brief Card */}
          <div
            style={{
              backgroundColor: 'var(--bg-ice-blue)',
              border: '1px solid var(--border-medium)',
              borderLeft: '4px solid var(--accent-red)',
              borderRadius: '2px',
              padding: '1.25rem 1.15rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent-red)', textTransform: 'uppercase' }}>
                {audiences[activeMobileIdx].tag}
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                {audiences[activeMobileIdx].number}/06
              </span>
            </div>

            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.4rem', lineHeight: 1.25 }}>
              {audiences[activeMobileIdx].title}
            </h4>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-deep-blue)', lineHeight: 1.55, margin: '0 0 1rem 0' }}>
              {audiences[activeMobileIdx].description}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
              <Link href={audiences[activeMobileIdx].link} className="editorial-link" style={{ fontSize: '0.8rem' }}>
                <span>{audiences[activeMobileIdx].cta}</span>
                <ArrowRight size={12} />
              </Link>
              <Link href="/consultation" style={{ fontSize: '0.78rem', color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'none' }}>
                Discuss →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .who-desktop-view {
          display: block;
        }
        .who-mobile-view {
          display: none;
        }

        @media (max-width: 768px) {
          .who-desktop-view {
            display: none !important;
          }
          .who-mobile-view {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
