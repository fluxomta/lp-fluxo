import Icons from "@/components/Global/Icons";
import Link from "next/link";

export const metadata = {
    robots: 'noindex, nofollow',
    title: 'Obrigado por se inscrever!',
    description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'Obrigado por se inscrever!',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        type: 'website',
        url: 'https://fluxomta.com/indicadores',
        images: [
            {
                url: '/images/social/social-share.webp',
                width: 1917,
                height: 1024,
                alt: 'Presente XP',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obrigado por se inscrever!',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        images: [
            {
                url: '/images/social/social-share.webp',
                alt: 'Presente XP',
            },
        ],
    },
};

export default function Home() {
    return (
        <section className="relative text-white border-t-2 border-secondary-700 black-gradient md:min-h-[75vh] flex items-center">
            <div className="max-w-6xl px-6 py-12 mx-auto text-center relative z-10">
                <p className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="yellow">Obrigado!</span><br /> Solicite seu presente XP no nosso whats pelo link abaixo
                </p>
                <Link
                    href="https://wa.me/5541984330888?text=Oi%2C%20gostaria%20de%20saber%20como%20fa%C3%A7o%20para%20adquirir%20meu%20*Presente%20XP*%20(indicadores%20%2B%20curso%20gratuito)"
                    className="mb-2 flex items-center justify-center rounded bg-gradient-to-r from-[#075e54] via-[#128c7e] to-[#075e54] px-6 py-2.5 text-lg font-bold  leading-normal text-white shadow-md scale-90 hover:scale-105 transition-all duration-400">
                    <Icons.Whatsapp className="w-12 mr-4" />
                    Quero meu presente agora
                </Link>
            </div>
        </section>
    );
}
