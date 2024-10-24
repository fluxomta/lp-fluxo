// src/components/Indicadores/FormInscricao.js
'use client';

import Link from "next/link";
import Icons from "@/components/Global/Icons";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FormHubSpot from "../Forms/FormHubspot";

const aulas = [
    { id: 1, name: "Aula 1", message: "Miniatura da Aula 1!", src: '/images/aulas/thumb-curso-01.png' },
    { id: 2, name: "Aula 2", message: "Miniatura da Aula 2!", src: '/images/aulas/thumb-curso-02.png' },
    { id: 3, name: "Aula 3", message: "Miniatura da Aula 3!", src: '/images/aulas/thumb-curso-03.png' },
    { id: 4, name: "Aula 4", message: "Miniatura da Aaula 4!", src: '/images/aulas/thumb-curso-04.png' },
];

export default function FormInscricao() {
    return (
        <section
            className="relative text-white bg-primary-500">
            <div className="max-w-7xl px-4 py-12 mx-auto md:text-center">
                <p className="mb-6 text-2xl text-center md:text-3xl ">Caso você ainda não tenha assistido o <strong className="yellow">Curso Gratuito de Fluxo</strong>,<br /> que eu elaborei para mostra o método <strong><span className="yellow ">SpeedFlow</span> - essa ferramenta poderosa,<br /> aqui está sua oportunidade</strong>, assista e vire sua chave no <strong>Mercado Financeiro</strong>.</p>

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
                <div className="relative z-10 flex items-center justify-center mx-auto">
                    <FormHubSpot label="Aprenda grátis agora" origem="indicadores/speedflow" />
                </div>
            </div>
        </section >
    );
}
