'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImageAccordion() {
    return (
        <section className="text-white bg-primary-900">
            <div className='max-w-6xl px-4 pt-16 pb-8 mx-auto '>
                <h2 className="mb-4 text-2xl font-bold text-white md:text-center md:text-5xl">Conheça do <span className='yellow'>Zero ao Fluxo</span></h2>
                <p className="mb-4 text-lg md:font-bold md:text-3xl md:text-center">Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.</p>
            </div>
            <div className='max-w-6xl px-4 pb-16 mx-auto'>
                <div className="hidden md:flex w-full h-[400px] overflow-hidden rounded-lg border-2 border-secondary-700"> {/* Contêiner interno centralizado para desktop */}
                    {/* Primeiro Item: Maior por padrão */}
                    <div className="relative flex-[1] hover:flex-[5] transition-[flex] duration-500 ease-out overflow-hidden group">
                        <div className="absolute w-full h-full p-8 bg-primary-500 border-r border-secondary-400">
                            <h2 className='text-lg font-semibold yellow transition-all duration-200'>SpeedFlow</h2>
                            <p className='relative opacity-0 -top-[200%] delay-300 duration-200 group-hover:top-0 group-hover:opacity-100   '>O SpeedFlow é um método gratuito que simplifica o uso do fluxo no mercado financeiro. Aprenda como os verdadeiros vencedores operam, ganhe mais confiança e precisão, e eleve seu nível de atuação. Comece agora e transforme sua trajetória no mercado.</p>
                        </div>
                    </div>
                    {/* Outros itens */}
                    {[
                        { src: '/images/product/product-img.webp', label: 'MacroFlow', text: 'MacroFlow é o indicador mais avançado do mercado, unindo 8 ferramentas em uma para detectar posições de grandes players e prever movimentos com precisão. Tome decisões assertivas e domine o fluxo real em qualquer ativo.' },
                        { src: '/images/product/product-img.webp', label: 'Quantum LT', text: 'LT é o mapa perfeito do mercado, destacando pontos cruciais para operações mais lucrativas. Evite armadilhas, encontre entradas e saídas ideais, e faça análises profundas em segundos.' },
                        { src: '/images/product/product-img.webp', label: 'Alvo R3', text: 'O Alvo R3 revela o segredo dos grandes fundos, traçando automaticamente os alvos perfeitos. Pare de perder oportunidades e opere com soluções em futuros, ações e opções, com a tecnologia TradeVision ao seu lado.' },
                        { src: '/images/product/product-img.webp', label: 'Fluxo V6', text: 'O Fluxo V6 oferece leitura rápida de fluxo, regras de coloração simples e navegação segura nas regiões de manipulação. Aumente seus lucros e opere com confiança.' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative flex-1 hover:flex-[5] transition-[flex] duration-500 ease-out overflow-hidden group"
                        >
                            <div className="absolute w-full h-full bg-primary-500 border-r border-secondary-400">
                                <span className='absolute w-full h-full bg-primary-500 inset-0 z-10 group-hover:opacity-0 delay-300'></span>
                                <div className='p-8'>
                                    <h2 className='relative text-lg font-semibold yellow  transition-all duration-200 z-20'>{item.label}</h2>
                                    <p className='relative'>{item.text}</p>
                                </div>
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
                            <div className="absolute flex items-end w-full h-full p-8 font-bold text-white ttext-lg bg-primary-500 bg-opacity-20 yellow">
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
                                <div className="absolute flex items-end w-full h-full p-8 text-lg font-bold text-white bg-primary-500 bg-opacity-20 yellow">
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
