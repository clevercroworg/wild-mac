'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  FolderDown,
  Image as ImageIcon,
  Sparkles,
  FileCheck,
} from 'lucide-react';

function ResourceEditorForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');
  const isEditing = !!editId;

  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'BUSINESS & LEADERSHIP',
    type: 'Guide & Template (PDF)',
    description: '',
    readTime: '8 min read',
    format: 'Downloadable PDF',
    fileSize: '1.4 MB',
    downloadUrl: '#',
    keyTakeaways: [''],
    coverImage: '/images/service-business.jpg',
    isPublished: true,
  });

  const categories = [
    'BUSINESS & LEADERSHIP',
    'LIFE & STRATEGY',
    'BRANDING & DIGITAL',
    'REAL ESTATE',
    'FINANCIAL LITERACY',
    'PHILOSOPHY & PURPOSE',
  ];

  const presetFormats = [
    'Downloadable PDF',
    'Interactive Worksheet',
    'Strategy Framework (PDF)',
    'Checklist Matrix',
    'Executive Spreadsheet (XLSX)',
    'Notion Architecture Template',
  ];

  const presetImages = [
    { label: 'Business Advisory Hub', url: '/images/service-business.jpg' },
    { label: 'Author Workspace & Literature', url: '/images/author-workspace.jpg' },
    { label: 'Brand & Digital Systems', url: '/images/service-branding.jpg' },
    { label: 'Real Estate & Land Matrix', url: '/images/service-realestate.jpg' },
    { label: 'Investment Advisory Strategy', url: '/images/service-investment.jpg' },
    { label: 'Life Strategy & Sanctuary', url: '/images/service-life.jpg' },
  ];

  useEffect(() => {
    if (!isEditing) return;

    const loadResource = async () => {
      try {
        const res = await fetch(`/api/resources/${editId}`);
        const data = await res.json();
        if (data.success && data.resource) {
          setFormData({
            title: data.resource.title || '',
            category: data.resource.category || 'BUSINESS & LEADERSHIP',
            type: data.resource.type || 'Guide & Template (PDF)',
            description: data.resource.description || '',
            readTime: data.resource.readTime || '8 min read',
            format: data.resource.format || 'Downloadable PDF',
            fileSize: data.resource.fileSize || '1.4 MB',
            downloadUrl: data.resource.downloadUrl || '#',
            keyTakeaways: Array.isArray(data.resource.keyTakeaways) && data.resource.keyTakeaways.length > 0
              ? data.resource.keyTakeaways
              : [''],
            coverImage: data.resource.coverImage || '/images/service-business.jpg',
            isPublished: data.resource.isPublished !== undefined ? data.resource.isPublished : true,
          });
        } else {
          setErrorMsg('Failed to load resource details.');
        }
      } catch (err) {
        setErrorMsg('Error loading resource: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    loadResource();
  }, [editId, isEditing]);

  const handleAddTakeaway = () => {
    setFormData((prev) => ({
      ...prev,
      keyTakeaways: [...prev.keyTakeaways, ''],
    }));
  };

  const handleTakeawayChange = (index, value) => {
    const updated = [...formData.keyTakeaways];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, keyTakeaways: updated }));
  };

  const handleRemoveTakeaway = (index) => {
    const updated = formData.keyTakeaways.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, keyTakeaways: updated.length > 0 ? updated : [''] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrorMsg('');
    setSuccessMsg('');

    const cleanedTakeaways = formData.keyTakeaways.filter((t) => t.trim().length > 0);

    try {
      const url = isEditing ? `/api/resources/${editId}` : '/api/resources';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          keyTakeaways: cleanedTakeaways,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to save resource');
      }

      setSuccessMsg(isEditing ? 'Framework updated successfully!' : 'Framework created successfully!');

      if (!isEditing && data.resource?.id) {
        setTimeout(() => {
          router.push(`/admin/resources/editor?id=${data.resource.id}`);
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
        Loading resource editor...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link
            href="/admin/resources"
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
              {isEditing ? 'EDITING KNOWLEDGE FRAMEWORK' : 'UPLOAD NEW FRAMEWORK'}
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--text-ink)', margin: 0, fontWeight: 700 }}>
              {formData.title || 'Untitled Framework'}
            </h1>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={saving}
          className="btn btn-primary"
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem', gap: '0.45rem' }}
        >
          <Save size={15} />
          <span>{saving ? 'Saving...' : isEditing ? 'Update Framework' : 'Save Framework'}</span>
        </button>
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

      {/* Form Grid */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }} className="admin-editor-grid">
          {/* Left Column: Details & Key Takeaways */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Title & Description */}
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
                  Framework Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Strategic Decision-Making Framework"
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

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  Description & Context *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the operational challenge this framework solves..."
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem',
                    fontSize: '0.9rem',
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

            {/* Interactive Key Takeaways List Builder */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
                    Core Takeaways & Action Pillars
                  </h3>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                    Bullet points displayed on the public card
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleAddTakeaway}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.75rem',
                    backgroundColor: 'var(--bg-ice-blue)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-deep-blue)',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  <Plus size={13} />
                  <span>ADD PILLAR</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {formData.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontWeight: 700, width: '20px' }}>
                      0{idx + 1}
                    </span>
                    <input
                      type="text"
                      value={takeaway}
                      onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                      placeholder={`e.g. Asymmetric risk calculation matrix`}
                      style={{
                        flex: 1,
                        padding: '0.6rem 0.85rem',
                        fontSize: '0.85rem',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '2px',
                        backgroundColor: 'var(--bg-paper-white)',
                        color: 'var(--text-ink)',
                        outline: 'none',
                      }}
                    />
                    {formData.keyTakeaways.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveTakeaway(idx)}
                        style={{
                          padding: '0.45rem',
                          backgroundColor: 'rgba(201, 59, 43, 0.08)',
                          border: '1px solid rgba(201, 59, 43, 0.25)',
                          borderRadius: '2px',
                          color: 'var(--accent-red)',
                          cursor: 'pointer',
                        }}
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Category, Format, File Size, Image */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Format & Metadata */}
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
                Resource Metadata
              </h3>

              {/* Category */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.82rem',
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

              {/* Format Presets */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', fontWeight: 650, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.45rem' }}>
                  Format Preset
                </label>
                <select
                  value={formData.format}
                  onChange={(e) => setFormData({ ...formData, format: e.target.value, type: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.55rem',
                    fontSize: '0.82rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-paper-white)',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {presetFormats.map((fmt) => (
                    <option key={fmt} value={fmt}>
                      {fmt}
                    </option>
                  ))}
                </select>
              </div>

              {/* File Size & Read Time */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', marginBottom: '0.3rem' }}>
                    FILE SIZE
                  </label>
                  <input
                    type="text"
                    value={formData.fileSize}
                    onChange={(e) => setFormData({ ...formData, fileSize: e.target.value })}
                    placeholder="1.4 MB"
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
                    EST. REVIEW
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="8 min read"
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
            </div>

            {/* Cover Image Selector */}
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

              <div style={{ height: '120px', width: '100%', borderRadius: '2px', overflow: 'hidden', marginBottom: '1rem', border: '1px solid var(--border-subtle)' }}>
                <img
                  src={formData.coverImage}
                  alt="Cover Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', marginBottom: '0.35rem' }}>
                  SELECT CURATED PHOTO
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function ResourceEditorPage() {
  return (
    <Suspense fallback={<div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>INITIALIZING RESOURCE EDITOR...</div>}>
      <ResourceEditorForm />
    </Suspense>
  );
}
