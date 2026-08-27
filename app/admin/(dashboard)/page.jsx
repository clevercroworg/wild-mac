'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FileText,
  FolderDown,
  ArrowRight,
  Plus,
  Eye,
  Edit,
  Database,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [blogs, setBlogs] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsRes, resourcesRes] = await Promise.all([
          fetch(`/api/blogs?includeDrafts=true&_t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`/api/resources?includeDrafts=true&_t=${Date.now()}`, { cache: 'no-store' }),
        ]);

        const blogsJson = await blogsRes.json();
        const resourcesJson = await resourcesRes.json();

        if (blogsJson.success) setBlogs(blogsJson.blogs || []);
        if (resourcesJson.success) setResources(resourcesJson.resources || []);
      } catch (err) {
        console.error('Error loading dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalBlogs = blogs.length;
  const publishedBlogs = blogs.filter((b) => b.isPublished).length;
  const draftBlogs = totalBlogs - publishedBlogs;
  const totalResources = resources.length;

  return (
    <div>
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ marginBottom: '0.35rem' }}>
            <span className="editorial-stamp">EXECUTIVE DASHBOARD</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              color: 'var(--text-ink)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            Platform Content & Operations
          </h1>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link href="/admin/blogs/editor" className="btn btn-primary" style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem', gap: '0.4rem' }}>
            <Plus size={14} />
            <span>Create Article</span>
          </Link>
          <Link href="/admin/resources/editor" className="btn btn-editorial" style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem', gap: '0.4rem' }}>
            <Plus size={14} />
            <span>Upload Framework</span>
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        {/* Card 1: Blog Articles */}
        <div
          style={{
            backgroundColor: 'var(--bg-pure-white)',
            border: '1px solid var(--border-medium)',
            borderRadius: '4px',
            padding: '1.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              TOTAL ARTICLES
            </span>
            <FileText size={18} color="var(--accent-red)" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-ink)', marginBottom: '0.35rem' }}>
            {loading ? '...' : totalBlogs}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', gap: '0.75rem' }}>
            <span style={{ color: '#25D366', fontWeight: 600 }}>{publishedBlogs} Published</span>
            {draftBlogs > 0 && <span style={{ color: '#F39C12' }}>{draftBlogs} Drafts</span>}
          </div>
        </div>

        {/* Card 2: Knowledge Resources */}
        <div
          style={{
            backgroundColor: 'var(--bg-pure-white)',
            border: '1px solid var(--border-medium)',
            borderRadius: '4px',
            padding: '1.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              FRAMEWORKS & GUIDES
            </span>
            <FolderDown size={18} color="var(--accent-red)" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-ink)', marginBottom: '0.35rem' }}>
            {loading ? '...' : totalResources}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Available for public download & dispatch
          </div>
        </div>

        {/* Card 3: Storage Engine Status */}
        <div
          style={{
            backgroundColor: 'var(--bg-pure-white)',
            border: '1px solid var(--border-medium)',
            borderRadius: '4px',
            padding: '1.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              STORAGE REPOSITORY
            </span>
            <Database size={18} color="var(--text-deep-blue)" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-ink)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#25D366', borderRadius: '50%' }} />
            <span>Atomic DB Engine</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Dual-Mode: Local JSON + External SQL ready
          </div>
        </div>
      </div>

      {/* Two Column Layout: Recent Articles + Recent Resources */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '2rem' }}>
        {/* Left Column: Recent Blog Articles */}
        <div
          style={{
            backgroundColor: 'var(--bg-pure-white)',
            border: '1px solid var(--border-medium)',
            borderRadius: '4px',
            padding: '1.75rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
              Recent Articles ({blogs.length})
            </h2>
            <Link href="/admin/blogs" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', textDecoration: 'none', fontWeight: 600 }}>
              MANAGE ALL →
            </Link>
          </div>

          {loading ? (
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Loading articles...</p>
          ) : blogs.length === 0 ? (
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>No articles found.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {blogs.slice(0, 5).map((blog) => (
                <div
                  key={blog.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-paper-white)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                  }}
                >
                  <div style={{ minWidth: 0, paddingRight: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.15rem 0.4rem',
                          backgroundColor: blog.isPublished ? 'rgba(37, 211, 102, 0.12)' : 'rgba(243, 156, 18, 0.12)',
                          color: blog.isPublished ? '#1E8E48' : '#D68910',
                          borderRadius: '2px',
                          fontWeight: 600,
                        }}
                      >
                        {blog.isPublished ? 'PUBLISHED' : 'DRAFT'}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>{blog.date}</span>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {blog.title}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
                    <Link
                      href={`/admin/blogs/editor?id=${blog.id}`}
                      style={{
                        padding: '0.35rem 0.65rem',
                        backgroundColor: 'var(--bg-ice-blue)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '2px',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-deep-blue)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      <Edit size={12} />
                      <span>EDIT</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Recent Knowledge Resources */}
        <div
          style={{
            backgroundColor: 'var(--bg-pure-white)',
            border: '1px solid var(--border-medium)',
            borderRadius: '4px',
            padding: '1.75rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
              Recent Frameworks ({resources.length})
            </h2>
            <Link href="/admin/resources" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', textDecoration: 'none', fontWeight: 600 }}>
              MANAGE ALL →
            </Link>
          </div>

          {loading ? (
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Loading frameworks...</p>
          ) : resources.length === 0 ? (
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>No frameworks found.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {resources.slice(0, 5).map((res) => (
                <div
                  key={res.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-paper-white)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                  }}
                >
                  <div style={{ minWidth: 0, paddingRight: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.15rem 0.4rem',
                          backgroundColor: 'rgba(201, 59, 43, 0.08)',
                          color: 'var(--accent-red)',
                          borderRadius: '2px',
                          fontWeight: 600,
                        }}
                      >
                        {res.category}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>{res.fileSize}</span>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {res.title}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
                    <Link
                      href={`/admin/resources/editor?id=${res.id}`}
                      style={{
                        padding: '0.35rem 0.65rem',
                        backgroundColor: 'var(--bg-ice-blue)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '2px',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-deep-blue)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      <Edit size={12} />
                      <span>EDIT</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
