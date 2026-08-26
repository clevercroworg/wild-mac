'use client';

import React, { useState } from 'react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function StickyWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919657080490'; // Official Direct WhatsApp Desk
  const defaultMessage = encodeURIComponent('Hello Rodney, I would like to connect regarding Wildmac advisory & initiatives.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 990,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      {/* Tooltip Badge */}
      <div
        style={{
          backgroundColor: 'var(--text-ink)',
          color: '#FFFFFF',
          padding: '0.45rem 0.85rem',
          borderRadius: '4px',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.04em',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
          transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        className="hidden-mobile"
      >
        <span>Chat on WhatsApp Direct</span>
      </div>

      {/* Main Floating Button with Pulsating Rings */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Direct WhatsApp Hotline"
        style={{
          position: 'relative',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 28px rgba(37, 211, 102, 0.42)',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        {/* Pulsating Ambient Ring 1 */}
        <span
          className="whatsapp-pulse-ring"
          style={{
            position: 'absolute',
            inset: '-6px',
            borderRadius: '50%',
            border: '2px solid rgba(37, 211, 102, 0.65)',
            pointerEvents: 'none',
          }}
        />

        {/* Pulsating Ambient Ring 2 */}
        <span
          className="whatsapp-pulse-ring-delayed"
          style={{
            position: 'absolute',
            inset: '-12px',
            borderRadius: '50%',
            border: '1.5px solid rgba(37, 211, 102, 0.35)',
            pointerEvents: 'none',
          }}
        />

        {/* Authentic WhatsApp Vector Icon */}
        <WhatsAppIcon size={28} color="#FFFFFF" />
      </a>

      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.9);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.4;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.9;
          }
        }

        .whatsapp-pulse-ring {
          animation: pulse-ring 2.4s infinite ease-in-out;
        }

        .whatsapp-pulse-ring-delayed {
          animation: pulse-ring 2.4s infinite ease-in-out;
          animation-delay: 1.2s;
        }

        @media (max-width: 768px) {
          div[style*="bottom: 2rem"] {
            bottom: 1.25rem !important;
            right: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}
