// src/components/Indicadores/TextBlockWhite.js
'use client';
import Icons from '@/components/Global/Icons';

export default function TextBlockWhite() {
    return (
        <section className="text-white black-gradient border-y border-secondary-700">
            <div className="max-w-6xl px-8 py-12 mx-auto text-lg ms:px-4 md:text-center">
                <p className="!-mb-4 text-2xl font-semibold md:text-3xl md:text-left ">Por que escolher o </p>
                <p className="mb-2 text-3xl font-semibold md:text-4xl md:text-left yellow">LT | O Rastreador de Liquidez</p>
                <div class='grid grid-cols-1 md:grid-cols-2 md:space-x-6'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center px-2 mb-2 border rounded-md border-secondary-700 black-gradient'>
                            <div className=''>
                                <Icons.CheckMark className="mr-3 w-7 yellow" />
                            </div>
                            <div className=''>
                                <p className='flex items-center text-base text-left'>
                                    Identificação de Topos e Fundos em Tempo Real: O LT destaca pontos de liquidez importantes, ou seja, você vai conseguir ter um GPS melhorando sua performance.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center px-2 mb-2 border rounded-md border-secondary-700 black-gradient'>
                            <div className=''>
                                <Icons.CheckMark className="mr-3 w-7 yellow" />
                            </div>
                            <div className=''>
                                <p className='flex items-center text-base text-left'>
                                    Intuituivo: O LT ajuda você a reconhecer as regiões mais importantes do mercado com uma simplicidade jamais vista em outras ferramentas, em alguns segundos você já definiu todas as regiões importantes do gráfico.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center px-2 mb-2 border rounded-md border-secondary-700 black-gradient'>
                            <div className=''>
                                <Icons.CheckMark className="mr-3 w-7 yellow" />
                            </div>
                            <div className=''>
                                <p className='flex items-center text-base text-left'>
                                    Flexibilidade Total: Funciona em qualquer tempo gráfico e mercado, seja em ações, opções, ou qualquer outro ativo de sua preferência.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center px-2 mb-2 border rounded-md border-secondary-700 black-gradient'>
                            <div className=''>
                                <Icons.CheckMark className="mr-3 w-7 yellow" />
                            </div>
                            <div className=''>
                                <p className='flex items-center text-base text-left'>
                                    Precisão na Tomada de Decisão: Com o LT, você pode determinar pontos de entrada, alvos e stops com maior certeza, você não vai cair mais em armadilhas do mercado.                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
