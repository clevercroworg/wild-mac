'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Feather, Compass, Coins, Briefcase, Sparkles } from 'lucide-react';

const themesList = [
  {
    number: "01",
    name: "LIFE",
    tagline: "Making thoughtful choices with the time we have.",
    description: "Time is not merely a resource to be managed, but the canvas upon which character is etched. Living deliberately requires establishing an unshakeable distinction between what is merely urgent and what is truly important.",
    quote: "When your hours are crowded with immediate reactions, you forfeit the sanctuary where original thoughts are born.",
    bookLink: "/books/a-letter-to-my-daughter",
    bookTitle: "A Letter To My Daughter",
    icon: Feather
  },
  {
    number: "02",
    name: "PURPOSE",
    tagline: "Finding direction and enduring meaning.",
    description: "Clarity of purpose is not a sudden epiphany waiting on a distant mountain peak; it is the quiet residue of committing to real problems and untangling external expectations from authentic discernment.",
    quote: "When your direction is clear, the noise of the world becomes a background hum rather than a distraction.",
    bookLink: "/books/the-path-of-purpose",
    bookTitle: "The Path Of Purpose",
    icon: Compass
  },
  {
    number: "03",
    name: "MONEY",
    tagline: "Financial awareness, capital & stewardship.",
    description: "Capital is stored time, sovereignty, and agency. Moving beyond status symbols allows you to view wealth not as ostentation, but as the quiet psychological freedom to say no to compromise.",
    quote: "The highest return on capital is the ability to wake up every morning and control your own schedule.",
    bookLink: "/books/financial-literacy",
    bookTitle: "Financial Literacy",
    icon: Coins
  },
  {
    number: "04",
    name: "BUSINESS",
    tagline: "Strategic restraint and high-judgment execution.",
    description: "Enduring enterprises are defined not by the myriad opportunities they chase, but by the lucrative compromises they consciously refuse. Restraint builds reputation; focus compounds into authority.",
    quote: "Strategy is the art of deliberate, courageous sacrifice.",
    bookLink: "/services#business-coaching",
    bookTitle: "Business Advisory",
    icon: Briefcase
  },
  {
    number: "05",
    name: "GROWTH",
    tagline: "Perspective, discipline & inner sovereignty.",
    description: "Personal development is not about accumulating superficial achievements, but cultivating an inner compass that remains calm, curious, and grounded in reality.",
    quote: "Silence is not the absence of sound, but the presence of deep understanding.",
    bookLink: "/books/the-sacred-path",
    bookTitle: "The Sacred Path",
    icon: Sparkles
  }
];

export default function IdeasExplorer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTheme = themesList[activeIdx];

  return (
    <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span className="editorial-stamp">03 // THE CONNECTIVE TISSUE</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-sans)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              CORE PILLARS
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--text-ink)', lineHeight: '1.14', marginBottom: '1rem' }}>
            Ideas worth carrying.
          </h2>
          <p className="lead">
            The connective framework linking the author’s published books, essays, and strategic advisory practice.
          </p>
        </div>

        {/* 60/40 Asymmetrical Ideas Grid */}
        <div className="two-col-grid" style={{ alignItems: 'stretch' }}>
          {/* Left Column: Stacked List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {themesList.map((theme, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={theme.number}
                  type="button"
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  data-cursor="SELECT"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem 1.75rem',
                    backgroundColor: isActive ? 'var(--bg-mist-blue)' : 'var(--bg-pure-white)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--border-strong)' : 'var(--border-subtle)',
                    borderLeft: isActive ? '3px solid var(--accent-red)' : '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all var(--transition-fast)',
                    width: '100%',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: isActive ? 'var(--accent-red)' : 'var(--text-light)', fontWeight: 600 }}>
                      {theme.number}
                    </span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 600, color: 'var(--text-ink)', letterSpacing: '0.04em' }}>
                        {theme.name}
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {theme.tagline}
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={16} color={isActive ? 'var(--accent-red)' : 'var(--text-whisper)'} style={{ transform: isActive ? 'translateX(4px)' : 'none', transition: 'transform var(--transition-fast)' }} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Exploration Preview */}
          <div
            style={{
              backgroundColor: 'var(--bg-ice-blue)',
              border: '1px solid var(--border-medium)',
              padding: '3rem 2.5rem',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <span className="editorial-stamp">WM / THEMATIC ESSENCE</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-red)', fontWeight: 600 }}>
                  SECTION 0{activeIdx + 1}
                </span>
              </div>

              <h3 style={{ fontSize: '2.1rem', color: 'var(--text-ink)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                {activeTheme.name}: {activeTheme.tagline}
              </h3>

              <p style={{ fontSize: '1.08rem', lineHeight: '1.8', color: 'var(--text-deep-blue)', marginBottom: '2.5rem' }}>
                {activeTheme.description}
              </p>

              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-pure-white)', borderLeft: '2px solid var(--accent-red)', borderRadius: '0 2px 2px 0', marginBottom: '2.5rem' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.12rem', color: 'var(--text-ink)', margin: 0, lineHeight: '1.65' }}>
                  “{activeTheme.quote}”
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                Explored in: <strong>{activeTheme.bookTitle}</strong>
              </span>
              <Link href={activeTheme.bookLink} className="editorial-link">
                <span>Examine Volume</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
