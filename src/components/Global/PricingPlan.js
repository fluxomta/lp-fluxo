// components/PricingPlan.js
"use client"; // Adicione esta linha

import Link from 'next/link';
import Image from 'next/image';
import Icons from '@/components/Global/Icons';
import React, { useState } from 'react';

const PricingPlan = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const togglePlan = () => {
        setIsAnnual(!isAnnual);
    };

    return (
        <section className="text-white border-t-2 bg-primary-500 border-secondary-700">
            <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg ">
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl font-bold text-center md:text-4xl '>Assine agora
                    </h2>
                    <p className='mb-6 text-3xl font-bold text-center md:text-4xl yellow'>e acesse seu indicador imediatamente</p>
                </div>

                <div className="items-center justify-between max-w-4xl mx-auto mb-8 text-center md:flex">
                    <button
                        onClick={togglePlan}
                        className={` text-3xl font-semibold yellow ${isAnnual ? 'p-8 ' : ' bg-primary-900 p-8 rounded-md'}`}
                    >
                        Assinatura Individual
                    </button>
                    <span className='block p-4'>Ou</span>
                    <button
                        onClick={togglePlan}
                        className={`${isAnnual ? 'bg-primary-900 p-4 rounded-md' : 'p-4'}`}
                    >
                        <Image src="/speedflow.webp" alt="SpeedFlow" width={380} height={85} className="-mt-4 cursor-pointer" />
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {!isAnnual ? (
                        // Planos Mensais
                        <>
                            <div className="col-span-1 px-6 py-4 rounded-md bg-primary-900">
                                <p className="text-2xl font-semibold yellow">LT</p>
                                <p className="text-lg font-semibold yellow !-mt-3">O Rastreador de Liquidez</p>
                                <p>R$ 89,90 Mensal</p>
                                <div className='block gap-4 md:flex'>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn ">
                                            Assine agora <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn-dark ">
                                            Saiba Mais <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-1 px-6 py-4 rounded-md bg-primary-900">
                                <p className="text-2xl font-semibold yellow">Target Vision</p>
                                <p className="text-lg font-semibold yellow !-mt-3">O Rastreador de Alvos</p>
                                <p>R$ 89,90 Mensal</p>
                                <div className='block gap-4 md:flex'>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn ">
                                            Assine agora <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn-dark ">
                                            Saiba Mais <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-1 px-6 py-4 rounded-md bg-primary-900">
                                <p className="text-2xl font-semibold yellow">Fluxo V6</p>
                                <p className="text-lg font-semibold yellow !-mt-3">O Rastreador de Fluxo</p>
                                <p>R$ 99,90 Mensal</p>
                                <div className='block gap-4 md:flex'>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn ">
                                            Assine agora <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn-dark ">
                                            Saiba Mais <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </>
                    ) : (
                        // Planos Anuais
                        <>
                            <div className="col-span-1 px-6 py-4 rounded-md bg-primary-900">
                                <p className="text-2xl font-semibold yellow">SpeedFlow Light</p>
                                <p className="text-lg font-semibold yellow !-mt-3">Pacote inclui: Macro Flow, Fluxo V6, LT, ZD</p>
                                <p>R$ 249,00 Mensal</p>
                                <div className='block gap-4 md:flex'>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn ">
                                            Assine agora <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn-dark ">
                                            Saiba Mais <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-1 px-6 py-4 rounded-md bg-primary-900">
                                <p className="text-2xl font-semibold yellow">SpeedFlow Elite</p>
                                <p className="text-lg font-semibold yellow !-mt-3">Pacote inclui: MacroFlow, Fluxo V6, LT, Alvo R3, ZD + Comunidade</p>
                                <p>R$ 342,00 Mensal</p>
                                <div className='block gap-4 md:flex'>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn ">
                                            Assine agora <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn-dark ">
                                            Saiba Mais <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="px-6 py-4 rounded-md md:col-span-2 bg-primary-900">
                                <p className="text-2xl font-semibold yellow">SpeedFlow Pacote Elite Semestral</p>
                                <p className="text-lg font-semibold yellow !-mt-3">Pacote inclui: MacroFlow, Fluxo V6, LT, Alvo R3, ZD + Comunidade - 6 meses de acesso ao método </p>
                                <p>R$ 1799,00 Semestral</p>
                                <div className='block gap-4 md:flex'>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn ">
                                            Assine agora <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                    <Link href="/indicadores">
                                        <button className="flex items-center justify-center w-full mb-2 md:w-auto group btn-dark ">
                                            Saiba Mais <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </>
                    )}
                </div>
                <p className='px-2 py-8 text-2xl'>Promoção Especial -<br /> Abrindo conta na XP e ativando RLP você ganha 30 dias grátis do pacote Speed Flow</p>
            </div>
        </section>
    );
};

export default PricingPlan;
