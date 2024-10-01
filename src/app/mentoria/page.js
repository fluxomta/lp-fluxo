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
    title: 'Mentoria - Método Fluxo simplificado 3.0',
    description: 'O campeão das mesas vai te ensinar a ser um mestre no Mercado. Entenda definitivamente como o mercado funciona e lucre com isso.',
    keywords: ['Mentoria', 'Mentoria Mercado financeiro', 'Fluxo simplificado', 'Fluxo', 'Indicadores Profit', 'Indicadores Nelógica', 'Daytrade'],
    openGraph: {
        title: 'Mentoria - Método Fluxo simplificado 3.0',
        description: 'O campeão das mesas vai te ensinar a ser um mestre no Mercado. Entenda definitivamente como o mercado funciona e lucre com isso.',
        type: 'website',
        url: 'https://fluxomta.com/mentoria',
        images: [
            {
                url: '/images/social/thumb-mentoria.png',
                width: 1917,
                height: 1024,
                alt: 'Mentoria - Método Fluxo simplificado 3.0',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mentoria - Método Fluxo simplificado 3.0',
        description: 'O campeão das mesas vai te ensinar a ser um mestre no Mercado. Entenda definitivamente como o mercado funciona e lucre com isso.',
        images: [
            {
                url: '/images/social/social-share.webp',
                alt: 'Mentoria - Método Fluxo simplificado 3.0',
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
