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
                <p className="text-2xl font-bold md:-mb-1 md:text-center md:text-4xl">Se você já possui uma estratégia de operação,
                    o SpeedFlow vai melhorar ela ainda mais. </p>
                <p className="mb-6 text-2xl font-base md:text-center md:text-3xl md:-mb-1">Mas se ainda não tem um operacional, não se preocupe:
                    <span className='block'>o Speed Flow é a solução que você procura.</span>
                </p>
                <p className="mb-6 text-2xl font-base md:text-center md:text-3xl ">Este método revolucionário simplifica sua análise de mercado e garante que você alcance</p>
                <p className="mb-6 text-3xl font-bold text-center md:text-4xl yellow uppercase">um novo patamar de leitura </p>
                <div className='grid gap-4 max-w-5xl mx-auto mb-12 md:grid-cols-5 p-8 shadow-xl backdrop-blur-md'>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='w-full'>
                            <Image src="/images/icons/icone-01.webp" alt="Logo" width={250} height={250} className='mx-auto' />
                        </span>
                        <p className='w-full  text-center text-lg font-bold uppercase'>LT</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='w-full'>
                            <Image src="/images/icons/icone-02.webp" alt="Logo" width={250} height={250} className='mx-auto' />
                        </span>
                        <p className='w-full  text-center text-lg font-bold uppercase'>Fluxo V6</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='w-full'>
                            <Image src="/images/icons/icone-03.webp" alt="Logo" width={250} height={250} className='mx-auto' />
                        </span>
                        <p className='w-full  text-center text-lg font-bold uppercase'>MacroFlow</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='w-full'>
                            <Image src="/images/icons/icone-04.webp" alt="Logo" width={250} height={250} className='mx-auto' />
                        </span>
                        <p className='w-full  text-center text-lg font-bold uppercase'>Alvo R3</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='w-full text-center'>
                            <Image src="/images/icons/icone-05.webp" alt="Logo" width={250} height={250} className='mx-auto' />
                        </span>
                        <p className='w-full  text-center text-lg font-bold uppercase'>ZD</p>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <p className=" md:flex mb-6 text-3xl font-bold text-center md:text-4xl yellow uppercase items-center justify-center">+ Comunidade  <Image src="/speedflow.webp" alt="Logo" width={280} height={250} className='ml-4 -mt-3' /> * </p>
                </div>
                <div className='flex md:hidden flex-col items-center'>
                    <p className="text-3xl font-bold  md:text-4xl yellow uppercase">+ Comunidade</p>
                    <Image src="/speedflow.webp" alt="Logo" width={250} height={250} className='ml-4 -mt-5' />
                </div>
            </div>
        </section >
    );
}
