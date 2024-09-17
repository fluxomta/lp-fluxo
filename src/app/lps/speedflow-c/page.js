'use client';

import Form from '@/app/lps/speedflow-b/Form';
import Parceria from '@/components/Global/Parceria';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const aulas = [
    { id: 1, name: "Aula 1", message: "Miniatura da Aula 1!", src: '/images/aulas/thumb-curso-01.png' },
    { id: 2, name: "Aula 2", message: "Miniatura da Aula 2!", src: '/images/aulas/thumb-curso-02.png' },
    { id: 3, name: "Aula 3", message: "Miniatura da Aula 3!", src: '/images/aulas/thumb-curso-03.png' },
    { id: 4, name: "Aula 4", message: "Miniatura da Aaula 4!", src: '/images/aulas/thumb-curso-04.png' },
];

export default function Home() {
    return (
        <>
            <section
                className="relative text-white bg-black h-auto md:min-h-[60vh] "
                style={{
                    backgroundImage: 'url(/images/bg/bg-02.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
                <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg relative z-10">

                    <h1 className="mb-4 max-w-5xl mx-auto text-3xl font-bold text-left md:text-4xl text-white">
                        Cansei de ver traders perdendo no mercado!

                    </h1>
                    <p className='mb-4 max-w-5xl mx-auto text-2xl  text-left md:text-3xl text-white'>
                        Chegou a hora de aprender com o <span className='yellow font-bold'>SpeedFlow</span>.
                    </p>
                    <p className='mb-4 max-w-5xl mx-auto text-2xl  text-left md:text-3xl text-white'>
                        Com esse curso você vai dominar o fluxo e descobrir como os grandes players do mercado operam — <strong>tudo de forma prática e 100% gratuito.</strong>
                    </p>

                    <h2 className="mb-8  md:text-center mx-auto text-3xl md:text-3xl md:mt-12">
                        Cadastre-se seu email para <span className='yellow'>aprender o método exclusivo</span>
                    </h2>
                    <Form />
                </div>
            </section>
            <Parceria />
        </>

    );
}
