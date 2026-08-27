'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, Loader2, Download, Trash2, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/AdminToast';

export default function DocumentUploader({ value, onChange, onSizeDetected, label = 'Upload Your File (PDF, Word, Excel, ZIP)' }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState('');
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

      const cleanOriginalName = data.originalName || file.name;
      setFileName(cleanOriginalName);
      onChange(data.url);

      if (onSizeDetected && data.formattedSize) {
        onSizeDetected(data.formattedSize);
      }

      addToast({
        type: 'success',
        title: 'File Uploaded',
        message: `${cleanOriginalName} (${data.formattedSize || 'Ready'}) stored on ${data.provider === 'cloudinary' ? 'Cloudinary CDN' : 'Local Storage'}.`,
      });
    } catch (err) {
      const errMsg = err.message || 'Error uploading document';
      setError(errMsg);
      addToast({
        type: 'error',
        title: 'Upload Error',
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

  const isUploaded = Boolean(value && value !== '#' && value !== '');

  const getDisplayFileName = () => {
    if (fileName) return fileName;
    if (!value || value === '#') return 'Document File';
    try {
      const parts = value.split('/');
      const last = parts[parts.length - 1];
      return decodeURIComponent(last.split('?')[0]);
    } catch {
      return 'Attached Document';
    }
  };

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

      {/* Active File State Card */}
      {isUploaded && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.85rem 1rem',
            backgroundColor: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(34, 197, 94, 0.35)',
            borderRadius: '4px',
            marginBottom: '0.75rem',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', minWidth: 0, flex: 1 }}>
            <FileText size={22} color="#16A34A" style={{ flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '280px' }}>
                {getDisplayFileName()}
              </div>
              <span style={{ fontSize: '0.72rem', color: '#16A34A', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <CheckCircle2 size={12} />
                <span>Active download asset wired</span>
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.75rem',
                fontSize: '0.78rem',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                borderRadius: '3px',
                color: 'var(--text-deep-blue)',
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              <Download size={13} />
              <span>Test Download</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onChange('#');
                setFileName('');
                addToast({
                  type: 'info',
                  title: 'File Removed',
                  message: 'Attached download file unlinked from this resource.',
                });
              }}
              style={{
                background: 'none',
                border: '1px solid rgba(201, 59, 43, 0.2)',
                borderRadius: '3px',
                cursor: 'pointer',
                color: 'var(--accent-red)',
                padding: '0.4rem 0.5rem',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
              }}
              title="Remove file"
            >
              <Trash2 size={15} />
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
            <Loader2 size={26} style={{ animation: 'spin 1s linear infinite' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Uploading file to secure cloud... please wait</span>
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
