'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Briefcase, Rocket, User, Building, Globe } from 'lucide-react';

export default function WhoWeHelp() {
  const [activeAudience, setActiveAudience] = useState(0);

  const audiences = [
    {
      number: "01",
      title: "Entrepreneurs and Business Owners",
      tag: "FOUNDERS & LEADERS",
      description: "Navigating operational complexity, scaling challenges, team dynamics, and high-stakes commercial crossroads with objective perspective.",
      focus: "Operational clarity · Growth strategy · Leadership sustainability"
    },
    {
      number: "02",
      title: "Startups and Emerging Brands",
      tag: "EARLY-STAGE VENTURES",
      description: "Establishing strong brand architecture, customer positioning, and commercial focus before capital is deployed.",
      focus: "Brand foundations · Value proposition · Go-to-market discipline"
    },
    {
      number: "03",
      title: "Working Professionals",
      tag: "CAREER & LEADERSHIP",
      description: "Navigating career inflection points, executive leadership transitions, and aligning professional ambition with personal sovereignty.",
      focus: "Executive presence · Transition strategy · High-leverage skills"
    },
    {
      number: "04",
      title: "Individuals Seeking Personal Growth",
      tag: "LIFE & PURPOSE",
      description: "Designing deliberate daily habits, auditing time and energy allocation, and building unshakeable internal clarity.",
      focus: "Personal alignment · Habit architecture · Purpose discovery"
    },
    {
      number: "05",
      title: "Property Buyers and Investors",
      tag: "REAL ESTATE & CAPITAL",
      description: "Evaluating property decisions through an unhurried, conservative lens to protect capital and build intergenerational value.",
      focus: "Risk assessment · Property strategy · Long-term capital positioning"
    },
    {
      number: "06",
      title: "Businesses Building Their Digital Presence",
      tag: "BRANDING & DIGITAL",
      description: "Crafting distinct visual identities and dignified digital experiences that turn audience attention into lasting respect and commercial results.",
      focus: "Editorial storytelling · Digital positioning · Authentic conversion"
    }
  ];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
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

        {/* 6 Large Audience Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {audiences.map((aud, index) => {
            const isActive = index === activeAudience;
            return (
              <div
                key={aud.number}
                onMouseEnter={() => setActiveAudience(index)}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--text-deep-blue)' : 'var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isActive ? '0 12px 28px -6px rgba(23, 50, 71, 0.1)' : 'var(--shadow-subtle)',
                  position: 'relative',
                }}
              >
                {/* Active Top Marker Line */}
                {isActive && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: 'var(--accent-red)' }} />
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: isActive ? 'var(--accent-red)' : 'var(--text-light)' }}>
                      {aud.number}
                    </span>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)' }}>
                      {aud.tag}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-ink)', lineHeight: 1.25, marginBottom: '0.85rem' }}>
                    {aud.title}
                  </h3>

                  <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {aud.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-deep-blue)', fontWeight: 500 }}>
                    {aud.focus.split('·')[0]}
                  </span>
                  <Link href="/consultation" className="editorial-link" style={{ fontSize: '0.82rem' }}>
                    <span>Discuss Goals</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
