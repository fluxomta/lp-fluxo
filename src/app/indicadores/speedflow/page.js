// src/app/page.js
import PricingPlan from '@/components/SpeedFlow/PricingPlan';
import HeroSection from '@/components/SpeedFlow/HeroSection';
import TextBlockThree from '@/components/SpeedFlow/TextBlockThree';
import TextBlockTwo from '@/components/SpeedFlow/TextBlockTwo';
import TextBlockWhite from '@/components/SpeedFlow/TextBlockWhite';
import ZDSection from '@/components/SpeedFlow/ZDSection';

export const metadata = {
    robots: 'index, follow',
    title: 'Alvo R3 - O Rastreador de Alvos - Fluxo MTA',
    description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'Alvo R3 - O Rastreador de Alvos - Fluxo MTA',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        type: 'website',
        url: 'https://fluxomta.com/indicadores/alvo-R3',
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
        title: 'Alvo R3 - O Rastreador de Alvos - Fluxo MTA',
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
            <TextBlockWhite />
            <TextBlockTwo />
            <TextBlockThree />
            <ZDSection />
            <PricingPlan />
        </>
    );
}
