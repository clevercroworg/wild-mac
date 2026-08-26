'use client';

import React, { useState } from 'react';
import { Mail, Check, ArrowRight, MapPin, Send } from 'lucide-react';
import EditorialQuote from '@/components/EditorialQuote';
import Newsletter from '@/components/Newsletter';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'General enquiry',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <>
      {/* ===================================================================
          HERO TYPE C: CONTACT — "START A CONVERSATION"
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          minHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="editorial-stamp" style={{ letterSpacing: '0.15em' }}>
                  WM / CONTACT // DIRECT CORRESPONDENCE
                </span>
              </div>

              <h1
                style={{
                  marginBottom: '1.75rem',
                  lineHeight: '1.08',
                  fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)',
                  color: 'var(--text-ink)',
                  letterSpacing: '-0.02em',
                }}
              >
                Start a<br />
                conversation.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--text-deep-blue)', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                For editorial inquiries, book inquiries, speaking requests, or advisory questions.
              </p>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2rem' }}>
                Every message is received directly. We do not use automated replies or synthetic filters; thoughtful correspondence receives a thoughtful response.
              </p>

              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.88rem', color: 'var(--text-deep-blue)', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    DIRECT DESK EMAIL
                  </span>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>desk@wildmac.com</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    RESPONSE TIME
                  </span>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Within 48 Business Hours</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div
                className="editorial-card-pad"
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--bg-ice-blue)', color: 'var(--accent-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                      <Check size={24} />
                    </div>
                    <span className="editorial-stamp" style={{ marginBottom: '1rem' }}>MESSAGE RECEIVED</span>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-ink)', marginBottom: '1rem' }}>
                      Thank You for Reaching Out
                    </h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                      Your dispatch has reached the desk of Wild Mac. You will receive a personal reply shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', reason: 'General enquiry', subject: '', message: '' });
                      }}
                      className="btn btn-secondary"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                      <span className="editorial-stamp">DIRECT DISPATCH FORM</span>
                    </div>

                    <div className="form-split-grid">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">Your Full Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="form-input"
                          placeholder="e.g. Thomas Carlyle"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-input"
                          placeholder="name@domain.com"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-reason">Nature of Inquiry</label>
                      <select
                        id="contact-reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="form-select"
                      >
                        <option value="General enquiry">General inquiry / reader note</option>
                        <option value="Book order or publishing">Book rights & publishing inquiry</option>
                        <option value="Advisory or coaching consultation">Advisory or coaching consultation</option>
                        <option value="Speaking or interviews">Speaking or interview request</option>
                        <option value="Other">Other correspondence</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Your Message</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-textarea"
                        placeholder="Write your reflection, question, or proposal..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.95rem 1.5rem' }}>
                      <span>Send Dispatch</span>
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <EditorialQuote
        quote="Every honest letter deserves a quiet read and a deliberate reply."
        attribution="Wild Mac"
        subtitle="CORRESPONDENCE"
      />

      <Newsletter />
    </>
  );
}
