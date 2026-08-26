'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { booksData, getFeaturedBook } from '@/data/books';
import BookCover3D from '@/components/BookCover3D';

export default function FeaturedBooksSection() {
  const featuredBook = getFeaturedBook();
  const supportingBooks = booksData.filter((b) => b.slug !== featuredBook.slug);

  return (
    <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="editorial-stamp">BOOKS & IDEAS</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.15,
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Explore Knowledge, Purpose and Possibility.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.6 }}>
              Discover books that explore personal journeys, financial awareness, purpose and the paths that shape our lives.
            </p>
          </div>

          <Link href="/books" className="editorial-link" style={{ fontSize: '0.92rem' }}>
            <span>View All Books</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 1 Featured + 3 Supporting Books Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.45fr)',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="books-section-grid"
        >
          {/* Left Column: Dominant Featured Book Spotlight */}
          <div
            style={{
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              padding: '2.5rem 2rem',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent-red)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              FEATURED PUBLICATION
            </span>

            <div style={{ maxWidth: '240px', width: '100%', marginBottom: '1.5rem' }}>
              <BookCover3D book={featuredBook} href={`/books/${featuredBook.slug}`} isLarge={true} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-ink)', marginBottom: '0.4rem' }}>
              {featuredBook.title}
            </h3>

            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-navy)', marginBottom: '1.25rem' }}>
              {featuredBook.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href={featuredBook.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amazon"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.82rem', gap: '0.45rem' }}
              >
                <span>Buy on Amazon</span>
                <ArrowUpRight size={13} />
              </a>
              <Link
                href={`/books/${featuredBook.slug}`}
                className="btn btn-secondary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.82rem' }}
              >
                <span>Read Overview</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Supporting Books Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {supportingBooks.map((book) => (
              <div
                key={book.id}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '1.5rem 1.75rem',
                  display: 'grid',
                  gridTemplateColumns: '90px 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
                className="supporting-book-row"
              >
                <div style={{ width: '80px' }}>
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    style={{ width: '100%', aspectRatio: '2/3', objectFit: 'cover', borderRadius: '1px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 600, textTransform: 'uppercase' }}>
                    {book.theme}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: '0.2rem 0 0.4rem 0' }}>
                    <Link href={`/books/${book.slug}`} style={{ color: 'inherit' }}>
                      {book.title}
                    </Link>
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {book.tagline}
                  </p>
                </div>

                <div>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-editorial"
                    style={{ padding: '0.55rem 0.95rem', fontSize: '0.78rem', gap: '0.35rem' }}
                  >
                    <span>Amazon</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .books-section-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .supporting-book-row {
            grid-template-columns: 80px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
