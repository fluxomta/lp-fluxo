// src/components/TextBlock.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
import FormInscricao from './FormInscricao';

export default function TextBlockFinal() {
    return (
        <section
            id="inscreva-se"
            className="relative min-h-[80vh] text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-pricing.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
            <div className="max-w-7xl px-4 py-12 mx-auto md:text-lg relative z-10">
                <div className="p-2 text-4xl text-center  rounded-md md:text-5xl text-white  border-secondary-700">
                    <h2 className='text-4xl font-bold text-center md:text-5xl '>Uma oportunidade unica, <strong>porém <span className='yellow'>não para todos!</span></strong></h2>
                    <p className=' text-2xl font-base text-center md:text-2xl'>Para fazer parte da nossa <strong>Mentoria Fluxo Simplificado</strong>, você irá passar por uma entrevista onde iremos entender se você tem o perfil necessário para nossa mentoria.</p>
                    <p className=' text-2xl font-base text-center md:text-2xl'>Faça sua aplicação e iremos entrar em contato com você.</p>
                </div>
                <div className=" md:text-lg grid md:grid-cols-8 gap-8 mt-4">
                    {/* SEMESTRAL */}
                    <div className="bg-primary-500 border-2 col-span-4  border-primary-300/25 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-4 md:p-8 text-white">
                            <p className='text-3xl font-bold md:text-5xl mt-0.5'>Mentoria <span className='block text-3xl font-bold yellow'>Fluxo Simplificado 3.0</span><span className='block text-2xl font-bold'>Plano Anual</span></p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-left p-2 rounded-lg w-full">
                                    <span className="text-5xl md:text-7xl font-bold text-secondary-500 tracking-tighter"><span className='!text-[12px] md:!text-[20px] !font-base text-white mr-2'>12 x</span>R$ 299,90 <small>*</small></span>
                                    <span className="text-2xl font-bold text-white block mt-2"> Ou R$2.997 à Vista</span>
                                </p>
                            </div>
                            <div className='block'>
                                <ul>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>15 Indicadores Exclusivos</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Plataforma Otimizada</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Aulas práticas ao vivo</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Backtesting e análise dinâmica</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='mx-1'>Comunidade</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='mx-1'> + de 150 aulas</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full " />Suporte exclusivo</li>
                                </ul>
                            </div>
                        </div>


                        <div className="pb-8 px-6">
                            <p className='text-sm font-base text-gray-200 italic'>*A assinatura é gerenciada pelo <strong>Pagbank</strong>, o valor final da parcela pode variar de acordo com a quantidade de parcelas.</p>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <FormInscricao />
                    </div>
                </div>
            </div>
        </section >
    );
}
