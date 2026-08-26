'use client';

import React, { useState } from 'react';
import { X, Check, Copy, ShieldCheck, Heart, ArrowRight, ExternalLink } from 'lucide-react';

export default function DonationUPIModal({ isOpen, onClose, selectedAmount }) {
  const [copied, setCopied] = useState(false);
  const upiId = 'rodneyalmeida@okaxis'; // Official UPI ID
  const payeeName = 'WILDMAC / Rodney Almeida';
  const amount = selectedAmount || '1000';

  // UPI deep link URL format
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent('Contribution to Wildmac Social Initiatives')}`;
  
  // High-res QR code API generator
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiUrl)}&margin=8`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(17, 24, 32, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-pure-white)',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
          maxWidth: '480px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem 1.75rem',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-ice-blue)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px',
            padding: '0.4rem',
            cursor: 'pointer',
            color: 'var(--text-ink)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(201, 59, 43, 0.08)', borderRadius: '2px', color: 'var(--accent-red)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.75rem' }}>
            <Heart size={12} fill="var(--accent-red)" />
            <span>SUPPORT PHILANTHROPIC INITIATIVES</span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', color: 'var(--text-ink)', margin: '0 0 0.4rem 0', fontWeight: 650 }}>
            Donate via Instant UPI
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
            Contribution Amount: <strong style={{ color: 'var(--text-ink)', fontSize: '1.05rem' }}>₹{Number(amount).toLocaleString('en-IN')}</strong>
          </p>
        </div>

        {/* High-Resolution QR Code Plate */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'var(--bg-paper-white)', padding: '1.25rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-medium)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)', marginBottom: '0.75rem' }}>
            <img
              src={qrCodeUrl}
              alt="Wildmac UPI QR Code"
              width={200}
              height={200}
              style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
            <ShieldCheck size={14} color="#25D366" />
            <span>Scan with GPay, PhonePe, Paytm, BHIM or any UPI App</span>
          </div>
        </div>

        {/* UPI ID Copy Field */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
            Direct UPI ID
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ flex: 1, backgroundColor: 'var(--bg-paper-white)', border: '1px solid var(--border-medium)', borderRadius: '2px', padding: '0.65rem 0.85rem', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--text-ink)', fontWeight: 600 }}>
              {upiId}
            </div>
            <button
              type="button"
              onClick={copyToClipboard}
              style={{
                backgroundColor: copied ? '#25D366' : 'var(--text-deep-blue)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '2px',
                padding: '0.65rem 1rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all var(--transition-fast)',
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>
          </div>
        </div>

        {/* Direct Mobile UPI App Triggers */}
        <div className="visible-mobile" style={{ marginBottom: '1.25rem' }}>
          <a
            href={upiUrl}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
          >
            <span>Open in UPI App Directly</span>
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Direct Bank Account Transfer Option */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <div style={{ fontWeight: 600, color: 'var(--text-ink)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            BANK NEFT / RTGS TRANSFER
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.76rem' }}>
            <div><strong>Account:</strong> Rodney Almeida</div>
            <div><strong>Bank:</strong> Axis Bank</div>
            <div><strong>A/C No:</strong> 921020038912345</div>
            <div><strong>IFSC:</strong> UTIB0000123</div>
          </div>
        </div>
      </div>
    </div>
  );
}
