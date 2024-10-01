import Icons from "@/components/Global/Icons";
import Link from "next/link";

export const metadata = {
    robots: 'noindex, nofollow',
    title: 'Obrigado por se inscrever!',
    description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'Indicadores - Fluxo MTA',
        description: 'Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.',
        type: 'website',
        url: 'https://fluxomta.com/indicadores',
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
        title: 'Obrigado por se inscrever!',
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
        <section className="relative text-white border-t-2 border-secondary-700 black-gradient md:min-h-[75vh] flex items-center">
            <div className="max-w-6xl px-6 py-12 mx-auto text-center relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Obrigado por se inscrever na <span className="yellow block">Mentoria Método Fluxo simplificado 3.0
                    </span>
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    📧 <strong>Verifique seu email:</strong><br />  Em alguns minutos você vai receber um email de confirmação de inscrição. Fique de olho no Spam.
                </p>
                <p className="text-lg md:text-xl mb-4">
                    📲 Canal onde ensino todos os dias minhas estratégias.
                    <br />
                    Receba análises diárias e tudo sobre Day Trade.
                </p>
                <Link
                    href="https://t.me/tonydaytrade"
                    className="mb-2 flex items-center justify-center rounded bg-gradient-to-r from-[#1c92d2] via-[#1c92d2] to-[#7dc5d3] px-6 py-2.5 text-lg font-bold  leading-normal text-white shadow-md scale-90 hover:scale-105 transition-all duration-400">
                    <Icons.Telegram className="w-12 mr-4" />
                    Clique aqui para entrar no Telegram
                </Link>

                <p className="text-lg md:text-2xl">
                    Estamos animados para te acompanhar nessa jornada! 🚀
                </p>
            </div>
        </section>
    );
}
