import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { booksData, getFeaturedBook } from '@/data/books';
import BookCover3D from '@/components/BookCover3D';
import EditorialQuote from '@/components/EditorialQuote';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'Published Works & Library',
  description: 'Books written from experience. Discover the 4 published works of Wild Mac on life, purpose, stillness, and financial awareness.',
};

export default function BooksPage() {
  const featuredBook = getFeaturedBook();
  const otherBooks = booksData.filter(b => b.slug !== featuredBook.slug);

  return (
    <>
      {/* ===================================================================
          HERO TYPE C: BOOKS — "THE LIBRARY" (BOOKS VISUALLY OWN THE SCREEN)
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-ice-blue)',
          minHeight: '86vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '4.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Left: Statement & Narrative */}
            <div style={{ maxWidth: '580px' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="editorial-stamp" style={{ letterSpacing: '0.15em' }}>
                  WM / THE LIBRARY // PUBLISHED CATALOG
                </span>
              </div>

              <h1
                style={{
                  marginBottom: '1.75rem',
                  lineHeight: '1.08',
                  fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)',
                  color: 'var(--text-ink)',
                  letterSpacing: '-0.02em',
                }}
              >
                Books written<br />
                from experience.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--text-deep-blue)', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                Four works. Four perspectives. A continuing conversation about life, purpose, money, and meaning.
              </p>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2.25rem' }}>
                Each volume is an unhurried, standalone inquiry into how we build sovereignty, allocate presence, and navigate our finite time on earth.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="#volumes" className="btn btn-primary" style={{ padding: '0.9rem 1.85rem' }}>
                  <span>Explore All 4 Volumes</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={featuredBook.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-amazon"
                  style={{ padding: '0.9rem 1.65rem' }}
                >
                  <span>Amazon Store</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Right: Overlapping Physical Books Editorial Cascade */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '440px' }}>
              {/* Backplate */}
              <div
                style={{
                  position: 'absolute',
                  width: '92%',
                  height: '105%',
                  backgroundColor: 'var(--bg-mist-blue)',
                  borderRadius: '2px',
                  zIndex: 0,
                }}
              />

              {/* Dominant Featured Book */}
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '280px', width: '100%', transform: 'rotate(-2deg)' }}>
                <BookCover3D book={featuredBook} href={`/books/${featuredBook.slug}`} isLarge={true} />
              </div>

              {/* Secondary Overlapping Book (Offset Right) */}
              <div
                style={{
                  position: 'absolute',
                  right: '-10px',
                  bottom: '-20px',
                  maxWidth: '180px',
                  width: '100%',
                  zIndex: 3,
                  transform: 'rotate(4deg)',
                }}
                className="hidden-mobile"
              >
                <BookCover3D book={otherBooks[0]} href={`/books/${otherBooks[0].slug}`} />
              </div>

              {/* Tertiary Overlapping Book (Offset Left Behind) */}
              <div
                style={{
                  position: 'absolute',
                  left: '-15px',
                  top: '-10px',
                  maxWidth: '170px',
                  width: '100%',
                  zIndex: 1,
                  opacity: 0.88,
                  transform: 'rotate(-6deg)',
                }}
                className="hidden-mobile"
              >
                <BookCover3D book={otherBooks[1]} href={`/books/${otherBooks[1].slug}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          LIBRARY VOLUMES CATALOG
          =================================================================== */}
      <section id="volumes" className="section-py-lg" style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-paper-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {booksData.map((book, idx) => (
              <div
                key={book.id}
                className="book-featured-grid editorial-card-pad"
                style={{
                  backgroundColor: idx % 2 === 0 ? 'var(--bg-pure-white)' : 'var(--bg-ice-blue)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                {/* Book Cover */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ maxWidth: '280px', width: '100%' }}>
                    <BookCover3D book={book} href={`/books/${book.slug}`} />
                  </div>
                </div>

                {/* Book Details */}
                <div style={{ maxWidth: '580px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className="editorial-stamp">VOLUME 0{idx + 1}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {book.theme}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '0.5rem', color: 'var(--text-ink)' }}>
                    <Link href={`/books/${book.slug}`} style={{ color: 'inherit' }}>
                      {book.title}
                    </Link>
                  </h2>

                  <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--text-navy)', marginBottom: '1.5rem' }}>
                    {book.subtitle}
                  </p>

                  <p style={{ fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                    {book.synopsis}
                  </p>

                  <div style={{ padding: '1rem 1.25rem', backgroundColor: idx % 2 === 0 ? 'var(--bg-mist-blue)' : 'var(--bg-pure-white)', borderLeft: '2px solid var(--accent-red)', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.92rem', fontStyle: 'italic', color: 'var(--text-ink)', margin: 0, lineHeight: '1.6' }}>
                      “{book.quote}”
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-amazon"
                    >
                      <span>Read on Amazon</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <Link href={`/books/${book.slug}`} className="btn btn-secondary">
                      <span>Explore Volume Overview</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <EditorialQuote
        quote="A book is a quiet conversation across time and distance, inviting you to examine your own life with fresh eyes."
        attribution="Wild Mac"
        subtitle="THE PRINTED OBJECT"
      />

      <Newsletter />
    </>
  );
}
