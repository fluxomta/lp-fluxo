// src/components/Indicadores/FormInscricao.js
'use client';

import Link from "next/link";
import Icons from "@/components/Global/Icons";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const aulas = [
    { id: 1, name: "Cliente 1", message: "Depoimento incrível do cliente 1!", src: '/images/aulas/aula-01.png' },
    { id: 2, name: "Cliente 2", message: "Depoimento incrível do cliente 2!", src: '/images/aulas/aula-02.png' },
    { id: 3, name: "Cliente 3", message: "Depoimento incrível do cliente 3!", src: '/images/aulas/aula-03.png' },
    { id: 4, name: "Cliente 4", message: "Depoimento incrível do cliente 4!", src: '/images/aulas/aula-04.png' },
];

export default function FormInscricao() {
    return (
        <section
            className="relative text-white bg-primary-500">
            <div className="max-w-7xl px-4 py-12 mx-auto md:text-center">
                <p className="mb-6 text-2xl font-bold text-center md:text-3xl ">Assine agora mesmo o SpeedFlow e <span className="yellow block">receba gratuito o meu Curso de Fluxo!</span></p>

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
                                        className="transition-all ease-out h-full duration-500"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="relative z-10 flex items-center justify-center mx-auto mt-8">
                    <Link href="/lps/speedflow">
                        <button className="flex items-center justify-center w-full group btn md:btn-large">
                            Quero Agora Mesmo <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
