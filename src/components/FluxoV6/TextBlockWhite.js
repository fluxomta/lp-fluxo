// src/components/Indicadores/TextBlockWhite.js
'use client';
import Icons from '@/components/Global/Icons';

export default function TextBlockWhite() {
    return (
        <section className="text-white black-gradient border-y border-secondary-700">
            <div className="max-w-6xl px-8 py-12 mx-auto text-lg ms:px-4 md:text-center">
                <p className="!-mb-4 text-2xl font-semibold md:text-3xl md:text-left ">Por que escolher o </p>
                <p className="mb-2 text-3xl font-semibold md:text-4xl md:text-left yellow">Fluxo V6
                    | Rastreador de Fluxo?</p>
                <div class='grid grid-cols-1 gap-4'>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className='flex flex-col'>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong> Identificação de Fluxo Forte e Fraco:</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Compreenda se um movimento é sustentado por um fluxo forte ou fraco, ajudando a determinar a continuidade ou reversão de tendências.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Detecção de Intenções</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Descubra se um movimento de alta ou baixa é real ou apenas uma pausa (pullback) com base na ausência ou presença de fluxo comprador ou vendedor.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Regiões de Ancoragem (RDA)</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Identifique áreas onde os grandes players estão formando suas posições. Essas regiões de extrema liquidez servem como suportes ou resistências muito fortes, proporcionando oportunidades valiosas de entrada e saída.</p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Pontos de Decisão (PD)</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Reconheça regiões de montagem de posição com menor intensidade que podem preceder grandes movimentos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
