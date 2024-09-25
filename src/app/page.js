// src/app/page.js
import HeroSection from '@/components/Home/HeroSection';
import FAQAccordion from '@/components/Global/FAQAccordion';
import TextBlock from '@/components/Home/TextBlock';
import TextBlockTwo from '@/components/Home/TextBlockTwo';
import ImageAccordion from '@/components/Home/ProductAccordion';
import AboutSection from '@/components/Home/AboutSection';
import TextBlockFinal from '@/components/Home/TextBlockFinal';
import Parceria from '@/components/Global/Parceria';
import VideoSection from '@/components/Mentoria/VideoSection';
import TestimonialsSlider from '@/components/Home/TestimonialsSlider';

export const metadata = {
	robots: 'index, follow',
	title: 'Fluxo MTA - A sua escola de Traders',
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

export default function Home() {
	return (
		<>
			<HeroSection />
			<Parceria />
			<VideoSection />
			<TextBlock />
			<TextBlockTwo />
			<ImageAccordion />
			<TestimonialsSlider />
			<AboutSection />
			<TextBlockFinal />
			<FAQAccordion />
		</>
	);
}
