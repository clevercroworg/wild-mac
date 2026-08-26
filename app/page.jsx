import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { journalArticles } from '@/data/journal';
import WildmacHero from '@/components/WildmacHero';
import AboutWildmac from '@/components/AboutWildmac';
import ServicesContinuum from '@/components/ServicesContinuum';
import WhoWeHelp from '@/components/WhoWeHelp';
import WhyWildmac from '@/components/WhyWildmac';
import HowWildmacWorks from '@/components/HowWildmacWorks';
import FeaturedBooksSection from '@/components/FeaturedBooksSection';
import FounderCredibility from '@/components/FounderCredibility';
import KnowledgeResources from '@/components/KnowledgeResources';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';
import ConnectWildmac from '@/components/ConnectWildmac';

export const metadata = {
  title: 'WILDMAC — Build with Purpose. Grow with Strategy.',
  description: 'Wildmac provides practical coaching, strategic guidance and knowledge-driven solutions to help individuals, professionals and businesses make confident decisions and achieve meaningful growth.',
};

export default function HomePage() {
  const featuredArticle = journalArticles[0];
  const recentArticles = journalArticles.slice(1, 3);

  return (
    <>
      {/* ===================================================================
          01 — HERO: PRIMARY PLATFORM STATEMENT
          =================================================================== */}
      <WildmacHero />

      {/* ===================================================================
          02 — ABOUT WILDMAC (PURPOSE → CLARITY → STRATEGY → ACTION)
          =================================================================== */}
      <AboutWildmac />

      {/* ===================================================================
          03 — WHAT WE DO: INTERACTIVE EDITORIAL SERVICE INDEX
          =================================================================== */}
      <ServicesContinuum />

      {/* ===================================================================
          04 — WHO WE HELP: 6 LARGE AUDIENCE PILLARS
          =================================================================== */}
      <WhoWeHelp />

      {/* ===================================================================
          05 — WHY WILDMAC: EXPERIENCE-LED GUIDANCE (DEEP NAVY CONTRAST)
          =================================================================== */}
      <WhyWildmac />

      {/* ===================================================================
          06 — OUR APPROACH: 5-STAGE PROGRESSION PROCESS
          =================================================================== */}
      <HowWildmacWorks />

      {/* ===================================================================
          07 — BOOKS & IDEAS: 4-VOLUME PUBLICATION CATALOG (PALE BLUE)
          =================================================================== */}
      <FeaturedBooksSection />

      {/* ===================================================================
          08 — THE VISION BEHIND WILDMAC: FOUNDER CREDIBILITY (RODNEY ALMEIDA)
          =================================================================== */}
      <FounderCredibility />

      {/* ===================================================================
          09 — WILDMAC INSIGHTS: IDEAS TO HELP YOU THINK, DECIDE AND GROW
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="reveal-on-scroll" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ marginBottom: '0.75rem' }}>
                <span className="editorial-stamp">WILDMAC INSIGHTS</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  color: 'var(--text-ink)',
                  lineHeight: 1.15,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Ideas to Help You Think, Decide and Grow.
              </h2>
              <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.6 }}>
                Explore practical perspectives on business, personal growth, financial literacy, real estate, investment education, branding and digital marketing.
              </p>
            </div>

            <Link href="/blog" className="editorial-link" style={{ fontSize: '0.92rem' }}>
              <span>View All Articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Balanced 2-Column Magazine Hierarchy with Editorial Photography */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '2.5rem', alignItems: 'stretch' }} className="insights-split-grid">
            {/* Left Column: Large Featured Article with Hero Photograph */}
            <div
              style={{
                backgroundColor: 'var(--bg-ice-blue)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              {/* Featured Article Image */}
              <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/community-gathering.jpg"
                  alt={featuredArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(17, 24, 32, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '2px',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                  }}
                >
                  FEATURED ESSAY // {featuredArticle.category}
                </div>
              </div>

              <div style={{ padding: '2.25rem 2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: '1.75rem', lineHeight: '1.22', marginBottom: '1rem' }}>
                    <Link href={`/blog/${featuredArticle.slug}`} style={{ color: 'var(--text-ink)' }}>
                      {featuredArticle.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '1.02rem', color: 'var(--text-deep-blue)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-light)' }}>By Wildmac Editorial</span>
                  <Link href={`/blog/${featuredArticle.slug}`} className="editorial-link" style={{ fontSize: '0.85rem' }}>
                    <span>Read Complete Essay</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: 2 Companion Articles with Thumbnail Photographs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', justifyContent: 'space-between' }}>
              {recentArticles.map((article, idx) => {
                const articleThumb = idx === 0 ? '/images/service-business.jpg' : '/images/service-investment.jpg';
                return (
                  <div
                    key={article.slug}
                    style={{
                      backgroundColor: 'var(--bg-paper-white)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      alignItems: 'stretch',
                      flex: 1,
                    }}
                    className="companion-article-card"
                  >
                    {/* Thumbnail Image */}
                    <div style={{ position: 'relative', width: '100%', minHeight: '140px' }}>
                      <img
                        src={articleThumb}
                        alt={article.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ padding: '1.5rem 1.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.72rem' }}>
                          <span style={{ color: 'var(--accent-red)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                            {article.category}
                          </span>
                          <span style={{ color: 'var(--text-light)' }}>{article.readTime}</span>
                        </div>

                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                          <Link href={`/blog/${article.slug}`} style={{ color: 'var(--text-ink)', textDecoration: 'none' }}>
                            {article.title}
                          </Link>
                        </h4>

                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                          {article.excerpt.slice(0, 110)}...
                        </p>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.78rem', marginTop: '1rem' }}>
                        <span style={{ color: 'var(--text-light)' }}>{article.date}</span>
                        <Link href={`/blog/${article.slug}`} className="editorial-link" style={{ fontSize: '0.78rem' }}>
                          <span>Read Essay</span>
                          <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          10 — KNOWLEDGE RESOURCES: PRACTICAL TOOLS & GUIDES (PALE BLUE)
          =================================================================== */}
      <KnowledgeResources />

      {/* ===================================================================
          11 — MAJOR CONSULTATION TRANSITION (DEEP NAVY HIGH CONTRAST)
          =================================================================== */}
      <MajorConsultationCTA />

      {/* ===================================================================
          12 — CONNECT WITH WILDMAC: 2-COLUMN INQUIRY & CONTACT DISPATCH
          =================================================================== */}
      <ConnectWildmac />
    </>
  );
}
