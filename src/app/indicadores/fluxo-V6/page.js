// src/app/page.js
import PricingPlan from '@/components/FluxoV6/PricingPlan';
import HeroSection from '@/components/FluxoV6/HeroSection';
import Parceria from '@/components/Global/Parceria';
import TextBlockThree from '@/components/FluxoV6/TextBlockThree';
import TextBlockTwo from '@/components/FluxoV6/TextBlockTwo';
import TextBlockWhite from '@/components/FluxoV6/TextBlockWhite';
import ZDSection from '@/components/FluxoV6/ZDSection';

export const metadata = {
    robots: 'index, follow',
    title: 'Fluxo V6 - O Rastreador de Fluxo - Fluxo MTA',
    description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'Fluxo V6 - O Rastreador de Fluxo - Fluxo MTA',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        type: 'website',
        url: 'https://fluxomta.com/indicadores/fluxo-V6',
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
        title: 'Fluxo V6 - O Rastreador de Fluxo - Fluxo MTA',
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
        </>
    );
}
