'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShieldCheck, ArrowRight, Check, Copy, ExternalLink, Compass, Building, Trees, BookOpen } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedGpay, setCopiedGpay] = useState(false);

  const presetAmounts = ['500', '1000', '2500', '5000', '10000'];
  const upiId = 'almeida.mac6-1@okaxis';
  const gpayNumber = '9657080490';
  const displayGpayNumber = '+91 96570 80490';
  const payeeName = 'Rodney De Almeida';

  const amountToPay = customAmount || selectedAmount || '1000';
  const upiDeepLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amountToPay}&cu=INR&tn=${encodeURIComponent('Contribution to Wildmac Social Initiatives')}`;
  const whatsappUrl = `https://wa.me/919657080490?text=${encodeURIComponent(`Hello Rodney, I would like to contribute ₹${amountToPay} via GPay/UPI towards Wildmac social & community initiatives.`)}`;

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(e.target.value);
  };

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const copyGpay = () => {
    navigator.clipboard.writeText(gpayNumber);
    setCopiedGpay(true);
    setTimeout(() => setCopiedGpay(false), 2500);
  };

  return (
    <>
      {/* ===================================================================
          01 — HERO & WORKING OFFICIAL GPAY QR CODE SECTION
          =================================================================== */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          paddingTop: '4.5rem',
          paddingBottom: '4.5rem',
          position: 'relative',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="editorial-stamp">WILDMAC PHILANTHROPY & SOCIAL IMPACT</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                letterSpacing: '-0.025em',
                fontWeight: 700,
              }}
            >
              Support Purposeful Initiatives & Social Infrastructure.
            </h1>

            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', margin: '0 auto 1.5rem' }} />

            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.7 }}>
              Guided by Rodney De Almeida’s founding philosophy—<em>“to feed the hungry, build community sanctuaries, and educate the next generation.”</em> Every contribution directly fuels ground projects across Goa.
            </p>
          </div>

          {/* =============================================================
              TWO-COLUMN DONATION & OFFICIAL WORKING QR CODE STAGE
              ============================================================= */}
          <div
            style={{
              maxWidth: '980px',
              margin: '0 auto',
              backgroundColor: 'var(--bg-pure-white)',
              border: '1px solid var(--border-medium)',
              borderTop: '4px solid var(--accent-red)',
              borderRadius: '4px',
              boxShadow: 'var(--shadow-book)',
              padding: '2.5rem 2.25rem',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="about-split-grid"
          >
            {/* Left Column: Preset Amount Selector & Direct Details */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  STEP 01 // CHOOSE CONTRIBUTION AMOUNT
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', color: 'var(--text-ink)', margin: 0, fontWeight: 650 }}>
                  Select Contribution Tier
                </h3>
              </div>

              {/* Amount Buttons Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(85px, 1fr))', gap: '0.65rem', marginBottom: '1.25rem' }}>
                {presetAmounts.map((amt) => {
                  const isSelected = selectedAmount === amt && !customAmount;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handlePresetClick(amt)}
                      style={{
                        padding: '0.75rem 0.4rem',
                        backgroundColor: isSelected ? 'var(--text-deep-blue)' : 'var(--bg-paper-white)',
                        color: isSelected ? '#FFFFFF' : 'var(--text-deep-blue)',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--text-deep-blue)' : 'var(--border-medium)',
                        borderRadius: '2px',
                        fontSize: '1rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      ₹{Number(amt).toLocaleString('en-IN')}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount Input */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-light)' }}>
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="Enter Custom Amount in INR"
                    value={customAmount}
                    onChange={handleCustomChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem 0.85rem 2.2rem',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.95rem',
                      color: 'var(--text-ink)',
                      backgroundColor: 'var(--bg-paper-white)',
                    }}
                  />
                </div>
              </div>

              {/* Direct UPI ID & GPay Copy Fields */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {/* UPI ID Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>
                    OFFICIAL UPI ID (All UPI Apps)
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ flex: 1, backgroundColor: 'var(--bg-paper-white)', border: '1px solid var(--border-medium)', borderRadius: '2px', padding: '0.65rem 0.85rem', fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: 'var(--text-ink)', fontWeight: 650 }}>
                      {upiId}
                    </div>
                    <button
                      type="button"
                      onClick={copyUpi}
                      style={{
                        backgroundColor: copiedUpi ? '#25D366' : 'var(--text-deep-blue)',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '2px',
                        padding: '0.65rem 0.95rem',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      {copiedUpi ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedUpi ? 'COPIED' : 'COPY UPI'}</span>
                    </button>
                  </div>
                </div>

                {/* GPay Number Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>
                    GOOGLE PAY (GPAY) NUMBER
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ flex: 1, backgroundColor: 'var(--bg-paper-white)', border: '1px solid var(--border-medium)', borderRadius: '2px', padding: '0.65rem 0.85rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: '#1B873F', fontWeight: 700 }}>
                      {displayGpayNumber}
                    </div>
                    <button
                      type="button"
                      onClick={copyGpay}
                      style={{
                        backgroundColor: copiedGpay ? '#25D366' : 'var(--text-deep-blue)',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '2px',
                        padding: '0.65rem 0.95rem',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      {copiedGpay ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedGpay ? 'COPIED' : 'COPY GPAY'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Confirmation Button */}
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.88rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', borderColor: '#25D366', color: 'var(--text-ink)' }}
                >
                  <WhatsAppIcon size={16} color="#25D366" />
                  <span>Notify Rodney on WhatsApp for ₹{Number(amountToPay).toLocaleString('en-IN')}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Official Working Google Pay QR Code Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-paper-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '1.75rem 1.25rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(201, 59, 43, 0.08)', borderRadius: '2px', color: 'var(--accent-red)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '1rem' }}>
                <Heart size={12} fill="var(--accent-red)" />
                <span>OFFICIAL VERIFIED QR SCANNER</span>
              </div>

              {/* Authentic Google Pay QR Code Display */}
              <div
                style={{
                  maxWidth: '300px',
                  margin: '0 auto 1.25rem auto',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <img
                  src="/images/gpay-qr-code.png"
                  alt="Official Rodney De Almeida Google Pay QR Code"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>

              {/* Direct UPI App Trigger (Mobile Friendly) */}
              <a
                href={upiDeepLink}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
              >
                <span>Tap to Pay ₹{Number(amountToPay).toLocaleString('en-IN')} in UPI App</span>
                <ExternalLink size={14} />
              </a>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', marginTop: '0.85rem' }}>
                <ShieldCheck size={13} color="#25D366" />
                <span>Works with GPay, PhonePe, Paytm, BHIM & all UPI apps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 — DEDICATED LINK TO FUTURE PROJECTS ROADMAP PAGE
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-pure-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--bg-paper-white)',
              border: '1px solid var(--border-medium)',
              borderLeft: '4px solid var(--accent-red)',
              borderRadius: '3px',
              padding: '2.25rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              boxShadow: 'var(--shadow-subtle)',
            }}
            className="card-interactive"
          >
            <div style={{ maxWidth: '640px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <span className="editorial-stamp">WHERE YOUR CONTRIBUTION GOES</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', color: 'var(--text-ink)', margin: '0 0 0.5rem 0', fontWeight: 650 }}>
                Explore the Future Projects & Sanctuaries Roadmap.
              </h2>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-deep-blue)', margin: 0, lineHeight: 1.65 }}>
                Discover the architectural blueprints and ground milestones for the Cancona Ashram Retreat, Taleigao Elder Haven, Caranzalem Permaculture Hub, and Subsidized Literature programs.
              </p>
            </div>

            <Link href="/future-projects" className="btn btn-primary" style={{ padding: '0.85rem 1.6rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
              <span>View Future Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 — PHILOSOPHY OF GIVING
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">THE ETHICS OF PURPOSE</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}
            >
              “My philosophy is simple: to feed the hungry, build enduring sanctuaries, and share knowledge that empowers.”
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-deep-blue)', marginBottom: '1.5rem' }}>
              — <strong>Rodney Meck De Almeida</strong>, Founder of Wildmac
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontFamily: 'var(--font-mono)', color: 'var(--text-deep-blue)', backgroundColor: 'var(--bg-pure-white)', padding: '0.65rem 1.25rem', borderRadius: '2px', border: '1px solid var(--border-medium)' }}>
              <span>UPI ID:</span>
              <strong style={{ color: '#1B873F', fontSize: '1rem' }}>almeida.mac6-1@okaxis</strong>
            </div>
          </div>
        </div>
      </section>

      <MajorConsultationCTA />
    </>
  );
}
