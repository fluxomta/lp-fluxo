// src/components/Indicadores/SimpleCardGrid.js
'use client';
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
import Image from 'next/image';
export default function SimpleCardGrid() {

    return (
        <section className="max-w-6xl mx-auto text-white">
            <div className='grid gap-4 max-w-6xl mx-auto mb-12 md:grid-cols-2 shadow-xl backdrop-blur-md'>
                <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                    <h2 className='relative font-semibold yellow text-3xl'>Quantum LT</h2>
                    <p className='relative'>LT é o mapa perfeito do mercado, destacando pontos cruciais para operações mais lucrativas. Evite armadilhas, encontre entradas e saídas ideais, e faça análises profundas em segundos.</p>
                    <Link href="/indicadores/quantum-LT">
                        <button className="flex items-center justify-center group btn !text-left">
                            Conheça o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
                <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                    <h2 className='relative font-semibold yellow text-3xl'>Alvo R3</h2>
                    <p className='relative'>O Alvo R3 revela o segredo dos grandes fundos, traçando automaticamente os alvos perfeitos. Pare de perder oportunidades e opere com soluções em futuros, ações e opções, com a tecnologia TradeVision ao seu lado.</p>
                    <Link href="/indicadores/alvo-R3">
                        <button className="flex items-center justify-center group btn !text-left">
                            Conheça o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
                <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                    <h2 className='relative font-semibold yellow text-3xl'>Fluxo V6</h2>
                    <p className='relative'>O Fluxo V6 oferece leitura rápida de fluxo, regras de coloração simples e navegação segura nas regiões de manipulação. Aumente seus lucros e opere com confiança.</p>
                    <Link href="/indicadores/fluxo-V6">
                        <button className="flex items-center justify-center group btn !text-left">
                            Conheça o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
                <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                    <h2 className='relative font-semibold yellow text-3xl'>Macroflow</h2>
                    <p className='relative'>MacroFlow é o indicador mais avançado do mercado, unindo 8 ferramentas em uma para detectar posições de grandes players e prever movimentos com precisão. Tome decisões assertivas e domine o fluxo real em qualquer ativo.</p>
                    <Link href="/indicadores/macroflow">
                        <button className="flex items-center justify-center group btn !text-left">
                            Conheça o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
                <div className='rounded-md bg-primary-500 border border-secondary-500/25 p-4 col-span-2 '>
                    <div className='md:flex items-center'>
                        <div className='flex flex-col justify-between w-full h-full md:w-2/3'>
                            <h3 className="mb-2 text-3xl font-semibold text-white">SpeedFlow <br /> O Método definitivo para
                                Análise de Fluxo</h3>
                            <p className="mb-0.5 text-lg text-white">O Fluxo é mais simples do que parece e com o uso dele você vai elevar seu patamar no mercado financeiro.</p>

                            <p className="mb-0.5 text-lg text-white">O SpeedFlow é um método gratuito em que você vai entender definitivamente como quem ganha dinheiro de verdade no mercado atua.</p>

                            <p className="mb-4 text-lg text-white">Você vai operar com mais confiança e precisão,
                                Adicionando o fluxo no seu operacional.</p>
                        </div>
                        <div className='flex flex-col items-center justify-between w-full h-full md:w-1/3'>
                            <div className='w-full p-12 rounded-md h-full flex items-center'>
                                <Image src="/speedflow.webp" alt="Logo" width={455} height={102} className='mx-auto' />
                            </div>
                        </div>

                    </div>
                    <div className='col-span-2'>
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center group btn-dark !text-left w-full">
                                Conhecer o SpeedFlow <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
