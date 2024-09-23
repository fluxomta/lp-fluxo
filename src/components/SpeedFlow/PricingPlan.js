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
                    <h2 className='text-4xl font-bold text-center md:text-5xl '>Assine agora</h2>
                    <p className=' text-2xl font-base text-center md:text-4xl'>e acesse o método e indicadores imediatamente</p>
                </div>
                <div className=" md:text-lg grid md:grid-cols-3 gap-8 mt-4">
                    {/* Light */}
                    <div className="bg-white border-2 col-span-2 md:col-span-1 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl'>SpeedFlow <span className='block text-2xl font-bold yellow'>Light</span></p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center black-gradient p-2 rounded-lg w-full">
                                    <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 289</span>
                                    <span className="text-lg font-base text-secondary-300 block"> /mensal</span>
                                </p>
                            </div>
                            <div className='block'>
                                <ul>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>MacroFlow</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Fluxo V6</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Quantum LT</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='mx-1'>ZD</strong>(bônus)</li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" />Acesso Imediato</li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full " />Suporte exclusivo</li>
                                </ul>
                            </div>
                            <Link href="https://assine.fluxomta.com/?add-to-cart=88"
                                className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero Assinar Agora!</Link>
                        </div>
                    </div>
                    {/* ELITE */}
                    <div className="bg-white border-2 col-span-2 md:col-span-1 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl'>SpeedFlow <span className='block text-2xl font-bold yellow'>Elite</span></p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center black-gradient p-2 rounded-lg w-full">
                                    <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 379</span>
                                    <span className="text-lg font-base text-secondary-300 block"> /mensal</span>
                                </p>
                            </div>
                            <div className='block'>
                                <ul>
                                    <li className=' bg-secondary-500 p-2 flex items-center border-b  font-bold text-xl rounded-t-md'><Icons.Check className="w-7 mr-1 text-primary-700  rounded-full " />Comunidade SpeedFlow</li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>MacroFlow</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Fluxo V6</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Quantum LT</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='mx-1'>ZD</strong>(bônus)</li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" />Acesso Imediato</li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full " />Suporte exclusivo</li>
                                </ul>
                            </div>
                            <Link href="https://assine.fluxomta.com/?add-to-cart=89"
                                className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero Assinar Agora!</Link>
                        </div>
                    </div>
                    {/* SEMESTRAL */}
                    <div className="bg-white border-2 col-span-2 md:col-span-1 border-secondary-400 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-primary-500">
                            <p className='text-3xl font-bold md:text-5xl'>SpeedFlow <span className='block text-2xl font-bold yellow'>Elite Semestral</span></p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center black-gradient p-2 rounded-lg w-full">
                                    <span className="text-7xl font-bold text-secondary-500 tracking-tighter">R$ 1.997</span>
                                    <span className="text-lg font-base text-secondary-300 block"> /Semestral</span>
                                </p>
                            </div>
                            <div className='block'>
                                <ul>
                                    <li className=' bg-secondary-500 flex items-center border-b p-2 font-bold text-xl rounded-t-md'><Icons.Check className="w-7 mr-1 text-primary-700  rounded-full " />Comunidade SpeedFlow</li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>MacroFlow</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Fluxo V6</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Alvo R3</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='ml-1'>Quantum LT</strong></li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" /><strong className='mx-1'>ZD</strong>(bônus)</li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full" />Acesso Imediato</li>
                                    <li className='flex items-center border-b p-2'><Icons.Check className="w-7 mr-1 text-primary-700 rounded-full " />Suporte exclusivo</li>
                                </ul>
                            </div>
                            <Link href="https://assine.fluxomta.com/?add-to-cart=90"
                                className="mt-4 block w-full bg-green-700 rounded-md  uppercase py-4 text-lg font-semibold text-white text-center">Quero Assinar Agora!</Link>
                        </div>
                        <div className="pb-8 px-6">

                        </div>
                    </div>

                    <p className='px-3 col-span-2 mt-0'>A <span className='text-primary-700 font-bold'>comunidade SpeedFlow</span> é um grupo exclusivo onde os participantes operam junto com um time de profissionais que compartilham insights diários sobre o mercado e os principais indicadores. Ao participar, você tem acesso a informações valiosas que ajudam a tomar decisões mais assertivas nas suas operações. Quer maximizar seus resultados e operar ao lado de experts? Então, você precisa fazer parte da comunidade SpeedFlow!</p>
                </div>
            </div>
        </section>
    );
};

export default PricingPlan;
