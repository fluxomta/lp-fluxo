// src/app/layout.js
import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Global/Header';
import Footer from '@/components/Global/Footer';
import GoogleTagManager from '@/components/Global/GoogleTagManager';
import BodyClassManager from '@/components/Global/BodyClassManager';

export const metadata = {
  metadataBase: new URL('https://fluxomta.com'),
  alternates: {
    canonical: '/',
  },
};

// Configurar a fonte Montserrat
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={montserrat.className}>
        <BodyClassManager baseClass={montserrat.className} />
        <GoogleTagManager />
        <Header />
        <main className="pt-16 md:pt-20 bg-primary-500">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
