import React from 'react';

export default function EditorialQuote({
  quote = "Life is precious and beautiful. Make the best use of life.",
  attribution = "Founder, Wild Mac",
  subtitle = "WM / FOUNDER'S NOTE",
  className = ""
}) {
  return (
    <section className={`founder-spread section-py-lg ${className}`} style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        <div style={{ position: 'relative', maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(140px, 200px) 1fr', gap: '3rem', alignItems: 'flex-start' }} className="hero-grid">
          {/* Left Column: Micro Annotation */}
          <div style={{ paddingTop: '0.75rem' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="editorial-stamp" style={{ fontSize: '0.72rem', letterSpacing: '0.14em' }}>
                {subtitle}
              </span>
            </div>
            <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--accent-red)' }} />
          </div>

          {/* Right Column: Giant Serif Spread */}
          <div style={{ position: 'relative' }}>
            {/* Giant decorative quotation glyph */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(6rem, 12vw, 10rem)',
                lineHeight: 0.8,
                color: 'rgba(24, 51, 72, 0.08)',
                position: 'absolute',
                top: '-2.5rem',
                left: '-2rem',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            >
              “
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                lineHeight: 1.16,
                color: 'var(--text-ink)',
                letterSpacing: '-0.02em',
                marginBottom: '2.5rem',
                position: 'relative',
                zIndex: 2,
              }}
            >
              “{quote}”
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)' }} />
              <cite style={{ fontStyle: 'normal', fontFamily: 'var(--font-sans)', fontSize: '0.92rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-deep-blue)' }}>
                {attribution}
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
