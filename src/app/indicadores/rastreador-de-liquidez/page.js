// src/app/page.js
import PricingPlan from '@/components/RastreadorLiquidez/PricingPlan';
import HeroSection from '@/components/RastreadorLiquidez/HeroSection';
import Parceria from '@/components/Global/Parceria';
import TextBlockThree from '@/components/RastreadorLiquidez/TextBlockThree';
import TextBlockTwo from '@/components/RastreadorLiquidez/TextBlockTwo';
import ZDSection from '@/components/RastreadorLiquidez/ZDSection';
import FAQAccordion from '@/components/Global/FAQAccordion';
import TextBlockWhite from '@/components/RastreadorLiquidez/TextBlockWhite';

export const metadata = {
    robots: 'index, follow',
    title: 'Quantum LT | O Rastreador de Liquidez - Fluxo MTA',
    description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'Quantum LT | O Rastreador de Liquidez - Fluxo MTA',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        type: 'website',
        url: 'https://fluxomta.com/indicadores/rastreador-de-liquidez',
        images: [
            {
                url: 'images/social/social-share.webp',
                width: 1917,
                height: 1024,
                alt: 'Fluxo MTA - A sua escola de Traders',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Quantum LT | O Rastreador de Liquidez - Fluxo MTA',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        images: [
            {
                url: 'images/social/social-share.webp',
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
            <TextBlockTwo />
            <TextBlockThree />
            <ZDSection />
            <PricingPlan />
            <FAQAccordion />
        </>
    );
}
