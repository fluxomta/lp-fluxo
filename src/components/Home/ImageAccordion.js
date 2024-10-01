'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonials = [
    { id: 1, name: "Fluxo Simplificado", message: "Fluxo Simplificado", src: '/images/Home/home-01.webp' },
    { id: 2, name: "SpeedFlow", message: "SpeedFlow", src: '/images/Home/home-02.webp' },
    { id: 3, name: "MacroFlow", message: "MacroFlow", src: '/images/Home/home-03.webp' },
    { id: 4, name: "Quantum LT", message: "Quantum LT", src: '/images/Home/home-04.webp' },
    { id: 5, name: "Alvo R3", message: "Alvo R3", src: '/images/Home/home-05.webp' },
    { id: 6, name: "Fluxo V6", message: "Fluxo V6", src: '/images/Home/home-06.webp' },
    { id: 7, name: "Fluxo Simplificado", message: "Fluxo Simplificado", src: '/images/Home/home-01.webp' },
    { id: 8, name: "SpeedFlow", message: "SpeedFlow", src: '/images/Home/home-02.webp' },
    { id: 9, name: "MacroFlow", message: "MacroFlow", src: '/images/Home/home-03.webp' },
    { id: 10, name: "Quantum LT", message: "Quantum LT", src: '/images/Home/home-04.webp' },
    { id: 11, name: "Alvo R3", message: "Alvo R3", src: '/images/Home/home-05.webp' },
    { id: 12, name: "Fluxo V6", message: "Fluxo V6", src: '/images/Home/home-06.webp' },

];

export default function ImageAccordion() {
    return (
        <section className="text-white bg-primary-900">
            <div className='max-w-6xl px-4 pt-16 pb-8 mx-auto'>
                <h2 className="mb-4 text-2xl font-bold text-white md:text-center md:text-5xl">
                    Conheça do <span className='gradient-yellow-text'>Zero ao Fluxo</span>
                </h2>
                <p className="mb-4 text-lg md:font-bold md:text-3xl md:text-center">
                    Tudo que você precisa para se tornar um Trader Profissional.<br className='hidden md:block' />
                    Comece Agora e Transforme sua Carreira!
                </p>
            </div>
            <div className='pb-16 '>
                <Swiper
                    spaceBetween={30}
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
                            slidesPerView: 1.5,
                        },
                        480: {
                            slidesPerView: 1.2,
                        },
                        768: {
                            slidesPerView: 2.3,
                        },
                        1024: {
                            slidesPerView: 2.3,
                        },
                        1280: {
                            slidesPerView: 6,
                        },
                        1536: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="relative rounded-md overflow-hidden border shadow-inner">
                                <Image
                                    width={270}
                                    height={478}
                                    src={testimonial.src}
                                    alt={testimonial.message}
                                    className="transition-all ease-linear w-full h-full brightness-75 hover:brightness-100"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
