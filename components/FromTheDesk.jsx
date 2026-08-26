import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FromTheDesk() {
  return (
    <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="hero-grid" style={{ alignItems: 'center' }}>
          {/* Left: Asymmetric Photograph Crop */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                padding: '0.85rem',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-book)',
                borderRadius: '2px',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <img
                  src="/images/author-workspace.jpg"
                  alt="Author's desk with open manuscript, notebook, and fountain pen"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '0.85rem 0.25rem 0.25rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', borderTop: '1px solid var(--border-subtle)', marginTop: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span>WM / ARTIFACT 04 // THE WRITING DESK</span>
                <span style={{ color: 'var(--accent-red)' }}>OCTOBER DISPATCH</span>
              </div>
            </div>
          </div>

          {/* Right: Thoughtful Desk Note */}
          <div style={{ maxWidth: '540px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">WM / FROM THE DESK</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 2.9rem)', color: 'var(--text-ink)', lineHeight: '1.18', marginBottom: '1.5rem' }}>
              “Some ideas arrive quietly.<br />
              The important ones tend to stay.”
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-deep-blue)', marginBottom: '1.5rem' }}>
              Writing is not a performance for an algorithm; it is a slow distillation of lived observation. Before an idea becomes a chapter, it lives for months in the margins of private notebooks.
            </p>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.75', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Every volume published under Wild Mac Press represents thoughts tested against real-world friction and measured against the quiet standard of enduring truth.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap' }}>
              <Link href="/blog" className="editorial-link">
                <span>Read Current Journal Entries</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/about" className="editorial-link" style={{ color: 'var(--text-light)' }}>
                <span>About the Author</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
