// src/components/Indicadores/SimpleCardGrid.js
'use client';
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
export default function SimpleCardGrid() {

    return (
        <section className="max-w-6xl mx-auto text-white">
            <div className='grid gap-4 max-w-6xl mx-auto mb-12 md:grid-cols-2 shadow-xl backdrop-blur-md'>
                <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                    <h2 className='relative font-semibold yellow text-3xl'>Quantum LT</h2>
                    <p className='relative'>LT é o mapa perfeito do mercado, destacando pontos cruciais para operações mais lucrativas. Evite armadilhas, encontre entradas e saídas ideais, e faça análises profundas em segundos.</p>
                    <Link href="/indicadores/quantum-LT">
                        <button className="flex items-center justify-center group btn !text-left">
                            Conhecer o Quantum LT <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
                <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                    <h2 className='relative font-semibold yellow text-3xl'>Alvo R3</h2>
                    <p className='relative'>O Alvo R3 revela o segredo dos grandes fundos, traçando automaticamente os alvos perfeitos. Pare de perder oportunidades e opere com soluções em futuros, ações e opções, com a tecnologia TradeVision ao seu lado.</p>
                    <Link href="/indicadores/alvo-R3">
                        <button className="flex items-center justify-center group btn !text-left">
                            Conhecer o Alvo R3 <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
                <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                    <h2 className='relative font-semibold yellow text-3xl'>Fluxo V6</h2>
                    <p className='relative'>O Fluxo V6 oferece leitura rápida de fluxo, regras de coloração simples e navegação segura nas regiões de manipulação. Aumente seus lucros e opere com confiança.</p>
                    <Link href="/indicadores/fluxo-V6">
                        <button className="flex items-center justify-center group btn !text-left">
                            Conhecer o Fluxo V6 <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
                <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                    <h2 className='relative font-semibold yellow text-3xl'>Macroflow</h2>
                    <p className='relative'>MacroFlow é o indicador mais avançado do mercado, unindo 8 ferramentas em uma para detectar posições de grandes players e prever movimentos com precisão. Tome decisões assertivas e domine o fluxo real em qualquer ativo.</p>
                    <Link href="/indicadores/macroflow">
                        <button className="flex items-center justify-center group btn !text-left">
                            Conhecer o Macroflow <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
                <div className='col-span-2  rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                    <h2 className='relative font-semibold yellow text-3xl'>SpeedFlow O Método definitivo para Análise de Fluxo
                    </h2>
                    <p className='relative'>O Fluxo é mais simples do que parece e com o uso dele você vai elevar seu patamar no mercado financeiro.</p>
                    <p>O SpeedFlow é um método gratuito em que você vai entender definitivamente como quem ganha dinheiro de verdade no mercado atua.</p>
                    <p>Você vai operar com mais confiança e precisão, Adicionando o fluxo no seu operacional.</p>
                    <Link href="/indicadores/speedflow">
                        <button className="flex items-center justify-center group btn !text-left">
                            Conhecer o SpeedFlow <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
