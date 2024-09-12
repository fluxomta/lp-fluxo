// src/components/Indicadores/ListaIndicadores.js
import Image from 'next/image';

export default function ListaIndicadores() {
    return (
        <section
            className="relative h-auto text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-03.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
            <div className="relative max-w-5xl px-4 py-12 mx-auto z-10">
                <p className="text-2xl font-normal md:text-center md:text-4xl">O <strong>Macro Flow</strong> é mais que um <strong>sistema de análise de fluxo real</strong> - é sua arma secreta no mercado.</p>
                <p className="mb-6 text-2xl font-base md:text-center md:text-3xl md:-mb-1">Com esta <strong>poderosa caixa de ferramentas</strong>, você terá uma visão de mercado precisa como um raio X, operando apenas nos trades certos, como um verdadeiro Sniper.</p>
                <p className="mb-6 text-2xl font-base md:text-center md:text-3xl ">Mas lembre-se, com grandes poderes vêm </p>
                <p className="mb-6 text-3xl font-bold text-center md:text-4xl yellow uppercase">Grandes responsabilidades </p>
                <div className='grid gap-4 max-w-5xl mx-auto mb-12 p-8 '>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='w-full'>
                            <Image src="/images/icons/icone-03.webp" alt="Logo" width={250} height={250} className='mx-auto' />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
