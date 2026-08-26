'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, Phone, Send, CheckCircle2, MapPin, ArrowRight, ArrowUpRight, Linkedin } from 'lucide-react';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceRequired: 'General Enquiry',
    preferredContact: 'Email',
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
          01 — CONTACT HERO: DIRECT CORRESPONDENCE
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '4rem',
          paddingBottom: '4rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left: Statement & Direct Communication Details */}
            <div style={{ maxWidth: '580px' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="editorial-stamp">WILDMAC // DIRECT CORRESPONDENCE</span>
              </div>

              <h1
                style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.06',
                  fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                  color: 'var(--text-ink)',
                  letterSpacing: '-0.025em',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                }}
              >
                Tell Us What You Would Like to Achieve.
              </h1>

              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

              <p className="lead" style={{ fontSize: '1.18rem', color: 'var(--text-deep-blue)', marginBottom: '1.25rem', lineHeight: 1.65 }}>
                For business coaching, life direction, property strategy, investment education, branding inquiries, collaboration, or book-related questions.
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                Every message is reviewed directly by Rodney De Almeida. We prioritize thoughtful, unhurried correspondence and respond within 24–48 business hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.75rem' }}>
                {/* Email Direct */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', backgroundColor: 'var(--bg-ice-blue)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} color="var(--accent-red)" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      DIRECT DESK EMAILS
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.2rem' }}>
                      <a href="mailto:contactmacalmeida@gmail.com" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-ink)', textDecoration: 'none' }}>
                        contactmacalmeida@gmail.com
                      </a>
                      <a href="mailto:rodusalmeida@gmail.com" style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                        rodusalmeida@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', backgroundColor: 'rgba(37, 211, 102, 0.1)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageSquare size={18} color="#25D366" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      WHATSAPP & DIRECT PHONE
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.2rem' }}>
                      <a href="https://wa.me/919657080490" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-ink)', textDecoration: 'none' }}>
                        +91 96570 80490 <span style={{ fontSize: '0.75rem', color: '#25D366', fontFamily: 'var(--font-mono)' }}>(WhatsApp Primary)</span>
                      </a>
                      <a href="tel:+917776022622" style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                        +91 77760 22622 <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>(Direct Line)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Physical Location */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', backgroundColor: 'var(--bg-ice-blue)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} color="var(--accent-red)" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      STUDIO & RESIDENCE
                    </span>
                    <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-ink)', display: 'block', marginTop: '0.2rem' }}>
                      AG-1 Samarth Residency, Caranzalem, Goa 403002, India
                    </span>
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}>
                  <div style={{ width: '42px', height: '42px', backgroundColor: 'rgba(10, 102, 194, 0.1)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Linkedin size={18} color="#0A66C2" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      PROFESSIONAL NETWORK
                    </span>
                    <a
                      href="https://www.linkedin.com/in/rodney-de-almeida-958448409/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontWeight: 600, fontSize: '0.92rem', color: '#0A66C2', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <span>linkedin.com/in/rodney-de-almeida</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clean Minimalist Contact Form */}
            <div>
              <div
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-subtle)',
                  padding: '2.5rem 2.25rem',
                }}
              >
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--bg-ice-blue)', color: 'var(--accent-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="editorial-stamp" style={{ marginBottom: '1rem' }}>DISPATCH TRANSMITTED</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 650, color: 'var(--text-ink)', marginBottom: '1rem' }}>
                      Thank You for Reaching Out
                    </h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                      Your message has been received at Rodney Almeida’s direct desk. A response will be delivered within 24–48 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', serviceRequired: 'General Enquiry', preferredContact: 'Email', message: '' });
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
                        <label className="form-label" htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                          placeholder="+91 00000 00000"
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
                        <option value="Business Coaching">Business Coaching & Enterprise Strategy</option>
                        <option value="Life Coaching">Life Coaching & Personal Growth</option>
                        <option value="Real Estate">Real Estate & Land Advisory</option>
                        <option value="Investment Strategy">Investment Strategy & Capital Direction</option>
                        <option value="Branding and Digital Marketing">Branding, Identity & Positioning</option>
                        <option value="Book-Related Enquiry">Book-Related Enquiry & Publications</option>
                        <option value="Collaborations">National & International Collaboration</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Share your goals, requirements, or questions..."
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
        </div>
      </section>

      {/* ===================================================================
          02 — MAJOR CONSULTATION CTA
          =================================================================== */}
      <MajorConsultationCTA />
    </>
  );
}
