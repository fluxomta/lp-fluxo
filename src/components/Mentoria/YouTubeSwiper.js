'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

const videos = [
    { id: 'video1', url: 'https://www.youtube.com/embed/URhHFfAm2r4', thumb: 'https://img.youtube.com/vi/URhHFfAm2r4/maxresdefault.jpg' },
    { id: 'video2', url: 'https://www.youtube.com/embed/pZMe-drCPdI', thumb: 'https://img.youtube.com/vi/pZMe-drCPdI/maxresdefault.jpg' },
    { id: 'video3', url: 'https://www.youtube.com/embed/cH2jRUEG1uo', thumb: 'https://img.youtube.com/vi/cH2jRUEG1uo/maxresdefault.jpg' },
    { id: 'video4', url: 'https://www.youtube.com/embed/d0xK1Vu8Hzs', thumb: 'https://img.youtube.com/vi/d0xK1Vu8Hzs/maxresdefault.jpg' },
    { id: 'video5', url: 'https://www.youtube.com/embed/RdGMMDDVSs4', thumb: 'https://img.youtube.com/vi/RdGMMDDVSs4/maxresdefault.jpg' },
];

export default function YouTubeSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section
            className="relative  text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-03.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-50 bg-primary-500'></div>
            <div className="max-w-4xl px-4 py-12 mx-auto md:text-lg relative z-10">
                {/* Swiper principal para exibir os vídeos */}
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                    className="mySwiper2"
                >
                    {videos.map((video) => (
                        <SwiperSlide key={video.id}>
                            <div className="flex justify-center items-center aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src={video.url}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Swiper secundário para exibir as thumbs dos vídeos */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode
                    watchSlidesProgress
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {videos.map((video) => (
                        <SwiperSlide key={video.id}>
                            <div className="cursor-pointer mt-8">
                                <img
                                    src={video.thumb}
                                    alt={`Thumbnail for ${video.id}`}
                                    className="w-full h-full "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
