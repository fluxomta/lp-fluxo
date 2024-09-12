// src/components/Indicadores/TextBlockWhite.js
'use client';
import Icons from '@/components/Global/Icons';

export default function TextBlockWhite() {
    return (
        <section className="text-white black-gradient border-y border-secondary-700">
            <div className="max-w-6xl px-8 py-12 mx-auto text-lg ms:px-4 md:text-center">
                <p className="!-mb-4 text-2xl font-semibold md:text-3xl md:text-left ">Quais as vantagens do </p>
                <p className="mb-2 text-3xl font-semibold md:text-4xl md:text-left yellow">SpeedFlow</p>
                <p className='text-2xl text-left'>O método SpeedFlow é perfeito para a sua análise de mercado e com ele, você vai com certeza, alcançar um novo patamar de leitura de mercado. </p>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className='flex flex-col'>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Simplicidade poderosa</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Diga adeus à complicação nas suas análises. Com o SpeedFlow, suas entradas se tornam claras e objetivas.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Direção certeira</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Entenda facilmente para onde o mercado está indo, eliminando dúvidas e maximizando seus lucros.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Velocidade na leitura do fluxo</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Não perca mais oportunidades e evite armadilhas. O SpeedFlow acelera sua tomada de decisão.</p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Testado e aprovado</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Centenas de traders confiam no SpeedFlow todos os dias para operar com confiança.</p>
                        </div>
                    </div>
                    <div className='flex items-start p-4 mb-2 border rounded-md border-secondary-700 black-gradient'>
                        <div className=''>
                            <p className='flex items-center w-full text-2xl text-left'>
                                <Icons.CheckMark className="mr-1.5 w-7 yellow" /><strong>Suporte especializado</strong>
                            </p>
                            <p className='px-8 text-lg text-left'>
                                Conte com uma comunidade ativa de profissionais prontos para ajudar em qualquer dúvida que surgir.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
