import React from 'react';
import Link from 'next/link';
import { Compass, Building, Trees, BookOpen, MapPin, CheckCircle2, ArrowRight, Heart, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'Future Projects & Social Sanctuaries — Wildmac & Rodney Almeida',
  description: 'Explore Wildmac’s social infrastructure roadmap across Goa: Ashram Sanctuary in Cancona, Old Age Haven in Taleigao, and Permaculture Hub in Caranzalem.',
};

export default function FutureProjectsPage() {
  const projects = [
    {
      number: '01',
      title: 'Ashram Sanctuary in Cancona',
      location: 'Cancona, South Goa',
      category: 'CONTEMPLATIVE HAVEN & RETREAT',
      icon: Compass,
      status: 'Land Acquisition & Architectural Planning',
      desc: 'A tranquil forest and coastal sanctuary designed for unhurried contemplation, meditation, philosophical study, and mental clarity for seekers, thinkers, and leaders.',
      pillars: [
        'Silent Meditation & Dialogue Pavilion',
        'Natural Spring Water Conservation System',
        'Minimalist Eco-Living Guest Cottages',
        'Open Philosophy & Sanskrit Text Archives',
      ],
      vision: 'In an accelerating world of constant distraction, this haven provides an enduring physical space where individuals can unplug, recalibrate life priorities, and connect with nature and inner stillness.',
    },
    {
      number: '02',
      title: 'Old Age Home in Taleigao',
      location: 'Taleigao, Goa',
      category: 'ELDER CARE & COMPASSIONATE RESIDENCE',
      icon: Building,
      status: 'Community Infrastructure Design',
      desc: 'A dignified, loving residential haven providing comprehensive elder care, health monitoring, compassionate community living, and nutritious holistic meals.',
      pillars: [
        'Round-the-Clock Healthcare & Nursing Support',
        'Organic Farm-to-Table Community Kitchen',
        'Gentle Movement, Yoga & Hydrotherapy Spaces',
        'Intergenerational Mentorship & Youth Reading Programs',
      ],
      vision: 'Guided by the belief that elders deserve deep honor, security, and vibrant community in their golden years, this sanctuary bridges professional medical oversight with familial warmth.',
    },
    {
      number: '03',
      title: 'Farm House & Permaculture Hub',
      location: 'Caranzalem, Goa',
      category: 'ECOLOGICAL LIVING & YOUTH EDUCATION',
      icon: Trees,
      status: 'Project Blueprinting & Soil Preparation',
      desc: 'An ecological sanctuary dedicated to sustainable organic farming, community dialogues, youthful leadership workshops, and nature-connected living.',
      pillars: [
        'Indigenous Tree & Flora Afforestation',
        'Permaculture Soil Regeneration & Composting',
        'Youth Practical Self-Reliance Bootcamps',
        'Heirloom Seed Preservation Bank',
      ],
      vision: 'Teaching the next generation the practical arts of self-reliance, soil stewardship, and unhurried enterprise rooted in environmental harmony.',
    },
    {
      number: '04',
      title: 'Upcoming Book & Knowledge Distribution',
      location: 'Pan-India & Global',
      category: 'LITERATURE & EDUCATIONAL SUBSIDIES',
      icon: BookOpen,
      status: 'Manuscript Drafting Stage',
      desc: 'Publishing and subsidizing transformative literature on purpose, fatherhood, financial literacy, and engineering discipline for schools, libraries, and young thinkers.',
      pillars: [
        'Free Distribution to Regional Public Libraries',
        'Subsidized Student Print Editions',
        'Multilingual Translation (Konkani, Hindi, Marathi)',
        'Open-Access Digital Strategy Frameworks',
      ],
      vision: 'Making practical philosophy, financial literacy, and purpose-driven decision tools accessible to all youth regardless of economic background.',
    },
  ];

  return (
    <>
      {/* ===================================================================
          01 — HERO SECTION WITH WIDE SANCTUARY PHOTOGRAPHY
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          paddingTop: '3.75rem',
          paddingBottom: '3.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Wide Architectural Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/images/future-projects-hero.jpg"
            alt="Eco-sanctuary and community retreat in Goa"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(250, 250, 247, 0.97) 0%, rgba(250, 250, 247, 0.92) 50%, rgba(250, 250, 247, 0.78) 80%, rgba(250, 250, 247, 0.6) 100%)',
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">SOCIAL SANCTUARIES & ROADMAP</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.1,
                marginBottom: '1rem',
                letterSpacing: '-0.025em',
                fontWeight: 700,
              }}
            >
              Future Projects & Community Sanctuaries.
            </h1>

            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.25rem' }} />

            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Under the direct leadership of Rodney De Almeida, Wildmac is creating physical and educational sanctuaries across Goa to nourish community well-being, honor our elders, and empower the next generation.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/donate" className="btn btn-primary" style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem', gap: '0.45rem' }}>
                <Heart size={14} fill="#FFFFFF" />
                <span>Support These Initiatives</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/collaboration" className="btn btn-secondary" style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}>
                <span>Partner or Co-Develop</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — IN-DEPTH 4 PROJECTS BLUEPRINT SHOWCASE
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="editorial-stamp">INFRASTRUCTURE BLUEPRINTS</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.15,
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Four Pillars of Enduring Social Value.
            </h2>
            <p style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              Each project is designed with engineering rigor, ecological responsibility, and lifelong sustainability.
            </p>
          </div>

          {/* Detailed Projects Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.number}
                  className="card-interactive"
                  style={{
                    backgroundColor: 'var(--bg-paper-white)',
                    border: '1px solid var(--border-medium)',
                    borderLeft: '4px solid var(--accent-red)',
                    borderRadius: '3px',
                    padding: '2.25rem 2rem',
                    boxShadow: 'var(--shadow-subtle)',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
                      gap: '2.5rem',
                      alignItems: 'flex-start',
                    }}
                    className="about-split-grid"
                  >
                    {/* Left Details */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                          PROJECT {project.number}
                        </span>
                        <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          {project.category}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          color: 'var(--text-ink)',
                          lineHeight: 1.2,
                          marginBottom: '0.75rem',
                          fontWeight: 650,
                        }}
                      >
                        {project.title}
                      </h3>

                      <p style={{ fontSize: '0.96rem', color: 'var(--text-deep-blue)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                        {project.desc}
                      </p>

                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}>
                        “{project.vision}”
                      </p>
                    </div>

                    {/* Right Specifications & Pillars */}
                    <div style={{ backgroundColor: 'var(--bg-pure-white)', border: '1px solid var(--border-subtle)', padding: '1.5rem', borderRadius: '2px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                          <MapPin size={13} color="var(--accent-red)" />
                          <span>{project.location}</span>
                        </span>
                        <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 600 }}>
                          {project.status}
                        </span>
                      </div>

                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                        KEY PROJECT PILLARS
                      </span>

                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        {project.pillars.map((pillar, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-ink)', lineHeight: 1.5 }}>
                            <CheckCircle2 size={14} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{pillar}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 — DONATION & PARTICIPATION CALLOUT BANNER
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-medium)',
              borderTop: '4px solid var(--accent-red)',
              borderRadius: '3px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              maxWidth: '840px',
              margin: '0 auto',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.85rem', backgroundColor: 'rgba(201, 59, 43, 0.08)', borderRadius: '2px', color: 'var(--accent-red)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '1rem' }}>
              <Heart size={13} fill="var(--accent-red)" />
              <span>DIRECT SOCIAL CONTRIBUTIONS</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--text-ink)', marginBottom: '0.75rem', fontWeight: 650 }}>
              Fuel Ground Progress with Direct GPay & UPI.
            </h3>

            <p style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65, maxWidth: '620px', margin: '0 auto 1.75rem' }}>
              Every rupee contributed goes directly to land acquisition, infrastructure architecture, elder amenities, and educational literature distribution.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/donate" className="btn btn-primary" style={{ padding: '0.85rem 1.65rem', fontSize: '0.9rem', gap: '0.5rem' }}>
                <Heart size={14} fill="#FFFFFF" />
                <span>Go to Donation & QR Page</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/919657080490?text=Hello%20Rodney%2C%20I%20am%20interested%20in%20supporting%20Wildmac%20future%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.4rem', fontSize: '0.88rem', borderColor: '#25D366', color: 'var(--text-ink)', gap: '0.45rem' }}
              >
                <WhatsAppIcon size={16} color="#25D366" />
                <span>Direct WhatsApp Inquiries</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MajorConsultationCTA />
    </>
  );
}
