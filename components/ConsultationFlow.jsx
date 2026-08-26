'use client';

import React, { useState } from 'react';
import { Check, Calendar, Clock, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function ConsultationFlow({ preselectedServiceId = '' }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: preselectedServiceId || 'business-coaching',
    customTopic: '',
    selectedDate: '2026-09-08',
    selectedTime: '10:00 AM EST',
    duration: '45-minute strategic consultation',
    name: '',
    email: '',
    phone: '',
    context: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableDates = [
    { label: 'Tue, Sep 8', value: '2026-09-08' },
    { label: 'Thu, Sep 10', value: '2026-09-10' },
    { label: 'Mon, Sep 14', value: '2026-09-14' },
    { label: 'Wed, Sep 16', value: '2026-09-16' },
    { label: 'Fri, Sep 18', value: '2026-09-18' },
  ];

  const availableTimes = [
    '09:00 AM EST',
    '10:30 AM EST',
    '01:00 PM EST',
    '03:00 PM EST',
    '04:30 PM EST',
  ];

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (step === 1 && !formData.serviceId) return;
    if (step === 2 && (!formData.selectedDate || !formData.selectedTime)) return;
    if (step === 3) {
      if (!formData.name || !formData.email) return;
      setIsSubmitted(true);
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  if (isSubmitted) {
    return (
      <div className="editorial-card-pad" style={{ backgroundColor: 'var(--bg-paper)', border: '1px solid var(--border-subtle)', maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--bg-mist)', color: 'var(--accent-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem auto' }}>
          <Check size={24} />
        </div>
        <span className="editorial-stamp" style={{ marginBottom: '1rem' }}>CONVERSATION REQUESTED</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: 'var(--text-ink)', marginBottom: '1rem' }}>
          Your Consultation is Requested
        </h2>
        <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
          Thank you, <strong>{formData.name}</strong>. We have reserved your requested appointment window on <strong>{formData.selectedDate} at {formData.selectedTime}</strong> regarding <em>{servicesData.find(s => s.id === formData.serviceId)?.title || 'Advisory'}</em>. Wild Mac will review your context and send a confirmation directly to <strong>{formData.email}</strong>.
        </p>
        <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-ivory)', border: '1px solid var(--border-subtle)', marginBottom: '2rem', textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <div style={{ fontWeight: 600, color: 'var(--text-navy)', marginBottom: '0.4rem' }}>Preparation Note:</div>
          <div>Please ensure you have a quiet, uninterrupted space for the call. We look forward to an unhurried, meaningful conversation.</div>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
          className="btn btn-secondary"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-paper)', border: '1px solid var(--border-subtle)', maxWidth: '780px', margin: '0 auto', boxShadow: 'var(--shadow-subtle)' }}>
      {/* Progress Header */}
      <div className="editorial-card-pad-md" style={{ borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', backgroundColor: 'var(--bg-cream)' }}>
        <div>
          <span className="editorial-stamp">STEP 0{step} OF 03</span>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-ink)', marginTop: '0.25rem' }}>
            {step === 1 && "Select the Nature of Conversation"}
            {step === 2 && "Choose Date & Time Window"}
            {step === 3 && "Share Your Context & Details"}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              style={{
                width: '28px',
                height: '4px',
                backgroundColor: s <= step ? 'var(--accent-red)' : 'var(--border-medium)',
                transition: 'background-color var(--transition-fast)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="editorial-card-pad">
        {/* Step 1: Nature of Conversation */}
        {step === 1 && (
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Select the primary area of inquiry. Every consultation is an unhurried, private conversation tailored to your specific circumstances.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2rem' }}>
              {servicesData.map((service) => (
                <label
                  key={service.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    border: '1px solid',
                    borderColor: formData.serviceId === service.id ? 'var(--text-navy)' : 'var(--border-medium)',
                    backgroundColor: formData.serviceId === service.id ? 'var(--bg-mist)' : 'var(--bg-paper)',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <input
                    type="radio"
                    name="serviceId"
                    value={service.id}
                    checked={formData.serviceId === service.id}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    style={{ marginTop: '0.25rem', accentColor: 'var(--accent-red)' }}
                  />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-sans)', color: 'var(--accent-red)', fontWeight: 600 }}>{service.number}</span>
                      <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-navy)' }}>{service.title}</strong>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      {service.subtitle}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Consultations are conducted virtually. Select an appointment slot that fits your schedule.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <Calendar size={15} />
                <span>Select Date</span>
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '0.65rem' }}>
                {availableDates.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedDate: d.value })}
                    style={{
                      padding: '0.75rem 0.5rem',
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: formData.selectedDate === d.value ? 'var(--text-navy)' : 'var(--border-medium)',
                      backgroundColor: formData.selectedDate === d.value ? 'var(--text-navy)' : 'var(--bg-paper)',
                      color: formData.selectedDate === d.value ? 'var(--bg-ivory)' : 'var(--text-navy)',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <Clock size={15} />
                <span>Select Time Slot</span>
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '0.65rem' }}>
                {availableTimes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedTime: t })}
                    style={{
                      padding: '0.75rem 0.5rem',
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: formData.selectedTime === t ? 'var(--text-navy)' : 'var(--border-medium)',
                      backgroundColor: formData.selectedTime === t ? 'var(--text-navy)' : 'var(--bg-paper)',
                      color: formData.selectedTime === t ? 'var(--bg-ivory)' : 'var(--text-navy)',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact & Context */}
        {step === 3 && (
          <form onSubmit={handleNext}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Please provide your details and a brief note about what you would like to discuss so we can prepare thoughtfully.
            </p>

            <div className="form-split-grid" style={{ marginBottom: '1.25rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Phone or Location (Optional)</label>
              <input
                type="text"
                placeholder="e.g. +1 (555) 000-0000 or City, Country"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Context / What would you like to explore? (Optional)</label>
              <textarea
                placeholder="Share any background, questions, or specific challenges you wish to examine during our conversation..."
                value={formData.context}
                onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                className="form-textarea"
                rows={4}
              />
            </div>
          </form>
        )}

        {/* Action Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '1rem' }}>
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="btn btn-secondary"
              style={{ gap: '0.4rem' }}
            >
              <ArrowLeft size={15} />
              <span>Back</span>
            </button>
          ) : <div />}

          <button
            type="button"
            onClick={handleNext}
            className="btn btn-primary"
            style={{ gap: '0.5rem' }}
          >
            <span>{step === 3 ? 'Confirm & Book Consultation' : 'Continue'}</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
