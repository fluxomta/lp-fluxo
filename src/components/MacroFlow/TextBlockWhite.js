// src/components/Indicadores/TextBlockWhite.js
'use client';
import Icons from '@/components/Global/Icons';

export default function TextBlockWhite() {
    return (
        <section className="text-white black-gradient border-y border-secondary-700">
            <div className="max-w-6xl px-8 py-12 mx-auto text-lg ms:px-4 md:text-center">
                <p className="!-mb-4 text-2xl font-semibold md:text-3xl md:text-left ">Quais as vantagens do </p>
                <p className="mb-2 text-3xl font-bold md:text-4xl md:text-left yellow">MacroFlow?</p>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className='flex flex-col'>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>8 indicadores gratuitos em 1 só ferramenta</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Tudo o que você precisa, reunido em um único indicador.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Simplifique suas análises</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Esqueça a complexidade. Com o MacroFlow, você entende o mercado em apenas 1 minuto.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Opere como um Sniper</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Selecione apenas os trades mais vantajosos, eliminando o risco desnecessário.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Autossuficiência total</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Com o MacroFlow, você não precisa de outras plataformas ou gráficos. Toda a análise necessária está ao seu alcance.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Movimentos de alta probabilidade</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Encontre oportunidades de baixo risco com confiança.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
