import type { Metadata } from 'next';
import { Geist, Geist_Mono, Source_Serif_4, Roboto } from 'next/font/google';
import '@/app/globals.css';

const geist_sans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geist_mono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const source_serif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
});

const roboto_rounded = Roboto({
  variable: '--font-roboto-rounded',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aether Notes',
  description: 'Aether Notes app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geist_sans.variable} ${source_serif.variable} ${roboto_rounded.variable} ${geist_mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
