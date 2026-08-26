'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationProvider() {
  const pathname = usePathname();

  // 01 — Viewport Scroll Reveals Across All Pages
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-slide-left, .reveal-slide-right, .reveal-image-mask, .reveal-divider, .card-interactive').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Automatically tag all major interactive cards and sections with smooth reveal
    const autoElements = document.querySelectorAll(
      '.card-interactive, .section-py h1, .section-py h2, .about-split-grid, .two-col-grid, .cta-section-grid'
    );
    autoElements.forEach((el) => {
      if (!el.classList.contains('reveal-on-scroll') && !el.classList.contains('reveal-slide-left') && !el.classList.contains('reveal-slide-right')) {
        el.classList.add('reveal-on-scroll');
      }
    });

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.08,
    });

    const elementsToObserve = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-slide-left, .reveal-slide-right, .reveal-image-mask, .reveal-divider'
    );

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  // 02 — Top Page Scroll Progress Indicator (Smooth 2.5px Red Accent)
  useEffect(() => {
    const progressBar = document.getElementById('wildmac-scroll-progress');
    if (!progressBar) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
          progressBar.style.transform = `scaleX(${progress})`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return <div id="wildmac-scroll-progress" aria-hidden="true" />;
}
