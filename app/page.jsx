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
          02 — THE VISION BEHIND WILDMAC: FOUNDER CREDIBILITY (RODNEY DE ALMEIDA)
          =================================================================== */}
      <FounderCredibility />

      {/* ===================================================================
          03 — ABOUT WILDMAC (PURPOSE → CLARITY → STRATEGY → ACTION)
          =================================================================== */}
      <AboutWildmac />

      {/* ===================================================================
          04 — WHAT WE DO: INTERACTIVE EDITORIAL SERVICE INDEX
          =================================================================== */}
      <ServicesContinuum />

      {/* ===================================================================
          05 — WHO WE HELP: 6 LARGE AUDIENCE PILLARS
          =================================================================== */}
      <WhoWeHelp />

      {/* ===================================================================
          06 — WHY WILDMAC: EXPERIENCE-LED GUIDANCE (DEEP NAVY CONTRAST)
          =================================================================== */}
      <WhyWildmac />

      {/* ===================================================================
          07 — OUR APPROACH: 5-STAGE PROGRESSION PROCESS
          =================================================================== */}
      <HowWildmacWorks />

      {/* ===================================================================
          08 — BOOKS & IDEAS: 4-VOLUME PUBLICATION CATALOG (PALE BLUE)
          =================================================================== */}
      <FeaturedBooksSection />

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
          <div className="insights-split-grid">
            {/* Left Column: Large Featured Article with Hero Photograph */}
            <div className="insights-featured-card card-interactive">
              {/* Featured Article Image */}
              <div className="insights-featured-img">
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

              <div className="insights-featured-body">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', fontSize: '0.75rem', color: 'var(--text-light)' }}>
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.7rem)', lineHeight: 1.24, marginBottom: '0.75rem' }}>
                    <Link href={`/blog/${featuredArticle.slug}`} style={{ color: 'var(--text-ink)' }}>
                      {featuredArticle.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.94rem', color: 'var(--text-deep-blue)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-light)' }}>By Wildmac Editorial</span>
                  <Link href={`/blog/${featuredArticle.slug}`} className="editorial-link" style={{ fontSize: '0.82rem' }}>
                    <span>Read Complete Essay</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: 2 Companion Articles with Thumbnail Photographs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'space-between' }}>
              {recentArticles.map((article, idx) => {
                const articleThumb = idx === 0 ? '/images/service-business.jpg' : '/images/service-investment.jpg';
                return (
                  <div
                    key={article.slug}
                    className="companion-article-card card-interactive"
                  >
                    {/* Thumbnail Image */}
                    <div className="companion-article-img">
                      <img
                        src={articleThumb}
                        alt={article.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/* Content */}
                    <div className="companion-article-body">
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem', fontSize: '0.7rem' }}>
                          <span style={{ color: 'var(--accent-red)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                            {article.category}
                          </span>
                          <span style={{ color: 'var(--text-light)' }}>{article.readTime}</span>
                        </div>

                        <h4 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                          <Link href={`/blog/${article.slug}`} style={{ color: 'var(--text-ink)', textDecoration: 'none' }}>
                            {article.title}
                          </Link>
                        </h4>

                        <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                          {article.excerpt.slice(0, 95)}...
                        </p>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.65rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                        <span style={{ color: 'var(--text-light)' }}>{article.date}</span>
                        <Link href={`/blog/${article.slug}`} className="editorial-link" style={{ fontSize: '0.75rem' }}>
                          <span>Read</span>
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
