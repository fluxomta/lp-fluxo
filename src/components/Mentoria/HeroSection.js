// src/components/HeroSection.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
import VimeoPlayer from '@/components/Global/VideoPlayer';

export default function HeroSection() {
    return (
        <section
            className="relative text-white bg-black h-auto md:min-h-[50vh]"

        >
            <div className="flex flex-col justify-between h-full max-w-7xl px-4 py-12 mx-auto">
                {/* Conteúdo principal */}
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Mentoria <span className='yellow block'>Fluxo Simplificado</span></h1>
                </div>
                <div className="w-full max-w-3xl p-1 mx-auto mb-8">
                    <VimeoPlayer
                        videoId="1008216539"
                        autoplay={false}
                        loop={false}
                        muted={false}
                        coverImage="https://vumbnail.com/1008216539.jpg"
                        endCoverImage="https://vumbnail.com/1008216539.jpg"
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
        </section>
    );
}
