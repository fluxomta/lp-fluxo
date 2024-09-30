// src/app/mentoria/page.js

import HeroSection from '@/components/Mentoria/HeroSection';
import FAQAccordion from '@/components/Global/FAQAccordion';
import PrincipiosSlider from '@/components/Mentoria/PrincipiosSlider';
import ConsistenciaSlider from '@/components/Mentoria/ConsistenciaSlider';
import ContextoSlide from '@/components/Mentoria/ContextoSlider';
import TextBlockFinal from '@/components/Mentoria/TextBlockFinal';
import Boxes from '@/components/Mentoria/Boxes';
import BgGlobe from '@/components/Mentoria/BgGlobe';
import AboutSection from '@/components/Mentoria/AboutSection';
import TestimonialsSlider from '@/components/Mentoria/TestimonialsSlider';
import YouTubeSwiper from '@/components/Mentoria/YouTubeSwiper';

export const metadata = {
    robots: 'index, follow',
    title: 'Mentoria',
    description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
    keywords: ['Fluxo', 'Escola de Traders', 'Indicadores Profit', 'Indicadores Nelógica', 'Mercado financeiro'],
    openGraph: {
        title: 'Fluxo MTA - A sua escola de Traders',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        type: 'website',
        url: 'https://fluxomta.com',
        images: [
            {
                url: '/images/social/social-share.webp',
                width: 1917,
                height: 1024,
                alt: 'Fluxo MTA - A sua escola de Traders',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fluxo MTA - A sua escola de Traders',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        images: [
            {
                url: '/images/social/social-share.webp',
                alt: 'Fluxo MTA - A sua escola de Traders',
            },
        ],
    },
};


export default function Mentoria() {
    return (
        <>
            <HeroSection />
            <BgGlobe />
            <PrincipiosSlider />
            <ConsistenciaSlider />
            <ContextoSlide />
            <Boxes />
            <AboutSection />
            <TestimonialsSlider />
            <YouTubeSwiper />
            <TextBlockFinal />
            <FAQAccordion />
        </>
    );
}
