// src/app/page.js
import HeroSection from '@/components/Home/HeroSection';
import TextBlock from '@/components/Home/TextBlock';
import TextBlockTwo from '@/components/Home/TextBlockTwo';

import ProductList from '@/components/Home/ProductList';
import ImageAccordion from '@/components/Home/ImageAccordion';
import AboutSection from '@/components/Home/AboutSection';
import TextBlockFinal from '@/components/Home/TextBlockFinal';
import VideoSection from '@/components/Mentoria/VideoSection';
import BgGlobe from '@/components/Home/BgGlobe';

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
			{/* <VideoSection /> */}
			<TextBlock />
			<TextBlockTwo />
			<ImageAccordion />
			<BgGlobe />
			<ProductList />
			<AboutSection />
			<TextBlockFinal />
		</>
	);
}
