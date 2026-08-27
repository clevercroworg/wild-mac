import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Calendar,
  Layers,
  HelpCircle,
} from 'lucide-react';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'Strategic Advisory & Consultation Pricing — Wildmac',
  description: 'Transparent advisory engagements, consultation tiers, and executive partnerships with Rodney Almeida.',
};

export default function PricingPage() {
  const tiers = [
    {
      name: 'Foundational Strategy Session',
      tagline: 'A focused, high-judgment deep dive into a specific strategic or personal inflection point.',
      popular: false,
      badge: 'SINGLE ENGAGEMENT',
      duration: '90-Minute Private Dialogue',
      inclusions: [
        'Comprehensive 90-minute confidential 1-on-1 session with Rodney Almeida.',
        'Pre-session diagnostic review of your materials, bottlenecks, or business decks.',
        'Actionable written summary document highlighting core decision frameworks.',
        'Applicable across Business, Real Estate, Wealth, Engineering, or Life Strategy.',
        'Follow-up email review within 14 days of the session.',
      ],
      idealFor: 'Founders, investors, or leaders facing an urgent decision, crossroad, or strategic bottleneck.',
      ctaText: 'Book Strategy Session',
      ctaHref: '/consultation',
    },
    {
      name: 'Quarterly Advisory Retainer',
      tagline: 'An unhurried, ongoing partnership for leaders managing continuous operational growth and transitions.',
      popular: true,
      badge: 'MOST SOUGHT AFTER',
      duration: 'Monthly Executive Partnership',
      inclusions: [
        'Two 75-minute dedicated 1-on-1 advisory sessions each month.',
        'Direct, priority WhatsApp & asynchronous voice-note access for rapid decision auditing.',
        'Continuous evaluation of commercial proposals, team dilemmas, and expansion plans.',
        'Quarterly personal capital, energy, and life balance calibration.',
        'Exclusive early access to Wildmac manuscripts, research frameworks, and models.',
      ],
      idealFor: 'Active founders, principal operators, and estate owners seeking a seasoned, confidential sounding board.',
      ctaText: 'Apply for Retainer',
      ctaHref: '/consultation',
    },
    {
      name: 'Bespoke Enterprise & Capital Mastermind',
      tagline: 'Full-spectrum advisory across multi-disciplinary assets, family governance, and major infrastructure.',
      popular: false,
      badge: 'CUSTOM SCOPE',
      duration: 'Bespoke Annual Architecture',
      inclusions: [
        'Multi-disciplinary advisory spanning Business, Real Estate, Wealth, and Engineering.',
        'In-person consultations at the private Goan estate study or on-site project visits.',
        'Independent engineering feasibility oversight and contractor audit reviews.',
        'Generational wealth transfer frameworks and family office governance alignment.',
        'Direct collaborative access with dedicated bespoke scheduling.',
      ],
      idealFor: 'Family offices, major developers, and enterprise principals managing high-complexity assets.',
      ctaText: 'Inquire for Custom Mastermind',
      ctaHref: '/contact',
    },
  ];

  const pricingFaqs = [
    {
      q: 'How are advisory sessions conducted?',
      a: 'Sessions are conducted via private high-definition video conferencing (Google Meet or Zoom) or in-person at the private estate study in Caranzalem, Goa by prior arrangement.',
    },
    {
      q: 'Can a single session be upgraded to an ongoing retainer?',
      a: 'Yes. Many clients begin with a single Foundational Strategy Session to resolve an immediate bottleneck and choose to apply that investment toward an ongoing quarterly retainer.',
    },
    {
      q: 'What payment methods are supported?',
      a: 'We accept direct Indian UPI (GPay, PhonePe, Paytm, BHIM), National Electronic Fund Transfer (NEFT/RTGS), and International Bank Wires.',
    },
    {
      q: 'Are corporate invoices provided for tax deductibility?',
      a: 'Yes, full commercial tax invoices are provided for business consulting, professional coaching, and technical advisory engagements.',
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
          paddingTop: '4rem',
          paddingBottom: '3.5rem',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">TRANSPARENT ENGAGEMENT ARCHITECTURE</span>
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
              Investing in Perspective, Judgment & Long-Term Clarity.
            </h1>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65, margin: '0 auto', maxWidth: '640px' }}>
              Direct, unhurried advisory without agency bloat, buzzwords, or delegated assistants. Every dialogue is held directly with Rodney Almeida.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          02 — ENGAGEMENT TIERS GRID
          ------------------------------------------------------------- */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch',
            }}
          >
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: tier.popular ? '2px solid var(--accent-red)' : '1px solid var(--border-medium)',
                  borderRadius: '6px',
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: tier.popular ? 'var(--shadow-dropdown)' : '0 2px 4px rgba(0,0,0,0.02)',
                }}
              >
                {tier.popular && (
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
                      padding: '0.2rem 0.65rem',
                      borderRadius: '2px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {tier.duration}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-ink)', margin: '0 0 0.75rem 0', fontWeight: 700 }}>
                    {tier.name}
                  </h2>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-deep-blue)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {tier.tagline}
                  </p>

                  <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border-subtle)', marginBottom: '1.5rem' }} />

                  {/* Inclusions List */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.85rem', fontWeight: 650 }}>
                      INCLUSIONS & SCOPE
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {tier.inclusions.map((inc, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.86rem', color: 'var(--text-deep-blue)', lineHeight: 1.5 }}>
                          <CheckCircle2 size={16} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ideal For & CTA */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                    <strong>Ideal for:</strong> {tier.idealFor}
                  </div>
                  <Link
                    href={tier.ctaHref}
                    className={tier.popular ? 'btn btn-primary' : 'btn btn-editorial'}
                    style={{ width: '100%', justifyContent: 'center', padding: '0.8rem', fontSize: '0.88rem' }}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Standard of Practice Guarantee */}
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
                  Total Confidentiality & Discretion
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', margin: 0, lineHeight: 1.5 }}>
                  Every commercial dilemma, balance sheet evaluation, and personal conversation is held under strict professional confidentiality.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Clock size={28} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-ink)', margin: '0 0 0.35rem 0' }}>
                  Unhurried, High-Focus Attention
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', margin: 0, lineHeight: 1.5 }}>
                  Client capacity is strictly capped each month to preserve deep attention, thorough preparation, and rigorous strategic thinking.
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
                Frequently Asked Questions on Engagements
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
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-ink)', margin: '0 0 0.5rem 0' }}>
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
