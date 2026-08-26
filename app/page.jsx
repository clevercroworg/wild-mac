import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { booksData, getFeaturedBook } from '@/data/books';
import { journalArticles } from '@/data/journal';
import BookCover3D from '@/components/BookCover3D';
import EditorialQuote from '@/components/EditorialQuote';
import Newsletter from '@/components/Newsletter';
import IdeasExplorer from '@/components/IdeasExplorer';
import ServicesContinuum from '@/components/ServicesContinuum';
import EditorialBookshelf from '@/components/EditorialBookshelf';
import VisualEssay from '@/components/VisualEssay';
import FromTheDesk from '@/components/FromTheDesk';
import DefinitiveHomepageHero from '@/components/DefinitiveHomepageHero';

export default function HomePage() {
  const featuredBook = getFeaturedBook();
  const featuredArticle = journalArticles[0];
  const recentArticles = journalArticles.slice(1, 3); // 2 articles on right to balance heights perfectly

  return (
    <>
      {/* ===================================================================
          01 — DEFINITIVE HOMEPAGE HERO (EDITORIAL PHYSICAL BOOK STILL LIFE)
          =================================================================== */}
      <DefinitiveHomepageHero />

      {/* ===================================================================
          02 — FOUNDER SPREAD UPGRADE
          =================================================================== */}
      <EditorialQuote
        quote="Life is precious and beautiful. Make the best use of life."
        attribution="Founder, Wild Mac"
        subtitle="WM / FOUNDER'S NOTE"
      />

      {/* ===================================================================
          03 — THE WILD MAC PHILOSOPHY (2-COLUMN EDITORIAL SPREAD)
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="two-col-grid">
            {/* Left Column: Label */}
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <span className="editorial-stamp">WM / 01 // PHILOSOPHY</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', color: 'var(--text-ink)', lineHeight: '1.16' }}>
                A body of work<br />shaped by experience.
              </h2>
              <div style={{ width: '3rem', height: '2px', backgroundColor: 'var(--accent-red)', marginTop: '2rem' }} />
            </div>

            {/* Right Column: Narrative Copy */}
            <div style={{ maxWidth: '620px' }}>
              <p className="lead" style={{ marginBottom: '1.5rem', color: 'var(--text-deep-blue)' }}>
                Wild Mac brings together the author's writing, reflections, and practical perspectives across life, purpose, money, business, and personal clarity.
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                We believe that the most enduring insights are carved from the lived discipline of confronting essential human questions: How do we allocate our finite years? How do we build financial sovereignty without sacrificing peace of mind? And how do we maintain high ambition while remaining deeply grounded?
              </p>
              <p style={{ marginBottom: '2.5rem', lineHeight: '1.8' }}>
                Through published works under Wild Mac Press and focused advisory sessions, we offer an unhurried, thoughtful space for individuals seeking to live and build deliberately.
              </p>
              <Link href="/about" className="editorial-link">
                <span>Read the complete author biography</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          04 — FEATURED HERO WORK (A LETTER TO MY DAUGHTER)
          =================================================================== */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-mist-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="book-featured-grid">
            {/* Left: Dominant Physical Book Cover */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ maxWidth: '340px', width: '100%' }}>
                <BookCover3D book={featuredBook} isLarge={true} />
              </div>
            </div>

            {/* Right: Book Details & Context */}
            <div style={{ maxWidth: '580px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span className="editorial-stamp">WM / FEATURED WORK</span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-sans)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {featuredBook.category}
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 4vw, 3.2rem)', fontWeight: 600, color: 'var(--text-ink)', lineHeight: '1.15', marginBottom: '0.75rem' }}>
                {featuredBook.title}
              </h2>

              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-deep-blue)', marginBottom: '1.5rem' }}>
                {featuredBook.subtitle}
              </p>

              <p style={{ marginBottom: '1.75rem', lineHeight: '1.75', fontSize: '1.05rem' }}>
                {featuredBook.synopsis}
              </p>

              <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-pure-white)', borderLeft: '3px solid var(--accent-red)', marginBottom: '2.25rem', borderRadius: '0 2px 2px 0' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--text-ink)', fontSize: '1.05rem', margin: 0, lineHeight: '1.6' }}>
                  “{featuredBook.quote}”
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <a
                  href={featuredBook.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-amazon"
                  style={{ gap: '0.6rem' }}
                >
                  <span>Read on Amazon</span>
                  <ArrowUpRight size={15} />
                </a>
                <Link href={`/books/${featuredBook.slug}`} className="btn btn-secondary">
                  <span>Explore the Book</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          05 — THE BOOKSHELF (HIERARCHICAL LIBRARY PREVIEW)
          =================================================================== */}
      <EditorialBookshelf />

      {/* ===================================================================
          06 — THE IDEAS (INTERACTIVE THEMATIC EXPLORER)
          =================================================================== */}
      <IdeasExplorer />

      {/* ===================================================================
          07 — VISUAL ESSAY MOMENT (PURE TYPOGRAPHY & BALANCED SPACE)
          =================================================================== */}
      <VisualEssay />

      {/* ===================================================================
          08 — SERVICES CONTINUUM (FROM IDEAS TO ACTION)
          =================================================================== */}
      <ServicesContinuum />

      {/* ===================================================================
          09 — FROM THE DESK (AUTHOR ARTIFACT & DISPATCH)
          =================================================================== */}
      <FromTheDesk />

      {/* ===================================================================
          10 — WILD MAC JOURNAL (MAGAZINE CONTENTS SPREAD — BALANCED HEIGHT)
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ marginBottom: '0.75rem' }}>
                <span className="editorial-stamp">WM / 05 // JOURNAL</span>
              </div>
              <h2 style={{ color: 'var(--text-ink)' }}>The Written Archive</h2>
            </div>
            <Link href="/blog" className="editorial-link">
              <span>View All Dispatches</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Balanced 2-Column Magazine Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {/* Left Column: Featured Essay Card with Rich Content */}
            <div
              className="editorial-card-pad-md"
              style={{
                backgroundColor: 'var(--bg-ice-blue)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '2px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span className="editorial-stamp">FEATURED ESSAY</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-red)', fontWeight: 600 }}>
                    {featuredArticle.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{featuredArticle.readTime}</span>
                </div>

                <h3 style={{ fontSize: '1.75rem', lineHeight: '1.22', marginBottom: '1.25rem' }}>
                  <Link href={`/blog/${featuredArticle.slug}`} style={{ color: 'var(--text-ink)' }}>
                    {featuredArticle.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '1.02rem', color: 'var(--text-deep-blue)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                  {featuredArticle.excerpt}
                </p>

                {/* Excerpt Pull-quote Preview */}
                <div style={{ padding: '1.1rem 1.25rem', backgroundColor: 'var(--bg-pure-white)', borderLeft: '2px solid var(--accent-red)', borderRadius: '0 2px 2px 0', marginBottom: '1.75rem' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.98rem', color: 'var(--text-ink)', margin: 0, lineHeight: '1.6' }}>
                    “Unhurried time is not passive indulgence; it is the deliberate discipline of protecting your mental territory from shallow urgency.”
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem', color: 'var(--text-light)', flexWrap: 'wrap', gap: '0.75rem' }}>
                <span>Published on {featuredArticle.date}</span>
                <Link href={`/blog/${featuredArticle.slug}`} className="editorial-link" style={{ fontSize: '0.82rem' }}>
                  <span>Read Complete Essay</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Right Column: 2 Companion Essays with Balanced Proportions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>
              {recentArticles.map((article) => (
                <div
                  key={article.slug}
                  className="editorial-card-pad-md"
                  style={{
                    backgroundColor: 'var(--bg-pure-white)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', fontSize: '0.75rem' }}>
                      <span style={{ color: 'var(--accent-red)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {article.category}
                      </span>
                      <span style={{ color: 'var(--text-light)' }}>{article.readTime}</span>
                    </div>

                    <h4 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: '1.25' }}>
                      <Link href={`/blog/${article.slug}`} style={{ color: 'var(--text-ink)', textDecoration: 'none' }}>
                        {article.title}
                      </Link>
                    </h4>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                      {article.excerpt}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem' }}>
                    <span style={{ color: 'var(--text-light)' }}>{article.date}</span>
                    <Link href={`/blog/${article.slug}`} className="editorial-link" style={{ fontSize: '0.82rem' }}>
                      <span>Read Essay</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          11 — CONSULTATION INVITATION (CLEAN, BALANCED & ELEGANT)
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-narrow" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="editorial-stamp">WM / 06 // CONVERSATION</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', color: 'var(--text-ink)', lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            Some conversations change the direction of a life.
          </h2>

          <p className="lead" style={{ maxWidth: '580px', margin: '0 auto 2.25rem auto', color: 'var(--text-deep-blue)', fontSize: '1.12rem', lineHeight: '1.7' }}>
            For business, life strategy, investment thinking, real estate positioning, or simply a focused dialogue on what comes next.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/consultation" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '0.92rem' }}>
              <span>Book a Consultation</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/services" className="btn btn-secondary" style={{ padding: '0.9rem 1.85rem', fontSize: '0.92rem' }}>
              <span>Explore Advisory Modules</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          12 — NEWSLETTER (LETTERS FROM WILD MAC)
          =================================================================== */}
      <Newsletter />
    </>
  );
}
