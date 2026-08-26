import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Calendar, Share2 } from 'lucide-react';
import { journalArticles, getArticleBySlug } from '@/data/journal';
import EditorialQuote from '@/components/EditorialQuote';
import Newsletter from '@/components/Newsletter';

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Essay Not Found' };

  return {
    title: `${article.title} — Wild Mac Journal`,
    description: article.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherArticles = journalArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-mist)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-reading">
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/blog" className="editorial-link" style={{ fontSize: '0.85rem' }}>
              <ArrowLeft size={14} />
              <span>Back to Journal Archive</span>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span className="editorial-stamp">{article.category}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>•</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>{article.readTime}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>•</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>{article.date}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', color: 'var(--text-ink)', lineHeight: '1.14', marginBottom: '1.5rem' }}>
            {article.title}
          </h1>

          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--text-navy)', lineHeight: '1.6' }}>
            {article.subtitle}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="section-py-lg" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-reading">
          {/* Pull Quote */}
          <div style={{ padding: '2rem 2.25rem', backgroundColor: 'var(--bg-paper)', borderLeft: '3px solid var(--accent-red)', marginBottom: '3rem', boxShadow: 'var(--shadow-subtle)' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-navy)', margin: 0, lineHeight: '1.65' }}>
              “{article.quote}”
            </p>
          </div>

          {/* Main Content Render */}
          <div style={{ fontSize: '1.125rem', lineHeight: '1.85', color: 'var(--text-navy)' }}>
            <p style={{ marginBottom: '1.75rem', fontSize: '1.2rem', color: 'var(--text-ink)', fontWeight: 400 }}>
              {article.excerpt}
            </p>

            <div
              style={{
                fontFamily: 'var(--font-sans)',
              }}
            >
              {article.content.split('\n\n').map((block, idx) => {
                const trimmed = block.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith('### ')) {
                  return (
                    <h3
                      key={idx}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.85rem',
                        color: 'var(--text-ink)',
                        marginTop: '3rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }

                if (trimmed.startsWith('> ')) {
                  return (
                    <blockquote
                      key={idx}
                      style={{
                        padding: '1.5rem 2rem',
                        backgroundColor: 'var(--bg-mist)',
                        borderLeft: '2px solid var(--text-navy)',
                        margin: '2.5rem 0',
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '1.2rem',
                        color: 'var(--text-navy)',
                      }}
                    >
                      {trimmed.replace('> ', '').replace(/"/g, '')}
                    </blockquote>
                  );
                }

                return (
                  <p key={idx} style={{ marginBottom: '1.75rem', lineHeight: '1.85', color: 'var(--text-muted)' }}>
                    {trimmed}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Colophon & Author Box */}
          <div style={{ marginTop: '4.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src="/images/author-portrait.jpg"
                alt="Wild Mac"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-ink)' }}>
                Written by Wild Mac
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, marginTop: '0.25rem' }}>
                Author and advisor. Exploring questions of life, purpose, financial awareness, and deliberate living.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Further Reading */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-mist)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="editorial-stamp" style={{ marginBottom: '0.5rem' }}>CONTINUE READING</span>
              <h2 style={{ color: 'var(--text-ink)' }}>Further Journal Entries</h2>
            </div>
            <Link href="/blog" className="editorial-link">
              <span>View All Dispatches</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {otherArticles.map((other) => (
              <div
                key={other.slug}
                style={{
                  backgroundColor: 'var(--bg-paper)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2rem',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-red)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {other.category}
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  <Link href={`/blog/${other.slug}`} style={{ color: 'var(--text-ink)' }}>
                    {other.title}
                  </Link>
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {other.excerpt}
                </p>
                <Link href={`/blog/${other.slug}`} className="editorial-link" style={{ fontSize: '0.82rem' }}>
                  <span>Read Article</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
