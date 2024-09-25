// src/app/page.js
import HeroSection from '@/components/Mentoria/HeroSection';
import FAQAccordion from '@/components/Global/FAQAccordion';
import TextBlock from '@/components/Mentoria/TextBlock';
import TextBlockTwo from '@/components/Mentoria/TextBlockTwo';
import ProductAccordion from '@/components/Mentoria/ProductAccordion';
import AboutSection from '@/components/Mentoria/AboutSection';
import TextBlockFinal from '@/components/Mentoria/TextBlockFinal';

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
            <TextBlock />
            <TextBlockTwo />
            <ProductAccordion />
            <AboutSection />
            <TextBlockFinal />
            <FAQAccordion />
        </>
    );
}
