import type { Metadata } from 'next';
import { Anton, IBM_Plex_Mono, Poppins } from 'next/font/google';
import './globals.css';

const display = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});
const body = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
});
const mono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zerodaytm.uvt.ro'),
  title: { default: 'ZeroDayTM — Edition #2', template: '%s — ZeroDayTM' },
  description:
    'ZeroDayTM is a free cybersecurity conference and CTF competition for professionals, enthusiasts and students in Timișoara.',
  openGraph: {
    title: 'ZeroDayTM — Edition #2',
    description:
      'A free cybersecurity conference and CTF competition. Timișoara, Spring 2027.',
  },
  twitter: {
    card: 'summary',
    title: 'ZeroDayTM — Edition #2',
    description: 'Cybersecurity conference + CTF. Timișoara, Spring 2027.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
