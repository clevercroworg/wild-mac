import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { getBlogBySlug, getAllBlogs } from '@/lib/db';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getBlogBySlug(slug);
  if (!article) return { title: 'Essay Not Found — Wildmac Insights' };

  return {
    title: `${article.title} — Wildmac Insights`,
    description: article.excerpt || article.subtitle,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = await getBlogBySlug(slug);

  if (!article || (!article.isPublished && process.env.NODE_ENV === 'production')) {
    notFound();
  }

  const allArticles = await getAllBlogs({ includeDrafts: false });
  const otherArticles = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <section className="section-py-lg" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-reading">
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/blog" className="editorial-link" style={{ fontSize: '0.85rem' }}>
              <ArrowLeft size={14} />
              <span>Back to Insights Archive</span>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span className="editorial-stamp">{article.category}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>•</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>{article.readTime}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>•</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>{article.date}</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 700, color: 'var(--text-ink)', lineHeight: '1.12', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            {article.title}
          </h1>

          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-deep-blue)', lineHeight: '1.6' }}>
            {article.subtitle}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="section-py-lg" style={{ backgroundColor: 'var(--bg-paper-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-reading">
          {/* Pull Quote */}
          <div style={{ padding: '1.75rem 2rem', backgroundColor: 'var(--bg-pure-white)', borderLeft: '3px solid var(--accent-red)', marginBottom: '3rem', boxShadow: 'var(--shadow-subtle)', borderRadius: '0 2px 2px 0' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-ink)', margin: 0, lineHeight: '1.6' }}>
              “{article.quote}”
            </p>
          </div>

          {/* Main Content Render */}
          <div style={{ fontSize: '1.1rem', lineHeight: '1.85', color: 'var(--text-deep-blue)' }}>
            <p style={{ marginBottom: '1.75rem', fontSize: '1.18rem', color: 'var(--text-ink)', fontWeight: 500, lineHeight: '1.7' }}>
              {article.excerpt}
            </p>

            <div style={{ fontFamily: 'var(--font-sans)' }}>
              {article.content.split('\n\n').map((block, idx) => {
                const trimmed = block.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith('### ')) {
                  return (
                    <h3
                      key={idx}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.65rem',
                        fontWeight: 650,
                        color: 'var(--text-ink)',
                        marginTop: '3rem',
                        marginBottom: '1.25rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }

                if (trimmed.startsWith('## ')) {
                  return (
                    <h2
                      key={idx}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'var(--text-ink)',
                        marginTop: '3.5rem',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }

                if (trimmed.startsWith('> ')) {
                  return (
                    <div
                      key={idx}
                      style={{
                        padding: '1.5rem 1.75rem',
                        backgroundColor: 'var(--bg-ice-blue)',
                        borderLeft: '3px solid var(--accent-red)',
                        margin: '2.5rem 0',
                        borderRadius: '0 2px 2px 0',
                      }}
                    >
                      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--text-ink)', margin: 0, lineHeight: '1.6' }}>
                        {trimmed.replace('> ', '')}
                      </p>
                    </div>
                  );
                }

                return (
                  <p key={idx} style={{ marginBottom: '1.75rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    {trimmed}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Author Footnote Box */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <span className="editorial-stamp">COLOPHON</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: '0.25rem 0 0' }}>
                Published by Wildmac Insights Editorial.
              </p>
            </div>

            <Link href="/blog" className="editorial-link">
              <span>More Essays & Insights</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </article>

      {/* Companion Articles */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
            <span className="editorial-stamp">COMPANION ESSAYS</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 700, color: 'var(--text-ink)', marginTop: '0.5rem' }}>
              Continue Exploring
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {otherArticles.map((rel) => (
              <div
                key={rel.slug}
                style={{
                  backgroundColor: 'var(--bg-paper-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-red)', fontWeight: 600, textTransform: 'uppercase' }}>{rel.category}</span>
                    <span style={{ color: 'var(--text-light)' }}>{rel.readTime}</span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                    <Link href={`/blog/${rel.slug}`} style={{ color: 'inherit' }}>
                      {rel.title}
                    </Link>
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {rel.excerpt}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{rel.date}</span>
                  <Link href={`/blog/${rel.slug}`} className="editorial-link" style={{ fontSize: '0.82rem' }}>
                    <span>Read Essay</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Consultation CTA */}
      <MajorConsultationCTA />
    </>
  );
}
