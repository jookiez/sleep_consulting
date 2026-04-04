import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sleep-consulting.vercel.app'
  ),
  title: 'Alexandra Sleep Consulting',
  description:
    'Certified pediatric sleep consulting to help your family rest better.',
  keywords: [
    'pediatric sleep consultant',
    'baby sleep help',
    'infant sleep training',
    'toddler sleep support',
    'Alexandra Sleep Consulting',
  ],
  openGraph: {
    title: 'Alexandra Sleep Consulting',
    description:
      'Compassionate, certified pediatric sleep consulting to help your family rest better.',
    type: 'website',
    url: 'https://sleep-consulting.vercel.app',
    siteName: 'Alexandra Sleep Consulting',
    images: [
      {
        url: '/images/social-share.png',
        width: 1200,
        height: 630,
        alt: 'Alexandra Sleep Consulting logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexandra Sleep Consulting',
    description:
      'Compassionate, certified pediatric sleep consulting to help your family rest better.',
    images: ['/images/social-share.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} font-sans bg-white text-slate-800 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
