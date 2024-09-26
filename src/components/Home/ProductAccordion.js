'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonials = [
    { id: 1, name: "img 1", message: "Feature 1!", src: '/images/Home/feature-01.webp' },
    { id: 2, name: "img 2", message: "Feature 2!", src: '/images/Home/feature-02.webp' },
    { id: 3, name: "img 3", message: "Feature 3!", src: '/images/Home/feature-03.webp' },
    { id: 4, name: "img 4", message: "Feature 4!", src: '/images/Home/feature-04.webp' },

];

export default function ImageAccordion() {
    return (
        <section className="text-white bg-primary-900 ">
            <div className='max-w-6xl px-4 pt-16 pb-8 mx-auto'>
                <h2 className="mb-4 text-2xl font-bold text-white md:text-center md:text-5xl">
                    Conheça do <span className='gradient-yellow-text'>Zero ao Fluxo</span>
                </h2>
                <p className="mb-4 text-lg md:font-bold md:text-3xl md:text-center">
                    Tudo que você precisa para se tornar um Trader Profissional.
                    Comece Agora e Transforme sua Carreira!
                </p>
            </div>
            <div className='pb-16 mx-auto max-w-6xl'>
                <Swiper
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
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
                            slidesPerView: 4,
                        },
                        1536: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="relative  bg-primary-100 rounded-md overflow-hidden border shadow-inner">
                                <Image
                                    width={273}
                                    height={481}
                                    src={testimonial.src}
                                    alt={testimonial.message}
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
