'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, Image as ImageIcon, Trash2 } from 'lucide-react';
import { useToast } from '@/components/AdminToast';

export default function ImageUploader({ value, onChange, label = 'Cover Picture' }) {
  const [uploading, setUploading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const { addToast } = useToast();

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
      setImageLoading(true);

      addToast({
        type: 'success',
        title: 'Image Uploaded',
        message: `Cover image stored on ${data.provider === 'cloudinary' ? 'Cloudinary CDN' : 'Local Storage'}.`,
      });
    } catch (err) {
      const errMsg = err.message || 'Error uploading image';
      setError(errMsg);
      addToast({
        type: 'error',
        title: 'Upload Failed',
        message: errMsg,
      });
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
          Upload an image from your computer or pick from presets below
        </span>
      </div>

      {/* Image Preview Box with Smooth Blur Transition */}
      {value && (
        <div
          style={{
            position: 'relative',
            height: '150px',
            width: '100%',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '0.75rem',
            border: '1px solid var(--border-medium)',
            backgroundColor: '#0F1722',
          }}
        >
          <img
            src={value}
            alt="Uploaded Preview"
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoading(false)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'filter 0.3s ease, opacity 0.3s ease',
              filter: imageLoading ? 'blur(8px)' : 'none',
              opacity: imageLoading ? 0.6 : 1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '0.6rem',
              left: '0.6rem',
              backgroundColor: 'rgba(17, 24, 32, 0.85)',
              backdropFilter: 'blur(6px)',
              color: '#FFFFFF',
              padding: '0.25rem 0.65rem',
              borderRadius: '3px',
              fontSize: '0.72rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <CheckCircle2 size={13} color="#22C55E" />
            <span>Active Cover Picture</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onChange('');
              addToast({
                type: 'info',
                title: 'Cover Picture Removed',
                message: 'Cleared cover picture selection.',
              });
            }}
            style={{
              position: 'absolute',
              top: '0.6rem',
              right: '0.6rem',
              backgroundColor: 'rgba(17, 24, 32, 0.85)',
              border: 'none',
              borderRadius: '3px',
              padding: '0.35rem 0.55rem',
              cursor: 'pointer',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.72rem',
            }}
            title="Remove picture"
          >
            <Trash2 size={13} color="var(--accent-red)" />
            <span>Remove</span>
          </button>
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
            <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Uploading image to cloud... please wait</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
            <UploadCloud size={24} color="var(--text-deep-blue)" />
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-ink)' }}>
              Click to choose picture or drag & drop here
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
              JPG, PNG, WebP (Max 30MB)
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
