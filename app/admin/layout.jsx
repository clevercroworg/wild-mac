import React from 'react';

export const metadata = {
  title: 'Admin Console — Wildmac Executive CMS',
  description: 'Secure management portal for Wildmac blog essays and knowledge frameworks.',
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = 'force-dynamic';

export default function AdminRootLayout({ children }) {
  return <>{children}</>;
}
