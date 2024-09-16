// src/app/page.js
import PricingPlan from '@/components/SpeedFlow/PricingPlan';
import HeroSection from '@/components/SpeedFlow/HeroSection';
import Parceria from '@/components/Global/Parceria';
import TextBlockThree from '@/components/SpeedFlow/TextBlockThree';
import TextBlockWhite from '@/components/SpeedFlow/TextBlockWhite';
import FormInscricao from '@/components/SpeedFlow/FormInscricao';
import ListaIndicadores from '@/components/SpeedFlow/ListaIndicadores';

export const metadata = {
    robots: 'index, follow',
    title: 'SpeedFlow - Fluxo MTA',
    description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'SpeedFlow - O Rastreador de Alvos - Fluxo MTA',
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
        title: 'SpeedFlow - O Rastreador de Alvos - Fluxo MTA',
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
            <FormInscricao />
            <TextBlockThree />
            <PricingPlan />
        </>
    );
}
