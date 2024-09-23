// components/PricingPlan.js
"use client"; // Adicione esta linha

import Link from 'next/link';
import Icons from '@/components/Global/Icons';

const PricingPlan = () => {
    return (
        <>
            <section className="relative text-primary-500 border-t-2 border-secondary-700 bg-white z-50" id="assine">
                <div className='absolute w-full bg-secondary-500 h-[45%] md:h-[50%] z-0 top-0'></div>
                <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg  relative z-10">
                    <div className="p-2 text-4xl font-bold text-center  rounded-md md:text-5xl text-primary-500  border-secondary-700">
                        <h2 className='text-4xl font-bold text-center md:text-5xl '>Assine agora</h2>
                        <p className=' text-2xl font-base text-center md:text-4xl'>e acesse seu indicador imediatamente</p>
                    </div>
                    <div className=" md:text-lg  grid md:grid-cols-2 gap-8 mt-4">
                        <div className="bg-white border-2 border-secondary-400 rounded-lg shadow-lg md:scale-90 md:hover:scale-95 transition-all">
                            <div className="p-6 text-primary-500">
                                <p className='text-3xl font-bold md:text-5xl'>Alvo R3 <span className='block text-2xl font-bold yellow'>O Rastreador de Alvos</span></p>
                                <div className='flex items-center justify-center'>
                                    <p className=" text-center black-gradient p-2 rounded-lg">
                                        <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 99</span>
                                        <span className="text-lg font-base text-secondary-300"> /mensal</span>
                                    </p>
                                </div>
                                <ul>
                                    <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" />Indicador <strong className='ml-1'>Alvo R3</strong></li>
                                    <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" />Indicador <strong className='ml-1'>ZD</strong></li>
                                    <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" />Acesso Imediato</li>
                                    <li className='flex items-center  py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full " />Suporte exclusivo</li>
                                </ul>
                                <Link href="https://assine.fluxomta.com/?add-to-cart=86"
                                    className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero Assinar Agora!</Link>
                            </div>

                        </div>
                        <div className="bg-white border-2 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                            <div className="p-6 text-primary-500">
                                <p className='text-3xl font-bold md:text-5xl'>Todos os <br />4 Indicadores</p>
                                <div className='flex items-center justify-center'>
                                    <p className=" text-center black-gradient p-2 rounded-lg">
                                        <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 229</span>
                                        <span className="text-lg font-base text-secondary-300"> /mensal</span>
                                    </p>
                                </div>
                                <div className=' md:grid-cols-2 md:space-x-4 hidden md:grid'>
                                    <ul>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Fluxo V6</strong></li>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Alvo R3</strong></li>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" />Acesso Imediato</li>
                                    </ul>
                                    <ul>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Quantum LT</strong></li>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>ZD</strong></li>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full " />Suporte exclusivo</li>
                                    </ul>
                                </div>
                                <div className='grid md:hidden'>
                                    <ul>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Fluxo V6</strong></li>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Alvo R3</strong></li>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Quantum LT</strong></li>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>ZD</strong></li>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" />Acesso Imediato</li>
                                        <li className='flex items-center border-b py-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full " />Suporte exclusivo</li>
                                    </ul>
                                </div>
                                <Link href="https://assine.fluxomta.com/?add-to-cart=92"
                                    className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero Assinar Agora!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlan;
