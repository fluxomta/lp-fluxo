// src/components/TextBlock.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';

export default function TextBlockFinal() {
    return (
        <section
            className="relative min-h-[80vh] text-white hidden"
            style={{
                backgroundImage: 'url(/images/bg/bg-pricing.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
            <div className="max-w-7xl px-4 py-12 mx-auto md:text-lg relative z-10">
                <div className="p-2 text-4xl font-bold text-center  rounded-md md:text-5xl text-white  border-secondary-700">
                    <h2 className='text-4xl font-bold text-center md:text-5xl '>Assine agora</h2>
                    <p className=' text-2xl font-base text-center md:text-4xl'>e acesse o método e indicadores imediatamente</p>
                </div>
                <div className=" md:text-lg grid md:grid-cols-7 gap-8 mt-4">
                    {/* SEMESTRAL */}
                    <div className="bg-primary-500 border-2 col-span-6 md:col-span-3 md:col-start-3 border-primary-300/25 rounded-lg shadow-lg md:scale-100 md:hover:scale-105 transition-all">
                        <div className="p-6 text-white">
                            <p className='text-3xl font-bold md:text-5xl mt-0.5'>SpeedFlow <span className='block text-2xl font-bold yellow'>Semestral</span></p>
                            <div className='flex items-center justify-center'>
                                <p className=" text-center bg-white p-2 rounded-lg w-full">
                                    <span className="text-7xl font-bold text-primary-500 tracking-tighter">R$ 1.699</span>
                                    <span className="text-lg font-base text-primary-300 block"> /Semestral *</span>
                                </p>
                            </div>
                            <div className='block'>
                                <ul>
                                    <li className=' bg-primary-500 flex items-center border-b p-2 font-bold text-xl rounded-t-md'><Icons.Check className="w-7 mr-1 text-primary-700  rounded-full " />Comunidade SpeedFlow</li>
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
                            <p className='text-sm font-base text-gray-200 italic'>*A assinatura é renovada automaticamente no seu cartão de crédito a cada 6 Meses. Antes de cada renovação, você pode solicitar o cancelamento da assinatura.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
