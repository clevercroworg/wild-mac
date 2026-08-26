'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || !window.matchMedia('(hover: hover)').matches;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check cursor targets
      const target = e.target.closest('[data-cursor], a, button, .book-cover-3d, article');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else if (target.closest('.book-cover-3d')) {
          setCursorText('VIEW');
        } else if (target.closest('article')) {
          setCursorText('READ');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="custom-cursor-container"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {cursorText ? (
        <div
          style={{
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'var(--text-ink)',
            color: 'var(--bg-paper-white)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            padding: '0.35rem 0.75rem',
            borderRadius: '2px',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 14px rgba(18, 26, 34, 0.25)',
            borderLeft: '2px solid var(--accent-red)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          <span>{cursorText}</span>
        </div>
      ) : (
        <div
          style={{
            width: isHovered ? '24px' : '8px',
            height: isHovered ? '24px' : '8px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: isHovered ? 'transparent' : 'var(--accent-red)',
            border: isHovered ? '1.5px solid var(--accent-red)' : 'none',
            borderRadius: '50%',
            transition: 'width 0.2s var(--ease-editorial), height 0.2s var(--ease-editorial), background-color 0.2s, border 0.2s',
          }}
        />
      )}
    </div>
  );
}
