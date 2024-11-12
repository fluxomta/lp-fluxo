// components/PricingPlan.js
"use client"; // Adicione esta linha

import Link from 'next/link';

const PricingPlan = () => {
    return (
        <>
            <section className="relative text-primary-500 border-t-2 border-secondary-700 bg-white z-50" id="assine">
                <div className='absolute w-full bg-secondary-500 h-[45%] md:h-[50%] z-0 top-0'></div>
                <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg  relative z-10">
                    <div className="p-2 text-4xl font-bold text-center  rounded-md md:text-5xl text-primary-500  border-secondary-700">
                        <h2 className='text-4xl font-bold text-center md:text-5xl '>Gostou do Indicador?</h2>
                    </div>
                    <div className=" md:text-lg  grid md:grid-cols-1 gap-8 mt-4">
                        <div className="bg-white border-2 border-secondary-400 rounded-lg shadow-lg md:scale-90 md:hover:scale-95 transition-all">
                            <div className="p-6 text-primary-500">
                                <p className='text-3xl font-bold md:text-5xl text-center mb-12'>Os indicadores são exclusivos da nossa Mentoria Fluxo Simplificado.</p>
                                <p className='text-3xl font-bold md:text-5xl text-center'>Faça parte do fluxo!</p>
                                <Link href="https://fluxomta.com/mentoria"
                                    className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-3xl font-semibold text-white text-center">Quero conhecer Agora!</Link>
                            </div>
                            <div className="pb-8 px-6">
                                <p className='text-md font-base text-gray-700 italic'>*Os indicadores fazem parte da Mentoria do Fluxo Simplificado 3.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlan;
