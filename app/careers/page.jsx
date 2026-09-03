import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, ArrowUpRight, Compass, ShieldCheck, CheckCircle2, Award, Users, BookOpen } from 'lucide-react';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'Careers at Wildmac — Purposeful Work, Engineering Discipline & Depth',
  description: 'Join Wildmac. We seek rigorous thinkers, researchers, operations architects, and writers passionate about purpose, strategy, and unhurried execution.',
};

export default function CareersPage() {
  const values = [
    {
      title: 'Engineering Rigor',
      desc: 'We solve root problems, not surface symptoms. Every decision, framework, and sentence must stand on logic, clarity, and discipline.',
    },
    {
      title: 'Unhurried Depth',
      desc: 'We reject artificial urgency and performative hustle. True leverage comes from quiet focus, deep research, and deliberate moves.',
    },
    {
      title: 'Radical Autonomy',
      desc: 'We manage outcomes, not hours. Team members have full ownership over their domains and the freedom to design their focus.',
    },
    {
      title: 'Human Purpose',
      desc: 'Everything we build serves real people, family security, and lasting intergenerational value.',
    },
  ];

  const openRoles = [
    {
      title: 'Strategic Research & Narrative Associate',
      type: 'Full-Time / Remote (India)',
      team: 'Advisory & Knowledge Practice',
      desc: 'Conducting in-depth business, economic, land, and philosophical research; synthesizing executive insights; and helping draft advisory frameworks and book manuscripts.',
      reqs: ['Exceptional written clarity in English', 'Analytical mindset with engineering or business background', 'Ability to digest complex subjects and extract first-principles'],
    },
    {
      title: 'Operations & Executive Desk Coordinator',
      type: 'Full-Time / Hybrid (Goa or Mumbai)',
      team: 'Executive Operations',
      desc: 'Managing executive advisory logistics, client scheduling, Goa sanctuary project coordination, and philanthropic initiative tracking alongside Rodney Almeida.',
      reqs: ['2+ years of executive assistance or operations management', 'Impeccable communication and confidentiality standards', 'High EQ and structured project management skills'],
    },
    {
      title: 'Digital Brand & Visual Architect',
      type: 'Full-Time / Contract',
      team: 'Design & Communications',
      desc: 'Crafting premium, editorial-grade web experiences, typographic layouts, book design assets, and digital interfaces that reflect Wildmac’s architectural standard.',
      reqs: ['Proficiency in modern design systems, clean typography, and UI aesthetics', 'Deep appreciation for Swiss/Bauhaus minimalist art direction', 'Portfolio demonstrating editorial, luxury, or high-end publishing work'],
    },
  ];

  return (
    <>
      {/* ===================================================================
          01 — HERO SECTION
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          paddingTop: '4.5rem',
          paddingBottom: '4rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">CAREERS AT WILDMAC</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.08,
                marginBottom: '1.5rem',
                letterSpacing: '-0.025em',
                fontWeight: 700,
              }}
            >
              Build Meaningful Work. Grow Without Noise.
            </h1>

            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Wildmac is building a different kind of platform — combining executive consulting, published knowledge, and community infrastructure. We are looking for disciplined minds who care deeply about craft.
            </p>

            <a href="#open-positions" className="btn btn-primary" style={{ padding: '0.85rem 1.85rem' }}>
              <span>View Open Opportunities</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — OUR VALUES & WORK CULTURE
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">CULTURE & PRINCIPLES</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.15,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              How We Work at Wildmac.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              We prize quiet mastery, personal sovereignty, and unhurried depth over frantic busywork.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="card-interactive"
                style={{
                  backgroundColor: 'var(--bg-paper-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '2rem 1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                    0{idx + 1}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.75rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 — OPEN POSITIONS
          =================================================================== */}
      <section id="open-positions" className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">OPPORTUNITIES</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.15,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Current Open Roles.
            </h2>
            <p style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              All positions work directly with the founder and executive advisory practice.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {openRoles.map((role) => (
              <div
                key={role.title}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '2.25rem 2rem',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 650, color: 'var(--text-ink)', margin: 0 }}>
                    {role.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ padding: '0.25rem 0.65rem', backgroundColor: 'var(--bg-ice-blue)', color: 'var(--text-deep-blue)', borderRadius: '2px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {role.type}
                    </span>
                    <span style={{ padding: '0.25rem 0.65rem', backgroundColor: 'rgba(201, 59, 43, 0.08)', color: 'var(--accent-red)', borderRadius: '2px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {role.team}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {role.desc}
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                    KEY ATTRIBUTES WE SEEK:
                  </span>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-deep-blue)', lineHeight: 1.6 }}>
                    {role.reqs.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`mailto:contactmacalmeida@gmail.com?subject=Application%20for%20${encodeURIComponent(role.title)}`}
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem' }}
                >
                  <span>Apply for this Role</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>

          {/* Direct Spontaneous Application Box */}
          <div style={{ backgroundColor: 'var(--bg-paper-white)', border: '1px solid var(--border-medium)', borderLeft: '4px solid var(--accent-red)', padding: '2rem 1.75rem', borderRadius: '2px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: '0 0 0.5rem 0' }}>
              Don’t see your exact profile?
            </h4>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-deep-blue)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              We are always open to exceptional minds — economists, architects, editors, and strategists. Email your portfolio, CV, and a 1-page note outlining how you can add leverage to Wildmac to <a href="mailto:contactmacalmeida@gmail.com" style={{ color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'underline' }}>contactmacalmeida@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>

      <MajorConsultationCTA />
    </>
  );
}
