import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { getAllBlogs } from '@/lib/db';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'Wildmac Insights — Ideas to Help You Think, Decide and Grow',
  description: 'Practical perspectives, strategic frameworks, and reflective essays across business, personal growth, real estate, investment education, and branding.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
  const allArticles = await getAllBlogs({ includeDrafts: false });
  const featuredArticle = allArticles.find((a) => a.isFeatured) || allArticles[0] || {
    slug: 'on-the-architecture-of-unhurried-time',
    title: 'On the Architecture of Unhurried Time',
    category: 'Life',
    date: 'October 14, 2024',
    readTime: '6 min read',
    excerpt: 'Most people do not suffer from a lack of time; they suffer from a fragmentation of attention.',
    coverImage: '/images/community-gathering.jpg',
  };

  const articleImages = [
    '/images/community-gathering.jpg',
    '/images/service-business.jpg',
    '/images/service-investment.jpg',
    '/images/service-life.jpg',
    '/images/service-branding.jpg',
  ];

  return (
    <>
      {/* ===================================================================
          01 — BLOG HERO: WILDMAC INSIGHTS
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          minHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            {/* Left: Magazine Heading */}
            <div style={{ maxWidth: '620px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span className="editorial-stamp">WILDMAC INSIGHTS // WRITTEN ARCHIVE</span>
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
                Ideas to Help You Think, Decide and Grow.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <p className="lead" style={{ fontSize: '1.18rem', color: 'var(--text-deep-blue)', marginBottom: '1.25rem', lineHeight: 1.65 }}>
                Practical perspectives on business operations, personal sovereignty, property strategy, investment education, and digital brand positioning.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href={`/blog/${featuredArticle.slug}`} className="btn btn-primary" style={{ padding: '0.9rem 1.85rem' }}>
                  <span>Read Featured Essay</span>
                  <ArrowRight size={14} />
                </Link>
                <a href="#archive" className="editorial-link">
                  <span>Browse All Articles</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right: Featured Article Spotlight Card with Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-subtle)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <img
                    src="/images/community-gathering.jpg"
                    alt={featuredArticle.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      backgroundColor: 'rgba(17, 24, 32, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '2px',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    FEATURED ESSAY // {featuredArticle.category}
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                    <span>{featuredArticle.date}</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 650, color: 'var(--text-ink)', lineHeight: 1.25, marginBottom: '0.75rem' }}>
                    <Link href={`/blog/${featuredArticle.slug}`} style={{ color: 'inherit' }}>
                      {featuredArticle.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {featuredArticle.excerpt}
                  </p>

                  <Link href={`/blog/${featuredArticle.slug}`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                    <span>Read Complete Essay</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — ALL ARTICLES ARCHIVE GRID
          =================================================================== */}
      <section id="archive" className="section-py-lg" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">THE COMPLETE ARCHIVE</span>
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
              Perspectives Across Disciplines.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65 }}>
              Explore essays, frameworks, and practical inquiries organized by category.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {allArticles.map((article, index) => (
              <div
                key={article.slug}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                {/* Header Image */}
                <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                  <img
                    src={article.coverImage || articleImages[index % articleImages.length]}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(17, 24, 32, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '2px',
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {article.category}
                  </div>
                </div>

                <div style={{ padding: '1.75rem 1.75rem 1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', fontSize: '0.75rem', color: 'var(--text-light)' }}>
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', lineHeight: 1.25, marginBottom: '0.65rem' }}>
                      <Link href={`/blog/${article.slug}`} style={{ color: 'inherit' }}>
                        {article.title}
                      </Link>
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                      {article.excerpt}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                      By Wildmac Editorial
                    </span>
                    <Link href={`/blog/${article.slug}`} className="editorial-link" style={{ fontSize: '0.82rem' }}>
                      <span>Read Essay</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
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
