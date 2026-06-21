import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: 'Tran Vu Hao — Frontend Developer',
  description:
    'Frontend Developer with 7 years of experience in ReactJS, NextJS, and Angular. Based in Ho Chi Minh City, Vietnam.',
  openGraph: {
    title: 'Tran Vu Hao | Frontend Developer',
    description:
      'Frontend Developer with 7 years of experience in ReactJS, NextJS, and Angular. Based in Ho Chi Minh City, Vietnam.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
