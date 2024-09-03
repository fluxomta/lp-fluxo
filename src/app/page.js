// src/app/page.js
"use client";

import HeroSection from '@/components/Home/HeroSection';
import FAQAccordion from '@/components/Home/FAQAccordion';
import TextBlock from '@/components/Home/TextBlock';
import TextBlockTwo from '@/components/Home/TextBlockTwo';
import ProductAccordion from '@/components/Home/ProductAccordion';
import AboutSection from '@/components/Home/AboutSection';
import TextBlockFinal from '@/components/Home/TextBlockFinal';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TextBlock />
      <TextBlockTwo />
      <ProductAccordion />
      <AboutSection />
      <TextBlockFinal />
      <FAQAccordion />
    </>
  );
}
