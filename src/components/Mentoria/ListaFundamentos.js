'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonials = [
    { id: 1, name: "img 1", message: "Feature 1!", src: '/images/Home/A_Teoria_do_mercado_1.webp' },
    { id: 2, name: "img 2", message: "Feature 2!", src: '/images/Home/A_Teoria_do_mercado_2.webp' },
    { id: 3, name: "img 3", message: "Feature 3!", src: '/images/Home/A_Teoria_do_mercado_3.webp' },
    { id: 4, name: "img 4", message: "Feature 4!", src: '/images/Home/A_Teoria_do_mercado_4.webp' },
    { id: 5, name: "img 5", message: "Feature 5!", src: '/images/Home/A_Teoria_do_mercado_1.webp' },
    { id: 6, name: "img 6", message: "Feature 6!", src: '/images/Home/A_Teoria_do_mercado_2.webp' },
    { id: 7, name: "img 7", message: "Feature 7!", src: '/images/Home/A_Teoria_do_mercado_3.webp' },
    { id: 8, name: "img 8", message: "Feature 8!", src: '/images/Home/A_Teoria_do_mercado_4.webp' },
    { id: 9, name: "img 9", message: "Feature 9!", src: '/images/Home/A_Teoria_do_mercado_1.webp' },
    { id: 10, name: "img 10", message: "Feature 10!", src: '/images/Home/A_Teoria_do_mercado_2.webp' },
    { id: 11, name: "img 11", message: "Feature 11!", src: '/images/Home/A_Teoria_do_mercado_3.webp' },
    { id: 12, name: "img 12", message: "Feature 12!", src: '/images/Home/A_Teoria_do_mercado_4.webp' },
    { id: 13, name: "img 13", message: "Feature 13!", src: '/images/Home/A_Teoria_do_mercado_1.webp' },
    { id: 14, name: "img 14", message: "Feature 14!", src: '/images/Home/A_Teoria_do_mercado_2.webp' },
    { id: 15, name: "img 15", message: "Feature 15!", src: '/images/Home/A_Teoria_do_mercado_3.webp' },
    { id: 16, name: "img 16", message: "Feature 16!", src: '/images/Home/A_Teoria_do_mercado_4.webp' },
    { id: 17, name: "img 17", message: "Feature 17!", src: '/images/Home/A_Teoria_do_mercado_1.webp' },
    { id: 18, name: "img 18", message: "Feature 18!", src: '/images/Home/A_Teoria_do_mercado_2.webp' },
    { id: 19, name: "img 19", message: "Feature 19!", src: '/images/Home/A_Teoria_do_mercado_3.webp' },
    { id: 20, name: "img 20", message: "Feature 20!", src: '/images/Home/A_Teoria_do_mercado_4.webp' },
];

export default function ListaFundamentos() {
    return (
        <section className="text-white bg-primary-900">
            <div className='max-w-6xl px-4 pt-16 pb-8 mx-auto'>
                <h2 className="mb-4 text-xl font-semibold text-white  md:text-3xl">
                    Princípios do Mercado: conceitos universais
                </h2>
            </div>

            <div className='pb-16 mx-auto'>

                <Swiper
                    dir="rtl"
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
