// src/components/HeroSection.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
import VimeoPlayer from '@/components/Global/VideoPlayer';

export default function HeroSection() {
    return (
        <section
            className="relative h-auto md:min-h-[90vh] text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-06.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-80 bg-primary-700'></div>
            <div className="flex flex-col justify-between items-center h-full max-w-7xl px-4 py-12 mx-auto relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="mb-4 text-4xl font-bold md:text-7xl">O Método definitivo para lucrar no <span className='yellow'>Mercado Financeiro</span></p>
                    <h1 className='mb-4 text-4xl'>Mentoria <span className='yellow font-bold uppercase'>Fluxo simplificado 3.0</span></h1>

                </div>
                <div className="w-full max-w-4xl p-1 mx-auto mb-8 mt-8">
                    <VimeoPlayer
                        videoId="1014552927"
                        autoplay={false}
                        loop={false}
                        muted={false}
                        coverImage="https://vumbnail.com/1014552927.jpg"
                        endCoverImage="https://vumbnail.com/1014552927.jpg"
                    />
                </div>
                <div className="relative z-10 flex mx-auto">
                    <Link href="#inscreva-se">
                        <button className="flex items-center justify-center w-full group btn md:btn-large">
                            Quero Ganhar no mercado <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1 rotate-90 md:rotate-0' />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
