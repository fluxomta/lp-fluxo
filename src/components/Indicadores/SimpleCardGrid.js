// src/components/SimpleCardGrid.js
'use client';
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
export default function SimpleCardGrid() {

    return (
        <section className="max-w-6xl p-2 mx-auto text-white md:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div className="relative col-span-2 overflow-hidden border rounded-lg md:col-span-1 border-secondary-700">
                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500/75 from-black to-primary-900'></div>
                    <div className='relative z-10 flex flex-row flex-col justify-between h-full p-4'>
                        <h3 className="mb-2 text-2xl font-semibold text-yellow-500">Liquidity Tracker (LT) <br />
                            O Rastreador de Liquidez</h3>
                        <p className="mb-4 text-lg text-gray-300">Uma ferramenta que mostra exatamente os pontos importantes do mercado é o que torna o trade perfeito.</p>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn-dark !text-left">
                                Conhecer o Indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative col-span-2 overflow-hidden border rounded-lg md:col-span-1 border-secondary-700">
                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500/75 from-black to-primary-900'></div>
                    <div className='relative z-10 flex flex-col justify-between h-full p-4'>
                        <h3 className="mb-2 text-2xl font-semibold text-yellow-500">Alvo R3 <br />
                            O Rastreador de Alvos</h3>
                        <p className="mb-4 text-lg text-gray-300">O indicador Alvo R3 coloca em suas mãos o segredo dos grandes fundos, um algoritmo avançado que traça de forma automática os alvos perfeitos para você.</p>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn-dark !text-left">
                                Conhecer o Indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative col-span-2 overflow-hidden border rounded-lg md:col-span-1 border-secondary-700">
                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500/75 from-black to-primary-900'></div>
                    <div className='relative z-10 flex flex-col justify-between h-full p-4'>
                        <h3 className="mb-2 text-2xl font-semibold text-yellow-500">Fluxo V6 <br />
                            O Rastreador de Fluxo</h3>
                        <p className="mb-4 text-lg text-gray-300">Cansado de ferramentas complicadas que te confundem e fazem perder tempo?</p>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn-dark !text-left">
                                Conhecer o Indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative col-span-2 overflow-hidden border rounded-lg md:col-span-1 border-secondary-700">
                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500/75 from-black to-primary-900'></div>
                    <div className='relative z-10 flex flex-col justify-between h-full p-4'>
                        <h3 className="mb-2 text-2xl font-semibold text-yellow-500">MacroFlow  <br />
                            A sua visão de Raio X</h3>
                        <p className="mb-4 text-lg text-gray-300">CO indicador mais avançado do mercado Brasileiro está a seu alcance, o MacroFlow une 5 indicadores em um.</p>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn-dark !text-left">
                                Conhecer o Indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative col-span-2 overflow-hidden border rounded-lg md:col-span-1 border-secondary-700">
                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500/75 from-black to-primary-900'></div>
                    <div className='relative z-10 flex flex-col justify-between h-full p-4'>
                        <h3 className="mb-2 text-2xl font-bold text-yellow-500">SpeedFlow <br /> O Método definitivo para
                            Análise de Fluxo</h3>
                        <p className="mb-4 text-lg text-gray-300">O Fluxo é mais simples do que parece e com o uso dele você vai elevar seu patamar no mercado financeiro.</p>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn-dark !text-left">
                                Conhecer o Indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
