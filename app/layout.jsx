import { Sora, Instrument_Sans, Instrument_Serif } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import AnimationProvider from '@/components/AnimationProvider';
import StickyWhatsApp from '@/components/StickyWhatsApp';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'WILDMAC — Build with Purpose. Grow with Strategy.',
    template: '%s | WILDMAC'
  },
  description: 'Wildmac provides practical coaching, strategic guidance and knowledge-driven solutions to help individuals, professionals and businesses make confident decisions and achieve meaningful growth.',
  keywords: ['Wildmac', 'Business Coaching', 'Life Coaching', 'Real Estate Strategy', 'Investment Strategy', 'Branding & Digital Marketing', 'Rodney Almeida', 'Books'],
  authors: [{ name: 'Rodney Almeida' }],
  creator: 'WILDMAC',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23173247'/><text x='50' y='64' font-family='sans-serif' font-size='38' font-weight='bold' fill='%23F8F8F5' text-anchor='middle'>WM</text><circle cx='82' cy='28' r='6' fill='%23C74A45'/></svg>",
  },
  openGraph: {
    title: 'WILDMAC — Build with Purpose. Grow with Strategy.',
    description: 'Coaching, consulting, knowledge and strategic guidance for personal and professional growth.',
    url: 'https://wildmac.com',
    siteName: 'WILDMAC',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${instrumentSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23173247'/><text x='50' y='64' font-family='sans-serif' font-size='38' font-weight='bold' fill='%23F8F8F5' text-anchor='middle'>WM</text><circle cx='82' cy='28' r='6' fill='%23C74A45'/></svg>" />
      </head>
      <body>
        <AnimationProvider />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
