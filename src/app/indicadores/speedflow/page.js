// src/app/page.js
import PricingPlan from '@/components/SpeedFlow/PricingPlan';
import HeroSection from '@/components/SpeedFlow/HeroSection';
import Parceria from '@/components/Global/Parceria';
import TextBlockThree from '@/components/SpeedFlow/TextBlockThree';
import TextBlockWhite from '@/components/SpeedFlow/TextBlockWhite';
import FormInscricao from '@/components/SpeedFlow/FormInscricao';
import ListaIndicadores from '@/components/SpeedFlow/ListaIndicadores';
import FAQAccordion from '@/components/Global/FAQAccordion';

export const metadata = {
    robots: 'index, follow',
    title: 'SpeedFlow - Fluxo MTA',
    description: 'Este método revolucionário simplifica sua análise de mercado e garante que você alcance um novo patamar de leitura',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'SpeedFlow - Aprenda a operar como os grandes tubarões com o fluxo real',
        description: 'Este método revolucionário simplifica sua análise de mercado e garante que você alcance um novo patamar de leitura',
        type: 'website',
        url: 'https://fluxomta.com/indicadores/speedflow',
        images: [
            {
                url: 'images/social/speedflow.webp',
                width: 1917,
                height: 1024,
                alt: 'Fluxo MTA - A sua escola de Traders',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SpeedFlow - Aprenda a operar como os grandes tubarões com o fluxo real',
        description: 'Este método revolucionário simplifica sua análise de mercado e garante que você alcance um novo patamar de leitura',
        images: [
            {
                url: 'images/social/speedflow.webp',
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
            <FAQAccordion />
        </>
    );
}
