'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { booksData } from '@/data/books';
import BookCover3D from '@/components/BookCover3D';

export default function EditorialBookshelf() {
  // Deliberate visual hierarchy scaling
  const scaleStyles = [
    { maxWidth: '300px', label: 'VOLUME 01 / FLAGSHIP WORK' },
    { maxWidth: '265px', label: 'VOLUME 02 / STRATEGY' },
    { maxWidth: '265px', label: 'VOLUME 03 / MINDFULNESS' },
    { maxWidth: '240px', label: 'VOLUME 04 / STEWARDSHIP' },
  ];

  return (
    <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="editorial-stamp">02 // THE OPEN LIBRARY</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-sans)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                WILD MAC PRESS
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--text-ink)', lineHeight: '1.14' }}>
              The Published Works
            </h2>
          </div>
          <Link href="/books" className="editorial-link">
            <span>Explore Complete Catalog</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Horizontal Bookshelf with deliberate scale hierarchy */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            alignItems: 'flex-end',
            marginBottom: '4.5rem',
          }}
        >
          {booksData.map((book, idx) => {
            const hierarchy = scaleStyles[idx] || scaleStyles[0];
            return (
              <div
                key={book.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: 'var(--bg-pure-white)',
                  padding: '2.5rem 1.5rem 2rem 1.5rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'transform var(--transition-smooth), border-color var(--transition-smooth)',
                }}
              >
                <div style={{ width: '100%', maxWidth: hierarchy.maxWidth, marginBottom: '2rem' }}>
                  <BookCover3D book={book} href={`/books/${book.slug}`} />
                </div>

                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-red)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {hierarchy.label}
                </span>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.4rem', color: 'var(--text-ink)' }}>
                  <Link href={`/books/${book.slug}`} style={{ color: 'inherit' }}>
                    {book.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {book.tagline}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', gap: '0.5rem' }}>
                  <Link href={`/books/${book.slug}`} className="editorial-link" style={{ fontSize: '0.8rem' }}>
                    <span>Overview</span>
                    <ArrowRight size={12} />
                  </Link>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-editorial"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
                  >
                    <span>Amazon</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bookshelf Closing Statement */}
        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border-medium)', paddingTop: '3.5rem', maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.45rem', color: 'var(--text-deep-blue)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
            “Four books. Four questions. One continuing conversation.”
          </p>
          <Link href="/books" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
            <span>Explore the Full Library</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
