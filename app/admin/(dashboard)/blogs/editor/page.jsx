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
  HelpCircle,
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
    { label: 'Business Practice Desk', url: '/images/service-business.jpg' },
    { label: 'Life Advisory & Sanctuary', url: '/images/service-life.jpg' },
    { label: 'Real Estate & Land Matrix', url: '/images/service-realestate.jpg' },
    { label: 'Investment Advisory Hub', url: '/images/service-investment.jpg' },
    { label: 'Branding & Architecture', url: '/images/service-branding.jpg' },
    { label: 'Boardroom Collaboration Wide', url: '/images/collaboration-hero-wide.jpg' },
  ];

  const categories = ['Strategy', 'Business', 'Life', 'Money', 'Purpose', 'Real Estate', 'Branding', 'Philosophy'];

  // Load data if in edit mode
  useEffect(() => {
    if (!isEditing) return;

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
        } else {
          setErrorMsg('Failed to load article details.');
        }
      } catch (err) {
        setErrorMsg('Error loading article: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [editId, isEditing]);

  // Word count & read time calculator
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

  // Quick formatting insertion helper
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

      setSuccessMsg(isEditing ? 'Article updated successfully!' : 'Article created and published!');

      if (!isEditing && data.blog?.id) {
        setTimeout(() => {
          router.push(`/admin/blogs/editor?id=${data.blog.id}`);
        }, 800);
      }
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred while saving.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.9rem' }}>
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
              width: '36px',
              height: '36px',
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-medium)',
              borderRadius: '2px',
              color: 'var(--text-deep-blue)',
            }}
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', textTransform: 'uppercase' }}>
              {isEditing ? 'EDITING ARCHIVED ARTICLE' : 'CREATING NEW PUBLICATION'}
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--text-ink)', margin: 0, fontWeight: 700 }}>
              {formData.title || 'Untitled Publication'}
            </h1>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isEditing && formData.isPublished && (
            <Link
              href={`/blog/${formData.slug}`}
              target="_blank"
              className="btn btn-editorial"
              style={{ padding: '0.6rem 1rem', fontSize: '0.82rem', gap: '0.4rem' }}
            >
              <Eye size={14} />
              <span>View Public</span>
            </Link>
          )}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={saving}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem', gap: '0.45rem' }}
          >
            <Save size={15} />
            <span>{saving ? 'Saving...' : isEditing ? 'Update Article' : 'Publish Article'}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {successMsg && (
        <div
          style={{
            backgroundColor: 'rgba(37, 211, 102, 0.1)',
            border: '1px solid rgba(37, 211, 102, 0.35)',
            borderRadius: '2px',
            padding: '0.85rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            color: '#1E8E48',
            fontSize: '0.88rem',
            fontWeight: 550,
          }}
        >
          <CheckCircle2 size={16} />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div
          style={{
            backgroundColor: 'rgba(201, 59, 43, 0.08)',
            border: '1px solid rgba(201, 59, 43, 0.35)',
            borderRadius: '2px',
            padding: '0.85rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            color: 'var(--accent-red)',
            fontSize: '0.88rem',
          }}
        >
          <AlertCircle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Form Body */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }} className="admin-editor-grid">
          {/* Left Column: Title, Subtitle, Markdown Editor, Pull Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Title & Subtitle Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  Article Headline / Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="e.g. On the Architecture of Unhurried Time"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-display)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    color: 'var(--text-ink)',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  Subtitle / Editorial Proposition
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="e.g. Why the modern obsession with acceleration is destroying original thought."
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem',
                    fontSize: '0.9rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    color: 'var(--text-ink)',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  Summary / Excerpt (Shows in Catalog Cards)
                </label>
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
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    color: 'var(--text-ink)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
            </div>

            {/* Markdown Content Editor with Formatting Tools */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Body Content (Markdown Supported) *
                  </label>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', backgroundColor: 'var(--bg-ice-blue)', padding: '0.15rem 0.45rem', borderRadius: '2px' }}>
                    {wordCount} words (~{estimatedMins} min read)
                  </span>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    type="button"
                    onClick={() => setActiveTab('write')}
                    style={{
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: activeTab === 'write' ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                      backgroundColor: activeTab === 'write' ? 'var(--text-deep-blue)' : 'var(--bg-ice-blue)',
                      color: activeTab === 'write' ? '#FFFFFF' : 'var(--text-deep-blue)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                    }}
                  >
                    WRITE
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    style={{
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: activeTab === 'preview' ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                      backgroundColor: activeTab === 'preview' ? 'var(--text-deep-blue)' : 'var(--bg-ice-blue)',
                      color: activeTab === 'preview' ? '#FFFFFF' : 'var(--text-deep-blue)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                    }}
                  >
                    PREVIEW
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
                    padding: '0.4rem 0.5rem',
                    backgroundColor: 'var(--bg-ice-blue)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    marginBottom: '0.75rem',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n## ', '', 'Heading 2')}
                    title="Insert Heading 2"
                    style={{ padding: '0.3rem 0.5rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '2px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.72rem', fontWeight: 600 }}
                  >
                    <Heading2 size={13} />
                    <span>H2</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n### ', '', 'Heading 3')}
                    title="Insert Heading 3"
                    style={{ padding: '0.3rem 0.5rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '2px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.72rem', fontWeight: 600 }}
                  >
                    <Heading3 size={13} />
                    <span>H3</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('**', '**', 'bold text')}
                    title="Bold"
                    style={{ padding: '0.3rem 0.5rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '2px', cursor: 'pointer', display: 'inline-flex' }}
                  >
                    <Bold size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('*', '*', 'italic text')}
                    title="Italic"
                    style={{ padding: '0.3rem 0.5rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '2px', cursor: 'pointer', display: 'inline-flex' }}
                  >
                    <Italic size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n> "', '"', 'Notable quote or principle')}
                    title="Blockquote"
                    style={{ padding: '0.3rem 0.5rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '2px', cursor: 'pointer', display: 'inline-flex' }}
                  >
                    <Quote size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n- ', '', 'Bullet point item')}
                    title="Bullet List"
                    style={{ padding: '0.3rem 0.5rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '2px', cursor: 'pointer', display: 'inline-flex' }}
                  >
                    <List size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('\n\n---\n\n', '', '')}
                    title="Horizontal Rule"
                    style={{ padding: '0.3rem 0.5rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '2px', cursor: 'pointer', display: 'inline-flex' }}
                  >
                    <Minus size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('[', '](https://example.com)', 'link text')}
                    title="Insert Link"
                    style={{ padding: '0.3rem 0.5rem', background: '#FFFFFF', border: '1px solid var(--border-medium)', borderRadius: '2px', cursor: 'pointer', display: 'inline-flex' }}
                  >
                    <Link2 size={13} />
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
                  placeholder={`Write in Markdown:\n\n### Section Title\n\nYour unhurried editorial reflections here...\n\n> "Notable quote here"\n\n- Key insight 1\n- Key insight 2`}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-mono), monospace',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    color: 'var(--text-ink)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                  }}
                />
              ) : (
                <div
                  style={{
                    padding: '1.5rem',
                    backgroundColor: 'var(--bg-paper-white)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    minHeight: '350px',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'var(--text-ink)',
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'var(--font-serif)',
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
                borderRadius: '4px',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                Featured Pull Quote (Accent Plate)
              </label>
              <input
                type="text"
                value={formData.quote}
                onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                placeholder="e.g. Time is not a resource to be spent in haste; it is the canvas upon which character is painted."
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem',
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '2px',
                  backgroundColor: 'var(--bg-paper-white)',
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
                borderRadius: '4px',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-ink)', margin: '0 0 1rem 0', fontWeight: 650 }}>
                Publishing Settings
              </h3>

              {/* Status Toggle */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-deep-blue)' }}>
                    Published to Public
                  </span>
                  <input
                    type="checkbox"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                    style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-red)' }}
                  />
                </label>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', display: 'block', marginTop: '0.25rem' }}>
                  {formData.isPublished ? 'Visible on /blog and home feeds.' : 'Saved as private draft.'}
                </span>
              </div>

              {/* Featured Article Toggle */}
              <div style={{ marginBottom: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-deep-blue)' }}>
                    Feature on Homepage
                  </span>
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-red)' }}
                  />
                </label>
              </div>

              {/* Category Selector */}
              <div style={{ marginBottom: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
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
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
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
                  <label style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', marginBottom: '0.3rem' }}>
                    READ TIME
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.55rem',
                      fontSize: '0.82rem',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '2px',
                      backgroundColor: 'var(--bg-paper-white)',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', marginBottom: '0.3rem' }}>
                    DATE
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.55rem',
                      fontSize: '0.82rem',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '2px',
                      backgroundColor: 'var(--bg-paper-white)',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              {/* Slug URL */}
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  URL Slug
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: generateSlug(e.target.value) })}
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.75rem',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Cover Image Selector & Uploader */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '1rem' }}>
                <ImageIcon size={16} color="var(--accent-red)" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
                  Cover Photograph
                </h3>
              </div>

              {/* Interactive Drag & Drop Uploader */}
              <ImageUploader
                value={formData.coverImage}
                onChange={(url) => setFormData({ ...formData, coverImage: url })}
                label="Upload Image (Local Storage)"
              />

              {/* Preset Selector */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', marginBottom: '0.35rem' }}>
                  OR SELECT CURATED EDITORIAL PHOTO
                </label>
                <select
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.55rem',
                    fontSize: '0.8rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
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
                <label style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', marginBottom: '0.35rem' }}>
                  OR ENTER CUSTOM IMAGE PATH / URL
                </label>
                <input
                  type="text"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.65rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      <style jsx global>{`
        @media (max-width: 860px) {
          .admin-editor-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function BlogEditorPage() {
  return (
    <Suspense fallback={<div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>INITIALIZING ARTICLE EDITOR...</div>}>
      <BlogEditorForm />
    </Suspense>
  );
}
