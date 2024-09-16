'use client';

import Form from '@/app/lps/speedflow/Form';
import Parceria from '@/components/Global/Parceria';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const aulas = [
    { id: 1, name: "Cliente 1", message: "Depoimento incrível do cliente 1!", src: '/images/aulas/aula-01.png' },
    { id: 2, name: "Cliente 2", message: "Depoimento incrível do cliente 2!", src: '/images/aulas/aula-02.png' },
    { id: 3, name: "Cliente 3", message: "Depoimento incrível do cliente 3!", src: '/images/aulas/aula-03.png' },
    { id: 4, name: "Cliente 4", message: "Depoimento incrível do cliente 4!", src: '/images/aulas/aula-04.png' },
];

export default function Home() {
    return (
        <>
            <section
                className="relative text-white black-gradient h-auto md:min-h-[60vh] "
            >
                <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
                <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg relative z-10">
                    <h1 className="mb-4  mx-auto text-3xl font-base text-left md:text-3xl">
                        Chega de ter dúvidas no mercado financeiro, eu vou
                        te ensinar de <strong>graça</strong> como ganhar <strong>dinheiro de verdade</strong> com o <span className='yellow font-bold'>SpeedFlow</span>
                    </h1>
                    <div className="max-w-4xl pb-8 mx-auto ">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1.3} // Valor padrão, será substituído pelos breakpoints abaixo
                            centeredSlides={false}
                            pagination={{ clickable: true }}
                            loop={true}
                            breakpoints={{
                                // Quando a largura da janela é >= 640px
                                640: {
                                    slidesPerView: 1.5, // Exibe 1.5 slides em telas pequenas
                                },
                                // Quando a largura da janela é >= 768px
                                768: {
                                    slidesPerView: 2, // Exibe 2 slides em telas médias
                                },
                                // Quando a largura da janela é >= 1024px
                                1024: {
                                    slidesPerView: 4, // Exibe 4 slides em telas grandes
                                },
                            }}
                        >
                            {aulas.map((aula) => (
                                <SwiperSlide key={aula.id}>
                                    <div className="relative max-w-5xl h-[200px]  rounded-lg shadow-md overflow-hidden">
                                        <Image
                                            src={aula.src}
                                            alt={aula.message}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            className="transition-all ease-out h-fullduration-500 brightness-75 hover:brightness-100"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <h2 className="mb-8  text-center mx-auto text-3xl font-semibold  md:text-3xl">
                        Cadastre seu email para aprender o método exclusivo
                    </h2>
                    <Form />
                </div>
            </section>
            <Parceria />
        </>

    );
}
