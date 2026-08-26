import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, FileText, CheckCircle } from 'lucide-react';
import { resourcesData } from '@/data/resources';

export default function KnowledgeResources() {
  const featuredResources = resourcesData.slice(0, 3);

  return (
    <section id="resources" className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
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

        {/* 3 Resources Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem' }}>
          {featuredResources.map((resource) => (
            <div
              key={resource.id}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ color: 'var(--accent-red)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {resource.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
                    {resource.format}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-ink)', lineHeight: 1.25, marginBottom: '0.75rem' }}>
                  {resource.title}
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {resource.description}
                </p>

                {/* Key Takeaways */}
                <div style={{ backgroundColor: 'var(--bg-paper-white)', padding: '1rem', borderRadius: '2px', marginBottom: '1.75rem' }}>
                  <span style={{ display: 'block', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    INCLUDED TOOLS:
                  </span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {resource.keyTakeaways.map((item, idx) => (
                      <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--text-deep-blue)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                  {resource.fileSize} · Free Resource
                </span>
                <a
                  href="/consultation"
                  className="btn btn-editorial"
                  style={{ padding: '0.55rem 1rem', fontSize: '0.8rem', gap: '0.45rem' }}
                >
                  <Download size={13} color="var(--accent-red)" />
                  <span>Access Resource</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
