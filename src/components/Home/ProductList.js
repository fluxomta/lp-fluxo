'use client';

import Link from "next/link";
import Icons from "../Global/Icons";

export default function ProductList() {
    return (
        <section className="text-white bg-primary-900">
            <div className='max-w-6xl px-4 pt-16 pb-8 mx-auto '>
                <p className="mb-4 text-lg md:font-bold md:text-3xl md:text-center">Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.</p>

                <div className='grid gap-4 max-w-6xl mx-auto mb-12 md:grid-cols-2'>
                    <div className='flex flex-col justify-between rounded-md bg-primary-500 border border-secondary-500/25 p-4 h-full'>
                        <div>
                            <h2 className='relative font-semibold yellow text-3xl'>Quantum LT</h2>
                            <p className='relative'>LT é o mapa perfeito do mercado, destacando pontos cruciais para operações mais lucrativas. Evite armadilhas, encontre entradas e saídas ideais, e faça análises profundas em segundos.</p>
                        </div>
                        <Link href="/indicadores/quantum-LT">
                            <button className="flex items-center justify-center w-full group btn md:btn-large">
                                Conheça mais sobre o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-col justify-between rounded-md bg-primary-500 border border-secondary-500/25 p-4 h-full'>
                        <div>
                            <h2 className='relative font-semibold yellow text-3xl'>Alvo R3</h2>
                            <p className='relative'>O Alvo R3 revela o segredo dos grandes fundos, traçando automaticamente os alvos perfeitos. Pare de perder oportunidades e opere com soluções em futuros, ações e opções, com a tecnologia TradeVision ao seu lado.</p>
                        </div>
                        <Link href="/indicadores/alvo-R3">
                            <button className="flex items-center justify-center w-full group btn md:btn-large">
                                Conheça mais sobre o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-col justify-between rounded-md bg-primary-500 border border-secondary-500/25 p-4 h-full'>
                        <div>
                            <h2 className='relative font-semibold yellow text-3xl'>Fluxo V6</h2>
                            <p className='relative'>O Fluxo V6 oferece leitura rápida de fluxo, regras de coloração simples e navegação segura nas regiões de manipulação. Aumente seus lucros e opere com confiança.</p>
                        </div>
                        <Link href="/indicadores/fluxo-V6" className="mt-auto">
                            <button className="flex items-center justify-center w-full group btn md:btn-large">
                                Conheça mais sobre o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>

                    <div className='flex flex-col justify-between rounded-md bg-primary-500 border border-secondary-500/25 p-4 h-full'>
                        <div>
                            <h2 className='relative font-semibold yellow text-3xl'>ZD</h2>
                            <p className='relative'>O Indicador ZD (Zonas de Decisão) é exclusivo para Índice e Dólar, destacando as regiões mais importantes do mercado com 89% de acerto. Um dos favoritos dos meus alunos de Day Trade, ele melhorou o desempenho e vem como bônus na assinatura de qualquer indicador do MTA.</p>
                        </div>
                        <Link href="/indicadores/">
                            <button className="flex items-center justify-center w-full group btn md:btn-large">
                                Conheça mais sobre o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-col justify-between rounded-md bg-primary-500 border border-secondary-500/25 p-4 h-full'>
                        <div>
                            <h2 className='relative font-semibold yellow text-3xl'>MacroFlow</h2>
                            <p className='relative'>MacroFlow é o indicador mais avançado do mercado, unindo 8 ferramentas em uma para detectar posições de grandes players e prever movimentos com precisão. Tome decisões assertivas e domine o fluxo real em qualquer ativo.</p>
                        </div>
                        <Link href="/indicadores/macroflow">
                            <button className="flex items-center justify-center w-full group btn md:btn-large">
                                Conheça mais sobre o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-col justify-between rounded-md bg-primary-500 border border-secondary-500/25 p-4 h-full'>
                        <div>
                            <h2 className='relative font-semibold yellow text-3xl'>SpeedFlow</h2>
                            <p className='relative'>O SpeedFlow é um método gratuito que simplifica o uso do fluxo no mercado financeiro. Aprenda como os verdadeiros vencedores operam, ganhe mais confiança e precisão, e eleve seu nível de atuação. Comece agora e transforme sua trajetória no mercado.</p>
                        </div>
                        <Link href="/indicadores/speedflow">
                            <button className="flex items-center justify-center w-full group btn md:btn-large">
                                Conheça mais sobre o indicador <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
