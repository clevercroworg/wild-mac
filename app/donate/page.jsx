'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShieldCheck, ArrowRight, Compass, Sparkles, MapPin, Building, Trees, BookOpen, CheckCircle2 } from 'lucide-react';
import DonationUPIModal from '@/components/DonationUPIModal';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState('2500');
  const [customAmount, setCustomAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const presetAmounts = ['500', '1000', '2500', '5000', '10000'];

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(e.target.value);
  };

  const futureProjects = [
    {
      number: '01',
      title: 'Ashram Sanctuary in Cancona',
      location: 'Cancona, South Goa',
      icon: Compass,
      desc: 'A tranquil forest and coastal retreat designed for unhurried contemplation, meditation, philosophical study, and mental clarity for seekers and leaders.',
      status: 'Land Acquisition & Architectural Planning',
    },
    {
      number: '02',
      title: 'Old Age Home in Taleigao',
      location: 'Taleigao, Goa',
      icon: Building,
      desc: 'A dignified, loving residential haven providing elder care, health monitoring, compassionate community living, and nutritious holistic meals.',
      status: 'Community Infrastructure Design',
    },
    {
      number: '03',
      title: 'Farm House & Permaculture Hub',
      location: 'Caranzalem, Goa',
      icon: Trees,
      desc: 'An ecological sanctuary dedicated to sustainable organic farming, community dialogues, youthful leadership workshops, and nature-connected living.',
      status: 'Project Blueprinting',
    },
    {
      number: '04',
      title: 'Upcoming Book & Knowledge Distribution',
      location: 'Pan-India & Global',
      icon: BookOpen,
      desc: 'Publishing and subsidizing transformative literature on purpose, fatherhood, financial literacy, and engineering discipline for schools and young thinkers.',
      status: 'Manuscript in Progress',
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
          paddingTop: '4rem',
          paddingBottom: '3.5rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">WILDMAC PHILANTHROPY & SOCIAL IMPACT</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                letterSpacing: '-0.025em',
                fontWeight: 700,
              }}
            >
              Support Purposeful Initiatives & Social Infrastructure.
            </h1>

            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', margin: '0 auto 1.5rem' }} />

            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Every contribution directly fuels community sanctuaries in Goa, elder care facilities, educational book distribution, and ecological learning retreats.
            </p>

            {/* Quick Interactive Donation Preset Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '2rem 1.75rem',
                boxShadow: 'var(--shadow-book)',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-ink)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Select Contribution Amount (INR ₹)
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 600 }}>
                  INSTANT UPI / QR ENABLED
                </span>
              </div>

              {/* Amount Buttons Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
                {presetAmounts.map((amt) => {
                  const isSelected = selectedAmount === amt && !customAmount;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handlePresetClick(amt)}
                      style={{
                        padding: '0.85rem 0.5rem',
                        backgroundColor: isSelected ? 'var(--text-deep-blue)' : 'var(--bg-paper-white)',
                        color: isSelected ? '#FFFFFF' : 'var(--text-deep-blue)',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                        borderRadius: '2px',
                        fontSize: '1.05rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      ₹{Number(amt).toLocaleString('en-IN')}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount Input + CTA Button */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem', alignItems: 'center' }} className="form-split-grid">
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-light)' }}>
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem 0.85rem 2.2rem',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.95rem',
                      color: 'var(--text-ink)',
                      backgroundColor: 'var(--bg-paper-white)',
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem', gap: '0.5rem' }}
                >
                  <Heart size={16} fill="#FFFFFF" />
                  <span>Donate ₹{Number(selectedAmount || 1000).toLocaleString('en-IN')} via UPI</span>
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ShieldCheck size={14} color="#25D366" />
                  <span>100% Direct Impact Allocation</span>
                </span>
                <span>•</span>
                <span>Official UPI & NEFT Available</span>
                <span>•</span>
                <span>Goa Social Trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — FUTURE PROJECTS & PHILANTHROPIC ROADMAP
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">WHERE YOUR CONTRIBUTION GOES</span>
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
              Future Social Infrastructure & Purpose Projects.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              Under the direct vision of Rodney Almeida, Wildmac is establishing durable, intergenerational community sanctuaries across Goa.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {futureProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.number}
                  className="card-interactive"
                  style={{
                    backgroundColor: 'var(--bg-paper-white)',
                    border: '1px solid var(--border-subtle)',
                    borderTop: '3px solid var(--accent-red)',
                    borderRadius: '2px',
                    padding: '2rem 1.65rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-red)' }}>
                        {project.number}
                      </span>
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin size={11} color="var(--accent-red)" />
                        <span>{project.location}</span>
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.85rem', lineHeight: 1.25 }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                      {project.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 600 }}>
                    <CheckCircle2 size={13} color="var(--accent-red)" />
                    <span>{project.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 — PHILOSOPHY OF GIVING
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">THE ETHICS OF PURPOSE</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}
            >
              “Wealth achieves its highest leverage when converted into peace and dignity for others.”
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-deep-blue)', marginBottom: '2rem' }}>
              Wildmac believes that true progress is not merely commercial growth, but the quiet creation of sanctuaries where people find clarity, elderly citizens find honour, and future generations inherit timeless wisdom.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary"
              style={{ padding: '0.9rem 2rem', fontSize: '0.92rem' }}
            >
              <span>Contribute via UPI Today</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* UPI QR Code Modal Popup */}
      <DonationUPIModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedAmount={selectedAmount}
      />

      <MajorConsultationCTA />
    </>
  );
}
