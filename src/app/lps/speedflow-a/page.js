'use client';

import Form from '@/components/Forms/Form';
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
import Parceria from '@/components/Global/Parceria';
import VimeoPlayer from '@/components/Global/VideoPlayer';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <section
                className="relative h-auto text-white"
                style={{
                    backgroundImage: 'url(/images/bg/bg-02.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
                <div className="flex flex-col justify-between h-full max-w-5xl px-4 py-12 mx-auto">
                    <div className="relative z-10 flex items-center ">
                        <div className="w-full hidden md:block">
                            <Image src="/speedflow.webp" alt="Logo" width={455} height={102} className='mx-auto mt-8' />
                            <h1 className="mb-4 text-3xl font-bold text-center md:text-5xl">
                                <span className='hidden'>Speedflow</span>
                                <span className='mt-3'>Aprenda a operar como os grandes tubarões com o fluxo real</span>
                            </h1>
                        </div>
                        <div className="w-full block md:hidden">
                            <h1 className="mb-4 text-2xl font-bold text-center md:text-6xl">
                                <span className="flex flex-col items-center justify-center">
                                    <Image src="/speedflow.webp" alt="Logo" width={300} height={102} className='-mr-8' />
                                    <span className='mt-3'>Aprenda a operar como os grandes tubarões com o fluxo real</span>
                                </span>
                            </h1>
                        </div>
                    </div>

                    <div className="w-full max-w-3xl p-1 mx-auto mb-8">
                        <VimeoPlayer
                            videoId="1009981366"
                            autoplay={false}
                            loop={false}
                            muted={false}
                            coverImage="https://vumbnail.com/1009981366.jpg"
                            endCoverImage="https://vumbnail.com/1009981366.jpg"
                        />
                    </div>
                    <div className="relative z-10 flex mx-auto">
                        <Link href="#assine">
                            <button className="flex items-center justify-center w-full group btn md:btn-large">
                                Quero meu curso gratuito <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <Parceria />
            <div className=" text-white max-w-6xl px-4 py-12 mx-auto md:text-lg relative z-10" id="assine">
                <h1 className="mb-4 max-w-5xl mx-auto text-2xl font-bold md:text-center md:text-4xl text-white">
                    Chega de ter dúvidas no mercado financeiro, eu vou te <span className='yellow'>ensinar de graça como ganhar dinheiro</span> de verdade com o SpeedFlow
                </h1>
                <h2 className="mb-8 md:text-center mx-auto text-2xl md:text-3xl md:mt-12">
                    Vire sua chave no mercado gratuitamente.
                </h2>
                <Form label="Quero meu curso de fluxo" />
            </div>
        </>

    );
}
