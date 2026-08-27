import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  HelpCircle,
  Briefcase,
  Layers,
  Percent,
  Calendar,
  Sparkles,
} from 'lucide-react';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'Advisory Pricing & Engagement Options — Wildmac',
  description: 'Four transparent advisory pricing options: Hourly, Project-Based, Percentage-Based, and Monthly Retainers with Rodney Almeida.',
};

export default function PricingPage() {
  const pricingOptions = [
    {
      id: 'hourly',
      number: '01',
      name: 'Hourly Advisory',
      price: '₹10,000',
      period: 'per hour',
      tagline: 'Direct, focused 1-on-1 strategy sessions to audit decisions, solve bottlenecks, and review proposals.',
      badge: 'TIME-BASED',
      popular: false,
      icon: Clock,
      inclusions: [
        '60 to 90-minute confidential 1-on-1 dialogue with Rodney Almeida.',
        'Pre-call review of your context notes, decks, or numbers.',
        'Written summary brief outlining decision frameworks and action points.',
        'Applicable across Business, Life, Real Estate, Wealth, or Engineering.',
      ],
      idealFor: 'Founders, investors, or professionals needing sharp clarity on a specific dilemma or urgent decision.',
      ctaText: 'Book Hourly Session',
      ctaHref: '/consultation',
    },
    {
      id: 'monthly',
      number: '02',
      name: 'Monthly Retainer',
      price: '₹10,000 – ₹1,00,000',
      period: 'per month (scope-based)',
      tagline: 'An ongoing advisory partnership for leaders navigating continuous operational growth, capital, and transitions.',
      badge: 'MOST POPULAR',
      popular: true,
      icon: Calendar,
      inclusions: [
        'Regular scheduled 1-on-1 advisory sessions every month.',
        'Priority WhatsApp & asynchronous voice-note access for rapid check-ins.',
        'Continuous evaluation of commercial proposals, hiring, and expansions.',
        'Quarterly personal capital, focus, and life alignment calibration.',
      ],
      idealFor: 'Active founders, principal operators, and estate owners seeking a seasoned, confidential sounding board.',
      ctaText: 'Apply for Retainer',
      ctaHref: '/consultation',
    },
    {
      id: 'project',
      number: '03',
      name: 'Project-Based',
      price: '₹1,00,000 – ₹5,00,000',
      period: 'based on project scope',
      tagline: 'End-to-end strategic advisory for discrete business launches, restructurings, or real estate blueprints.',
      badge: 'DELIVERABLE BASED',
      popular: false,
      icon: Layers,
      inclusions: [
        'Comprehensive diagnostic scoping and custom roadmap architecture.',
        'Dedicated milestone sprint reviews and strategy sessions.',
        'Independent technical audits, contractor reviews & vendor vetting.',
        'Continuous guidance through execution until successful completion.',
      ],
      idealFor: 'Companies and property owners executing a defined initiative with clear deliverables and timelines.',
      ctaText: 'Inquire for Project Scope',
      ctaHref: '/consultation',
    },
    {
      id: 'percentage',
      number: '04',
      name: 'Percentage-Based',
      price: '1%',
      period: 'of total project cost',
      tagline: 'Fiduciary oversight and technical stewardship for major infrastructure, turnkey developments, and capital assets.',
      badge: 'LARGE-SCALE BUILDS',
      popular: false,
      icon: Percent,
      inclusions: [
        'Full capital deployment architecture and risk-defense auditing.',
        'First-principles engineering feasibility and architectural reviews.',
        'Total alignment with client upside, cost control, and build longevity.',
        'On-site inspections and executive representation in high-stakes negotiations.',
      ],
      idealFor: 'Developers, family offices, and enterprise leaders managing large real estate or capital projects.',
      ctaText: 'Discuss Enterprise Scope',
      ctaHref: '/contact',
    },
  ];

  const pricingFaqs = [
    {
      q: 'Which pricing option is best for my situation?',
      a: 'If you have a specific dilemma or urgent decision, the Hourly Rate (₹10,000/hr) provides immediate clarity. For ongoing strategic counsel, the Monthly Retainer (₹10,000–₹1,00,000/mo) is ideal. For defined initiatives with clear deliverables, choose Project-Based (₹1L–₹5L). For large-scale real estate or infrastructure developments, the 1% Percentage-Based model aligns incentives perfectly.',
    },
    {
      q: 'How are advisory sessions conducted?',
      a: 'Sessions are held directly with Rodney Almeida via secure high-definition video (Google Meet / Zoom), or in-person at the private estate study in Caranzalem, Goa by prior appointment.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept Indian UPI (GPay, PhonePe, Paytm, BHIM), National Electronic Funds Transfer (NEFT/RTGS), and International Bank Wires.',
    },
    {
      q: 'Are corporate invoices provided for tax deductibility?',
      a: 'Yes, formal commercial tax invoices are provided for business consulting, professional coaching, and technical advisory engagements.',
    },
  ];

  return (
    <>
      {/* -------------------------------------------------------------
          01 — PRICING HERO
          ------------------------------------------------------------- */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          paddingTop: '4.5rem',
          paddingBottom: '3.5rem',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">TRANSPARENT ADVISORY ENGAGEMENT</span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.12,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              Four Clear Options. No Hidden Fees.
            </h1>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65, margin: '0 auto', maxWidth: '680px' }}>
              Direct, unhurried advisory without agency bloat or junior surrogates. Choose the model that fits your goals—from a single strategy hour to ongoing partnership.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          02 — 4-OPTION PRICING GRID
          ------------------------------------------------------------- */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              alignItems: 'stretch',
            }}
          >
            {pricingOptions.map((opt) => {
              const IconComp = opt.icon;
              return (
                <div
                  key={opt.id}
                  style={{
                    backgroundColor: 'var(--bg-pure-white)',
                    border: opt.popular ? '2px solid var(--accent-red)' : '1px solid var(--border-medium)',
                    borderRadius: '6px',
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    boxShadow: opt.popular ? 'var(--shadow-dropdown)' : '0 2px 4px rgba(0,0,0,0.02)',
                  }}
                >
                  {opt.popular && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        right: '1.5rem',
                        backgroundColor: 'var(--accent-red)',
                        color: '#FFFFFF',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '2px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {opt.badge}
                    </div>
                  )}

                  <div>
                    {/* Top Row: Number & Icon */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 700 }}>
                        OPTION {opt.number}
                      </span>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--bg-ice-blue)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-deep-blue)',
                        }}
                      >
                        <IconComp size={16} />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-ink)', margin: '0 0 0.75rem 0', fontWeight: 700 }}>
                      {opt.name}
                    </h2>

                    {/* Price Block */}
                    <div style={{ padding: '0.85rem 1rem', backgroundColor: 'var(--bg-paper-white)', borderRadius: '4px', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 750, color: 'var(--text-ink)', lineHeight: 1.1 }}>
                        {opt.price}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        {opt.period}
                      </div>
                    </div>

                    {/* Tagline */}
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-deep-blue)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                      {opt.tagline}
                    </p>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border-subtle)', marginBottom: '1.25rem' }} />

                    {/* Inclusions List */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 650, letterSpacing: '0.08em' }}>
                        WHAT'S INCLUDED
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {opt.inclusions.map((inc, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.82rem', color: 'var(--text-deep-blue)', lineHeight: 1.45 }}>
                            <CheckCircle2 size={14} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Ideal For & CTA Button */}
                  <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-light)', marginBottom: '1.25rem', lineHeight: 1.45 }}>
                      <strong style={{ color: 'var(--text-ink)' }}>Best for:</strong> {opt.idealFor}
                    </div>
                    <Link
                      href={opt.ctaHref}
                      className={opt.popular ? 'btn btn-primary' : 'btn btn-editorial'}
                      style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '0.85rem' }}
                    >
                      <span>{opt.ctaText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Practice Standards Guarantee */}
          <div
            style={{
              marginTop: '3.5rem',
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-medium)',
              borderRadius: '6px',
              padding: '2rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <ShieldCheck size={28} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-ink)', margin: '0 0 0.35rem 0' }}>
                  100% Direct & Confidential
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', margin: 0, lineHeight: 1.5 }}>
                  Every engagement is conducted directly by Rodney Almeida under strict non-disclosure. No junior consultants or outsourced staff.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Clock size={28} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-ink)', margin: '0 0 0.35rem 0' }}>
                  Capped Client Capacity
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', margin: 0, lineHeight: 1.5 }}>
                  Monthly retainers and project engagements are strictly capped to ensure thorough preparation and unhurried focus for every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          03 — PRICING & LOGISTICS FAQ
          ------------------------------------------------------------- */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="editorial-stamp">CLARITY ON TERMS</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-ink)', fontWeight: 700, margin: '0.5rem 0 0 0' }}>
                Frequently Asked Questions on Pricing
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {pricingFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-pure-white)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    padding: '1.5rem',
                  }}
                >
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-ink)', margin: '0 0 0.5rem 0' }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-deep-blue)', lineHeight: 1.65, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <MajorConsultationCTA />
    </>
  );
}
