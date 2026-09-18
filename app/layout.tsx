import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
