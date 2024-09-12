// components/PricingPlan.js
"use client"; // Adicione esta linha
import Link from 'next/link';

const PricingPlan = () => {

    return (
        <section className="relative text-primary-500 border-t-2 border-secondary-700 bg-white">
            <div className='absolute w-full  bg-secondary-500 h-[45%] md:h-[55%] z-0 top-0'></div>
            <div className="max-w-7xl px-4 py-12 mx-auto md:text-lg relative z-10">
                <div className="p-2 text-4xl font-bold text-center  rounded-md md:text-5xl text-primary-500  border-secondary-700">
                    <h2 className='text-4xl font-bold text-center md:text-5xl '>Assine agora</h2>
                    <p className=' text-2xl font-base text-center md:text-4xl'>e acesse o método e indicadores imediatamente</p>
                </div>
                <div className=" md:text-lg grid md:grid-cols-2 gap-8 mt-4">
                    {/* Light */}
                    <div className="bg-white border-2 col-span-2 md:col-span-1 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl'>Light</p>
                            <p className='text-md font-base text-gray-700'>Assine o <strong>SpeedFlow Light</strong> e receba os indicadores <strong>MacroFlow</strong>, <strong>Fluxo V6</strong>, <strong>QUANTUM LT</strong> e <strong>ZD</strong> e tenha acesso imediato com suporte exclusivo. E mais: receba o nosso <strong>Curso de Fluxo como bônus</strong>, totalmente grátis para refinar seu operacional.</p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center black-gradient p-2 rounded-lg">
                                    <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 289</span>
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
                    {/* ELITE */}
                    <div className="bg-white border-2 col-span-2 md:col-span-1 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl'>Elite</p>
                            <p className='text-md font-base text-gray-700'>Assine o <strong>SpeedFlow Elite</strong> e receba os indicadores <strong>MacroFlow</strong>, <strong>Fluxo V6</strong>, <strong>QUANTUM LT</strong>, <strong>Alvo R3</strong> e <strong>ZD + Comunidade SpeedFlow<span className='text-secondary-700'>*</span></strong> e tenha acesso imediato com suporte exclusivo. E mais: receba o nosso <strong>Curso de Fluxo como bônus</strong>, totalmente grátis para refinar seu operacional.</p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center black-gradient p-2 rounded-lg">
                                    <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 379</span>
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
                    {/* SEMESTRAL */}
                    <div className="bg-white border-2 col-span-2 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl'>Elite Semestral</p>
                            <p className='text-md font-base text-gray-700'>Assine o <strong>SpeedFlow Elite Semestral e garanta 6 meses de acesso</strong> Receba os indicadores <strong>MacroFlow</strong>, <strong>Fluxo V6</strong>, <strong>QUANTUM LT</strong>, <strong>Alvo R3</strong> e <strong>ZD + Comunidade SpeedFlow<span className='text-secondary-700'>*</span></strong> com um excelente desconto, e tenha acesso imediato com suporte exclusivo. E mais: receba o nosso <strong>Curso de Fluxo como bônus</strong>, totalmente grátis para refinar seu operacional.</p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center black-gradient p-2 rounded-lg">
                                    <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 1.997</span>
                                    <span className="text-lg font-base text-secondary-300"> /Semestral</span>
                                </p>
                            </div>
                            <Link href="/assine"
                                className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero Assinar Agora!</Link>
                        </div>
                        <div className="pb-8 px-6">
                            <p className='text-sm font-base text-gray-700 italic'>*A assinatura é renovada automaticamente no seu cartão de crédito a cada 6 Meses. Antes de cada renovação, você pode solicitar o cancelamento da assinatura.</p>

                        </div>
                    </div>
                    <p className='px-3 col-span-2 mt-0'>A <span className='text-primary-700 font-bold'>comunidade SpeedFlow</span> é um grupo exclusivo onde os participantes operam junto com um time de profissionais que compartilham insights diários sobre o mercado e os principais indicadores. Ao participar, você tem acesso a informações valiosas que ajudam a tomar decisões mais assertivas nas suas operações. Quer maximizar seus resultados e operar ao lado de experts? Então, você precisa fazer parte da comunidade SpeedFlow!</p>
                </div>
            </div>
        </section>
    );
};

export default PricingPlan;
