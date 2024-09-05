// src/components/Indicadores/SpeedFlow.js
'use client';
import Link from 'next/link';
import Icons from '@/components/Global/Icons';

export default function SpeedFlow() {
    return (
        <section className="relative text-white bg-primary-900">
            <div className='max-w-6xl px-4 py-12 mx-auto'>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="relative col-span-2 overflow-hidden border rounded-md bg-primary-500 md:col-span-2 border-primary-500 hover:border-primary-400 hover:bg-primary-700">
                        <div className='relative z-10 items-center block p-6 md:space-x-6 md:flex'>
                            <div className='flex flex-col justify-between w-full h-full md:w-2/3'>
                                <h3 className="mb-2 text-3xl font-semibold text-white">SpeedFlow <br /> O Método definitivo para
                                    Análise de Fluxo</h3>
                                <p className="mb-0.5 text-lg text-white">O Fluxo é mais simples do que parece e com o uso dele você vai elevar seu patamar no mercado financeiro.</p>

                                <p className="mb-0.5 text-lg text-white">O SpeedFlow é um método gratuito em que você vai entender definitivamente como quem ganha dinheiro de verdade no mercado atua.</p>

                                <p className="mb-4 text-lg text-white">Você vai operar com mais confiança e precisão,
                                    Adicionando o fluxo no seu operacional.</p>

                                <Link href="/indicadores">
                                    <button className="flex items-center justify-center group btn-dark !text-left w-full">
                                        Conhecer o SpeedFlow <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </button>
                                </Link>
                            </div>
                            <div className='flex flex-col items-center justify-between w-full h-full md:w-1/3'>
                                <div className='w-full p-12 bg-primary-600 mt-4 border-2 rounded-md border-secondary-700 h-[200px]'> <h1>Arte</h1></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
