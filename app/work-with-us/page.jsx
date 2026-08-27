'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Send,
  Building,
  BookOpen,
  Compass,
  Check,
} from 'lucide-react';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export default function WorkWithUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    track: 'consulting-fellow',
    organization: '',
    portfolioUrl: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const tracks = [
    {
      id: 'consulting-fellow',
      title: 'Consulting Fellows & Domain Specialists',
      icon: Compass,
      subtitle: 'Partner with Wildmac on high-stakes advisory engagements.',
      description: 'We actively collaborate with seasoned domain specialists across civil and technical engineering, property due diligence, brand architecture, and financial analysis.',
      inclusions: [
        'Collaborative client project engagements.',
        'High-judgment advisory sounding board network.',
        'Independent consulting autonomy with institutional prestige.',
      ],
    },
    {
      id: 'editorial-research',
      title: 'Research & Editorial Associates',
      icon: BookOpen,
      subtitle: 'Contribute to manuscripts, frameworks, and educational archives.',
      description: 'Help develop our philosophical manuscripts, practical case studies, educational curricula, and downloadable frameworks for founders and readers worldwide.',
      inclusions: [
        'Rigorous research and editorial synthesis.',
        'Direct collaboration on forthcoming publications and monographs.',
        'Deep immersion in unhurried intellectual inquiry.',
      ],
    },
    {
      id: 'joint-ventures',
      title: 'Strategic Alliances & Joint Ventures',
      icon: Building,
      subtitle: 'Co-build sustainable ventures and educational initiatives in Goa and beyond.',
      description: 'We partner with principled property owners, educational institutions, and mission-aligned founders on long-term enterprise builds and vocational academies.',
      inclusions: [
        'Joint real estate and heritage preservation projects.',
        'Future Projects vocational learning centers in Goa.',
        'Institutional sponsorship and philanthropic co-development.',
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* -------------------------------------------------------------
          01 — HERO SECTION
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
          <div style={{ maxWidth: '780px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">CAREERS & PARTNERSHIPS // COLLABORATE WITH WILDMAC</span>
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
              Build Enduring Work with High-Judgment Minds.
            </h1>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              We partner with disciplined specialists, researchers, engineers, and visionary organizations who believe that true quality compounds over decades, not quarters.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          02 — THREE COLLABORATION TRACKS
          ------------------------------------------------------------- */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <span className="editorial-stamp">COLLABORATION PATHWAYS</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--text-ink)', fontWeight: 700, margin: '0.5rem 0 0 0' }}>
              How We Work Together
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.id}
                  style={{
                    backgroundColor: 'var(--bg-pure-white)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '6px',
                    padding: '2.25rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-ice-blue)',
                        border: '1px solid var(--border-medium)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <Icon size={22} color="var(--accent-red)" />
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-ink)', margin: '0 0 0.5rem 0', fontWeight: 700 }}>
                      {track.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-light)', fontStyle: 'italic', marginBottom: '1rem' }}>
                      {track.subtitle}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-deep-blue)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {track.description}
                    </p>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border-subtle)', marginBottom: '1.25rem' }} />

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {track.inclusions.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.84rem', color: 'var(--text-deep-blue)', lineHeight: 1.5 }}>
                          <CheckCircle2 size={15} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          03 — INTERACTIVE PARTNERSHIP & INQUIRY FORM
          ------------------------------------------------------------- */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="editorial-stamp">DIRECT INQUIRY</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--text-ink)', fontWeight: 700, margin: '0.5rem 0 0.5rem 0' }}>
                Submit Your Proposal or Background
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>
                Tell us about your background, area of expertise, or joint venture proposal.
              </p>
            </div>

            {submitted ? (
              <div
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  borderRadius: '6px',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-dropdown)',
                }}
              >
                <div style={{ display: 'inline-flex', marginBottom: '1rem', color: '#1E8E48' }}>
                  <CheckCircle2 size={48} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-ink)', margin: 0, fontWeight: 700 }}>
                  Proposal Received with Thanks
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-deep-blue)', lineHeight: 1.6, maxWidth: '480px', margin: '0.75rem auto 1.5rem auto' }}>
                  Thank you for reaching out. Rodney Almeida and our leadership review all strategic inquiries and will respond within 48 business hours.
                </p>
                <Link href="/" className="btn btn-editorial" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                  <span>Return to Homepage</span>
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '6px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.35rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rodney Almeida"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.85rem',
                        fontSize: '0.9rem',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '4px',
                        backgroundColor: '#F9FBFC',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.35rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.85rem',
                        fontSize: '0.9rem',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '4px',
                        backgroundColor: '#F9FBFC',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.35rem' }}>
                      Collaboration Pathway *
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.85rem',
                        fontSize: '0.88rem',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '4px',
                        backgroundColor: '#F9FBFC',
                        outline: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="consulting-fellow">Consulting Fellow / Domain Specialist</option>
                      <option value="editorial-research">Research & Editorial Associate</option>
                      <option value="joint-ventures">Strategic Alliance / Joint Venture</option>
                      <option value="other">Other Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.35rem' }}>
                      Organization / Firm (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Studio Almeida / Independent"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.85rem',
                        fontSize: '0.9rem',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '4px',
                        backgroundColor: '#F9FBFC',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.35rem' }}>
                    Proposal, Background & Areas of Alignment *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your background, domain experience, or proposed collaboration concept..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      border: '1px solid var(--border-medium)',
                      borderRadius: '4px',
                      backgroundColor: '#F9FBFC',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.85rem',
                    fontSize: '0.9rem',
                    gap: '0.5rem',
                    cursor: loading ? 'wait' : 'pointer',
                  }}
                >
                  <Send size={15} />
                  <span>{loading ? 'Submitting Proposal...' : 'Submit Collaboration Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <MajorConsultationCTA />

      <style jsx global>{`
        @media (max-width: 640px) {
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
