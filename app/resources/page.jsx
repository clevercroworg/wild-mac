import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, FileText, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { getAllResources } from '@/lib/db';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export const metadata = {
  title: 'Knowledge Resources & Frameworks — Wildmac',
  description: 'Downloadable frameworks, strategy guides, worksheets, and checklists created by Rodney Almeida to support purposeful planning and confident decision-making.',
};

export const revalidate = 60;

export default async function ResourcesPage() {
  const resourcesData = await getAllResources();
  const resourceImages = [
    '/images/service-business.jpg',
    '/images/author-workspace.jpg',
    '/images/service-branding.jpg',
    '/images/service-realestate.jpg',
  ];

  return (
    <>
      {/* ===================================================================
          01 — HERO SECTION
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          paddingTop: '4rem',
          paddingBottom: '3.5rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">KNOWLEDGE RESOURCES & FRAMEWORKS</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                letterSpacing: '-0.025em',
                fontWeight: 700,
              }}
            >
              Practical Frameworks for Your Growth Journey.
            </h1>

            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.25rem' }} />

            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Access practical decision guides, worksheets, and strategic frameworks developed from 25+ years of engineering and enterprise leadership.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 0.95rem', backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--border-medium)', borderRadius: '2px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)' }}>
              <ShieldCheck size={15} color="var(--accent-red)" />
              <span>FREE OPEN-ACCESS STRATEGIC DOWNLOADS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — RESOURCES CATALOG GRID
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {resourcesData.map((resource, index) => {
              const imageSrc = resourceImages[index % resourceImages.length];
              return (
                <div
                  key={resource.id}
                  className="card-interactive"
                  style={{
                    backgroundColor: 'var(--bg-paper-white)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Thumbnail Image */}
                  <div style={{ position: 'relative', height: '180px', width: '100%', overflow: 'hidden' }}>
                    <img
                      src={imageSrc}
                      alt={resource.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: 'rgba(17, 24, 32, 0.88)',
                        backdropFilter: 'blur(6px)',
                        color: '#FFFFFF',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '2px',
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {resource.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.75rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', display: 'block', marginBottom: '0.35rem' }}>
                        {resource.type} · {resource.fileSize}
                      </span>

                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-ink)', margin: '0 0 0.65rem 0', fontWeight: 650, lineHeight: 1.25 }}>
                        {resource.title}
                      </h3>

                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                        {resource.description}
                      </p>

                      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                          KEY TAKEAWAYS
                        </span>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {resource.keyTakeaways.map((point, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-deep-blue)' }}>
                              <CheckCircle2 size={13} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Download CTA Button */}
                    {resource.downloadUrl && resource.downloadUrl !== '#' ? (
                      <a
                        href={resource.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '0.75rem', fontSize: '0.84rem', justifyContent: 'center' }}
                      >
                        <Download size={13} />
                        <span>Download Framework ({resource.format || 'PDF'})</span>
                      </a>
                    ) : (
                      <a
                        href={`mailto:contactmacalmeida@gmail.com?subject=Request%20Framework:%20${encodeURIComponent(resource.title)}`}
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '0.75rem', fontSize: '0.84rem', justifyContent: 'center' }}
                      >
                        <Download size={13} />
                        <span>Request Framework (PDF)</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MajorConsultationCTA />
    </>
  );
}
