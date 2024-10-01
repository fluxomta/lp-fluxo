'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const modulos = [
    { id: 1, name: "img 1", message: "Módulo 1!", src: '/images/mentoria/thumb-1.webp' },
    { id: 2, name: "img 2", message: "Módulo 2!", src: '/images/mentoria/thumb-2.webp' },
    { id: 3, name: "img 3", message: "Módulo 3!", src: '/images/mentoria/thumb-3.webp' },
    { id: 4, name: "img 4", message: "Módulo 4!", src: '/images/mentoria/thumb-4.webp' },
    { id: 5, name: "img 5", message: "Módulo 5!", src: '/images/mentoria/thumb-5.webp' },
    { id: 6, name: "img 6", message: "Módulo 6!", src: '/images/mentoria/thumb-1.webp' },
    { id: 7, name: "img 7", message: "Módulo 7!", src: '/images/mentoria/thumb-2.webp' },
    { id: 8, name: "img 8", message: "Módulo 8!", src: '/images/mentoria/thumb-3.webp' },
    { id: 9, name: "img 9", message: "Módulo 9!", src: '/images/mentoria/thumb-4.webp' },
    { id: 10, name: "img 10", message: "Módulo 10!", src: '/images/mentoria/thumb-5.webp' },
    { id: 11, name: "img 11", message: "Módulo 11!", src: '/images/mentoria/thumb-1.webp' },
    { id: 12, name: "img 12", message: "Módulo 12!", src: '/images/mentoria/thumb-2.webp' },
    { id: 13, name: "img 13", message: "Módulo 13!", src: '/images/mentoria/thumb-3.webp' },
    { id: 14, name: "img 14", message: "Módulo 14!", src: '/images/mentoria/thumb-4.webp' },
    { id: 15, name: "img 15", message: "Módulo 15!", src: '/images/mentoria/thumb-5.webp' },
    { id: 16, name: "img 16", message: "Módulo 16!", src: '/images/mentoria/thumb-1.webp' },
    { id: 17, name: "img 17", message: "Módulo 17!", src: '/images/mentoria/thumb-2.webp' },
    { id: 18, name: "img 18", message: "Módulo 18!", src: '/images/mentoria/thumb-3.webp' },
    { id: 19, name: "img 19", message: "Módulo 19!", src: '/images/mentoria/thumb-4.webp' },
    { id: 20, name: "img 20", message: "Módulo 20!", src: '/images/mentoria/thumb-5.webp' },
];

export default function PrincipiosSlider() {
    return (
        <section className="text-white bg-black">
            <div className="max-w-6xl px-8 py-16 mx-auto text-lg md:text-center">
                <h2 className="mb-4 text-2xl font-bold md:text-4xl md:text-center ">Metodologia de Camadas <span className="yellow">Estratégicas</span></h2>
                <p className="text-xl !mb-0">Você não precisa saber tudo pra começar a ganhar: aprende um pouco, ganha um pouco.</p>
                <p className="text-xl !mt-1">Aprofunda mais um pouco, ganha mais um pouco. O ciclo é infinito, até você se tornar um trader completo. </p>
            </div>
            <div className='max-w-6xl px-4  pb-2 mx-auto'>
                <h2 className="mb-4 text-2xl font-bold text-white  md:text-4xl">
                    Princípios do mercado: conceitos universais
                </h2>
            </div>

            <div className='pb-16 mx-auto'>
                <Swiper
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={5000}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                        },
                        480: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                        1280: {
                            slidesPerView: 8,
                        },
                        1536: {
                            slidesPerView: 8,
                        },
                    }}
                >
                    {modulos.map((modulo) => (
                        <SwiperSlide key={modulo.id}>
                            <div className="relative w-full bg-primary-900 rounded-lg shadow-md overflow-hidden border border-secondary-500/35">
                                <Image
                                    width={272}
                                    height={482}
                                    src={modulo.src}
                                    alt={modulo.message}
                                    loading="lazy"
                                    className="transition-all ease-linear h-full brightness-75 hover:brightness-100"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
