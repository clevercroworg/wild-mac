import React from 'react';

export default function VisualEssay() {
  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-mist-blue)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
        <div style={{ marginBottom: '1.75rem' }}>
          <span className="editorial-stamp" style={{ letterSpacing: '0.16em' }}>
            WM / AN EDITORIAL REFLECTION
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.4rem)',
            color: 'var(--text-ink)',
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            marginBottom: '2rem',
            textWrap: 'balance',
          }}
        >
          We spend years building a life. The harder question is whether we are building the right one.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body-serif)',
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            lineHeight: 1.85,
            color: 'var(--text-deep-blue)',
            maxWidth: '640px',
            margin: '0 auto',
            textWrap: 'pretty',
          }}
        >
          Most regret does not stem from failure, but from succeeding at things that ultimately did not matter. Wisdom begins when we pause the momentum of habit long enough to examine our own direction.
        </p>

        <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', margin: '2.25rem auto 0 auto' }} />
      </div>
    </section>
  );
}
