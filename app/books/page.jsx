import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, Clock, Sparkles, CheckCircle2, Mail } from 'lucide-react';
import { booksData, getFeaturedBook } from '@/data/books';
import BookCover3D from '@/components/BookCover3D';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'Books & Publications — Wildmac',
  description: 'Explore the published works of Rodney Almeida exploring personal journeys, financial awareness, purpose, and upcoming works in progress.',
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
          minHeight: '78vh',
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
                Four published works. One upcoming volume. A continuing inquiry into how we build sovereignty, allocate presence, and make decisions that endure.
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2.25rem' }}>
                Each volume represents years of distilled personal experience, fatherhood reflections, financial discipline, and philosophical exploration by Rodney Almeida.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="#catalog" className="btn btn-primary" style={{ padding: '0.85rem 1.85rem' }}>
                  <span>Explore Published Volumes</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="#upcoming" className="btn btn-secondary" style={{ padding: '0.85rem 1.65rem' }}>
                  <span>View Next Forthcoming Book</span>
                  <Clock size={14} color="var(--accent-red)" />
                </Link>
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
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
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
                className="card-interactive"
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                  <Link
                    href={`/books/${book.slug}`}
                    className="btn btn-secondary"
                    style={{ padding: '0.65rem 0.5rem', fontSize: '0.82rem', justifyContent: 'center', whiteSpace: 'nowrap', width: '100%', gap: '0.35rem' }}
                  >
                    <span>Overview</span>
                    <ArrowRight size={12} />
                  </Link>

                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-editorial"
                    style={{ padding: '0.65rem 0.5rem', fontSize: '0.82rem', justifyContent: 'center', whiteSpace: 'nowrap', width: '100%', gap: '0.35rem' }}
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
          03 — UPCOMING PUBLICATIONS & WORKS IN PROGRESS (NEW SECTION)
          =================================================================== */}
      <section id="upcoming" className="section-py-lg" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">WORKS IN PROGRESS // FUTURE PUBLICATIONS</span>
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
              Next Book Coming Up.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              Rodney De Almeida’s fifth forthcoming volume exploring the architecture of unhurried mastery, engineering discipline, and intergenerational stewardship.
            </p>
          </div>

          {/* Upcoming Book Feature Card */}
          <div
            style={{
              backgroundColor: 'var(--bg-paper-white)',
              border: '1px solid var(--border-medium)',
              borderLeft: '4px solid var(--accent-red)',
              borderRadius: '2px',
              padding: '2.5rem 2.25rem',
              boxShadow: 'var(--shadow-subtle)',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="about-split-grid"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.25rem 0.65rem', backgroundColor: 'rgba(201, 59, 43, 0.08)', color: 'var(--accent-red)', borderRadius: '2px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  VOLUME 05 // IN DEVELOPMENT
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>
                  MANUSCRIPT DRAFTING STAGE
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.65rem, 3vw, 2.35rem)',
                  color: 'var(--text-ink)',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                  fontWeight: 700,
                }}
              >
                The Architecture of Unhurried Mastery
              </h3>

              <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-deep-blue)', marginBottom: '1.25rem' }}>
                “How to engineer enduring clarity, wealth stewardship, and personal peace in an accelerating world.”
              </p>

              <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Building upon 25+ years of engineering and enterprise leadership, this upcoming volume synthesizes the practical methodologies for stepping off the treadmill of reactive urgency, building durable personal sovereignty, and cultivating sanctuaries that outlast market cycles.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-deep-blue)' }}>
                  <CheckCircle2 size={14} color="var(--accent-red)" />
                  <span>The First-Principles Framework of High-Leverage Decisions</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-deep-blue)' }}>
                  <CheckCircle2 size={14} color="var(--accent-red)" />
                  <span>Converting Commercial Success into Generational Peace</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-deep-blue)' }}>
                  <CheckCircle2 size={14} color="var(--accent-red)" />
                  <span>Architectural Principles of Sanctuaries & Living Well</span>
                </div>
              </div>

              <a
                href="mailto:books@wildmac.com?subject=Register%20Interest%20in%20The%20Architecture%20of%20Unhurried%20Mastery"
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.65rem', fontSize: '0.88rem' }}
              >
                <Mail size={14} />
                <span>Register for Advance Manuscript Notice</span>
              </a>
            </div>

            {/* Right Still Life Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  padding: '0.75rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-book)',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '4/3.2', overflow: 'hidden', borderRadius: '1px' }}>
                  <img
                    src="/images/author-workspace.jpg"
                    alt="Manuscript development at writing desk"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(17, 24, 32, 0.88)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '2px',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    WM // FORTHCOMING MANUSCRIPT
                  </div>
                </div>
              </div>
            </div>
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
