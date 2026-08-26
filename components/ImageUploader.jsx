'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, Image as ImageIcon } from 'lucide-react';

export default function ImageUploader({ value, onChange, label = 'Cover Picture' }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;
    setError('');
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      onChange(data.url);
    } catch (err) {
      setError(err.message || 'Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '0.45rem' }}>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.15rem' }}>
          {label}
        </label>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block' }}>
          Upload an image from your computer
        </span>
      </div>

      {/* Image Preview Box */}
      {value && (
        <div style={{ position: 'relative', height: '140px', width: '100%', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.75rem', border: '1px solid var(--border-subtle)' }}>
          <img
            src={value}
            alt="Uploaded Preview"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', backgroundColor: 'rgba(17, 24, 32, 0.85)', backdropFilter: 'blur(4px)', color: '#FFFFFF', padding: '0.2rem 0.55rem', borderRadius: '3px', fontSize: '0.72rem', fontWeight: 600 }}>
            Active Image
          </div>
        </div>
      )}

      {/* Drag & Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: '2px dashed',
          borderColor: dragOver ? 'var(--accent-red)' : 'var(--border-medium)',
          backgroundColor: dragOver ? 'rgba(201, 59, 43, 0.04)' : '#F9FBFC',
          borderRadius: '4px',
          padding: '1.25rem 1rem',
          textAlign: 'center',
          cursor: uploading ? 'wait' : 'pointer',
          transition: 'all var(--transition-fast)',
          marginBottom: '0.75rem',
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/webp, image/gif, image/svg+xml"
          onChange={(e) => e.target.files && handleFile(e.target.files[0])}
          style={{ display: 'none' }}
        />

        {uploading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-red)' }}>
            <Loader2 size={24} style={{ animation: 'spin 1s linear infinite' }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Uploading image... please wait</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
            <UploadCloud size={24} color="var(--text-deep-blue)" />
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-ink)' }}>
              Click to choose picture or drag & drop here
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
              JPG, PNG, WebP (Max 10MB)
            </span>
          </div>
        )}
      </div>

      {error && (
        <div style={{ fontSize: '0.78rem', color: 'var(--accent-red)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem' }}>
          <AlertCircle size={13} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
