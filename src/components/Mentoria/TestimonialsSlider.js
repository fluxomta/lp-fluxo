'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonials = [
    { id: 1, name: "Cliente 1", message: "Depoimento incrível do cliente 1!", src: '/images/depoimentos/depoimento-01.webp' },
    { id: 2, name: "Cliente 2", message: "Depoimento incrível do cliente 2!", src: '/images/depoimentos/depoimento-02.webp' },
    { id: 3, name: "Cliente 3", message: "Depoimento incrível do cliente 3!", src: '/images/depoimentos/depoimento-03.webp' },
    { id: 4, name: "Cliente 4", message: "Depoimento incrível do cliente 4!", src: '/images/depoimentos/depoimento-04.webp' },
    { id: 5, name: "Cliente 5", message: "Depoimento incrível do cliente 5!", src: '/images/depoimentos/depoimento-05.webp' },
    { id: 6, name: "Cliente 6", message: "Depoimento incrível do cliente 6!", src: '/images/depoimentos/depoimento-06.webp' },
    { id: 7, name: "Cliente 7", message: "Depoimento incrível do cliente 7!", src: '/images/depoimentos/depoimento-07.webp' },
    { id: 8, name: "Cliente 8", message: "Depoimento incrível do cliente 8!", src: '/images/depoimentos/depoimento-08.webp' },
    { id: 9, name: "Cliente 9", message: "Depoimento incrível do cliente 9!", src: '/images/depoimentos/depoimento-09.webp' },
    { id: 10, name: "Cliente 10", message: "Depoimento incrível do cliente 10!", src: '/images/depoimentos/depoimento-10.webp' },
    { id: 11, name: "Cliente 11", message: "Depoimento incrível do cliente 11!", src: '/images/depoimentos/depoimento-11.webp' },
    { id: 12, name: "Cliente 12", message: "Depoimento incrível do cliente 12!", src: '/images/depoimentos/depoimento-12.webp' },
    { id: 13, name: "Cliente 13", message: "Depoimento incrível do cliente 13!", src: '/images/depoimentos/depoimento-13.webp' },
    { id: 14, name: "Cliente 14", message: "Depoimento incrível do cliente 14!", src: '/images/depoimentos/depoimento-14.webp' },
    { id: 15, name: "Cliente 15", message: "Depoimento incrível do cliente 15!", src: '/images/depoimentos/depoimento-15.webp' },
    { id: 16, name: "Cliente 16", message: "Depoimento incrível do cliente 16!", src: '/images/depoimentos/depoimento-16.webp' },

];

export default function TestimonialsSlider() {
    return (
        <section className="text-white black-gradient-2">
            <div className='max-w-6xl px-4 py-4 pt-12 mx-auto'>
                <h2 className="mb-4 text-2xl font-bold text-center text-white md:text-5xl">Eles tem transformado suas vidas no <span className='yellow'>mercado financeiro com nossos produtos.</span></h2>
            </div>
            <div className='pb-16 mx-auto  max-w-7xl'>
                <Swiper
                    spaceBetween={20}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                        },
                        480: {
                            slidesPerView: 2.3,
                        },
                        768: {
                            slidesPerView: 3.3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                        1436: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div
                                className="relative w-auto h-[300px] bg-primary-900 rounded-lg shadow-md overflow-hidden border border-secondary-500/35"
                                style={{
                                    backgroundImage: `url(${testimonial.src})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                            >
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </section>
    );
}
