'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImageAccordion() {
    return (
        <section className="text-white bg-primary-900">
            <div className='max-w-6xl px-4 pt-16 pb-8 mx-auto '>
                <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl md:text-center md:text-5xl">Conheça do <span className='yellow'>Zero ao Fluxo</span></h2>
                <p className="mb-4 text-lg md:font-bold md:text-3xl md:text-center">Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.</p>
            </div>
            <div className='max-w-6xl px-4 pb-16 mx-auto'>
                <div className="hidden md:flex w-full h-[400px] overflow-hidden rounded-lg border-2 border-secondary-700"> {/* Contêiner interno centralizado para desktop */}
                    {/* Primeiro Item: Maior por padrão */}
                    <div className="relative flex-[2] hover:flex-[4] transition-[flex] duration-500 ease-out overflow-hidden ">
                        <Image
                            src="/images/product/product-img.webp"
                            alt="Plenaria"
                            layout="fill"
                            objectFit="cover"
                            className="transition-all duration-500 ease-out brightness-75 hover:brightness-100"
                        />
                        <div className="absolute flex items-end w-full h-full p-8 text-lg font-bold text-white bg-primary-500 bg-opacity-20 text-secondary-500">
                            MacroFlow
                        </div>
                    </div>
                    {/* Outros itens */}
                    {[
                        { src: '/images/product/product-img.webp', label: 'Fluxo V6' },
                        { src: '/images/product/product-img.webp', label: 'Alvo R3' },
                        { src: '/images/product/product-img.webp', label: 'LT' },
                        { src: '/images/product/product-img.webp', label: 'SpeedFlow' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative flex-1 hover:flex-[4] transition-[flex] duration-500 ease-out overflow-hidden"
                        >
                            <Image
                                src={item.src}
                                alt={item.label}
                                layout="fill"
                                objectFit="cover"
                                className="transition-all duration-500 ease-out brightness-75 hover:brightness-100"
                            />
                            <div className="absolute flex items-end w-full h-full p-8 text-lg font-bold text-white bg-primary-500 bg-opacity-20 text-secondary-500">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Slider para Mobile */}
            <div className="max-w-6xl mx-auto md:hidden"> {/* Apenas em dispositivos móveis */}
                <Swiper spaceBetween={10} slidesPerView={1.2} centeredSlides={true} pagination={{ clickable: true }} loop={true}>
                    {/* Primeiro Slide */}
                    <SwiperSlide>
                        <div className="relative w-full h-[300px] overflow-hidden rounded-lg border border-secondary-700">
                            <Image
                                src="/images/product/product-img.webp"
                                alt="Plenaria"
                                layout="fill"
                                objectFit="cover"
                                className="transition-all duration-500 ease-out brightness-75 hover:brightness-100"
                            />
                            <div className="absolute flex items-end w-full h-full p-8 font-bold text-white ttext-lg bg-primary-500 bg-opacity-20 text-secondary-500">
                                MacroFlow
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Outros Slides */}
                    {[
                        { src: '/images/product/product-img.webp', label: 'Fluxo V6' },
                        { src: '/images/product/product-img.webp', label: 'Alvo R3' },
                        { src: '/images/product/product-img.webp', label: 'LT' },
                        { src: '/images/product/product-img.webp', label: 'SpeedFlow' },
                    ].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[300px] overflow-hidden rounded-lg border border-secondary-700">
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-all duration-500 ease-out brightness-75 hover:brightness-100"
                                />
                                <div className="absolute flex items-end w-full h-full p-8 text-lg font-bold text-white bg-primary-500 bg-opacity-20 text-secondary-500">
                                    {item.label}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
