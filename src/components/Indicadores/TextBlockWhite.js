// src/components/Indicadores/TextBlockWhite.js
'use client';
import Link from 'next/link';
import Icons from '@/components/Global/Icons';

export default function TextBlockWhite() {
    return (
        <section className="text-white black-gradient border-y border-secondary-700">
            <div className="max-w-6xl px-8 py-12 mx-auto text-lg ms:px-4 md:text-center">
                <p className="mb-2 text-2xl font-semibold md:text-3xl md:text-left ">O problema de 87% dos que tentam operar no mercado
                    financeiro é não ter certeza de suas decisões.</p>
                <p className="mb-2 text-2xl font-semibold md:text-3xl md:text-left yellow">Operar sem certezas impacta seus resultados
                    e o seu bolso.</p>
                <p className="mb-4 text-2xl font-semibold md:text-3xl md:text-left ">Sair muito cedo de uma operação é deixar dinheiro na mesa;
                    sair muito tarde é perder dinheiro.</p>
                <p className='mb-4 text-2xl font-bold md:text-4xl md:text-left yellow'>Usar a ferramenta certa vai:</p>
                <div class='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <p className='flex items-center text-lg font-semibold'>
                            <Icons.CheckMark className="w-6 mr-1 yellow" /> Aumentar seus ganhos
                        </p>
                        <p className='flex items-center text-lg font-semibold'>
                            <Icons.CheckMark className="w-6 mr-1 yellow" /> Reduzir suas perdas
                        </p>
                        <p className='flex items-center text-lg font-semibold'>
                            <Icons.CheckMark className="w-6 mr-1 yellow" /> Fazer uma análise profissional em segundos
                        </p>
                    </div>
                    <div>
                        <p className='flex items-center text-lg font-semibold'>
                            <Icons.CheckMark className="w-6 mr-1 yellow" /> Encontrar os pontos perfeitos de entrada e saída
                        </p>
                        <p className='flex items-center text-lg font-semibold'>
                            <Icons.CheckMark className="w-6 mr-1 yellow" /> Reduzir sua ansiedade
                        </p>
                        <p className='flex items-center text-lg font-semibold'>
                            <Icons.CheckMark className="w-6 mr-1 yellow" /> Impactar positivamente sua qualidade de vida
                        </p>
                    </div>
                </div>
                <p className='mt-8 text-2xl font-bold md:text-4xl md:text-center'>Por isso nossos indicadores foram pensados para seu operacional, <span className='yellow'>conheça eles!</span></p>

            </div>
        </section>
    );
}
