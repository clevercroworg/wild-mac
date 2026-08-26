import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { journalArticles } from '@/data/journal';
import EditorialQuote from '@/components/EditorialQuote';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'Wild Mac Journal — Essays & Reflections',
  description: 'Notes on living, building, learning, and becoming. Thoughtful essays across life, purpose, money, business, and perspective by Wild Mac.',
};

export default function BlogPage() {
  const featuredArticle = journalArticles[0];
  const allArticles = journalArticles;

  return (
    <>
      {/* ===================================================================
          HERO TYPE A: JOURNAL — "THE WILD MAC JOURNAL" (MAGAZINE FRONT PAGE)
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '4rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            {/* Left: Magazine Heading */}
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span className="editorial-stamp" style={{ letterSpacing: '0.15em' }}>
                  WM / THE JOURNAL // ESSAYS & DISPATCHES
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
                  EDITION 2026.04
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
                Notes on living,<br />
                building, learning,<br />
                and becoming.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--text-deep-blue)', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                Long-form reflections, strategic perspectives, and private notebooks on what it means to live deliberately.
              </p>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2.25rem' }}>
                Each essay is written as an unhurried inquiry into the quiet mechanics of human clarity, ambition, and inner peace.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href={`/blog/${featuredArticle.slug}`} className="btn btn-primary" style={{ padding: '0.9rem 1.85rem' }}>
                  <span>Read Featured Dispatch</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="#archive" className="editorial-link">
                  <span>Browse the Archive</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: Featured Article Spotlight Card */}
            <div style={{ position: 'relative' }}>
              <div
                className="editorial-card-pad"
                style={{
                  backgroundColor: 'var(--bg-ice-blue)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="editorial-stamp">FEATURED ESSAY</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.85rem', lineHeight: '1.2', marginBottom: '1rem' }}>
                  <Link href={`/blog/${featuredArticle.slug}`} style={{ color: 'var(--text-ink)' }}>
                    {featuredArticle.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '1rem', color: 'var(--text-deep-blue)', lineHeight: '1.7', marginBottom: '2rem' }}>
                  {featuredArticle.excerpt}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem', color: 'var(--text-light)' }}>
                  <span>Published on {featuredArticle.date}</span>
                  <Link href={`/blog/${featuredArticle.slug}`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                    <span>Read Essay</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          ALL JOURNAL ARTICLES ARCHIVE
          =================================================================== */}
      <section id="archive" className="section-py-lg" style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-pure-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span className="editorial-stamp" style={{ marginBottom: '0.75rem' }}>THE CHRONOLOGICAL CATALOG</span>
            <h2 style={{ color: 'var(--text-ink)', marginBottom: '1rem' }}>
              The Archive
            </h2>
            <p className="lead">
              Unordered thoughts, published essays, and field notes organized across five central inquiries.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {allArticles.map((article) => (
              <div
                key={article.slug}
                className="editorial-card-pad-md"
                style={{
                  backgroundColor: 'var(--bg-paper-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-red)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {article.category}
                    </span>
                    <span style={{ color: 'var(--text-light)' }}>{article.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', lineHeight: '1.25' }}>
                    <Link href={`/blog/${article.slug}`} style={{ color: 'var(--text-ink)', textDecoration: 'none' }}>
                      {article.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                    {article.excerpt}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-light)' }}>{article.date}</span>
                  <Link href={`/blog/${article.slug}`} className="editorial-link" style={{ fontSize: '0.82rem' }}>
                    <span>Read Full Essay</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <EditorialQuote
        quote="We write not to impress the world, but to give form to the things that would otherwise remain silent inside us."
        attribution="Wild Mac"
        subtitle="THE ESSAYIST’S CRAFT"
      />

      <Newsletter />
    </>
  );
}
