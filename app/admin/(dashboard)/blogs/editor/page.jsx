'use client';

import React, { useState, useEffect, Suspense, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Save,
  Eye,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
  Image as ImageIcon,
  Heading2,
  Heading3,
  Bold,
  Italic,
  List,
  Quote,
  Minus,
  Link2,
} from 'lucide-react';
import { generateSlug } from '@/lib/utils';
import ImageUploader from '@/components/ImageUploader';

function BlogEditorForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');
  const isEditing = !!editId;

  const textareaRef = useRef(null);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState('write'); // 'write' | 'preview'

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    slug: '',
    category: 'Strategy',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read',
    excerpt: '',
    content: '',
    quote: '',
    coverImage: '/images/community-gathering.jpg',
    isPublished: true,
    isFeatured: false,
  });

  const presetImages = [
    { label: 'Community Gathering (Goan Heritage)', url: '/images/community-gathering.jpg' },
    { label: 'Author Study Portrait', url: '/images/author-study-portrait.jpg' },
    { label: 'Author Workspace Still', url: '/images/author-workspace.jpg' },
    { label: 'Business & Desk', url: '/images/service-business.jpg' },
    { label: 'Life Strategy & Home', url: '/images/service-life.jpg' },
    { label: 'Real Estate & Land Matrix', url: '/images/service-realestate.jpg' },
    { label: 'Investment & Finance', url: '/images/service-investment.jpg' },
    { label: 'Branding & Architecture', url: '/images/service-branding.jpg' },
    { label: 'Boardroom Discussion Wide', url: '/images/collaboration-hero-wide.jpg' },
  ];

  const categories = ['Strategy', 'Business', 'Life', 'Money', 'Purpose', 'Real Estate', 'Branding', 'Philosophy'];

  useEffect(() => {
    if (!isEditing) {
      setLoading(false);
      return;
    }

    const loadArticle = async () => {
      try {
        const res = await fetch(`/api/blogs/${editId}`);
        const data = await res.json();
        if (data.success && data.blog) {
          setFormData({
            title: data.blog.title || '',
            subtitle: data.blog.subtitle || '',
            slug: data.blog.slug || '',
            category: data.blog.category || 'Strategy',
            date: data.blog.date || '',
            readTime: data.blog.readTime || '5 min read',
            excerpt: data.blog.excerpt || '',
            content: data.blog.content || '',
            quote: data.blog.quote || '',
            coverImage: data.blog.coverImage || '/images/community-gathering.jpg',
            isPublished: data.blog.isPublished !== undefined ? data.blog.isPublished : true,
            isFeatured: !!data.blog.isFeatured,
          });
          setErrorMsg('');
        } else {
          // Only show error if form is empty
          setFormData((prev) => {
            if (!prev.title) setErrorMsg('Failed to load article details.');
            return prev;
          });
        }
      } catch (err) {
        console.warn('Article fetch note:', err.message);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [editId, isEditing]);

  const wordCount = formData.content.trim() ? formData.content.trim().split(/\s+/).length : 0;
  const estimatedMins = Math.max(1, Math.ceil(wordCount / 200));

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      slug: !isEditing ? generateSlug(title) : prev.slug,
    }));
  };

  const insertFormatting = (prefix, suffix = '', placeholder = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const current = formData.content;

    const selectedText = current.substring(start, end) || placeholder;
    const replacement = `${prefix}${selectedText}${suffix}`;

    const newContent = current.substring(0, start) + replacement + current.substring(end);
    setFormData((prev) => ({ ...prev, content: newContent }));

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
    }, 50);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const url = isEditing ? `/api/blogs/${editId}` : '/api/blogs';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          readTime: formData.readTime || `${estimatedMins} min read`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to save article');
      }

      setSuccessMsg(isEditing ? 'Article updated successfully!' : 'Article published successfully!');

      if (!isEditing && data.blog?.id) {
        setTimeout(() => {
          router.replace(`/admin/blogs/editor?id=${data.blog.id}`, { scroll: false });
        }, 600);
      }
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred while saving.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)' }}>
        Loading article editor...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1020px', margin: '0 auto' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link
            href="/admin/blogs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-medium)',
              borderRadius: '4px',
              color: 'var(--text-deep-blue)',
              textDecoration: 'none',
            }}
            title="Back to Articles"
          >
            <ArrowLeft size={17} />
          </Link>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 550 }}>
              Blog Articles / {isEditing ? 'Edit Article' : 'Write New Article'}
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--text-ink)', margin: 0, fontWeight: 750 }}>
              {formData.title || 'Untitled Article'}
            </h1>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isEditing && formData.isPublished && (
            <Link
              href={`/blog/${formData.slug}`}
              target="_blank"
              className="btn btn-editorial"
              style={{ padding: '0.65rem 1rem', fontSize: '0.85rem', gap: '0.4rem' }}
            >
              <Eye size={15} />
              <span>View on Website</span>
            </Link>
          )}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={saving}
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem', gap: '0.45rem' }}
          >
            <Save size={16} />
            <span>{saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Publish Article'}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {successMsg && (
        <div
          style={{
            backgroundColor: 'rgba(37, 211, 102, 0.1)',
            border: '1px solid rgba(37, 211, 102, 0.35)',
            borderRadius: '4px',
            padding: '0.85rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            color: '#1E8E48',
            fontSize: '0.88rem',
            fontWeight: 600,
          }}
        >
          <CheckCircle2 size={18} />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div
          style={{
            backgroundColor: 'rgba(201, 59, 43, 0.08)',
            border: '1px solid rgba(201, 59, 43, 0.35)',
            borderRadius: '4px',
            padding: '0.85rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            color: 'var(--accent-red)',
            fontSize: '0.88rem',
            fontWeight: 550,
          }}
        >
          <AlertCircle size={18} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Form Body */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }} className="admin-editor-grid">
          {/* Left Column: Title, Subtitle, Content Editor, Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Title & Subtitle Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.2rem' }}>
                  Article Title *
                </label>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '0.45rem' }}>
                  The main headline that appears at the top of your post
                </span>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="e.g. On the Architecture of Unhurried Time"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-display)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    color: 'var(--text-ink)',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.2rem' }}>
                  Subtitle / One-line Summary (Optional)
                </label>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '0.45rem' }}>
                  A supporting sentence explaining the core message
                </span>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="e.g. Why the modern obsession with acceleration is destroying original thought."
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem',
                    fontSize: '0.88rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    color: 'var(--text-ink)',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.2rem' }}>
                  Short Card Summary (Shows on Blog Page)
                </label>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '0.45rem' }}>
                  A brief 2-sentence preview shown to readers before opening the post
                </span>
                <textarea
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Short introductory summary for reader previews..."
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem',
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    color: 'var(--text-ink)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
            </div>

            {/* Markdown Content Editor with Simple Toolbar */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 650, color: 'var(--text-ink)', display: 'block' }}>
                    Article Content *
                  </label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                    {wordCount} words (~{estimatedMins} min read)
                  </span>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    type="button"
                    onClick={() => setActiveTab('write')}
                    style={{
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: activeTab === 'write' ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                      backgroundColor: activeTab === 'write' ? 'var(--text-deep-blue)' : '#F0F4F8',
                      color: activeTab === 'write' ? '#FFFFFF' : 'var(--text-deep-blue)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    style={{
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: activeTab === 'preview' ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                      backgroundColor: activeTab === 'preview' ? 'var(--text-deep-blue)' : '#F0F4F8',
                      color: activeTab === 'preview' ? '#FFFFFF' : 'var(--text-deep-blue)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Live Preview
                  </button>
                </div>
              </div>

              {/* Formatting Toolbar */}
              {activeTab === 'write' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    flexWrap: 'wrap',
                    padding: '0.45rem 0.6rem',
                    backgroundColor: '#F0F4F8',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    marginBottom: '0.75rem',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n## ', '', 'Section Title')}
                    title="Insert Heading"
                    style={{ padding: '0.35rem 0.6rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '3px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', fontWeight: 600 }}
                  >
                    <Heading2 size={14} />
                    <span>Heading</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n### ', '', 'Subheading')}
                    title="Insert Subheading"
                    style={{ padding: '0.35rem 0.6rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '3px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', fontWeight: 600 }}
                  >
                    <Heading3 size={14} />
                    <span>Subheading</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('**', '**', 'bold text')}
                    title="Bold"
                    style={{ padding: '0.35rem 0.6rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '3px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.78rem', fontWeight: 600 }}
                  >
                    <Bold size={14} />
                    <span>Bold</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('*', '*', 'italic text')}
                    title="Italic"
                    style={{ padding: '0.35rem 0.6rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '3px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.78rem' }}
                  >
                    <Italic size={14} />
                    <span>Italic</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n> "', '"', 'Notable quote or principle')}
                    title="Quote Box"
                    style={{ padding: '0.35rem 0.6rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '3px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem' }}
                  >
                    <Quote size={14} />
                    <span>Quote</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n- ', '', 'Bullet point item')}
                    title="Bullet List"
                    style={{ padding: '0.35rem 0.6rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '3px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem' }}
                  >
                    <List size={14} />
                    <span>List</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n\n---\n\n', '', '')}
                    title="Divider Line"
                    style={{ padding: '0.35rem 0.6rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '3px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem' }}
                  >
                    <Minus size={14} />
                    <span>Divider</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('[', '](https://example.com)', 'link text')}
                    title="Insert Link"
                    style={{ padding: '0.35rem 0.6rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '3px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem' }}
                  >
                    <Link2 size={14} />
                    <span>Link</span>
                  </button>
                </div>
              )}

              {activeTab === 'write' ? (
                <textarea
                  ref={textareaRef}
                  required
                  rows={18}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder={`Write your article here...\n\n## Section Title\n\nYour reflections and insights here...\n\n> "A memorable quote goes here"\n\n- Key point 1\n- Key point 2`}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    color: 'var(--text-ink)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              ) : (
                <div
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#F9FBFC',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    minHeight: '350px',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'var(--text-ink)',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {formData.content || '(No content written yet)'}
                </div>
              )}
            </div>

            {/* Pull Quote Box */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.2rem' }}>
                Highlight Quote (Optional)
              </label>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '0.45rem' }}>
                A standout quote that is highlighted in a special box inside the article
              </span>
              <input
                type="text"
                value={formData.quote}
                onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                placeholder="e.g. Time is not a resource to be spent in haste; it is the canvas upon which character is painted."
                style={{
                  width: '100%',
                  padding: '0.7rem 1rem',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '4px',
                  backgroundColor: '#F9FBFC',
                  color: 'var(--text-ink)',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          {/* Right Column: Settings, Metadata, Cover Image, Publish Toggle */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Publish Status Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text-ink)', margin: '0 0 1rem 0', fontWeight: 700 }}>
                Publish Options
              </h3>

              {/* Status Toggle */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 650, color: 'var(--text-deep-blue)' }}>
                    Make Live on Website
                  </span>
                  <input
                    type="checkbox"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                    style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--accent-red)' }}
                  />
                </label>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block', marginTop: '0.3rem' }}>
                  {formData.isPublished ? '✓ Visible to readers on /blog' : 'Hidden as draft (private)'}
                </span>
              </div>

              {/* Featured Article Toggle */}
              <div style={{ marginBottom: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 650, color: 'var(--text-deep-blue)' }}>
                    Show on Homepage
                  </span>
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--accent-red)' }}
                  />
                </label>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block', marginTop: '0.3rem' }}>
                  Highlights this article on the homepage feed
                </span>
              </div>

              {/* Category Selector */}
              <div style={{ marginBottom: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.35rem' }}>
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.85rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    color: 'var(--text-ink)',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Read Time & Date */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', marginBottom: '0.3rem' }}>
                    Reading Time
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.55rem',
                      fontSize: '0.85rem',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '4px',
                      backgroundColor: '#F9FBFC',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', marginBottom: '0.3rem' }}>
                    Publish Date
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.55rem',
                      fontSize: '0.85rem',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '4px',
                      backgroundColor: '#F9FBFC',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              {/* Slug URL */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.35rem' }}>
                  Web Link Address (Slug)
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: generateSlug(e.target.value) })}
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.75rem',
                    fontSize: '0.8rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Cover Picture Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '1rem' }}>
                <ImageIcon size={18} color="var(--accent-red)" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text-ink)', margin: 0, fontWeight: 700 }}>
                  Cover Picture
                </h3>
              </div>

              {/* Interactive Drag & Drop Uploader */}
              <ImageUploader
                value={formData.coverImage}
                onChange={(url) => setFormData({ ...formData, coverImage: url })}
                label="Upload Cover Picture"
              />

              {/* Preset Selector */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
                  Or Choose from Ready-to-Use Photos
                </label>
                <select
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.6rem',
                    fontSize: '0.82rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {presetImages.map((img) => (
                    <option key={img.url} value={img.url}>
                      {img.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom Image URL */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
                  Or Paste an Image URL
                </label>
                <input
                  type="text"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  placeholder="/images/... or https://..."
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.65rem',
                    fontSize: '0.78rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Sticky Mobile Bottom Save Bar */}
      <div
        className="admin-mobile-bottom-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--border-medium)',
          padding: '0.75rem 1rem',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 100,
          boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
        }}
      >
        <Link href="/admin/blogs" className="btn btn-secondary" style={{ padding: '0.55rem 0.85rem', fontSize: '0.8rem' }}>
          Cancel
        </Link>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={saving}
          className="btn btn-primary"
          style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem', gap: '0.35rem' }}
        >
          <Save size={14} />
          <span>{saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Publish Article'}</span>
        </button>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .admin-editor-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .admin-mobile-bottom-bar {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function BlogEditorPage() {
  return (
    <Suspense fallback={<div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)' }}>Loading article editor...</div>}>
      <BlogEditorForm />
    </Suspense>
  );
}
