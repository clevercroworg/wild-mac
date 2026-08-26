'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  ExternalLink,
  Eye,
  CheckCircle2,
  Clock,
  Filter,
  AlertTriangle,
} from 'lucide-react';

export default function AdminBlogsManagerPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [deleteModalBlog, setDeleteModalBlog] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blogs?includeDrafts=true');
      const data = await res.json();
      if (data.success) {
        setBlogs(data.blogs || []);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setBlogs(blogs.filter((b) => b.id !== id));
        setDeleteModalBlog(null);
      } else {
        alert('Failed to delete article');
      }
    } catch (err) {
      alert('Error deleting article: ' + err.message);
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggleStatus = async (blog) => {
    try {
      const updatedStatus = !blog.isPublished;
      const res = await fetch(`/api/blogs/${blog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished: updatedStatus }),
      });
      if (res.ok) {
        setBlogs(blogs.map((b) => (b.id === blog.id ? { ...b, isPublished: updatedStatus } : b)));
      }
    } catch (err) {
      console.error('Error toggling status:', err);
    }
  };

  const categories = ['ALL', 'Business', 'Life', 'Money', 'Purpose', 'Strategy', 'Real Estate', 'Branding'];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = categoryFilter === 'ALL' || blog.category?.toLowerCase() === categoryFilter.toLowerCase();
    const q = search.toLowerCase().trim();
    const matchesSearch = !q || blog.title?.toLowerCase().includes(q) || blog.subtitle?.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ marginBottom: '0.35rem' }}>
            <span className="editorial-stamp">CONTENT REPOSITORY</span>
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
            Blog Articles & Essays
          </h1>
        </div>

        <Link href="/admin/blogs/editor" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem', gap: '0.45rem' }}>
          <Plus size={15} />
          <span>Write New Article</span>
        </Link>
      </div>

      {/* Filter & Search Bar */}
      <div
        style={{
          backgroundColor: 'var(--bg-pure-white)',
          border: '1px solid var(--border-medium)',
          borderRadius: '4px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {/* Search */}
        <div style={{ position: 'relative', minWidth: '280px', flex: '1 1 300px' }}>
          <input
            type="text"
            placeholder="Search articles by title or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 1rem 0.65rem 2.25rem',
              fontSize: '0.85rem',
              border: '1px solid var(--border-medium)',
              borderRadius: '2px',
              backgroundColor: 'var(--bg-paper-white)',
              color: 'var(--text-ink)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <Search size={14} color="var(--text-light)" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                border: '1px solid',
                borderColor: categoryFilter === cat ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                backgroundColor: categoryFilter === cat ? 'var(--text-deep-blue)' : 'var(--bg-ice-blue)',
                color: categoryFilter === cat ? '#FFFFFF' : 'var(--text-deep-blue)',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Table */}
      <div
        style={{
          backgroundColor: 'var(--bg-pure-white)',
          border: '1px solid var(--border-medium)',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        }}
      >
        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.9rem' }}>
            Loading article archives...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              No articles match your current search or category filter.
            </p>
            <Link href="/admin/blogs/editor" className="btn btn-editorial" style={{ display: 'inline-flex' }}>
              Write your first article
            </Link>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-medium)' }}>
                  <th style={{ padding: '0.85rem 1.25rem', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    ARTICLE TITLE & SLUG
                  </th>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    CATEGORY
                  </th>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    DATE
                  </th>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    STATUS
                  </th>
                  <th style={{ padding: '0.85rem 1.25rem', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'right' }}>
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map((blog) => (
                  <tr
                    key={blog.id}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      transition: 'background-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-paper-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {/* Title & Slug */}
                    <td style={{ padding: '1rem 1.25rem', maxWidth: '380px' }}>
                      <div style={{ fontWeight: 650, fontSize: '0.95rem', color: 'var(--text-ink)', marginBottom: '0.2rem' }}>
                        {blog.title}
                      </div>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        /blog/{blog.slug}
                      </div>
                    </td>

                    {/* Category */}
                    <td style={{ padding: '1rem 1rem' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.2rem 0.55rem',
                          backgroundColor: 'rgba(201, 59, 43, 0.08)',
                          color: 'var(--accent-red)',
                          borderRadius: '2px',
                          fontWeight: 600,
                        }}
                      >
                        {blog.category}
                      </span>
                    </td>

                    {/* Date */}
                    <td style={{ padding: '1rem 1rem', fontSize: '0.82rem', color: 'var(--text-deep-blue)', whiteSpace: 'nowrap' }}>
                      {blog.date}
                    </td>

                    {/* Status Toggle */}
                    <td style={{ padding: '1rem 1rem' }}>
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(blog)}
                        title="Click to toggle publish status"
                        style={{
                          padding: '0.25rem 0.6rem',
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          borderRadius: '2px',
                          border: '1px solid',
                          cursor: 'pointer',
                          backgroundColor: blog.isPublished ? 'rgba(37, 211, 102, 0.12)' : 'rgba(243, 156, 18, 0.12)',
                          color: blog.isPublished ? '#1E8E48' : '#D68910',
                          borderColor: blog.isPublished ? 'rgba(37, 211, 102, 0.3)' : 'rgba(243, 156, 18, 0.3)',
                        }}
                      >
                        {blog.isPublished ? '● PUBLISHED' : '○ DRAFT'}
                      </button>
                    </td>

                    {/* Actions */}
                    <td style={{ padding: '1rem 1.25rem', textAlign: 'right', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                        {blog.isPublished && (
                          <Link
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            title="View live article on public site"
                            style={{
                              padding: '0.35rem 0.55rem',
                              backgroundColor: 'var(--bg-ice-blue)',
                              border: '1px solid var(--border-medium)',
                              borderRadius: '2px',
                              color: 'var(--text-deep-blue)',
                              display: 'inline-flex',
                            }}
                          >
                            <ExternalLink size={13} />
                          </Link>
                        )}
                        <Link
                          href={`/admin/blogs/editor?id=${blog.id}`}
                          title="Edit article"
                          style={{
                            padding: '0.35rem 0.65rem',
                            backgroundColor: 'var(--bg-ice-blue)',
                            border: '1px solid var(--border-medium)',
                            borderRadius: '2px',
                            color: 'var(--text-deep-blue)',
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-mono)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                          }}
                        >
                          <Edit size={12} />
                          <span>EDIT</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setDeleteModalBlog(blog)}
                          title="Delete article"
                          style={{
                            padding: '0.35rem 0.55rem',
                            backgroundColor: 'rgba(201, 59, 43, 0.08)',
                            border: '1px solid rgba(201, 59, 43, 0.3)',
                            borderRadius: '2px',
                            color: 'var(--accent-red)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModalBlog && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 34, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 300,
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-medium)',
              borderRadius: '4px',
              maxWidth: '440px',
              width: '100%',
              padding: '2rem',
              boxShadow: 'var(--shadow-dropdown)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--accent-red)', marginBottom: '1rem' }}>
              <AlertTriangle size={22} />
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)' }}>
                Confirm Delete Article
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-deep-blue)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Are you sure you want to permanently delete <strong>&quot;{deleteModalBlog.title}&quot;</strong>? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setDeleteModalBlog(null)}
                className="btn btn-editorial"
                style={{ padding: '0.55rem 1rem', fontSize: '0.82rem' }}
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deletingId === deleteModalBlog.id}
                onClick={() => handleDelete(deleteModalBlog.id)}
                className="btn btn-primary"
                style={{ padding: '0.55rem 1rem', fontSize: '0.82rem', backgroundColor: 'var(--accent-red)' }}
              >
                {deletingId === deleteModalBlog.id ? 'Deleting...' : 'Delete Article'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
