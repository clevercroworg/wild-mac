'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, FileText, CheckCircle } from 'lucide-react';
import { resourcesData as fallbackResources } from '@/data/resources';

export default function KnowledgeResources() {
  const [resources, setResources] = useState(fallbackResources.slice(0, 3));

  useEffect(() => {
    fetch('/api/resources')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.resources?.length > 0) {
          setResources(data.resources.slice(0, 3));
        }
      })
      .catch(() => {});
  }, []);

  const featuredResources = resources;
  const resourceImages = [
    '/images/service-business.jpg',
    '/images/author-workspace.jpg',
    '/images/service-branding.jpg'
  ];

  return (
    <section id="resources" className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="editorial-stamp">KNOWLEDGE RESOURCES</span>
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
              Practical Resources for Your Growth Journey.
            </h2>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.6 }}>
              Access useful guides, checklists, educational materials and downloadable frameworks created to support better planning and decision-making.
            </p>
          </div>

          <Link href="/resources" className="editorial-link" style={{ fontSize: '0.92rem' }}>
            <span>Explore All Resources</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* -------------------------------------------------------------
            DESKTOP VIEW (> 768px): 3-Column Resource Cards Grid
            ------------------------------------------------------------- */}
        <div className="resources-desktop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem' }}>
          {featuredResources.map((resource, index) => (
            <div
              key={resource.id}
              className="card-interactive"
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
              <div style={{ position: 'relative', width: '100%', height: '160px', overflow: 'hidden' }}>
                <img
                  src={resourceImages[index % resourceImages.length]}
                  alt={resource.title}
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
                  {resource.category}
                </div>
              </div>

              <div style={{ padding: '1.75rem 1.75rem 1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
                      {resource.format}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                      {resource.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 650, color: 'var(--text-ink)', lineHeight: 1.25, marginBottom: '0.65rem' }}>
                    {resource.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {resource.description}
                  </p>

                  {/* Key Takeaways */}
                  <div style={{ backgroundColor: 'var(--bg-paper-white)', padding: '0.85rem 1rem', borderRadius: '2px', marginBottom: '1.25rem' }}>
                    <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      INCLUDED TOOLS:
                    </span>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {resource.keyTakeaways.map((item, idx) => (
                        <li key={idx} style={{ fontSize: '0.78rem', color: 'var(--text-deep-blue)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-red)', borderRadius: '50%', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                    {resource.fileSize} · Free
                  </span>
                  <a
                    href="/consultation"
                    className="btn btn-editorial"
                    style={{ padding: '0.5rem 0.95rem', fontSize: '0.78rem', gap: '0.4rem' }}
                  >
                    <Download size={12} color="var(--accent-red)" />
                    <span>Access Resource</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* -------------------------------------------------------------
            MOBILE VIEW (<= 768px): Horizontal Swipe Carousel
            ------------------------------------------------------------- */}
        <div className="resources-mobile-carousel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              SWIPE RESOURCES (→)
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
              3 Frameworks
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              overflowX: 'auto',
              paddingBottom: '0.75rem',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
            }}
          >
            {featuredResources.map((resource, index) => (
              <div
                key={resource.id}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  width: '280px',
                  minWidth: '280px',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                {/* Header Image */}
                <div style={{ position: 'relative', width: '100%', height: '120px', overflow: 'hidden' }}>
                  <img
                    src={resourceImages[index % resourceImages.length]}
                    alt={resource.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      left: '0.5rem',
                      backgroundColor: 'rgba(17, 24, 32, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '2px',
                      fontSize: '0.62rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {resource.category}
                  </div>
                </div>

                <div style={{ padding: '1rem 1rem 0.85rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.25rem' }}>
                      {resource.format} • {resource.readTime}
                    </span>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 650, color: 'var(--text-ink)', lineHeight: 1.25, marginBottom: '0.35rem' }}>
                      {resource.title}
                    </h3>

                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                      {resource.description.slice(0, 95)}...
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem', marginTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                      Free Download
                    </span>
                    <a
                      href="/consultation"
                      style={{ fontSize: '0.75rem', color: 'var(--accent-red)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}
                    >
                      <Download size={11} />
                      <span>Access</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .resources-desktop-grid {
          display: grid;
        }
        .resources-mobile-carousel {
          display: none;
        }

        @media (max-width: 768px) {
          .resources-desktop-grid {
            display: none !important;
          }
          .resources-mobile-carousel {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
