'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function ServicesContinuum() {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];

  return (
    <section
      className="section-py-lg services-editorial-section"
      style={{
        backgroundColor: 'var(--bg-paper-white)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* ===================================================================
            01 — SECTION INTRO (SHORT & SHARP)
            =================================================================== */}
        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="editorial-stamp">WM / EXPERIENCE → ACTION</span>
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
            Experience becomes<br />useful when it is shared.
          </h2>

          <p
            className="lead"
            style={{
              color: 'var(--text-deep-blue)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              lineHeight: 1.65,
            }}
          >
            Wild Mac brings practical perspective to conversations around business, life, property, investment, and building a meaningful presence.
          </p>
        </div>

        {/* ===================================================================
            02 — PRIMARY TWO-ZONE EDITORIAL COMPOSITION (DESKTOP)
            =================================================================== */}
        <div className="services-desktop-stage">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.15fr)',
              gap: '4.5rem',
              alignItems: 'flex-start',
            }}
          >
            {/* -------------------------------------------------------------
                LEFT ZONE: LARGE EDITORIAL SERVICE INDEX (52%)
                ------------------------------------------------------------- */}
            <div className="service-index-stack" style={{ display: 'flex', flexDirection: 'column' }}>
              {servicesData.map((service, index) => {
                const isActive = service.id === activeId;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveId(service.id)}
                    onClick={() => setActiveId(service.id)}
                    data-cursor="DISCOVER"
                    className={`service-index-row ${isActive ? 'active' : ''}`}
                    style={{
                      paddingTop: index === 0 ? '0' : '1.85rem',
                      paddingBottom: '1.85rem',
                      borderBottom: '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {/* Top Micro Label */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            color: isActive ? 'var(--accent-red)' : 'var(--text-whisper)',
                            transition: 'color var(--transition-fast)',
                          }}
                        >
                          {service.number}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: isActive ? 'var(--text-deep-blue)' : 'var(--text-whisper)',
                            transition: 'color var(--transition-fast)',
                          }}
                        >
                          ADVISORY MODULE
                        </span>
                      </div>

                      {/* Active Indicator Arrow */}
                      <div
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                          transition: 'all var(--transition-fast)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: 'var(--accent-red)',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 600,
                          letterSpacing: '0.06em',
                        }}
                      >
                        <span>VIEW CHAPTER</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* Large Display Serif Title */}
                    <h3
                      className="service-title"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 500,
                        fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
                        lineHeight: 1.15,
                        color: isActive ? 'var(--text-ink)' : 'rgba(24, 51, 72, 0.45)',
                        letterSpacing: '-0.02em',
                        margin: 0,
                        transition: 'color var(--transition-fast)',
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Active Accent Underline Marker */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: 0,
                        width: isActive ? '100%' : '0',
                        height: '2px',
                        backgroundColor: 'var(--accent-red)',
                        transition: 'width var(--transition-smooth)',
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* -------------------------------------------------------------
                RIGHT ZONE: LARGE EDITORIAL IMAGE PANEL + ANNOTATION (48%)
                ------------------------------------------------------------- */}
            <div className="service-image-zone" style={{ position: 'relative' }}>
              {/* Subtle Pale-Blue Environmental Backplate Plate */}
              <div
                className="service-image-backplate"
                style={{
                  position: 'absolute',
                  top: '-1.5rem',
                  right: '-1.5rem',
                  width: '94%',
                  height: '106%',
                  backgroundColor: 'var(--bg-ice-blue)',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />

              {/* Main Image Viewport with Smooth Crossfade */}
              <div
                className="service-photo-container"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  aspectRatio: '4 / 3.1',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  boxShadow: '0 20px 45px -12px rgba(24, 51, 72, 0.16), 0 2px 8px rgba(18, 26, 34, 0.04)',
                  backgroundColor: 'var(--bg-paper-white)',
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
                        transform: isVisible ? 'scale(1) translateY(0)' : 'scale(1.03) translateY(6px)',
                        transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
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

                {/* Subtle Image Corner Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.85rem',
                    right: '1rem',
                    backgroundColor: 'rgba(18, 26, 34, 0.75)',
                    backdropFilter: 'blur(4px)',
                    color: '#fff',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '2px',
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em',
                    zIndex: 2,
                  }}
                >
                  WM / ADVISORY {activeService.number}
                </div>
              </div>

              {/* Editorial Annotation Beneath Image (No big blue box) */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1.75rem',
                }}
              >
                {/* For Label */}
                <div style={{ marginBottom: '0.65rem' }}>
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

                {/* Strategic Paragraph */}
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-deep-blue)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                    maxWidth: '520px',
                  }}
                >
                  {activeService.overview}
                </p>

                {/* Typical Conversation Themes (Subtle Tags) */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    KEY CONVERSATION AREAS:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {activeService.conversationThemes.slice(0, 3).map((theme, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.78rem',
                          backgroundColor: 'var(--bg-mist-blue)',
                          color: 'var(--text-ink)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '2px',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {theme.split('.')[0]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/consultation"
                    className="editorial-link"
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      gap: '0.5rem',
                    }}
                  >
                    <span>Book a conversation regarding {activeService.title}</span>
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    href="/services"
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-light)',
                      fontFamily: 'var(--font-sans)',
                      textDecoration: 'none',
                    }}
                  >
                    View All Modules →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            03 — MOBILE VERTICAL EDITORIAL ACCORDION (SCREENS <= 768px)
            =================================================================== */}
        <div className="services-mobile-accordion">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {servicesData.map((service) => {
              const isExpanded = service.id === activeId;
              return (
                <div
                  key={service.id}
                  style={{
                    backgroundColor: isExpanded ? 'var(--bg-ice-blue)' : 'var(--bg-pure-white)',
                    border: '1px solid',
                    borderColor: isExpanded ? 'var(--border-medium)' : 'var(--border-subtle)',
                    borderLeft: isExpanded ? '3px solid var(--accent-red)' : '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    transition: 'all var(--transition-fast)',
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
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: isExpanded ? 'var(--accent-red)' : 'var(--text-light)' }}>
                          {service.number}
                        </span>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)' }}>
                          ADVISORY MODULE
                        </span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', margin: 0, color: 'var(--text-ink)', lineHeight: 1.2 }}>
                        {service.title}
                      </h3>
                    </div>

                    <div style={{ color: isExpanded ? 'var(--accent-red)' : 'var(--text-light)', flexShrink: 0 }}>
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Expanded Content with Image */}
                  {isExpanded && (
                    <div style={{ padding: '0 1.25rem 1.5rem 1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                      {/* Image */}
                      <div
                        style={{
                          width: '100%',
                          aspectRatio: '16 / 10',
                          overflow: 'hidden',
                          borderRadius: '2px',
                          marginBottom: '1.25rem',
                          boxShadow: 'var(--shadow-subtle)',
                        }}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Strategic Copy */}
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-deep-blue)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                        {service.overview}
                      </p>

                      {/* CTA */}
                      <Link
                        href="/consultation"
                        className="btn btn-primary"
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.25rem',
                          fontSize: '0.88rem',
                          gap: '0.5rem',
                        }}
                      >
                        <span>Book a Conversation</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================================
            04 — HOMEPAGE SECTION ENDING (AUTHORIAL PHILOSOPHY CLOSING)
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

          <div>
            <Link href="/consultation" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '0.92rem', gap: '0.6rem' }}>
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

        .service-index-row:hover .service-title {
          color: var(--text-ink) !important;
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
