// src/app/page.js
import HeroSection from '@/components/Indicadores/HeroSection';
import TextBlock from '@/components/Indicadores/TextBlock';
import TextBlockTwo from '@/components/Indicadores/TextBlockTwo';
import Parceria from '@/components/Global/Parceria';
import Solucoes from '@/components/Indicadores/Solucoes';
import SpeedFlow from '@/components/Indicadores/SpeedFlow';
import TextBlockWhite from '@/components/Indicadores/TextBlockWhite';
import TestimonialsSlider from '@/components/Indicadores/TestimonialsSlider';
import FAQAccordion from '@/components/Global/FAQAccordion';

export const metadata = {
    robots: 'index, follow',
    title: 'Indicadores - Fluxo MTA',
    description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'Indicadores - Fluxo MTA',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        type: 'website',
        url: 'https://fluxomta.com/indicadores',
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
        title: 'Indicadores - Fluxo MTA',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        images: [
            {
                url: '/images/social/social-share.webp',
                alt: 'Fluxo MTA - A sua escola de Traders',
            },
        ],
    },
};

export default function Indicadores() {
    return (
        <>
            <HeroSection />
            <Parceria />
            <TextBlockWhite />
            <Solucoes />
            <TextBlock />
            <SpeedFlow />
            <TestimonialsSlider />
            <TextBlockTwo />
            {/* <FAQAccordion /> */}
        </>
    );
}
