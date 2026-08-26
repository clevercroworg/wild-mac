'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { booksData } from '@/data/books';

export default function DefinitiveHomepageHero() {
  const [hoveredBook, setHoveredBook] = useState(null);

  const heroBook = booksData.find((b) => b.slug === 'a-letter-to-my-daughter') || booksData[0];
  const bookPurpose = booksData.find((b) => b.slug === 'the-path-of-purpose') || booksData[1];
  const bookSacred = booksData.find((b) => b.slug === 'the-sacred-path') || booksData[2];
  const bookFinance = booksData.find((b) => b.slug === 'financial-literacy') || booksData[3];

  return (
    <section
      className="definitive-hero-section"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-paper-white)',
        borderBottom: '1px solid var(--border-subtle)',
        minHeight: '86vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Atmospheric Blue Wash Behind Still Life */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '0',
          width: '55%',
          height: '90%',
          background: 'radial-gradient(ellipse at 65% 50%, rgba(220, 236, 244, 0.75) 0%, rgba(239, 246, 250, 0.45) 55%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, flex: '1 0 auto', display: 'flex', alignItems: 'center' }}>
        <div
          className="definitive-hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.35fr)',
            gap: '4rem',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* ===============================================================
              LEFT / 40–45% — EDITORIAL TYPOGRAPHY & BRAND STATEMENT
              =============================================================== */}
          <div className="hero-text-col" style={{ maxWidth: '580px' }}>
            {/* Top Micro Label — Single Clean Editorial Stamp */}
            <div style={{ marginBottom: '1.75rem' }}>
              <span
                className="editorial-stamp"
                style={{
                  letterSpacing: '0.16em',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-deep-blue)',
                }}
              >
                WM / AUTHOR • WRITER • ADVISOR
              </span>
            </div>

            {/* Main Statement — Large Editorial Serif */}
            <h1
              className="hero-main-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                color: 'var(--text-ink)',
                marginBottom: '1.75rem',
              }}
            >
              A life worth living<br />
              deserves ideas worth<br />
              carrying.
            </h1>

            {/* 1px Editorial Red Accent Line */}
            <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--accent-red)', marginBottom: '1.75rem' }} />

            {/* Supporting Copy */}
            <p
              className="lead hero-lead-text"
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
                color: 'var(--text-deep-blue)',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                maxWidth: '510px',
              }}
            >
              Books, reflections, and practical perspectives on life, purpose, money, business, and what comes next.
            </p>

            {/* Action CTAs */}
            <div className="hero-actions-row" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link
                href="/books"
                className="btn btn-primary"
                style={{
                  padding: '0.95rem 2rem',
                  fontSize: '0.92rem',
                  gap: '0.65rem',
                }}
              >
                <span>Explore the Books</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/about"
                className="editorial-link"
                style={{
                  fontSize: '0.92rem',
                  gap: '0.45rem',
                }}
              >
                <span>Meet the Author</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Bottom Left Publication Marker */}
            <div className="hero-bottom-marker" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>
              <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>01 /</span>
              <span style={{ letterSpacing: '0.1em' }}>THE LIBRARY // FOUR VOLUMES</span>
            </div>
          </div>

          {/* ===============================================================
              RIGHT / 55–60% — PHYSICAL EDITORIAL STILL LIFE OF ALL 4 BOOKS
              =============================================================== */}
          <div
            className="hero-still-life-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Open Book Environmental Spread Canvas (Desktop Only) */}
            <div
              className="open-book-spread-plate"
              style={{
                position: 'absolute',
                width: '108%',
                height: '110%',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(18, 26, 34, 0.08)',
                boxShadow: '0 24px 60px -15px rgba(24, 51, 72, 0.12), 0 2px 8px rgba(18, 26, 34, 0.04)',
                borderRadius: '2px',
                zIndex: 1,
                display: 'flex',
                overflow: 'hidden',
              }}
            >
              {/* Left Page Leaf */}
              <div
                style={{
                  flex: 1,
                  borderRight: '1px solid rgba(18, 26, 34, 0.08)',
                  background: 'linear-gradient(to right, rgba(239, 246, 250, 0.4), rgba(255, 255, 255, 0.8) 85%, rgba(0, 0, 0, 0.03))',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', color: 'var(--text-whisper)' }}>
                  WILD MAC PRESS // VOL. I – IV
                </span>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-whisper)' }}>
                  FOLIO 01
                </span>
              </div>

              {/* Right Page Leaf */}
              <div
                style={{
                  flex: 1,
                  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.03), rgba(255, 255, 255, 0.8) 15%, rgba(239, 246, 250, 0.3))',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', color: 'var(--text-whisper)' }}>
                  AUTHENTIC COVERS
                </span>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-whisper)' }}>
                  FOLIO 02
                </span>
              </div>

              {/* Subtle Center Gutter Crease */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: '50%',
                  width: '2px',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(to bottom, rgba(18, 26, 34, 0.15), rgba(18, 26, 34, 0.08) 50%, rgba(18, 26, 34, 0.15))',
                }}
              />
            </div>

            {/* ===========================================================
                LAYERED PHYSICAL BOOKS ARRANGEMENT
                =========================================================== */}
            <div
              className="hero-books-stage"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                height: '480px',
              }}
            >
              {/* BOOK 03: The Sacred Path (Offset Left, Layered in Midground) */}
              <div
                className="hero-book-item book-sacred-pos"
                onMouseEnter={() => setHoveredBook(bookSacred.id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <Link href={`/books/${bookSacred.slug}`} style={{ display: 'block' }}>
                  <div
                    className="book-cover-shell"
                    style={{
                      boxShadow: '0 18px 36px -8px rgba(18, 26, 34, 0.22)',
                      borderRadius: '2px 4px 4px 2px',
                      overflow: 'hidden',
                      position: 'relative',
                      aspectRatio: '2/3',
                      backgroundColor: '#fff',
                    }}
                  >
                    <img
                      src={bookSacred.coverImage}
                      alt={bookSacred.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '10px',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.2), rgba(255,255,255,0.2) 40%, transparent)',
                      }}
                    />
                  </div>
                </Link>
              </div>

              {/* BOOK 02: The Path Of Purpose (Offset Right Behind, Layered) */}
              <div
                className="hero-book-item book-purpose-pos"
                onMouseEnter={() => setHoveredBook(bookPurpose.id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <Link href={`/books/${bookPurpose.slug}`} style={{ display: 'block' }}>
                  <div
                    className="book-cover-shell"
                    style={{
                      boxShadow: '0 18px 36px -8px rgba(18, 26, 34, 0.24)',
                      borderRadius: '2px 4px 4px 2px',
                      overflow: 'hidden',
                      position: 'relative',
                      aspectRatio: '2/3',
                      backgroundColor: '#fff',
                    }}
                  >
                    <img
                      src={bookPurpose.coverImage}
                      alt={bookPurpose.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '10px',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.2), rgba(255,255,255,0.2) 40%, transparent)',
                      }}
                    />
                  </div>
                </Link>
              </div>

              {/* BOOK 04: Financial Literacy (Layered Bottom Right) */}
              <div
                className="hero-book-item book-finance-pos"
                onMouseEnter={() => setHoveredBook(bookFinance.id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <Link href={`/books/${bookFinance.slug}`} style={{ display: 'block' }}>
                  <div
                    className="book-cover-shell"
                    style={{
                      boxShadow: '0 20px 42px -10px rgba(18, 26, 34, 0.28)',
                      borderRadius: '2px 4px 4px 2px',
                      overflow: 'hidden',
                      position: 'relative',
                      aspectRatio: '2/3',
                      backgroundColor: '#fff',
                    }}
                  >
                    <img
                      src={bookFinance.coverImage}
                      alt={bookFinance.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '10px',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.2), rgba(255,255,255,0.2) 40%, transparent)',
                      }}
                    />
                  </div>
                </Link>
              </div>

              {/* BOOK 01 (HERO WORK): A Letter To My Daughter (Dominant Foreground Center) */}
              <div
                className="hero-book-item book-daughter-pos"
                onMouseEnter={() => setHoveredBook(heroBook.id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <Link href={`/books/${heroBook.slug}`} style={{ display: 'block' }}>
                  <div
                    className="book-cover-shell hero-main-cover"
                    style={{
                      boxShadow: '0 30px 65px -12px rgba(18, 26, 34, 0.35), 0 8px 24px -4px rgba(18, 26, 34, 0.15)',
                      borderRadius: '2px 5px 5px 2px',
                      overflow: 'hidden',
                      position: 'relative',
                      aspectRatio: '2/3',
                      backgroundColor: '#fff',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <img
                      src={heroBook.coverImage}
                      alt={heroBook.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {/* Realistic Hardcover Spine & Crease Line */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '14px',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.25), rgba(255,255,255,0.2) 40%, rgba(0,0,0,0.1) 80%, transparent)',
                        zIndex: 4,
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '14px',
                        bottom: 0,
                        width: '1px',
                        backgroundColor: 'rgba(0, 0, 0, 0.12)',
                        zIndex: 4,
                      }}
                    />
                  </div>

                  {/* Micro Metadata Tag on Desktop Hover Only */}
                  <div
                    className="desktop-hover-pill"
                    style={{
                      position: 'absolute',
                      bottom: '-2rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--text-ink)',
                      color: '#fff',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '2px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 14px rgba(18, 26, 34, 0.25)',
                      opacity: hoveredBook === heroBook.id ? 1 : 0,
                      transition: 'opacity var(--transition-fast)',
                      pointerEvents: 'none',
                    }}
                  >
                    <span>VIEW FEATURED WORK</span>
                    <ArrowUpRight size={12} color="var(--accent-red)" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================
          SUBTLE SCROLL INVITATION & CHAPTER TRANSITION
          =================================================================== */}
      <div className="container" style={{ position: 'relative', zIndex: 1, marginTop: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.25rem',
            fontSize: '0.75rem',
            color: 'var(--text-light)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>01</span>
            <span>//</span>
            <span style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>ENTER THE WORLD OF WILD MAC</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-deep-blue)' }}>
            <span>Four published volumes</span>
            <span>•</span>
            <span>One continuing dialogue</span>
          </div>
        </div>
      </div>

      {/* Embedded Mobile CSS Recomposition */}
      <style jsx>{`
        /* Desktop Default Positions */
        .book-sacred-pos {
          position: absolute;
          left: 2%;
          top: 10%;
          width: 200px;
          z-index: 2;
          transform: rotate(-6deg);
          transition: all var(--transition-smooth);
        }
        .book-purpose-pos {
          position: absolute;
          right: 6%;
          top: 6%;
          width: 210px;
          z-index: 2;
          transform: rotate(5deg);
          transition: all var(--transition-smooth);
        }
        .book-finance-pos {
          position: absolute;
          right: 1%;
          bottom: 2%;
          width: 190px;
          z-index: 3;
          transform: rotate(1deg);
          transition: all var(--transition-smooth);
        }
        .book-daughter-pos {
          position: absolute;
          left: 26%;
          top: 12%;
          width: 275px;
          z-index: 10;
          transform: rotate(-1.5deg);
          transition: all var(--transition-smooth);
        }

        /* Tablet (769px - 1024px) */
        @media (max-width: 1024px) {
          .definitive-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-still-life-wrapper {
            min-height: 440px !important;
          }
          .open-book-spread-plate {
            width: 100% !important;
          }
          .book-daughter-pos {
            left: 28% !important;
            width: 220px !important;
          }
          .book-purpose-pos {
            right: 8% !important;
            width: 175px !important;
          }
          .book-sacred-pos {
            left: 6% !important;
            width: 165px !important;
          }
          .book-finance-pos {
            right: 4% !important;
            width: 155px !important;
          }
        }

        /* Mobile (Screens <= 768px down to 320px) */
        @media (max-width: 768px) {
          .definitive-hero-section {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
            min-height: auto !important;
          }
          .definitive-hero-grid {
            gap: 2.25rem !important;
          }
          .hero-still-life-wrapper {
            min-height: auto !important;
            height: 330px !important;
            max-width: 340px !important;
            margin: 0 auto !important;
            overflow: visible !important;
          }
          .hero-books-stage {
            height: 320px !important;
            width: 100% !important;
            max-width: 330px !important;
            margin: 0 auto !important;
          }
          .open-book-spread-plate {
            display: none !important;
          }
          .desktop-hover-pill {
            display: none !important;
          }

          /* Balanced, perfectly contained mobile fan stack */
          .book-daughter-pos {
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -46%) rotate(-1.5deg) !important;
            width: 165px !important;
            z-index: 10 !important;
          }
          .book-sacred-pos {
            left: 12px !important;
            top: 14px !important;
            width: 122px !important;
            transform: rotate(-8deg) !important;
            z-index: 2 !important;
            opacity: 0.95 !important;
          }
          .book-purpose-pos {
            right: 14px !important;
            top: 10px !important;
            width: 126px !important;
            transform: rotate(8deg) !important;
            z-index: 2 !important;
            opacity: 0.95 !important;
          }
          .book-finance-pos {
            right: 20px !important;
            bottom: 12px !important;
            width: 118px !important;
            transform: rotate(3deg) !important;
            z-index: 5 !important;
          }
        }

        @media (max-width: 480px) {
          .hero-main-title {
            font-size: 2.25rem !important;
            line-height: 1.1 !important;
          }
          .hero-still-life-wrapper {
            height: 300px !important;
            max-width: 310px !important;
          }
          .hero-books-stage {
            height: 295px !important;
            max-width: 310px !important;
          }
          .book-daughter-pos {
            width: 150px !important;
          }
          .book-sacred-pos {
            left: 6px !important;
            top: 10px !important;
            width: 110px !important;
          }
          .book-purpose-pos {
            right: 8px !important;
            top: 8px !important;
            width: 114px !important;
          }
          .book-finance-pos {
            right: 14px !important;
            bottom: 8px !important;
            width: 106px !important;
          }
        }
      `}</style>
    </section>
  );
}
