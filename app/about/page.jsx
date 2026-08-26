import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, Compass, ShieldCheck, Target, Users, BookOpen, Layers } from 'lucide-react';
import { aboutData } from '@/data/about';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'About Wildmac — Purpose, Experience & Strategic Direction',
  description: 'The story, vision, and multi-disciplinary leadership behind Wildmac. Built by Rodney Almeida across 25+ years of engineering, enterprise leadership, published works, and strategic advisory.',
};

export default function AboutPage() {
  const pillars = [
    { number: '01', title: 'Coaching', desc: 'Direct, unhurried personal and executive dialogues designed to unlock internal clarity and sustainable performance.' },
    { number: '02', title: 'Strategy', desc: 'Translating high-level ambitions into concrete, executable roadmaps with disciplined risk mitigation.' },
    { number: '03', title: 'Knowledge', desc: 'Distilling complex business, property, capital, and life principles into actionable frameworks and published works.' },
    { number: '04', title: 'Experience', desc: 'Rooted in 25+ years of real-world engineering, corporate governance, multi-venture ownership, and authorial reflection.' },
    { number: '05', title: 'People', desc: 'Centering human relationships, family sovereignty, and genuine alignment as the true measures of lasting success.' },
    { number: '06', title: 'Growth', desc: 'Building durable, intergenerational value that survives market cycles and preserves personal peace.' },
  ];

  return (
    <>
      {/* ===================================================================
          01 — ABOUT HERO: PLATFORM VISION & LEADERSHIP
          =================================================================== */}
      <section
        className="about-hero-section"
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          minHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Left: Manifesto Headline */}
            <div style={{ maxWidth: '640px' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="editorial-stamp">WILDMAC // PLATFORM ORIGINS & LEADERSHIP</span>
              </div>

              <h1
                style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.06',
                  fontSize: 'clamp(2.35rem, 5vw, 4.2rem)',
                  color: 'var(--text-ink)',
                  letterSpacing: '-0.025em',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                }}
              >
                Founded on Purpose, Experience and Strategic Clarity.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65, marginBottom: '2.25rem' }}>
                Wildmac brings together coaching, consulting, education, and published ideas to help individuals, professionals, and businesses make confident decisions and move forward with purpose.
              </p>

              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn btn-primary" style={{ padding: '0.85rem 1.85rem' }}>
                  <span>Explore Advisory Services</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/consultation" className="btn btn-secondary" style={{ padding: '0.85rem 1.85rem' }}>
                  <span>Book a Consultation</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: Layered Photographic Narrative (Portrait + Strategy Environment) */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: 'var(--bg-pure-white)',
                  padding: '0.85rem',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-book)',
                  borderRadius: '2px',
                  maxWidth: '430px',
                  width: '100%',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '4 / 3.2', overflow: 'hidden', borderRadius: '1px', marginBottom: '0.85rem' }}>
                  <img
                    src="/images/author.jpeg"
                    alt="Rodney Almeida, Founder of Wildmac"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(17, 24, 32, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '2px',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    FOUNDER // RODNEY ALMEIDA
                  </div>
                </div>

                <div style={{ padding: '0.5rem 0.25rem 0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-light)', borderTop: '1px solid var(--border-subtle)' }}>
                  <span>ELECTRICAL ENGINEER · AUTHOR · ADVISOR</span>
                  <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>25+ YRS EXPERIENCE</span>
                </div>
              </div>

              {/* Floating Inset: Collaborative Dialogue (Bottom Left) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2rem',
                  left: '-1.5rem',
                  zIndex: 2,
                  backgroundColor: 'var(--bg-pure-white)',
                  padding: '0.5rem',
                  border: '1px solid var(--border-medium)',
                  boxShadow: '0 16px 36px -10px rgba(17, 24, 32, 0.2)',
                  borderRadius: '2px',
                  width: '190px',
                }}
                className="hidden-mobile"
              >
                <div style={{ position: 'relative', width: '100%', height: '100px', overflow: 'hidden' }}>
                  <img
                    src="/images/community-dialogue.jpg"
                    alt="Collaborative conversation"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 600, padding: '0.35rem 0.2rem 0' }}>
                  EXPERIENCE SHARED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — THE 6 BRAND PILLARS OF WILDMAC
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">THE WILDMAC ECOSYSTEM</span>
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
              Built Across Six Connected Pillars.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              Wildmac operates at the intersection of practical business execution and human purpose.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {pillars.map((p) => (
              <div
                key={p.number}
                className="card-interactive"
                style={{
                  backgroundColor: 'var(--bg-paper-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                      {p.number}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.65rem' }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 — FOUNDER CREDIBILITY & PHILOSOPHY (RESPONSIVE & STRUCTURED)
          =================================================================== */}
      <section className="section-py-lg founder-journey-section" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
              gap: '3.5rem',
              alignItems: 'center',
            }}
            className="about-split-grid"
          >
            {/* Left: Biography Narrative */}
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="editorial-stamp">THE FOUNDER’S JOURNEY</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.1rem, 4vw, 3.4rem)',
                  color: 'var(--text-ink)',
                  lineHeight: 1.15,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                25 Years of Engineering, Enterprise and Reflection.
              </h2>

              <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-pure-white)', borderLeft: '3px solid var(--accent-red)', marginBottom: '1.5rem', borderRadius: '0 2px 2px 0', border: '1px solid var(--border-subtle)', borderLeftWidth: '3px', borderLeftColor: 'var(--accent-red)' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--text-ink)', margin: 0, lineHeight: 1.45 }}>
                  “Experience creates perspective. Perspective becomes useful when shared.”
                </p>
              </div>

              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-deep-blue)', marginBottom: '1.15rem' }}>
                Wildmac was founded by Rodney Almeida, an Electrical Engineering graduate whose career spans over two decades of corporate management, entrepreneurial ventures, and deep personal study.
              </p>

              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Having authored four published books exploring purpose, financial awareness, and decision-making, Rodney established Wildmac to bridge high-leverage commercial strategy with deep human purpose.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="/books" className="btn btn-primary" style={{ padding: '0.8rem 1.6rem', fontSize: '0.88rem' }}>
                  <span>Explore Published Books</span>
                  <ArrowRight size={13} />
                </Link>
                <Link href="/consultation" className="editorial-link" style={{ fontSize: '0.88rem' }}>
                  <span>Schedule Advisory Discussion</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right: Strategy & Manuscript Still Life */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  padding: '0.75rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-book)',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16 / 11', overflow: 'hidden', borderRadius: '1px' }}>
                  <img
                    src="/images/author-workspace.jpg"
                    alt="Strategic desk still life with manuscripts and planning tools"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(17, 24, 32, 0.88)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '2px',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    WM // THE WRITING DESK & MANUSCRIPTS
                  </div>
                </div>
              </div>
            </div>
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
