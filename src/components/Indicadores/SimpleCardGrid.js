// src/components/Indicadores/SimpleCardGrid.js
'use client';
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
export default function SimpleCardGrid() {

    return (
        <section className="max-w-6xl mx-auto text-white">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div className="relative col-span-2 overflow-hidden border rounded-lg md:col-span-1 border-secondary-700">
                    <div className='relative z-10 flex flex-row flex-col justify-between h-full p-4 bg-black'>
                        <h3 className="mb-2 text-2xl font-semibold yellow">Liquidity Tracker (LT) <br />
                            O Rastreador de Liquidez</h3>
                        <p className="mb-4 text-lg text-white">Uma ferramenta que mostra exatamente os pontos importantes do mercado é o que torna o trade perfeito.</p>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn-dark !text-left">
                                Conhecer o Indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative col-span-2 overflow-hidden border rounded-lg md:col-span-1 border-secondary-700">
                    <div className='relative z-10 flex flex-col justify-between h-full p-4 bg-black'>
                        <h3 className="mb-2 text-2xl font-semibold text-white">Alvo R3 <br />
                            O Rastreador de Alvos</h3>
                        <p className="mb-4 text-lg text-white">O indicador Alvo R3 coloca em suas mãos o segredo dos grandes fundos, um algoritmo avançado que traça de forma automática os alvos perfeitos para você.</p>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn-dark !text-left">
                                Conhecer o Indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative col-span-2 overflow-hidden border rounded-lg md:col-span-1 border-secondary-700">
                    <div className='relative z-10 flex flex-col justify-between h-full p-4 bg-black'>
                        <h3 className="mb-2 text-2xl font-semibold text-white">Fluxo V6 <br />
                            O Rastreador de Fluxo</h3>
                        <p className="mb-4 text-lg text-white">Cansado de ferramentas complicadas que te confundem e fazem perder tempo?</p>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn !text-left">
                                Conhecer o Indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative col-span-2 overflow-hidden border rounded-lg md:col-span-1 border-secondary-700">
                    <div className='relative z-10 flex flex-col justify-between h-full p-4 bg-black'>
                        <h3 className="mb-2 text-2xl font-semibold yellow">MacroFlow  <br />
                            A sua visão de Raio X</h3>
                        <p className="mb-4 text-lg text-white">CO indicador mais avançado do mercado Brasileiro está a seu alcance, o MacroFlow une 5 indicadores em um.</p>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn !text-left">
                                Conhecer o Indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>


            </div>
        </section>
    );
}
