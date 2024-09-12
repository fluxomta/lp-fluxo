// src/components/Indicadores/TextBlockWhite.js
'use client';
import Icons from '@/components/Global/Icons';

export default function TextBlockWhite() {
    return (
        <section className="text-white black-gradient border-y border-secondary-700">
            <div className="max-w-6xl px-8 py-12 mx-auto text-lg ms:px-4 md:text-center">
                <p className="!-mb-4 text-2xl font-semibold md:text-3xl md:text-left ">Por que escolher o </p>
                <p className="mb-2 text-3xl font-semibold md:text-4xl md:text-left yellow">Alvo R3 |
                    O Rastreador de Alvos</p>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className='flex flex-col'>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <span><Icons.CheckMark className="mr-1.5 w-7 yellow" /></span>
                                <strong>Identificação Precisa de Estágios de Preço</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Nosso algoritmo ajuda você a identificar com precisão em qual estágio do movimento o preço está, permitindo que você saiba exatamente até onde levar sua posição sem surpresas.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <span><Icons.CheckMark className="mr-1.5 w-7 yellow" /></span>
                                <strong>Versatilidade</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Funciona em diversos tempos gráficos e uma ampla gama de ativos, incluindo ações, ou qualquer ativo de sua preferência.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <span><Icons.CheckMark className="mr-1.5 w-7 yellow" /></span>
                                <strong>Preveja o futuro</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Baseado em uma sólida base estatística, o Rastreador de Alvos identifica os alvos com maior probabilidade de serem alcançados, desativando os com menor chance. Isso em resumo é mais dinheiro no seu bolso.</p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <span><Icons.CheckMark className="mr-1.5 w-7 yellow" /></span>
                                <strong>Dinâmica Simples e Intuitiva</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Fácil de usar, o algoritmo proporciona uma leitura clara e facilitada dos movimentos do mercado, permitindo que até mesmo traders menos experientes possam aproveitar seus benefícios.</p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <span><Icons.CheckMark className="mr-1.5 w-7 yellow" /></span>
                                <strong>Convergência com Outros Algoritmos</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Quando utilizado em conjunto com a família de algoritmos do Fluxo, como o LT, você monta um quebra-cabeça completo para suas análises, potencializando ainda mais seus resultados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
