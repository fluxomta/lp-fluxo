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
            <div className="flex flex-col justify-between h-full max-w-6xl px-4 py-12 mx-auto">
                <div className="relative z-10 flex items-center ">
                    <div className="w-full">
                        <h1 className="mb-8 text-3xl font-bold text-center md:text-6xl">
                            <span className='mt-3'><span className='yellow block'>MacroFlow, opere como um Sniper</span> o fluxo real em suas mãos</span>
                        </h1>
                    </div>
                </div>

                <div className="w-full max-w-3xl p-1 mx-auto mb-8">
                    <VimeoPlayer
                        videoId="1010343883"
                        autoplay={false}
                        loop={false}
                        muted={false}
                        coverImage="https://vumbnail.com/1010343883.jpg"
                        endCoverImage="https://vumbnail.com/1010343883.jpg"
                    />
                </div>
                <div className="relative z-10 flex mx-auto">
                    <Link href="#assine">
                        <button className="flex items-center justify-center w-full group btn md:btn-large">
                            Quero Acelerar meus Resultados <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
            </div>
        </section >
    );
}
