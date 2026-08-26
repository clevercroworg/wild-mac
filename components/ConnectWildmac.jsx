'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function ConnectWildmac() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: 'Business Coaching',
    preferredContact: 'Email',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.25fr)',
            gap: '4.5rem',
            alignItems: 'flex-start',
          }}
          className="connect-section-grid"
        >
          {/* Left Column: Direct Communication Statement */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">CONNECT WITH WILDMAC</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Tell Us What You Would Like to Achieve.
            </h2>

            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65, marginBottom: '2rem' }}>
              Whether you are preparing for a business crossroads, personal transition, property decision, or brand elevation, our team is ready to listen.
            </p>

            {/* Direct Contact Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-ice-blue)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="var(--accent-red)" />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    DIRECT DESK EMAIL
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--text-ink)', fontSize: '0.95rem' }}>desk@wildmac.com</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-ice-blue)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={18} color="var(--accent-red)" />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    WHATSAPP DIRECT
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--text-ink)', fontSize: '0.95rem' }}>+1 (800) WILD-MAC</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-ice-blue)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={18} color="var(--accent-red)" />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    RESPONSE STANDARD
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--text-ink)', fontSize: '0.95rem' }}>Within 24–48 Business Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div
            style={{
              backgroundColor: 'var(--bg-paper-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              padding: '2.5rem 2.25rem',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--bg-ice-blue)', color: 'var(--accent-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <CheckCircle2 size={24} />
                </div>
                <span className="editorial-stamp" style={{ marginBottom: '1rem' }}>ENQUIRY RECEIVED</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-ink)', marginBottom: '1rem' }}>
                  Thank You for Reaching Out
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                  Your enquiry has been dispatched to Wildmac. A member of our strategic team will connect with you via your preferred channel.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', serviceRequired: 'Business Coaching', preferredContact: 'Email', message: '' });
                  }}
                  className="btn btn-secondary"
                >
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <span className="editorial-stamp">CONFIDENTIAL ENQUIRY FORM</span>
                </div>

                <div className="form-split-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Rodney Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-split-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number (Optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredContact">Preferred Contact Method</label>
                    <select
                      id="preferredContact"
                      value={formData.preferredContact}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                      className="form-select"
                    >
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone Call">Phone Call</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="serviceRequired">Service or Inquiry Focus</label>
                  <select
                    id="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="form-select"
                  >
                    <option value="Business Coaching">Business Coaching</option>
                    <option value="Life Coaching">Life Coaching</option>
                    <option value="Real Estate">Real Estate Strategy</option>
                    <option value="Investment Strategy">Investment Strategy</option>
                    <option value="Branding and Digital Marketing">Branding & Digital Marketing</option>
                    <option value="Book-Related Enquiry">Book-Related Enquiry</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">How Can We Support You?</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Share your goals, challenges, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '0.95rem', gap: '0.5rem' }}
                >
                  <span>Submit Enquiry</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .connect-section-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
