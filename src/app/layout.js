// src/app/layout.js
import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Global/Header';
import Footer from '@/components/Global/Footer';


export const metadata = {
  metadataBase: new URL('https://fluxomta.com'),
  alternates: {
    canonical: '/',
  },
}

// Configure a fonte Montserrat
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
        <Header />
        <main className='pt-16 md:pt-20 bg-primary-500'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
