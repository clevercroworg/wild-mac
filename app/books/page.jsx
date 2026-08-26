import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { booksData, getFeaturedBook } from '@/data/books';
import BookCover3D from '@/components/BookCover3D';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'Books & Publications — Wildmac',
  description: 'Explore the 4 published works of Rodney Almeida exploring personal journeys, financial awareness, purpose, and life decisions.',
};

export default function BooksPage() {
  const featuredBook = getFeaturedBook();
  const otherBooks = booksData.filter(b => b.slug !== featuredBook.slug);

  return (
    <>
      {/* ===================================================================
          01 — BOOKS HERO: THE WILDMAC PUBLICATIONS
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-ice-blue)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Left: Statement & Narrative */}
            <div style={{ maxWidth: '600px' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="editorial-stamp">WILDMAC // BOOKS & IDEAS</span>
              </div>

              <h1
                style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.06',
                  fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                  color: 'var(--text-ink)',
                  letterSpacing: '-0.025em',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                }}
              >
                Explore Knowledge, Purpose and Possibility.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <p className="lead" style={{ fontSize: '1.18rem', color: 'var(--text-deep-blue)', marginBottom: '1.25rem', lineHeight: 1.65 }}>
                Four works. Four perspectives. A continuing inquiry into how we build sovereignty, allocate presence, and make decisions that endure.
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2.25rem' }}>
                Each volume represents years of distilled personal experience, fatherhood reflections, financial discipline, and philosophical exploration.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="#catalog" className="btn btn-primary" style={{ padding: '0.9rem 1.85rem' }}>
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

            {/* Right: Featured Book Showcase */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  padding: '2.25rem 2rem',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-subtle)',
                  textAlign: 'center',
                  maxWidth: '360px',
                  width: '100%',
                }}
              >
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent-red)', textTransform: 'uppercase', marginBottom: '1.25rem', display: 'block' }}>
                  FEATURED PUBLICATION
                </span>

                <div style={{ maxWidth: '240px', margin: '0 auto 1.5rem auto' }}>
                  <BookCover3D book={featuredBook} href={`/books/${featuredBook.slug}`} isLarge={true} />
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.35rem' }}>
                  {featuredBook.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-deep-blue)', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  {featuredBook.subtitle}
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                  <a
                    href={featuredBook.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-amazon"
                    style={{ padding: '0.6rem 1.1rem', fontSize: '0.82rem' }}
                  >
                    <span>Amazon</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <Link
                    href={`/books/${featuredBook.slug}`}
                    className="btn btn-secondary"
                    style={{ padding: '0.6rem 1.1rem', fontSize: '0.82rem' }}
                  >
                    <span>Overview</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — COMPLETE 4-VOLUME CATALOG GRID
          =================================================================== */}
      <section id="catalog" className="section-py-lg" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '4rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">THE COMPLETE CATALOG</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.15,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Four Volumes on Life, Purpose and Capital.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              Available in physical paperback and digital Kindle editions worldwide.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {booksData.map((book) => (
              <div
                key={book.id}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div>
                  <div style={{ maxWidth: '200px', margin: '0 auto 1.75rem auto' }}>
                    <BookCover3D book={book} href={`/books/${book.slug}`} />
                  </div>

                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                    {book.theme}
                  </span>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.5rem', lineHeight: 1.25 }}>
                    <Link href={`/books/${book.slug}`} style={{ color: 'inherit' }}>
                      {book.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {book.synopsis ? `${book.synopsis.slice(0, 135)}...` : book.tagline}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  <Link href={`/books/${book.slug}`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                    <span>Read Monograph</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-editorial"
                    style={{ padding: '0.5rem 0.95rem', fontSize: '0.78rem', gap: '0.35rem' }}
                  >
                    <span>Amazon</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 — MAJOR CONSULTATION CTA
          =================================================================== */}
      <MajorConsultationCTA />
    </>
  );
}
