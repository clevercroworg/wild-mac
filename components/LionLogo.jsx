'use client';

import React from 'react';

/**
 * LionLogo — High-resolution raster PNG logo image component for Wildmac.
 * Renders the custom architectural lion emblem asset.
 */
export default function LionLogo({ size = 32, isLight = false, className = '', style = {} }) {
  return (
    <img
      src={isLight ? '/images/wildmac-lion-logo-light.png' : '/images/wildmac-lion-logo.png'}
      alt="Wildmac Lion Emblem"
      width={size}
      height={size}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      }}
    />
  );
}
