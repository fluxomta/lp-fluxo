// src/app/layout.js
import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@components/Header';
import Footer from '@components/Footer';


// Configure a fonte Montserrat
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head />
      <body className={montserrat.className}>
        <Header />
        {/* Ajuste o padding-top para compensar a altura do Header fixo */}
        <main className='pt-8 md:pt-20'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
