import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { booksData } from '@/data/books';

export default function Footer() {
  return (
    <footer className="site-footer" style={{ backgroundColor: 'var(--text-ink)', color: '#FAFAF7', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        {/* Giant Closing Statement Spread */}
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '4rem', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-red)' }} />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9BAEC0' }}>
              WM / COLOPHON // THE CLOSING PAGE
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)', fontWeight: 500, color: '#FFFFFF', lineHeight: '1.05', letterSpacing: '-0.025em', maxWidth: '820px' }}>
            Make the best use of life.
          </h2>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-top">
          {/* Brand Col */}
          <div style={{ maxWidth: '360px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600, letterSpacing: '0.08em', color: '#FFFFFF' }}>
                WILD MAC
              </span>
              <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }} />
            </div>
            <p style={{ color: '#9BAEC0', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              An author-led publishing imprint and strategic advisory practice. Ideas for living deliberately, thinking deeply, and moving forward.
            </p>
            <Link href="/consultation" className="btn btn-editorial" style={{ backgroundColor: 'transparent', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.25)', padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
              <span>Book a Consultation</span>
              <ArrowRight size={14} color="var(--accent-red)" />
            </Link>
          </div>

          {/* Published Books */}
          <div>
            <h4 className="footer-col-title">The Books</h4>
            <ul className="footer-nav">
              {booksData.map((book) => (
                <li key={book.id}>
                  <Link href={`/books/${book.slug}`}>
                    {book.title}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '0.5rem' }}>
                <a
                  href="https://www.amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-red)' }}
                >
                  <span>Amazon Store</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Advisory */}
          <div>
            <h4 className="footer-col-title">Advisory Practice</h4>
            <ul className="footer-nav">
              <li><Link href="/services#business-coaching">Business Coaching</Link></li>
              <li><Link href="/services#life-coaching">Life Coaching</Link></li>
              <li><Link href="/services#real-estate-strategy">Real Estate Strategy</Link></li>
              <li><Link href="/services#investment">Investment Mindset</Link></li>
              <li><Link href="/services#branding-digital-marketing">Branding & Presence</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer-col-title">Archive & Index</h4>
            <ul className="footer-nav">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About the Author</Link></li>
              <li><Link href="/books">Complete Library</Link></li>
              <li><Link href="/services">Services Overview</Link></li>
              <li><Link href="/blog">Wild Mac Journal</Link></li>
              <li><Link href="/contact">Start a Conversation</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} Wild Mac. All rights reserved.</span>
            <span>•</span>
            <span>Wild Mac Press</span>
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.05rem', color: '#BFDCEB' }}>
            A life lived deliberately.
          </div>
        </div>
      </div>
    </footer>
  );
}
