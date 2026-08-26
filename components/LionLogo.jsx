'use client';

import React from 'react';

/**
 * LionLogo — High-resolution transparent PNG logo image component for Wildmac.
 * Renders the authentic full-color architectural lion emblem asset.
 */
export default function LionLogo({ size = 50, className = '', style = {} }) {
  return (
    <img
      src="/images/wildmac-lion-logo.png"
      alt="Wildmac Lion Emblem"
      className={className}
      style={{
        height: `${size}px`,
        width: 'auto',
        maxHeight: `${size}px`,
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      }}
    />
  );
}
