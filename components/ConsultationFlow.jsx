'use client';

import React, { useState } from 'react';
import { Check, Calendar, Clock, User, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
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
      <div
        style={{
          backgroundColor: 'var(--bg-pure-white)',
          border: '1px solid var(--border-medium)',
          borderRadius: '2px',
          padding: '3rem 2.5rem',
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
          boxShadow: 'var(--shadow-subtle)',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: 'var(--bg-ice-blue)',
            color: 'var(--accent-red)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
          }}
        >
          <CheckCircle2 size={26} />
        </div>
        <span className="editorial-stamp" style={{ marginBottom: '0.75rem' }}>CONVERSATION REQUESTED</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--text-ink)', marginBottom: '1rem' }}>
          Your Consultation is Reserved
        </h2>
        <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
          Thank you, <strong>{formData.name}</strong>. We have reserved your requested appointment window on <strong>{formData.selectedDate} at {formData.selectedTime}</strong> regarding <em>{servicesData.find(s => s.id === formData.serviceId)?.title || 'Advisory'}</em>. A confirmation has been dispatched to <strong>{formData.email}</strong>.
        </p>
        <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-paper-white)', border: '1px solid var(--border-subtle)', marginBottom: '2rem', textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-muted)', borderRadius: '2px' }}>
          <div style={{ fontWeight: 600, color: 'var(--text-deep-blue)', marginBottom: '0.4rem' }}>Preparation Note:</div>
          <div>Please ensure you have a quiet, uninterrupted space for the video call. We look forward to an unhurried, meaningful conversation.</div>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
          className="btn btn-secondary"
        >
          <span>Book Another Session</span>
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-pure-white)',
        border: '1px solid var(--border-medium)',
        borderRadius: '2px',
        maxWidth: '780px',
        margin: '0 auto',
        boxShadow: 'var(--shadow-subtle)',
        overflow: 'hidden',
      }}
    >
      {/* Progress Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          backgroundColor: 'var(--bg-ice-blue)',
          padding: '1.5rem 2rem',
        }}
      >
        <div>
          <span className="editorial-stamp">STEP 0{step} OF 03</span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 650, color: 'var(--text-ink)', marginTop: '0.25rem' }}>
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
                backgroundColor: s <= step ? 'var(--accent-red)' : 'var(--border-strong)',
                borderRadius: '1px',
                transition: 'background-color var(--transition-fast)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Step Content Form */}
      <div style={{ padding: '2.5rem 2rem' }}>
        {/* Step 1: Select Service Area */}
        {step === 1 && (
          <div>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Select the primary area of focus for our conversation:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {servicesData.map((service) => (
                <label
                  key={service.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid',
                    borderColor: formData.serviceId === service.id ? 'var(--text-deep-blue)' : 'var(--border-subtle)',
                    backgroundColor: formData.serviceId === service.id ? 'var(--bg-ice-blue)' : 'var(--bg-paper-white)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-red)' }}>
                        {service.number}
                      </span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 650, fontSize: '1.1rem', color: 'var(--text-ink)' }}>
                        {service.title}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
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
            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Consultations are conducted virtually via confidential video conference. Select your preferred appointment window:
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <Calendar size={14} color="var(--accent-red)" />
                <span>Select Date</span>
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(115px, 1fr))', gap: '0.65rem' }}>
                {availableDates.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedDate: d.value })}
                    style={{
                      padding: '0.85rem 0.5rem',
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: formData.selectedDate === d.value ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                      backgroundColor: formData.selectedDate === d.value ? 'var(--text-deep-blue)' : 'var(--bg-pure-white)',
                      color: formData.selectedDate === d.value ? '#FFFFFF' : 'var(--text-deep-blue)',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <Clock size={14} color="var(--accent-red)" />
                <span>Select Time Slot</span>
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '0.65rem' }}>
                {availableTimes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedTime: t })}
                    style={{
                      padding: '0.85rem 0.5rem',
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: formData.selectedTime === t ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                      backgroundColor: formData.selectedTime === t ? 'var(--text-deep-blue)' : 'var(--bg-pure-white)',
                      color: formData.selectedTime === t ? '#FFFFFF' : 'var(--text-deep-blue)',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'all var(--transition-fast)',
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
            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Please provide your contact details and a brief note about what you would like to achieve so we can prepare thoughtfully:
            </p>

            <div className="form-split-grid" style={{ marginBottom: '1.25rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="flow-name">Full Name *</label>
                <input
                  id="flow-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="flow-email">Email Address *</label>
                <input
                  id="flow-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label" htmlFor="flow-phone">Phone Number (Optional)</label>
              <input
                id="flow-phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label className="form-label" htmlFor="flow-context">What specific challenges, crossroads, or goals would you like to discuss?</label>
              <textarea
                id="flow-context"
                rows={4}
                placeholder="Share relevant background, current constraints, or questions..."
                value={formData.context}
                onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                className="form-textarea"
              />
            </div>
          </form>
        )}

        {/* Form Navigation Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.75rem',
            marginTop: '1.5rem',
          }}
        >
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="btn btn-secondary"
              style={{ padding: '0.85rem 1.5rem', gap: '0.45rem' }}
            >
              <ArrowLeft size={14} />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={handleNext}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.85rem', gap: '0.5rem' }}
          >
            <span>{step === 3 ? "Submit Reservation" : "Continue to Step 0" + (step + 1)}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
