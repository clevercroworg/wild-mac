import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Mail, Phone, MessageSquare } from 'lucide-react';
import { booksData } from '@/data/books';
import { servicesData } from '@/data/services';

export default function Footer() {
  return (
    <footer className="site-footer" style={{ backgroundColor: 'var(--text-ink)', color: '#FAFAF7', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        {/* Giant Closing Statement Spread */}
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '3.5rem', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-red)' }} />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9BAEC0' }}>
              WILDMAC // PLATFORM PERSPECTIVE
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 500, color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: '840px' }}>
            Build with purpose.<br />Grow with strategy.
          </h2>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-top">
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600, letterSpacing: '0.06em', color: '#FFFFFF' }}>
                WILDMAC
              </span>
              <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />
            </div>
            <p style={{ color: '#9BAEC0', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Wildmac is a coaching, consulting and knowledge-driven brand helping individuals, professionals and businesses move forward with purpose, clarity and practical strategy.
            </p>
            <Link href="/consultation" className="btn btn-editorial" style={{ backgroundColor: 'transparent', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.25)', padding: '0.65rem 1.25rem', fontSize: '0.85rem', gap: '0.5rem' }}>
              <span>Book a Consultation</span>
              <ArrowRight size={14} color="var(--accent-red)" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Wildmac</Link></li>
              <li><Link href="/services">Services & Modules</Link></li>
              <li><Link href="/books">Books & Publications</Link></li>
              <li><Link href="/blog">Wildmac Insights</Link></li>
              <li><Link href="/#resources">Knowledge Resources</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services Columns */}
          <div>
            <h4 className="footer-col-title">Advisory Practice</h4>
            <ul className="footer-nav">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Direct Desk</h4>
            <ul className="footer-nav" style={{ fontSize: '0.88rem', color: '#C0CFDB' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="var(--accent-red)" />
                <span>desk@wildmac.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageSquare size={14} color="var(--accent-red)" />
                <span>WhatsApp Direct</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={14} color="var(--accent-red)" />
                <span>Confidential Practice</span>
              </li>
              <li style={{ marginTop: '1rem' }}>
                <a
                  href="https://www.amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-red)', fontWeight: 500 }}
                >
                  <span>Amazon Author Page</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Legal Disclaimer (Prominent & Clear) */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.75rem', marginBottom: '1.75rem' }}>
          <p style={{ fontSize: '0.78rem', color: '#7A90A2', lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: '#9BAEC0' }}>Legal Educational Disclaimer:</strong> Information relating to real estate, finance, business strategy, and investments provided across Wildmac publications, website, and consultation sessions is for general educational and strategic guidance purposes only. It should not be considered financial, legal, tax, or professional investment advice. Individuals should consult with certified professionals regarding specific financial or legal decisions.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} WILDMAC. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/about">Privacy Policy</Link>
            <Link href="/about">Terms & Conditions</Link>
            <Link href="/about">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
