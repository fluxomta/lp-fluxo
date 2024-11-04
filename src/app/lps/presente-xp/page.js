import FormXP from '@/components/Forms/FormXP';
import Parceria from '@/components/Global/Parceria';

export const metadata = {
    robots: 'noindex, nofollow',
    title: 'Esse é o Presente da XP para você',
    description: ' 3 indicadores que vão te fazer lucrar no Mercado.',
    keywords: ['Fluxo', 'Indicadores', 'Indicadores Profit', 'Indicadores Nelógica'],
    openGraph: {
        title: 'Esse é o Presente da XP para você',
        description: ' 3 indicadores que vão te fazer lucrar no Mercado.',
        type: 'website',
        url: 'https://fluxomta.com/lps/presente-xp',
        images: [
            {
                url: '/images/social/presente-xp.webp',
                width: 1917,
                height: 1024,
                alt: 'Presente XP',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Esse é o Presente da XP para você',
        description: ' 3 indicadores que vão te fazer lucrar no Mercado.',
        images: [
            {
                url: '/images/social/presente-xp.webp',
                alt: 'Presente XP',
            },
        ],
    },
};

export default function Home() {
    return (
        <>
            <section
                id="inscreva-se"
                className="relative h-auto text-white"
                style={{
                    backgroundImage: 'url(/images/bg/bg-02.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
                <div className="relative z-10 flex flex-col justify-between h-full max-w-6xl px-4 py-16 mx-auto">
                    <div className="relative z-10 flex items-center mb-6">
                        <div className="w-full text-left">
                            <h1 className="mb-8  mx-auto text-4xl font-bold md:text-5xl text-white">
                                <span className='yellow'>Curso ABC do Fluxo + 3 Indicadores</span> que vão te fazer lucrar no mercado!
                            </h1>
                            <p className=" mx-auto text-4xl font-bold md:text-5xl text-white">
                                Esse é o Presente da XP para você.
                            </p>

                        </div>
                    </div>

                    <FormXP label="Quero meu presente" origem="lps/presente-xp" />
                </div>
            </section>
            <Parceria />
        </>
    );
}
