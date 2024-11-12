// components/PricingPlan.js
"use client"; // Adicione esta linha
import Link from 'next/link';
import Icons from '@/components/Global/Icons';


const PricingPlan = () => {

    return (
        <section className="relative text-primary-500 border-t-2 border-secondary-700 bg-white z-50" id="assine">
            <div className='absolute w-full  bg-secondary-500 h-[45%] md:h-[55%] z-0 top-0'></div>
            <div className="max-w-7xl px-4 py-12 mx-auto md:text-lg relative z-10">
                <div className="p-2 text-4xl font-bold text-center  rounded-md md:text-5xl text-primary-500  border-secondary-700">
                    <h2 className='text-4xl font-bold text-center md:text-5xl '>Conheça agora</h2>
                    <p className=' text-2xl font-base text-center md:text-4xl'>e acesse o método e indicadores imediatamente</p>
                </div>
                <div className="grid grid-cols-1 md:gap-8 mt-4">
                    {/* ELITE */}
                    <div className="bg-white border-2 col-span-2 md:col-span-1 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all  mb-8 ">
                        <div className="relative p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl mt-0.5'>SpeedFlow </p>

                            <Link href="https://fluxomta.com/mentoria"
                                className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero conhecer Agora!</Link>
                        </div>
                        <div className="pb-8 px-6">
                            <p className='text-sm font-base text-gray-700 italic'>*Os indicadores fazem parte da Mentoria do Fluxo Simplificado 3.0</p>
                        </div>
                    </div>

                    <p className='px-3 col-span-3 mt-0'>A <span className='text-primary-700 font-bold'>comunidade SpeedFlow</span> é um grupo exclusivo onde os participantes operam junto com um time de profissionais que compartilham insights diários sobre o mercado e os principais indicadores. Ao participar, você tem acesso a informações valiosas que ajudam a tomar decisões mais assertivas nas suas operações. Quer maximizar seus resultados e operar ao lado de experts? Então, você precisa fazer parte da comunidade SpeedFlow!</p>
                </div>
            </div>
        </section>
    );
};

export default PricingPlan;
