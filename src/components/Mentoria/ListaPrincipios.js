'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonials = [
    { id: 1, name: "img 1", message: "Depoimento incrível do cliente 1!", src: '/images/Home/img-01.webp' },
    { id: 2, name: "img 2", message: "Depoimento incrível do cliente 2!", src: '/images/Home/img-02.webp' },
    { id: 3, name: "img 3", message: "Depoimento incrível do cliente 3!", src: '/images/Home/img-03.webp' },
    { id: 4, name: "img 4", message: "Depoimento incrível do cliente 4!", src: '/images/Home/img-02.webp' },
    { id: 5, name: "img 5", message: "Depoimento incrível do cliente 5!", src: '/images/Home/img-01.webp' },
    { id: 6, name: "img 6", message: "Depoimento incrível do cliente 6!", src: '/images/Home/img-03.webp' },
    { id: 7, name: "img 7", message: "Depoimento incrível do cliente 7!", src: '/images/Home/img-01.webp' },
    { id: 8, name: "img 8", message: "Depoimento incrível do cliente 8!", src: '/images/Home/img-02.webp' },
    { id: 9, name: "img 9", message: "Depoimento incrível do cliente 9!", src: '/images/Home/img-03.webp' },
    { id: 10, name: "img 10", message: "Depoimento incrível do cliente 10!", src: '/images/Home/img-02.webp' },
    { id: 11, name: "img 1", message: "Depoimento incrível do cliente 1!", src: '/images/Home/img-01.webp' },
    { id: 12, name: "img 2", message: "Depoimento incrível do cliente 2!", src: '/images/Home/img-03.webp' },
    { id: 13, name: "img 3", message: "Depoimento incrível do cliente 3!", src: '/images/Home/img-01.webp' },
    { id: 14, name: "img 4", message: "Depoimento incrível do cliente 4!", src: '/images/Home/img-02.webp' },
    { id: 15, name: "img 5", message: "Depoimento incrível do cliente 5!", src: '/images/Home/img-03.webp' },
    { id: 16, name: "img 6", message: "Depoimento incrível do cliente 6!", src: '/images/Home/img-02.webp' },
    { id: 17, name: "img 7", message: "Depoimento incrível do cliente 7!", src: '/images/Home/img-01.webp' },
    { id: 18, name: "img 8", message: "Depoimento incrível do cliente 8!", src: '/images/Home/img-03.webp' },
    { id: 19, name: "img 9", message: "Depoimento incrível do cliente 9!", src: '/images/Home/img-01.webp' },
    { id: 20, name: "img 10", message: "Depoimento incrível do cliente 10!", src: '/images/Home/img-02.webp' },
];

export default function ListaPrincipios() {
    return (
        <section className="text-white bg-primary-900">
            <div className='max-w-6xl px-4 pt-16 pb-8 mx-auto'>
                <h2 className="mb-4 text-2xl font-bold text-white md:text-center md:text-5xl">
                    Metodologia de Camadas do Conhecimento
                </h2>
                <p className="mb-4 text-lg md:text-center">
                    Você não precisa saber tudo para começar a ganhar: aprende um pouco, ganha um pouco. Aprofunda mais um pouco, ganha mais um pouco. O ciclo é infinito. Você escolhe até onde vai.

                </p>
            </div>
            <div className='max-w-6xl px-4 pt-16 pb-8 mx-auto'>
                <h2 className="mb-4 text-xl font-semibold text-white  md:text-3xl">
                    Princípios do Mercado: conceitos universais
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
                            slidesPerView: 10,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="relative w-full bg-primary-900 rounded-lg shadow-md overflow-hidden border border-secondary-500/35">
                                <Image
                                    width={272}
                                    height={482}
                                    src={testimonial.src}
                                    alt={testimonial.message}
                                    className="transition-all ease-linear h-full brightness-75 hover:brightness-100"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
}
