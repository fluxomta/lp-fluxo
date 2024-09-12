// src/components/Indicadores/ListaIndicadores.js
import Image from 'next/image';

export default function ListaIndicadores() {
    return (
        <section
            className="relative h-auto text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-02.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
            <div className="relative max-w-5xl px-4 py-12 mx-auto z-10">
                <p className="text-3xl font-bold md:-mb-1 md:text-center md:text-4xl">Se você já possui uma estratégia de operação,
                    o SpeedFlow vai melhorar ela ainda mais. </p>
                <p className="mb-6 text-3xl font-base text-center md:text-3xl md:-mb-1">Mas se ainda não tem um operacional, não se preocupe:
                    <span className='block'>o Speed Flow é a solução que você procura.</span></p>

                <p className="mb-6 text-3xl font-base text-center md:text-3xl ">Este método revolucionário simplifica sua análise de mercado e garante que você alcance</p>
                <p className="mb-6 text-3xl font-bold text-center md:text-4xl yellow uppercase">um novo patamar de leitura </p>
            </div>
        </section>
    );
}
