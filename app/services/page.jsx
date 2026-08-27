import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock, Calendar, Layers, Percent, ShieldCheck } from 'lucide-react';
import { servicesData } from '@/data/services';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'Advisory Practice & Disciplines — Wildmac',
  description: 'Practical, high-judgment coaching, strategic guidance, and education across business, personal growth, real estate, investment education, branding, engineering technical advisory, and wealth management.',
};

export default function ServicesPage() {
  const pricingTeaser = [
    {
      num: '01',
      name: 'Hourly Rate',
      price: '₹10,000',
      period: '/ hour',
      desc: '1-on-1 strategy deep-dives to unblock specific bottlenecks or audit critical decisions.',
      icon: Clock,
    },
    {
      num: '02',
      name: 'Monthly Retainer',
      price: '₹10k – ₹1L',
      period: '/ month',
      desc: 'Continuous advisory partnership with regular sessions and priority WhatsApp access.',
      icon: Calendar,
      highlight: true,
    },
    {
      num: '03',
      name: 'Project-Based',
      price: '₹1L – ₹5L',
      period: 'based on scope',
      desc: 'End-to-end strategic guidance for discrete business launches, restructurings, or blueprints.',
      icon: Layers,
    },
    {
      num: '04',
      name: 'Percentage-Based',
      price: '1%',
      period: 'of project cost',
      desc: 'Fiduciary oversight and engineering review for major infrastructure and developments.',
      icon: Percent,
    },
  ];

  return (
    <>
      {/* ===================================================================
          01 — SERVICES HERO: SCOPE OF ADVISORY PRACTICE
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '4rem',
          paddingBottom: '3.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Left: Statement & Action */}
            <div style={{ maxWidth: '640px' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="editorial-stamp">WILDMAC // SCOPE OF ADVISORY PRACTICE</span>
              </div>

              <h1
                style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.06',
                  fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                  color: 'var(--text-ink)',
                  letterSpacing: '-0.025em',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                }}
              >
                Solutions Designed for Personal and Professional Growth.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <p className="lead" style={{ fontSize: '1.18rem', color: 'var(--text-deep-blue)', marginBottom: '1.25rem', lineHeight: 1.65 }}>
                Thoughtful, unhurried dialogues around business decisions, personal growth, real estate, engineering advisory, wealth management, investment education, and brand architecture.
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2.25rem' }}>
                Every consultation is conducted directly with Rodney Almeida with 4 transparent pricing options—from hourly sessions to monthly partnerships.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="/consultation" className="btn btn-primary" style={{ padding: '0.95rem 2rem' }}>
                  <span>Book a Consultation</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/pricing" className="btn btn-secondary" style={{ padding: '0.95rem 1.75rem' }}>
                  <span>View Pricing & Options</span>
                  <ArrowUpRight size={15} />
                </Link>
                <a href="#modules" className="editorial-link" style={{ fontSize: '0.88rem' }}>
                  <span>Explore the 7 Disciplines ↓</span>
                </a>
              </div>
            </div>

            {/* Right: Editorial 07 Service Index Stack */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-medium)',
                  padding: '2rem 1.75rem',
                  borderRadius: '4px',
                  width: '100%',
                  maxWidth: '440px',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <span className="editorial-stamp">7 ADVISORY DISCIPLINES</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--accent-red)', fontWeight: 700 }}>
                    07
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {servicesData.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.85rem',
                        backgroundColor: 'var(--bg-paper-white)',
                        borderRadius: '2px',
                        border: '1px solid var(--border-subtle)',
                        textDecoration: 'none',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <div>
                        <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 700 }}>
                          {s.number}
                        </span>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 650, color: 'var(--text-ink)' }}>
                          {s.title}
                        </span>
                      </div>
                      <ArrowRight size={13} color="var(--text-deep-blue)" />
                    </a>
                  ))}
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                  <Link
                    href="/pricing"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-red)',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    <span>EXPLORE ALL 4 PRICING OPTIONS</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — SEVEN COMPREHENSIVE SERVICE MONOGRAPHS
          =================================================================== */}
      <section id="modules" className="section-py-lg" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '4rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">DETAILED ADVISORY MODULES</span>
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
              Tailored Guidance Across Critical Growth Areas.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              Each practice area is structured as a dedicated engagement format designed to deliver actionable clarity.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {servicesData.map((service) => (
              <div
                key={service.id}
                id={service.id}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  boxShadow: 'var(--shadow-subtle)',
                  overflow: 'hidden',
                }}
              >
                {/* 2-Column Split: Photography & Details */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.2fr)',
                    alignItems: 'stretch',
                  }}
                  className="services-detail-grid"
                >
                  {/* Left Column: Authentic Editorial Photograph */}
                  <div style={{ position: 'relative', minHeight: '340px', backgroundColor: 'var(--text-deep-blue)' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1.25rem',
                        left: '1.25rem',
                        backgroundColor: 'rgba(17, 24, 32, 0.85)',
                        backdropFilter: 'blur(6px)',
                        color: '#FFFFFF',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '2px',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                      }}
                    >
                      DISCIPLINE {service.number}
                    </div>
                  </div>

                  {/* Right Column: Narrative & Strategic Depth */}
                  <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {/* Top Header */}
                      <div style={{ marginBottom: '0.75rem' }}>
                        <span
                          className="editorial-stamp"
                          style={{
                            letterSpacing: '0.12em',
                            fontSize: '0.72rem',
                          }}
                        >
                          FOR / {service.whoItIsFor.split(',')[0]}
                        </span>
                      </div>

                      <h2
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                          fontWeight: 700,
                          color: 'var(--text-ink)',
                          lineHeight: 1.15,
                          marginBottom: '0.75rem',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {service.title}
                      </h2>

                      <p style={{ fontSize: '1.08rem', color: 'var(--text-deep-blue)', fontWeight: 500, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                        {service.subtitle}
                      </p>

                      <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        {service.overview}
                      </p>

                      {/* Conversation Themes */}
                      <div style={{ marginBottom: '2rem' }}>
                        <span style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-deep-blue)', letterSpacing: '0.08em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                          TYPICAL CONVERSATION THEMES:
                        </span>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                          {service.conversationThemes.map((theme, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-deep-blue)', lineHeight: 1.55 }}>
                              <span style={{ color: 'var(--accent-red)', fontWeight: 700, marginTop: '0.1rem' }}>—</span>
                              <span>{theme}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Engagement Format */}
                      <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-ice-blue)', borderLeft: '2px solid var(--accent-red)', borderRadius: '0 2px 2px 0', marginBottom: '2.5rem' }}>
                        <span style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                          ENGAGEMENT FORMAT:
                        </span>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-ink)', margin: 0, lineHeight: 1.5 }}>
                          {service.approach}
                        </p>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>
                          Available via Hourly, Retainer & Project
                        </span>
                        <Link
                          href="/pricing"
                          style={{ fontSize: '0.82rem', color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'none' }}
                        >
                          View Rates →
                        </Link>
                      </div>

                      <Link
                        href={`/consultation?service=${service.id}`}
                        className="btn btn-primary"
                        style={{ padding: '0.85rem 1.75rem', fontSize: '0.88rem', gap: '0.5rem' }}
                      >
                        <span>Request Conversation</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 — PRICING OVERVIEW & ENGAGEMENT BRIDGE
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <span className="editorial-stamp">TRANSPARENT ENGAGEMENT RATES</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                color: 'var(--text-ink)',
                fontWeight: 700,
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              Four Clear Options Across All Disciplines.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65, margin: '0 auto', maxWidth: '620px' }}>
              Whether you need a single 1-on-1 strategy hour, a monthly executive retainer, project-based delivery, or large-scale oversight.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            {pricingTeaser.map((tier) => {
              const IconComp = tier.icon;
              return (
                <div
                  key={tier.num}
                  style={{
                    backgroundColor: 'var(--bg-paper-white)',
                    border: tier.highlight ? '2px solid var(--accent-red)' : '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    padding: '1.75rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {tier.highlight && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '1rem',
                        backgroundColor: 'var(--accent-red)',
                        color: '#FFFFFF',
                        fontSize: '0.62rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '2px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      POPULAR
                    </span>
                  )}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 700 }}>
                        OPTION {tier.num}
                      </span>
                      <IconComp size={16} color="var(--text-deep-blue)" />
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: '0 0 0.5rem 0', fontWeight: 700 }}>
                      {tier.name}
                    </h3>

                    <div style={{ marginBottom: '0.75rem' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 750, color: 'var(--text-ink)' }}>
                        {tier.price}
                      </span>
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', marginLeft: '0.35rem' }}>
                        {tier.period}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.84rem', color: 'var(--text-deep-blue)', lineHeight: 1.5, margin: 0 }}>
                      {tier.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href="/pricing"
              className="btn btn-primary"
              style={{ padding: '0.95rem 2.25rem', fontSize: '0.92rem', gap: '0.5rem' }}
            >
              <span>Explore Full Pricing Breakdown & FAQs</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          04 — MAJOR CONSULTATION CTA
          =================================================================== */}
      <MajorConsultationCTA />
    </>
  );
}
