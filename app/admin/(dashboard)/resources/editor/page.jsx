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
import ImageUploader from '@/components/ImageUploader';
import DocumentUploader from '@/components/DocumentUploader';

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
    type: 'PDF Guide',
    description: '',
    readTime: '8 min read',
    format: 'PDF Guide',
    fileSize: '1.4 MB',
    downloadUrl: '#',
    keyTakeaways: [''],
    coverImage: '/images/service-business.jpg',
    isPublished: true,
  });

  const categories = [
    'BUSINESS & LEADERSHIP',
    'LIFE & STRATEGY',
    'BRANDING & MARKETING',
    'REAL ESTATE',
    'FINANCIAL LITERACY',
    'PURPOSE & MINDSET',
  ];

  const presetFormats = [
    'PDF Guide',
    'Interactive Worksheet',
    'Strategy Framework',
    'Checklist Matrix',
    'Excel Spreadsheet (XLSX)',
    'Notion Template',
  ];

  const presetImages = [
    { label: 'Business & Office Desk', url: '/images/service-business.jpg' },
    { label: 'Books & Workspace Still', url: '/images/author-workspace.jpg' },
    { label: 'Branding & Architecture', url: '/images/service-branding.jpg' },
    { label: 'Real Estate & Properties', url: '/images/service-realestate.jpg' },
    { label: 'Investment & Finance', url: '/images/service-investment.jpg' },
    { label: 'Life Strategy & Home', url: '/images/service-life.jpg' },
  ];

  useEffect(() => {
    if (!isEditing) {
      setLoading(false);
      return;
    }

    const loadResource = async () => {
      try {
        const res = await fetch(`/api/resources/${editId}`);
        const data = await res.json();
        if (data.success && data.resource) {
          setFormData({
            title: data.resource.title || '',
            category: data.resource.category || 'BUSINESS & LEADERSHIP',
            type: data.resource.type || 'PDF Guide',
            description: data.resource.description || '',
            readTime: data.resource.readTime || '8 min read',
            format: data.resource.format || 'PDF Guide',
            fileSize: data.resource.fileSize || '1.4 MB',
            downloadUrl: data.resource.downloadUrl || '#',
            keyTakeaways: Array.isArray(data.resource.keyTakeaways) && data.resource.keyTakeaways.length > 0
              ? data.resource.keyTakeaways
              : [''],
            coverImage: data.resource.coverImage || '/images/service-business.jpg',
            isPublished: data.resource.isPublished !== undefined ? data.resource.isPublished : true,
          });
          setErrorMsg('');
        } else {
          setFormData((prev) => {
            if (!prev.title) setErrorMsg('Failed to load resource details.');
            return prev;
          });
        }
      } catch (err) {
        console.warn('Resource fetch note:', err.message);
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
    setFormData((prev) => ({
      ...prev,
      keyTakeaways: updated,
    }));
  };

  const handleRemoveTakeaway = (index) => {
    if (formData.keyTakeaways.length <= 1) return;
    const updated = formData.keyTakeaways.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      keyTakeaways: updated,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrorMsg('');
    setSuccessMsg('');

    const cleanedTakeaways = formData.keyTakeaways.filter((t) => t.trim() !== '');

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

      setSuccessMsg(isEditing ? 'Resource updated successfully!' : 'New resource created successfully!');

      if (!isEditing && data.resource?.id) {
        setTimeout(() => {
          router.replace(`/admin/resources/editor?id=${data.resource.id}`, { scroll: false });
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
              width: '38px',
              height: '38px',
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-medium)',
              borderRadius: '4px',
              color: 'var(--text-deep-blue)',
              textDecoration: 'none',
            }}
            title="Back to Resources List"
          >
            <ArrowLeft size={17} />
          </Link>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 550 }}>
              Resources & Guides / {isEditing ? 'Edit Resource' : 'Add New Resource'}
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--text-ink)', margin: 0, fontWeight: 750 }}>
              {formData.title || 'Untitled Resource'}
            </h1>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={saving}
          className="btn btn-primary"
          style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem', gap: '0.45rem' }}
        >
          <Save size={16} />
          <span>{saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Save & Publish'}</span>
        </button>
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

      {/* Form Grid */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }} className="admin-editor-grid">
          {/* Left Column: Title, Description, Takeaways, File Upload */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Card 1: Title & Short Description */}
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
                  Resource Title *
                </label>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '0.45rem' }}>
                  The name of the guide, checklist, or template
                </span>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Strategic Decision-Making Guide"
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

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.2rem' }}>
                  Short Summary / Description *
                </label>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '0.45rem' }}>
                  Explain in 1 or 2 sentences what visitors will learn or get from this download
                </span>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="e.g. A clear, practical checklist to help founders and leaders evaluate major business decisions and avoid costly mistakes."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
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

            {/* Card 2: Key Bullet Points (What's Inside) */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text-ink)', margin: 0, fontWeight: 700 }}>
                    What’s Inside (Key Highlights)
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                    Add 2 to 4 bullet points that will appear on the resource card
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleAddTakeaway}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.4rem 0.85rem',
                    backgroundColor: 'var(--bg-ice-blue)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    color: 'var(--text-deep-blue)',
                    cursor: 'pointer',
                    fontWeight: 650,
                  }}
                >
                  <Plus size={14} />
                  <span>+ Add Bullet Point</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {formData.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-red)', fontWeight: 700, width: '22px' }}>
                      {idx + 1}.
                    </span>
                    <input
                      type="text"
                      value={takeaway}
                      onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                      placeholder={`e.g. Step-by-step risk calculation checklist`}
                      style={{
                        flex: 1,
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.88rem',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '4px',
                        backgroundColor: '#F9FBFC',
                        color: 'var(--text-ink)',
                        outline: 'none',
                      }}
                    />
                    {formData.keyTakeaways.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveTakeaway(idx)}
                        style={{
                          padding: '0.5rem',
                          backgroundColor: 'rgba(201, 59, 43, 0.08)',
                          border: '1px solid rgba(201, 59, 43, 0.25)',
                          borderRadius: '4px',
                          color: 'var(--accent-red)',
                          cursor: 'pointer',
                        }}
                        title="Remove bullet point"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Downloadable File Attachment */}
            <div
              style={{
                backgroundColor: 'var(--bg-pure-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <DocumentUploader
                value={formData.downloadUrl}
                onChange={(url) => setFormData((prev) => ({ ...prev, downloadUrl: url }))}
                onSizeDetected={(size) => setFormData((prev) => ({ ...prev, fileSize: size }))}
                label="Downloadable File (PDF, Word, Excel, ZIP)"
              />

              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-deep-blue)', marginBottom: '0.2rem' }}>
                  Or Paste External Link (Google Drive / Dropbox)
                </label>
                <input
                  type="text"
                  value={formData.downloadUrl}
                  onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                  placeholder="https://drive.google.com/file/... or paste link here"
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    fontSize: '0.82rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Details, Type, File Size, Image */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Resource Details Card */}
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
                Resource Details
              </h3>

              {/* Category */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.35rem' }}>
                  Category / Topic
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

              {/* Format Badge */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-deep-blue)', marginBottom: '0.35rem' }}>
                  Badge / Format Type
                </label>
                <select
                  value={formData.format}
                  onChange={(e) => setFormData({ ...formData, format: e.target.value, type: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    fontSize: '0.85rem',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '4px',
                    backgroundColor: '#F9FBFC',
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', marginBottom: '0.3rem' }}>
                    File Size
                  </label>
                  <input
                    type="text"
                    value={formData.fileSize}
                    onChange={(e) => setFormData({ ...formData, fileSize: e.target.value })}
                    placeholder="e.g. 1.4 MB"
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
                    Reading Time
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="e.g. 8 min read"
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

              {/* Uploader */}
              <ImageUploader
                value={formData.coverImage}
                onChange={(url) => setFormData({ ...formData, coverImage: url })}
                label="Upload Cover Picture"
              />

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
        <Link href="/admin/resources" className="btn btn-secondary" style={{ padding: '0.55rem 0.85rem', fontSize: '0.8rem' }}>
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
          <span>{saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Publish Resource'}</span>
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

export default function ResourceEditorPage() {
  return (
    <Suspense fallback={<div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)' }}>Loading editor...</div>}>
      <ResourceEditorForm />
    </Suspense>
  );
}
