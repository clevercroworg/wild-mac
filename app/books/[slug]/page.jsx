import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight, Check, BookOpen, Compass } from 'lucide-react';
import { booksData, getBookBySlug } from '@/data/books';
import BookCover3D from '@/components/BookCover3D';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export async function generateStaticParams() {
  return booksData.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: 'Book Not Found' };

  return {
    title: `${book.title} — Book Overview | Wildmac`,
    description: `${book.title}: ${book.subtitle}. ${book.tagline}`,
  };
}

export default async function BookDetailPage({ params }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const relatedBooks = booksData.filter((b) => b.slug !== book.slug).slice(0, 2);

  return (
    <>
      {/* ===================================================================
          01 — HERO: THE MANUSCRIPT OBJECT
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-mist-blue)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div className="book-detail-hero-grid" style={{ alignItems: 'center' }}>
            {/* Left: Large Physical Book Cover */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ maxWidth: '320px', width: '100%' }}>
                <BookCover3D book={book} isLarge={true} />
              </div>
            </div>

            {/* Right: Book Opening Data & Amazon CTA */}
            <div style={{ maxWidth: '600px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span className="editorial-stamp" style={{ letterSpacing: '0.14em' }}>
                  WILDMAC PUBLICATION // {book.category}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                  fontWeight: 700,
                  color: 'var(--text-ink)',
                  lineHeight: '1.1',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {book.title}
              </h1>

              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-deep-blue)', marginBottom: '1.5rem' }}>
                {book.subtitle}
              </p>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.5rem' }} />

              <p className="lead" style={{ fontSize: '1.12rem', color: 'var(--text-deep-blue)', marginBottom: '2.25rem', lineHeight: '1.65' }}>
                {book.tagline}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-amazon"
                  style={{ padding: '0.95rem 2rem', gap: '0.6rem' }}
                >
                  <span>Buy on Amazon</span>
                  <ArrowUpRight size={15} />
                </a>

                <Link href="/books" className="editorial-link">
                  <span>View All Books</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — BOOK OVERVIEW & CHAPTER THEMES
          =================================================================== */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left Column: Philosophical Overview */}
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="editorial-stamp">ABOUT THE WORK</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 700,
                  color: 'var(--text-ink)',
                  lineHeight: 1.15,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                The Heart of the Inquiry.
              </h2>

              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-deep-blue)', marginBottom: '1.5rem' }}>
                {book.synopsis}
              </p>

              {/* Pull Quote */}
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-ice-blue)', borderLeft: '3px solid var(--accent-red)', margin: '2rem 0', borderRadius: '0 2px 2px 0' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text-ink)', margin: 0, lineHeight: 1.55 }}>
                  “{book.quote}”
                </p>
                <span style={{ display: 'block', marginTop: '0.65rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>
                  — EXCERPT FROM {book.title.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Right Column: Themes & Chapter Highlights */}
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="editorial-stamp">CORE THEMES</span>
              </div>

              <div style={{ backgroundColor: 'var(--bg-paper-white)', border: '1px solid var(--border-subtle)', borderRadius: '2px', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '1.25rem' }}>
                  What You Will Explore
                </h3>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {(book.whatYouWillExplore || []).map((theme, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-deep-blue)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--accent-red)', fontWeight: 700, marginTop: '0.1rem' }}>✓</span>
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginTop: '2rem' }}>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.85rem', fontSize: '0.9rem', gap: '0.5rem' }}
                  >
                    <span>Order on Amazon</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 — OTHER BOOKS IN THE CATALOG
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="editorial-stamp">COMPANION WORKS</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-ink)', marginTop: '0.5rem' }}>
                Continue Reading
              </h2>
            </div>
            <Link href="/books" className="editorial-link">
              <span>View All 4 Books</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {relatedBooks.map((relBook) => (
              <div
                key={relBook.id}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ maxWidth: '160px', margin: '0 auto 1.5rem auto' }}>
                    <BookCover3D book={relBook} href={`/books/${relBook.slug}`} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.4rem' }}>
                    <Link href={`/books/${relBook.slug}`} style={{ color: 'inherit' }}>
                      {relBook.title}
                    </Link>
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {relBook.tagline}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between' }}>
                  <Link href={`/books/${relBook.slug}`} className="editorial-link" style={{ fontSize: '0.82rem' }}>
                    <span>Read Overview</span>
                    <ArrowRight size={12} />
                  </Link>
                  <a
                    href={relBook.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.82rem', color: 'var(--accent-red)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
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
          04 — MAJOR CONSULTATION CTA
          =================================================================== */}
      <MajorConsultationCTA />
    </>
  );
}
