'use client';

import Form from '@/components/Forms/Form';
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
import Parceria from '@/components/Global/Parceria';


export default function Home() {
    return (
        <>
            <section
                id="inscreva-se"
                className="relative h-auto text-white"
                style={{
                    backgroundImage: 'url(/images/bg/bg-02.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
                <div className="relative z-10 flex flex-col justify-between h-full max-w-6xl px-4 py-12 mx-auto">
                    <div className="relative z-10 flex items-center ">
                        <div className="w-full hidden md:block">
                            <h1 className="mb-4 max-w-5xl mx-auto text-3xl font-bold text-left md:text-4xl text-white">
                                Cansei de ver traders perdendo no mercado!

                            </h1>
                            <p className='mb-4 max-w-5xl mx-auto text-2xl  text-left md:text-3xl text-white'>
                                Chegou a hora de aprender com o <span className='yellow font-bold'>SpeedFlow</span>.
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-8  md:text-center mx-auto text-3xl md:text-3xl md:mt-12">
                        Cadastre-se seu email para <span className='yellow'>aprender o método exclusivo</span>
                    </h2>
                    <Form label="Quero meu curso de fluxo" />
                </div>
            </section>
            <Parceria />
            <div className=" text-white max-w-6xl px-4 py-12 mx-auto md:text-lg relative z-10" id="assine">
                <p className='mb-8 max-w-6xl mx-auto text-2xl  text-left md:text-3xl text-white'>
                    Com esse curso você vai dominar o fluxo e descobrir como os grandes players do mercado operam — <strong>tudo de forma prática e 100% gratuito.</strong>
                </p>
                <div className='grid gap-4 max-w-6xl mx-auto mb-12 md:grid-cols-6'>
                    <div className='overflow-hidden col-span-2 md:col-span-2 h-full flex items-top rounded-md bg-primary-500 border border-secondary-500/25 aspect-video'
                        style={{
                            backgroundImage: 'url(https://cursos.fluxomta.com/wp-content/uploads/2024/09/1008207810.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <h2 className='relative font-semibold text-2xl w-full text-white bg-primary-500/25 p-4'>Módulo 1 - A estratégia fundamental</h2>
                    </div>
                    <div className='overflow-hidden col-span-2 md:col-span-2 h-full flex items-top rounded-md bg-primary-500 border border-secondary-500/25 aspect-video'
                        style={{
                            backgroundImage: 'url(https://cursos.fluxomta.com/wp-content/uploads/2024/09/1008639278.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <h2 className='relative font-semibold text-2xl w-full text-white bg-primary-500/25 p-4'>Módulo 2 - O Segredo do mercado</h2>
                    </div>
                    <div className='overflow-hidden col-span-2 md:col-span-2 h-full flex items-top rounded-md bg-primary-500 border border-secondary-500/25 aspect-video'
                        style={{
                            backgroundImage: 'url(https://cursos.fluxomta.com/wp-content/uploads/2024/09/1008208502.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <h2 className='relative font-semibold text-2xl w-full text-white bg-primary-500/25 p-4'>Módulo 3 - Quem manda no jogo: Dominância</h2>
                    </div>
                    <div className='overflow-hidden col-span-2 md:col-span-2 md:col-start-2 h-full flex items-top rounded-md bg-primary-500 border border-secondary-500/25 aspect-video'
                        style={{
                            backgroundImage: 'url(https://cursos.fluxomta.com/wp-content/uploads/2024/09/1008212968.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <h2 className='relative font-semibold text-2xl w-full text-white bg-primary-500/25 p-4'>Módulo 4 - True Points - Os alvos reais</h2>
                    </div>
                    <div className='overflow-hidden col-span-2 md:col-span-2 md:col-start-4 h-full flex items-top rounded-md bg-primary-500 border border-secondary-500/25 aspect-video'
                        style={{
                            backgroundImage: 'url(https://cursos.fluxomta.com/wp-content/uploads/2024/09/1008214290.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <h2 className='relative font-semibold text-2xl w-full text-white bg-primary-500/25 p-4'>Módulo 5 - Fluxo na prática</h2>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <Link href="#inscreva-se" className="flex items-center justify-center group btn md:btn-large focus:border-secondary-500 focus:ring focus:ring-secondary-700 focus:ring-opacity-50">
                        Quero meu curso de fluxo
                        <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1 ' />
                    </Link>
                </div>
            </div >
        </>

    );
}
