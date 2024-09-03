// src/app/page.js
"use client";
import HeroSection from '@/components/Indicadores/HeroSection';
import FAQAccordion from '@/components/Home/FAQAccordion';
import TextBlock from '@/components/Home/TextBlock';
import TextBlockTwo from '@/components/Home/TextBlockTwo';
import ProductAccordion from '@/components/Home/ProductAccordion';
import AboutSection from '@/components/Home/AboutSection';
import TextBlockFinal from '@/components/Home/TextBlockFinal';
import Numbers from '@/components/Indicadores/Numbers';
import Parceria from '@/components/Indicadores/Parceria';
import Solucoes from '@/components/Indicadores/Solucoes';


export default function Indicadores() {
    return (
        <>
            <HeroSection />
            <Parceria />
            <Solucoes />
        </>
    );
}
