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
        <>
            <section className="relative text-white black-gradient border-t-2 border-secondary-700">
                <div className='absolute w-full h-full bg-secondary-500 h-[75%] md:h-[50%] z-0 bottom-0'></div>
                <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg  relative z-10">
                    <h2 className='text-4xl font-bold text-center md:text-5xl '>Assine agora</h2>
                    <p className=' text-2xl font-bold text-center md:text-4xl'>e acesse seu indicador imediatamente</p>
                    <div className=" md:text-lg  grid md:grid-cols-2 gap-8">
                        <div className="bg-white border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 scale-95 hover:scale-105 transition-all">
                            <div className="p-6 text-primary-500">
                                <p className='text-3xl font-bold md:text-4xl'>LT <span className='text-2xl font-bold'>O Rastreador de Liquidez</span></p>
                                <p className="mt-8">
                                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">R$79</span>
                                    <span className="text-lg font-medium text-slate-500"> /mensal</span>
                                </p>
                                <Link href="/assine"
                                    className="mt-8 block w-full bg-primary-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Assine Agora</Link>
                            </div>
                            <div className="pt-6 pb-8 px-6">
                                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">O que esta incluso</h3>
                                <ul role="list" className="mt-4 space-y-3">
                                    <li className="flex space-x-3">
                                        <Icons.Check className="w-8 text-green-400" />
                                        <span className="text-lg text-slate-700">Receba Indicador LT + ZD</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <Icons.Check className="w-8 text-green-400" />
                                        <span className="text-lg text-slate-700">Acesso imediato</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <Icons.Check className="w-8 text-green-400" />
                                        <span className="text-lg text-slate-700">Acesso mensal</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <Icons.Check className="w-8 text-green-400" />
                                        <span className="text-lg text-slate-700">Suporte exclusivo</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="relative bg-white border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 scale-100 hover:scale-110 transition-all">
                            <span className="absolute -top-5 mx-auto left-0 right-0">
                                <span className=' rounded-full bg-primary-500 py-3 px-4 text-md text-white font-bold '>Pacote promocional </span>
                            </span>
                            <div className="p-6 text-primary-500">
                                <p className='text-3xl font-bold md:text-4xl'>Todos os 4 Indicadores</p>
                                <p className="mt-8">
                                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">R$179</span>

                                    <span className="text-lg font-medium text-slate-500"> /mensal</span>
                                </p>
                                <div className='md:flex gap-4'>
                                    <Link href="/assine"
                                        className="mt-2 block w-full bg-primary-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Assine Agora</Link>
                                    <Link href="/assine"
                                        className="mt-2 block w-full bg-secondary-500 rounded-md  uppercase py-4 text-lg text-primary-500 font-bold text-center">Conheça mais</Link>
                                </div>
                            </div>
                            <div className="pt-6 pb-8 px-6">
                                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">O que esta incluso</h3>
                                <ul role="list" className="mt-4 space-y-3">
                                    <li className="flex space-x-3">
                                        <Icons.Check className="w-8 text-green-400" />
                                        <span className="text-lg text-slate-700">Receba os indicadores</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <Icons.Check className="w-8 text-green-400" />
                                        <span className="text-lg text-slate-700"><strong>Fluxo V6, Alvo R3, LT e ZD</strong></span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <Icons.Check className="w-8 text-green-400" />
                                        <span className="text-lg text-slate-700">Acesso imediato</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <Icons.Check className="w-8 text-green-400" />
                                        <span className="text-lg text-slate-700">Acesso mensal</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <Icons.Check className="w-8 text-green-400" />
                                        <span className="text-lg text-slate-700">Suporte exclusivo</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default PricingPlan;
