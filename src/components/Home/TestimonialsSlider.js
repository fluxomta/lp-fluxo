'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
    { id: 1, name: "Cliente 1", message: "Depoimento incrível do cliente 1!", src: '/images/depoimentos/depoimento-01.webp' },
    { id: 2, name: "Cliente 2", message: "Depoimento incrível do cliente 2!", src: '/images/depoimentos/depoimento-02.webp' },
    { id: 3, name: "Cliente 3", message: "Depoimento incrível do cliente 3!", src: '/images/depoimentos/depoimento-03.webp' },
    { id: 4, name: "Cliente 4", message: "Depoimento incrível do cliente 4!", src: '/images/depoimentos/depoimento-04.webp' },
    { id: 5, name: "Cliente 5", message: "Depoimento incrível do cliente 5!", src: '/images/depoimentos/depoimento-05.webp' },
    { id: 6, name: "Cliente 6", message: "Depoimento incrível do cliente 6!", src: '/images/depoimentos/depoimento-06.webp' },
    { id: 7, name: "Cliente 7", message: "Depoimento incrível do cliente 7!", src: '/images/depoimentos/depoimento-07.webp' },
    { id: 8, name: "Cliente 8", message: "Depoimento incrível do cliente 8!", src: '/images/depoimentos/depoimento-08.webp' },
    { id: 8, name: "Cliente 9", message: "Depoimento incrível do cliente 8!", src: '/images/depoimentos/depoimento-09.webp' },

];

export default function TestimonialsSlider() {
    return (
        <section className="text-white black-gradient-2">
            <div className='max-w-6xl px-4 py-4 pt-12 mx-auto'>
                <h2 className="mb-4 text-2xl font-bold text-center text-white md:text-5xl">Eles tem transformado suas vidas no <span className='yellow'>mercado financeiro com nossos produtos.</span></h2>
            </div>
            <div className='hidden max-w-6xl px-4 py-12 mx-auto md:grid'>
                {/* Layout Masonry para Desktop */}
                <div className="grid-cols-1 gap-5 md:grid sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="relative p-5 h-[300px] overflow-hidden bg-primary-900 border rounded-lg shadow-md border-secondary-700">
                            <Image
                                src={testimonial.src}
                                alt={testimonial.message}
                                fill
                                style={{ objectFit: 'contain' }}
                                objectFit="contain"
                                className="transition-all ease-out h-fullduration-500 brightness-75 hover:brightness-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Slider para Mobile */}
            <div className="max-w-6xl pb-8 mx-auto md:hidden">
                <Swiper spaceBetween={10} slidesPerView={1.3} centeredSlides={true} pagination={{ clickable: true }} loop={true}>
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="relative w-full h-[450px] bg-primary-900 rounded-lg shadow-md overflow-hidden border border-secondary-700">
                                <Image
                                    src={testimonial.src}
                                    alt={testimonial.message}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="transition-all ease-out h-fullduration-500 brightness-75 hover:brightness-100"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
