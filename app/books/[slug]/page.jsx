import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight, Check, BookOpen, Compass } from 'lucide-react';
import { booksData, getBookBySlug } from '@/data/books';
import BookCover3D from '@/components/BookCover3D';
import EditorialQuote from '@/components/EditorialQuote';
import Newsletter from '@/components/Newsletter';

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
    title: `${book.title} — Book Overview`,
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
          HERO TYPE E: INDIVIDUAL BOOK — "THE MANUSCRIPT OBJECT"
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-mist-blue)',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '4rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div className="book-detail-hero-grid" style={{ alignItems: 'center' }}>
            {/* Left: Large Physical Book Cover (35-45% of Viewport) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ maxWidth: '340px', width: '100%' }}>
                <BookCover3D book={book} isLarge={true} />
              </div>
            </div>

            {/* Right: Book Opening Data & Amazon CTA */}
            <div style={{ maxWidth: '600px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span className="editorial-stamp" style={{ letterSpacing: '0.14em' }}>
                  WM / BOOK VOLUME // {book.category}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
                  color: 'var(--text-ink)',
                  lineHeight: '1.1',
                  marginBottom: '0.75rem',
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
                  <span>Read on Amazon</span>
                  <ArrowUpRight size={15} />
                </a>
                <Link href="/books" className="editorial-link">
                  <span>Explore the Full Library</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div style={{ marginTop: '2.25rem', display: 'flex', gap: '2rem', fontSize: '0.82rem', color: 'var(--text-light)', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ display: 'block', fontWeight: 600, color: 'var(--text-ink)' }}>PUBLISHER</span>
                  <span>{book.publisher}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontWeight: 600, color: 'var(--text-ink)' }}>FORMAT</span>
                  <span>Hardcover & Digital</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontWeight: 600, color: 'var(--text-ink)' }}>THEME</span>
                  <span>{book.theme}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 & 03 — WHY THIS BOOK EXISTS & SYNOPSIS
          =================================================================== */}
      <section id="why-it-exists" className="section-py-lg" style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-paper-white)' }}>
        <div className="container-narrow">
          <div style={{ marginBottom: '4rem' }}>
            <span className="editorial-stamp" style={{ marginBottom: '1rem' }}>01 // ORIGIN & PURPOSE</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-ink)', marginBottom: '1.5rem' }}>
              Why this book exists.
            </h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.85', color: 'var(--text-deep-blue)' }}>
              {book.whyItExists}
            </p>
          </div>

          <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border-subtle)', margin: '3.5rem 0' }} />

          <div>
            <span className="editorial-stamp" style={{ marginBottom: '1rem' }}>02 // SYNOPSIS</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-ink)', marginBottom: '1.5rem' }}>
              An overview of the work.
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              {book.synopsis}
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          04 — WHAT THE READER WILL EXPLORE
          =================================================================== */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-narrow">
          <span className="editorial-stamp" style={{ marginBottom: '1rem' }}>03 // INQUIRY & TOPICS</span>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--text-ink)', marginBottom: '2.5rem' }}>
            What the reader will explore.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {book.whatYouWillExplore.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem 1.75rem',
                  backgroundColor: 'var(--bg-ice-blue)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--accent-red)', fontWeight: 600 }}>
                  0{idx + 1}
                </span>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-deep-blue)', margin: 0, lineHeight: '1.6' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          05 — SELECTED THEMES
          =================================================================== */}
      <section className="section-py-lg" style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-paper-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span className="editorial-stamp" style={{ marginBottom: '0.75rem' }}>04 // CORE THEMES</span>
            <h2 style={{ color: 'var(--text-ink)' }}>Pillars of the Manuscript</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {book.selectedThemes.map((theme) => (
              <div
                key={theme.number}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2.25rem 1.75rem',
                  borderRadius: '2px',
                }}
              >
                <span className="chapter-number" style={{ display: 'block', marginBottom: '1rem' }}>
                  {theme.number}
                </span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--text-ink)' }}>
                  {theme.title}
                </h3>
                <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--border-subtle)', marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                  {theme.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          06 — AUTHOR'S NOTE
          =================================================================== */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-reading">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="editorial-stamp">05 // AUTHOR’S NOTE</span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-ink)', marginTop: '0.5rem' }}>
              A Note from Wild Mac
            </h2>
          </div>

          <div className="editorial-card-pad-md" style={{ backgroundColor: 'var(--bg-pure-white)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-subtle)', borderRadius: '2px' }}>
            <p style={{ fontFamily: 'var(--font-body-serif)', fontSize: '1.18rem', lineHeight: '1.85', color: 'var(--text-ink)', marginBottom: '2rem' }}>
              “{book.authorNote}”
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-deep-blue)' }}>
                Wild Mac
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-red)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                WILD MAC PRESS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          07 — PURCHASE OPTIONS / AMAZON
          =================================================================== */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="editorial-stamp" style={{ marginBottom: '1rem' }}>ACQUIRE THE VOLUME</span>
          <h2 style={{ fontSize: '2.6rem', color: 'var(--text-ink)', marginBottom: '1rem' }}>
            Read {book.title}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '520px', margin: '0 auto 2.5rem auto' }}>
            Available worldwide through Amazon in hardcover and digital editions.
          </p>

          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-amazon"
            style={{ padding: '1.1rem 2.5rem', fontSize: '1rem', gap: '0.75rem' }}
          >
            <span>Read on Amazon</span>
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* ===================================================================
          08 — RELATED BOOKS
          =================================================================== */}
      <section className="section-py-lg" style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-pure-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="editorial-stamp" style={{ marginBottom: '0.75rem' }}>FURTHER INQUIRY</span>
              <h2 style={{ color: 'var(--text-ink)' }}>Other Published Works</h2>
            </div>
            <Link href="/books" className="editorial-link">
              <span>View Full Library</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {relatedBooks.map((relBook) => (
              <div
                key={relBook.id}
                style={{
                  backgroundColor: 'var(--bg-paper-white)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '2px',
                }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <BookCover3D book={relBook} href={`/books/${relBook.slug}`} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                  <Link href={`/books/${relBook.slug}`} style={{ color: 'var(--text-ink)' }}>
                    {relBook.title}
                  </Link>
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {relBook.tagline}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <Link href={`/books/${relBook.slug}`} className="editorial-link">
                    <span>Read Overview</span>
                    <ArrowRight size={13} />
                  </Link>
                  <a
                    href={relBook.amazonUrl}
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
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <EditorialQuote
        quote={book.quote}
        attribution={`Wild Mac, ${book.title}`}
        subtitle="SELECTED PASSAGE"
      />

      <Newsletter />
    </>
  );
}
