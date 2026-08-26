import { Cormorant_Garamond, Libre_Baskerville, Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'WILD MAC — Author, Thinker & Advisory Practice',
    template: '%s | WILD MAC'
  },
  description: 'An author-led publishing and advisory practice. Books, reflections, and practical perspectives on life, purpose, money, business, and deliberate growth.',
  keywords: ['Wild Mac', 'Author', 'Philosophy', 'A Letter To My Daughter', 'The Path Of Purpose', 'The Sacred Path', 'Financial Literacy', 'Advisory', 'Business Coaching'],
  authors: [{ name: 'Wild Mac' }],
  creator: 'Wild Mac Press',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23183348'/><text x='50' y='64' font-family='Georgia, serif' font-size='42' font-weight='bold' fill='%23FAFAF7' text-anchor='middle'>WM</text><circle cx='80' cy='30' r='6' fill='%23C94742'/></svg>",
  },
  openGraph: {
    title: 'WILD MAC — Author, Thinker & Advisory Practice',
    description: 'A life worth living deserves ideas worth carrying. Books and advisory by Wild Mac.',
    url: 'https://wildmac.com',
    siteName: 'WILD MAC',
    locale: 'en_US',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Wild Mac',
  jobTitle: 'Author & Advisor',
  description: 'Author of A Letter To My Daughter, The Path Of Purpose, The Sacred Path, and Financial Literacy.',
  url: 'https://wildmac.com',
  sameAs: [
    'https://amzn.in/d/04fxYCJL',
    'https://amzn.in/d/0qJXhoXy',
    'https://amzn.in/d/0aeqZD6T',
    'https://amzn.in/d/03wu04mh'
  ],
  publishingPrinciples: 'https://wildmac.com/about'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${libre.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
