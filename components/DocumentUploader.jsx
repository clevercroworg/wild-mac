'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, Loader2, Download, Trash2 } from 'lucide-react';

export default function DocumentUploader({ value, onChange, onSizeDetected, label = 'Upload Your File (PDF, Word, Excel, ZIP)' }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState('');
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

      setFileName(data.originalName || file.name);
      onChange(data.url);

      if (onSizeDetected && data.formattedSize) {
        onSizeDetected(data.formattedSize);
      }
    } catch (err) {
      setError(err.message || 'Error uploading document');
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

  const isUploaded = value && value !== '#' && value.startsWith('/uploads/');

  return (
    <div>
      <div style={{ marginBottom: '0.45rem' }}>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '0.15rem' }}>
          {label}
        </label>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block' }}>
          Upload the document visitors can download when they click the Download button.
        </span>
      </div>

      {/* Active File State */}
      {isUploaded && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(37, 211, 102, 0.08)',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            borderRadius: '4px',
            marginBottom: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <FileText size={20} color="#1E8E48" />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '280px' }}>
                {fileName || value.split('/').pop()}
              </div>
              <span style={{ fontSize: '0.72rem', color: '#1E8E48', fontWeight: 600 }}>
                ✓ File attached and ready for download
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a
              href={value}
              target="_blank"
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.35rem 0.65rem',
                fontSize: '0.78rem',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                borderRadius: '3px',
                color: 'var(--text-deep-blue)',
                textDecoration: 'none',
                fontWeight: 550,
              }}
            >
              <Download size={13} />
              <span>Test Download</span>
            </a>

            <button
              type="button"
              onClick={() => onChange('#')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--accent-red)',
                padding: '0.3rem',
                display: 'flex',
                alignItems: 'center',
              }}
              title="Remove file"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Drag & Drop Upload Zone */}
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
          padding: '1.5rem 1rem',
          textAlign: 'center',
          cursor: uploading ? 'wait' : 'pointer',
          transition: 'all var(--transition-fast)',
          marginBottom: '0.75rem',
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx,.doc,.xlsx,.xls,.zip,.txt,.csv,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          onChange={(e) => e.target.files && handleFile(e.target.files[0])}
          style={{ display: 'none' }}
        />

        {uploading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-red)' }}>
            <Loader2 size={24} style={{ animation: 'spin 1s linear infinite' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Uploading file... please wait</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
            <UploadCloud size={28} color="var(--text-deep-blue)" />
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-ink)' }}>
              Click to choose a file or drag & drop here
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
              Supports PDF, Word (.docx), Excel (.xlsx), ZIP (Up to 30MB)
            </span>
          </div>
        )}
      </div>

      {error && (
        <div style={{ fontSize: '0.8rem', color: 'var(--accent-red)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem' }}>
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
