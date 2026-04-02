import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cudago - On-Demand Verified Services',
  description:
    'Connect with verified professionals for cleaning, cooking, childcare, and household services. Book instantly, get quality work, enjoy peace of mind.',
  keywords: [
    'on-demand services',
    'verified professionals',
    'household help',
    'cleaning services',
    'cooking',
  ],
  openGraph: {
    title: 'Cudago - On-Demand Verified Services',
    description:
      'Connect with verified professionals for household services.',
    type: 'website',
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0066FF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
