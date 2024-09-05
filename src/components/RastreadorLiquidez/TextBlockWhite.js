// src/components/Indicadores/TextBlockWhite.js
'use client';
import Icons from '@/components/Global/Icons';

export default function TextBlockWhite() {
    return (
        <section className="text-white black-gradient border-y border-secondary-700">
            <div className="max-w-6xl px-8 py-12 mx-auto text-lg ms:px-4 md:text-center">
                <p className="!-mb-4 text-2xl font-semibold md:text-3xl md:text-left ">Por que escolher o </p>
                <p className="mb-2 text-3xl font-semibold md:text-4xl md:text-left yellow">LT | O Rastreador de Liquidez</p>
                <div class='grid grid-cols-1 gap-4'>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className='flex flex-col'>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Identificação de Topos e Fundos em Tempo Real</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                O LT <strong>destaca pontos de liquidez importantes</strong>, ou seja, você vai conseguir ter um GPS melhorando sua performance.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Intuituivo</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                O LT ajuda você a <strong>reconhecer as regiões mais importantes do mercado com uma simplicidade</strong> jamais vista em outras ferramentas, em alguns segundos você já definiu todas as regiões importantes do gráfico.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Flexibilidade Total</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Funciona em <strong>qualquer tempo gráfico e mercado</strong>, seja em ações, opções, ou qualquer outro ativo de sua preferência.                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Precisão na Tomada de Decisão:</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Com o LT, você pode <strong>determinar pontos de entrada, alvos e stops com maior certeza</strong>, você não vai cair mais em armadilhas do mercado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
