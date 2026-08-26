import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, FileText, CheckCircle } from 'lucide-react';
import { resourcesData } from '@/data/resources';

export default function KnowledgeResources() {
  const featuredResources = resourcesData.slice(0, 3);
  const resourceImages = [
    '/images/service-business.jpg',
    '/images/author-workspace.jpg',
    '/images/service-branding.jpg'
  ];

  return (
    <section id="resources" className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
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

          <Link href="/consultation" className="editorial-link" style={{ fontSize: '0.92rem' }}>
            <span>Request Custom Framework</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3 Resources Cards Grid with Header Images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem' }}>
          {featuredResources.map((resource, index) => (
            <div
              key={resource.id}
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
      </div>
    </section>
  );
}
