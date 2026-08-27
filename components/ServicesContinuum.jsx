'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function ServicesContinuum() {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];

  return (
    <section
      className="section-py-lg services-editorial-section"
      style={{
        backgroundColor: 'var(--bg-ice-blue)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* ===================================================================
            01 — SECTION INTRO (SHORT & SHARP)
            =================================================================== */}
        <div className="reveal-on-scroll" style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="editorial-stamp">WHAT WE DO</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              color: 'var(--text-ink)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Solutions Designed for<br />Personal and Professional Growth.
          </h2>

          <p
            className="lead"
            style={{
              color: 'var(--text-deep-blue)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              lineHeight: 1.65,
            }}
          >
            Wildmac brings together coaching, strategy and education to help people and businesses move forward with greater clarity and confidence.
          </p>
        </div>

        {/* ===================================================================
            02 — PRIMARY TWO-ZONE EDITORIAL COMPOSITION (DESKTOP)
            =================================================================== */}
        <div className="services-desktop-stage">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1.35fr)',
              gap: '3.5rem',
              alignItems: 'stretch',
            }}
          >
            {/* -------------------------------------------------------------
                LEFT ZONE: EDITORIAL SERVICE INDEX (5 CHAPTERS)
                ------------------------------------------------------------- */}
            <div
              className="service-index-stack"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {servicesData.map((service, index) => {
                const isActive = service.id === activeId;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveId(service.id)}
                    onClick={() => setActiveId(service.id)}
                    className={`service-index-row ${isActive ? 'active' : ''}`}
                    style={{
                      padding: '1.6rem 1.75rem',
                      backgroundColor: isActive ? 'var(--bg-pure-white)' : 'rgba(255, 255, 255, 0.4)',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--text-deep-blue)' : 'var(--border-subtle)',
                      borderLeft: isActive ? '4px solid var(--accent-red)' : '1px solid var(--border-subtle)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      position: 'relative',
                      marginBottom: index < servicesData.length - 1 ? '0.85rem' : '0',
                      boxShadow: isActive ? 'var(--shadow-subtle)' : 'none',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          color: isActive ? 'var(--accent-red)' : 'var(--text-light)',
                        }}
                      >
                        {service.number} // ADVISORY MODULE
                      </span>

                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: isActive ? 'var(--text-deep-blue)' : 'var(--text-light)' }}>
                        {service.tag}
                      </span>
                    </div>

                    <h3
                      className="service-title"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.45rem',
                        fontWeight: 650,
                        lineHeight: 1.25,
                        color: isActive ? 'var(--text-ink)' : 'var(--text-deep-blue)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* -------------------------------------------------------------
                RIGHT ZONE: UNIFIED EDITORIAL SHOWCASE CARD (IMAGE + DETAILS)
                ------------------------------------------------------------- */}
            <div
              className="service-image-zone"
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px -15px rgba(23, 50, 71, 0.14)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Top: Full-Width Photographic Stage with Crossfade */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '300px',
                  backgroundColor: 'var(--text-deep-blue)',
                  overflow: 'hidden',
                }}
              >
                {servicesData.map((service) => {
                  const isVisible = service.id === activeId;
                  return (
                    <div
                      key={service.id}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(1.04)',
                        transition: 'opacity 450ms cubic-bezier(0.16, 1, 0.3, 1), transform 550ms cubic-bezier(0.16, 1, 0.3, 1)',
                        pointerEvents: isVisible ? 'auto' : 'none',
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  );
                })}

                {/* Subtle Image Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(17, 24, 32, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '2px',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    zIndex: 2,
                  }}
                >
                  WM // ADVISORY {activeService.number}
                </div>
              </div>

              {/* Bottom: Clean Structured Details & Actions */}
              <div
                style={{
                  padding: '2.25rem 2.25rem 2rem 2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <div>
                  {/* For Label */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span
                      className="editorial-stamp"
                      style={{
                        letterSpacing: '0.12em',
                        fontSize: '0.72rem',
                      }}
                    >
                      FOR / {activeService.whoItIsFor.split(',')[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.65rem',
                      fontWeight: 700,
                      color: 'var(--text-ink)',
                      marginBottom: '0.85rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {activeService.title}
                  </h3>

                  {/* Strategic Paragraph */}
                  <p
                    style={{
                      fontSize: '0.98rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.75,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {activeService.overview}
                  </p>

                  {/* Typical Conversation Themes (Clean List) */}
                  <div style={{ marginBottom: '1.75rem', backgroundColor: 'var(--bg-paper-white)', padding: '1rem 1.25rem', borderRadius: '2px', border: '1px solid var(--border-subtle)' }}>
                    <span style={{ display: 'block', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      KEY CONVERSATION AREAS:
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {activeService.conversationThemes.slice(0, 3).map((theme, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-deep-blue)' }}>
                          <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-red)', borderRadius: '50%', flexShrink: 0 }} />
                          <span>{theme.split('.')[0]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.25rem',
                    flexWrap: 'wrap',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <Link
                    href={`/services#${activeService.id}`}
                    className="editorial-link"
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      gap: '0.45rem',
                      color: 'var(--text-ink)',
                    }}
                  >
                    <span>Explore this service</span>
                    <ArrowRight size={13} />
                  </Link>

                  <Link
                    href="/consultation"
                    className="btn btn-primary"
                    style={{
                      padding: '0.65rem 1.35rem',
                      fontSize: '0.85rem',
                      gap: '0.5rem',
                    }}
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            03 — MOBILE VERTICAL EDITORIAL ACCORDION (SCREENS <= 900px)
            =================================================================== */}
        <div className="services-mobile-accordion">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {servicesData.map((service) => {
              const isExpanded = service.id === activeId;
              return (
                <div
                  key={service.id}
                  style={{
                    backgroundColor: 'var(--bg-pure-white)',
                    border: '1px solid',
                    borderColor: isExpanded ? 'var(--text-deep-blue)' : 'var(--border-subtle)',
                    borderLeft: isExpanded ? '4px solid var(--accent-red)' : '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    transition: 'all var(--transition-fast)',
                    boxShadow: isExpanded ? 'var(--shadow-subtle)' : 'none',
                  }}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    type="button"
                    onClick={() => setActiveId(isExpanded ? null : service.id)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.25rem',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, color: isExpanded ? 'var(--accent-red)' : 'var(--text-light)' }}>
                          {service.number}
                        </span>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-sans)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-light)' }}>
                          {service.tag}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 650, margin: 0, color: 'var(--text-ink)', lineHeight: 1.25 }}>
                        {service.title}
                      </h3>
                    </div>

                    <div style={{ color: isExpanded ? 'var(--accent-red)' : 'var(--text-light)', flexShrink: 0 }}>
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Expanded Content with Image and Details */}
                  {isExpanded && (
                    <div style={{ padding: '0 1.25rem 1.5rem 1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                      {/* Image */}
                      <div
                        style={{
                          width: '100%',
                          aspectRatio: '16 / 10',
                          overflow: 'hidden',
                          borderRadius: '2px',
                          marginBottom: '1rem',
                        }}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      {/* For Label */}
                      <div style={{ marginBottom: '0.4rem' }}>
                        <span className="editorial-stamp" style={{ fontSize: '0.65rem' }}>
                          FOR // {service.whoItIsFor.split(',')[0]}
                        </span>
                      </div>

                      {/* Strategic Copy (1-2 sentences limit) */}
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1rem' }}>
                        {service.description}
                      </p>

                      {/* Action Links */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                        <Link
                          href={`/services#${service.id}`}
                          className="editorial-link"
                          style={{
                            fontSize: '0.82rem',
                          }}
                        >
                          <span>View Full Scope</span>
                          <ArrowRight size={12} />
                        </Link>

                        <Link
                          href="/consultation"
                          style={{
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--accent-red)',
                            fontWeight: 600,
                            textDecoration: 'none',
                          }}
                        >
                          Book Session →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================================
            04 — SECTION ENDING (AUTHORIAL PHILOSOPHY CLOSING)
            =================================================================== */}
        <div
          style={{
            marginTop: '4.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              “Not every problem needs a framework. Sometimes it needs a better conversation.”
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/pricing" className="btn btn-secondary" style={{ padding: '0.9rem 1.65rem', fontSize: '0.9rem' }}>
              <span>View Pricing Plans</span>
            </Link>
            <Link href="/consultation" className="btn btn-primary" style={{ padding: '0.9rem 1.85rem', fontSize: '0.9rem', gap: '0.5rem' }}>
              <span>Book a Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Embedded Responsive CSS for Services */}
      <style jsx>{`
        .services-desktop-stage {
          display: block;
        }
        .services-mobile-accordion {
          display: none;
        }

        @media (max-width: 900px) {
          .services-desktop-stage {
            display: none !important;
          }
          .services-mobile-accordion {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
