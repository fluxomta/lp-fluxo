// src/components/RastreadorLiquidez/HeroSection.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
import VimeoPlayer from '@/components/Global/VideoPlayer';

export default function HeroSection() {
    return (
        <section
            className="relative h-auto text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-02.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
            <div className="flex flex-col justify-between h-full max-w-6xl px-4 py-16 mx-auto">
                <div className="relative z-10 flex items-center ">
                    <div className="w-full">
                        <p className="mb-4 text-3xl font-bold text-center md:text-5xl yellow">
                            Transforme suas operações com o
                        </p>
                        <h1 className="mb-4 text-3xl font-bold text-center md:text-5xl">
                            LT | O Rastreador de Liquidez
                        </h1>
                    </div>
                </div>

                <div className="w-full max-w-3xl p-1 mx-auto ">
                    <VimeoPlayer
                        videoId="682116908"
                        autoplay={false}
                        loop={false}
                        muted={false}
                        coverImage="https://vumbnail.com/682116908.jpg"
                        endCoverImage="https://vumbnail.com/682116908.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
