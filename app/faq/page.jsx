'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ArrowRight,
  BookOpen,
  Briefcase,
  Users,
  Compass,
  CreditCard,
} from 'lucide-react';
import MajorConsultationCTA from '@/components/MajorConsultationCTA';

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'advisory', label: 'Advisory & Consultations', icon: Briefcase },
  { id: 'books', label: 'Books & Literature', icon: BookOpen },
  { id: 'disciplines', label: 'Practice Disciplines', icon: Compass },
  { id: 'community', label: 'Community & Future Projects', icon: Users },
  { id: 'payments', label: 'Payments & Logistics', icon: CreditCard },
];

const FAQ_DATA = [
  // Advisory & Consultations
  {
    category: 'advisory',
    question: 'How do I book a consultation with Rodney Almeida?',
    answer: 'You can book directly through our interactive consultation page (/consultation). Select your preferred discipline (Business, Life, Real Estate, Wealth, Engineering, or Branding), choose an available date and time slot, and submit your context summary. You will receive a direct confirmation with meeting credentials.',
  },
  {
    category: 'advisory',
    question: 'What happens during a 1-on-1 strategy session?',
    answer: 'Every session is an unhurried, direct, and confidential dialogue. Prior to our call, Rodney reviews your background notes or proposals. During the session, we identify core bottlenecks, untangle emotional noise from commercial realities, and build actionable decision frameworks. Following the session, you receive a concise written action brief.',
  },
  {
    category: 'advisory',
    question: 'Are sessions conducted online or in person?',
    answer: 'Most global clients connect via secure high-definition video (Google Meet or Zoom). In-person consultations are available by prior appointment at the private estate study in Caranzalem, Goa, India.',
  },
  {
    category: 'advisory',
    question: 'How is client confidentiality protected?',
    answer: 'Strict discretion is fundamental to our practice. We never disclose client identities, commercial proprietary data, financial figures, or personal dilemmas without explicit written consent.',
  },

  // Books & Literature
  {
    category: 'books',
    question: 'What books has Rodney Almeida authored?',
    answer: 'Rodney has authored four celebrated works: "A Letter To My Daughter" (reflections on wisdom, character, and love), "The Path of Purpose" (uncovering authentic direction and alignment), "The Sacred Path" (internal discipline and presence), and "Financial Literacy" (foundational wealth stewardship and capital sovereignty).',
  },
  {
    category: 'books',
    question: 'Where can I acquire physical copies or digital editions?',
    answer: 'You can browse full chapter excerpts, author commentaries, and acquisition options on our dedicated Bookshelf page (/books) or through major global distributors and bookstores.',
  },
  {
    category: 'books',
    question: 'Are signed or limited-edition copies available?',
    answer: 'Yes, personalized and signed hardcover editions can be requested directly via our contact page for personal libraries and executive gifting.',
  },

  // Practice Disciplines
  {
    category: 'disciplines',
    question: 'What is the scope of Engineering & Technical Advisory?',
    answer: 'Our Engineering Advisory practice provides independent, high-judgment oversight for complex builds, structural feasibility, contractor estimation audits, and infrastructure planning. It combines first-principles technical analysis with seasoned project governance.',
  },
  {
    category: 'disciplines',
    question: 'How does Wealth Management & Capital Stewardship work at Wildmac?',
    answer: 'We provide objective, fiduciary-minded perspective on long-term capital allocation, risk-adjusted defensive positioning, and generational estate preservation. We do not sell speculative products or take trading commissions—our guidance is 100% independent.',
  },
  {
    category: 'disciplines',
    question: 'Can I discuss multiple disciplines in a single advisory session?',
    answer: 'Yes. Most real-world challenges span across boundaries—such as business transitions impacting personal life, or property investments connecting to overall wealth architecture. Our holistic approach accommodates multi-disciplinary inquiry.',
  },

  // Community & Future Projects
  {
    category: 'community',
    question: 'What is the Wildmac Community Forum?',
    answer: 'The Wildmac Forum (/community) is a private, spam-free discussion space where founders, builders, and readers engage in high-judgment conversations across dedicated channels including #founders-strategy, #unhurried-living, and #wealth-real-estate.',
  },
  {
    category: 'community',
    question: 'What are the upcoming Future Projects?',
    answer: 'Our Future Projects (/future-projects) initiative is establishing physical learning centers, vocational leadership academies, and heritage research fellowships across Goa to mentor emerging founders and young artisans with free access to wisdom and education.',
  },

  // Payments & Logistics
  {
    category: 'payments',
    question: 'What payment methods do you accept?',
    answer: 'We support official Indian UPI (Google Pay, PhonePe, Paytm at almeida.mac6-1@okaxis), National Electronic Fund Transfers (NEFT/RTGS), and International Wire Transfers.',
  },
  {
    category: 'payments',
    question: 'Do you provide commercial tax invoices for businesses?',
    answer: 'Yes, full commercial tax invoices with GST credentials are provided for all corporate coaching, strategic consulting, and technical advisory engagements.',
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleAccordion = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* -------------------------------------------------------------
          01 — FAQ HERO
          ------------------------------------------------------------- */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-paper-white)',
          paddingTop: '4rem',
          paddingBottom: '3.5rem',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="editorial-stamp">KNOWLEDGE BASE & INQUIRIES</span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.12,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              Frequently Asked Questions
            </h1>
            <p className="lead" style={{ color: 'var(--text-deep-blue)', lineHeight: 1.65, margin: '0 auto 2rem auto', maxWidth: '640px' }}>
              Everything you need to know about our advisory engagements, books, practice disciplines, community forum, and booking logistics.
            </p>

            {/* Search Bar */}
            <div style={{ position: 'relative', maxWidth: '520px', margin: '0 auto' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. pricing, books, real estate, goa)..."
                style={{
                  width: '100%',
                  padding: '0.85rem 1.25rem 0.85rem 2.8rem',
                  fontSize: '0.95rem',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '4px',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-ink)',
                  outline: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  boxSizing: 'border-box',
                }}
              />
              <Search
                size={18}
                color="var(--text-light)"
                style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          02 — CATEGORY FILTER PILLS & ACCORDION
          ------------------------------------------------------------- */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-ice-blue)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            {/* Category Pills */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '3rem',
              }}
            >
              {FAQ_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.55rem 1rem',
                      borderRadius: '4px',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 650 : 500,
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--accent-red)' : 'var(--border-medium)',
                      backgroundColor: isActive ? 'var(--accent-red)' : 'var(--bg-pure-white)',
                      color: isActive ? '#FFFFFF' : 'var(--text-deep-blue)',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <Icon size={14} color={isActive ? '#FFFFFF' : 'var(--accent-red)'} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Accordion List */}
            {filteredFaqs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--bg-pure-white)', borderRadius: '6px', border: '1px solid var(--border-medium)' }}>
                <HelpCircle size={36} color="var(--text-light)" style={{ margin: '0 auto 0.75rem auto', opacity: 0.5 }} />
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-ink)', margin: 0 }}>No questions matched your search</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>
                  Try a different search term or contact us directly below.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndices.includes(idx);
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: 'var(--bg-pure-white)',
                        border: isOpen ? '1px solid var(--text-deep-blue)' : '1px solid var(--border-medium)',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        transition: 'all var(--transition-fast)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                        style={{
                          width: '100%',
                          padding: '1.25rem 1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          gap: '1rem',
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.12rem', fontWeight: 650, color: 'var(--text-ink)', lineHeight: 1.4 }}>
                          {faq.question}
                        </span>
                        <span style={{ color: isOpen ? 'var(--accent-red)' : 'var(--text-light)', flexShrink: 0 }}>
                          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          style={{
                            padding: '0 1.5rem 1.5rem 1.5rem',
                            fontSize: '0.92rem',
                            color: 'var(--text-deep-blue)',
                            lineHeight: 1.7,
                            borderTop: '1px solid var(--border-subtle)',
                            paddingTop: '1rem',
                          }}
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Still Have a Question? Card */}
            <div
              style={{
                marginTop: '3.5rem',
                backgroundColor: 'var(--bg-paper-white)',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '2.25rem 2rem',
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
                <MessageCircle size={32} color="var(--accent-red)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-ink)', margin: 0, fontWeight: 700 }}>
                Still Have a Specific Question?
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-deep-blue)', maxWidth: '520px', margin: '0.5rem auto 1.5rem auto', lineHeight: 1.6 }}>
                We are happy to answer any specific inquiries regarding your organization, property evaluation, or personal advisory requirements.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                  <span>Contact Our Office</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/919657080490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-editorial"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Flow */}
      <MajorConsultationCTA />
    </>
  );
}
