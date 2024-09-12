// src/app/page.js
import PricingPlan from '@/components/MacroFlow/PricingPlan';
import HeroSection from '@/components/MacroFlow/HeroSection';
import Parceria from '@/components/MacroFlow/Parceria';
import TextBlockThree from '@/components/MacroFlow/TextBlockThree';
import TextBlockWhite from '@/components/MacroFlow/TextBlockWhite';
import FormInscricao from '@/components/MacroFlow/FormInscricao';
import ListaIndicadores from '@/components/MacroFlow/ListaIndicadores';
import ZDSection from '@/components/MacroFlow/ZDSection';
import TextBlockOne from '@/components/MacroFlow/TextBlockOne';

export const metadata = {
    robots: 'index, follow',
    title: 'MacroFlow - Fluxo MTA',
    description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'MacroFlow - Fluxo MTA',
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
        title: 'MacroFlow -- Fluxo MTA',
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
            <ListaIndicadores />
            <TextBlockWhite />
            <TextBlockOne />
            <ZDSection />
            <FormInscricao />
            <TextBlockThree />
            <PricingPlan />
        </>
    );
}
