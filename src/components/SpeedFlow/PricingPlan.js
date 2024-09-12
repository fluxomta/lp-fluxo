// components/PricingPlan.js
"use client"; // Adicione esta linha
import Link from 'next/link';

const PricingPlan = () => {

    return (
        <section className="relative text-primary-500 border-t-2 border-secondary-700 bg-white">
            <div className='absolute w-full  bg-secondary-500 h-[45%] md:h-[50%] z-0 top-0'></div>
            <div className="max-w-7xl px-4 py-12 mx-auto md:text-lg relative z-10">
                <div className="p-2 text-4xl font-bold text-center  rounded-md md:text-5xl text-primary-500  border-secondary-700">
                    <h2 className='text-4xl font-bold text-center md:text-5xl '>Assine agora</h2>
                    <p className=' text-2xl font-base text-center md:text-4xl'>e acesse o método e indicadores imediatamente</p>
                </div>
                <div className=" md:text-lg  grid md:grid-cols-3 gap-8 mt-4">
                    <div className="bg-white border-2 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl'>Light</p>
                            <p className='text-md font-base text-gray-700'>MacroFlow, Fluxo V6, LT, ZD</p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center black-gradient p-2 rounded-lg">
                                    <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 279</span>
                                    <span className="text-lg font-base text-secondary-300"> /mensal</span>
                                </p>
                            </div>
                            <Link href="/assine"
                                className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero Assinar Agora!</Link>
                        </div>
                        <div className="pb-8 px-6">
                            <p className='text-sm font-base text-gray-700 italic'>*A assinatura é renovada automaticamente no seu cartão de crédito a cada mês. Antes de cada renovação, você pode solicitar o cancelamento da assinatura.</p>
                        </div>
                    </div>
                    <div className="bg-white border-2 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl'>Elite</p>
                            <p className='text-md font-base text-gray-700'>MacroFlow, Fluxo V6, LT, Alvo R3, ZD + Comunidade</p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center black-gradient p-2 rounded-lg">
                                    <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 349</span>
                                    <span className="text-lg font-base text-secondary-300"> /mensal</span>
                                </p>
                            </div>
                            <Link href="/assine"
                                className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero Assinar Agora!</Link>
                        </div>
                        <div className="pb-8 px-6">
                            <p className='text-sm font-base text-gray-700 italic'>*A assinatura é renovada automaticamente no seu cartão de crédito a cada mês. Antes de cada renovação, você pode solicitar o cancelamento da assinatura.</p>
                        </div>
                    </div>
                    <div className="bg-white border-2 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl'>Elite Semestral</p>
                            <p className='text-md font-base text-gray-700'>MacroFlow, Fluxo V6, LT, Alvo R3, ZD) + Comunidade = 6 meses de acesso ao método</p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center black-gradient p-2 rounded-lg">
                                    <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 1.899</span>
                                    <span className="text-lg font-base text-secondary-300"> /Semestral</span>
                                </p>
                            </div>
                            <Link href="/assine"
                                className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero Assinar Agora!</Link>
                        </div>
                        <div className="pb-8 px-6">
                            <p className='text-sm font-base text-gray-700 italic'>*A assinatura é renovada automaticamente no seu cartão de crédito a cada mês. Antes de cada renovação, você pode solicitar o cancelamento da assinatura.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingPlan;
