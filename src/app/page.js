// src/app/page.js
"use client";

import HeroSection from '@components/HeroSection';
import FAQAccordion from '@components/FAQAccordion';
import TextBlock from './TextBlock';
import TextBlockTwo from './TextBlockTwo';
import ProductAccordion from '@/components/ProductAccordion';
import AboutSection from '@/components/AboutSection';
import TextBlockFinal from './TextBlockFinal';


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <TextBlock />
        <TextBlockTwo />
        <ProductAccordion />
        <AboutSection />
        <TextBlockFinal />
        <FAQAccordion />
      </main>
    </>
  );
}
