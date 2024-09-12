// src/components/RastreadorLiquidez/HeroSection.js
import Image from 'next/image';
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
            <div className="flex flex-col justify-between h-full max-w-7xl px-4 py-12 mx-auto">
                <div className="relative z-10 flex items-center ">
                    <div className="w-full hidden md:block">
                        <h1 className="mb-4 text-3xl font-bold text-center md:text-6xl">
                            <span className="flex items-center justify-center">
                                <span className='hidden'>Speedflow</span><Image src="/speedflow.webp" alt="Logo" width={400} height={102} className='-mr-8' />
                                <span className='mt-3'>é a análise real do fluxo</span>
                            </span>
                            na sua máxima potência
                        </h1>
                    </div>
                    <div className="w-full block md:hidden">
                        <h1 className="mb-4 text-2xl font-bold text-center md:text-6xl">
                            <span className="flex flex-col items-center justify-center">
                                <Image src="/speedflow.webp" alt="Logo" width={300} height={102} className='-mr-8' />
                                <span className=''>é a análise real do fluxo</span>
                            </span>
                            na sua máxima potência
                        </h1>
                    </div>
                </div>

                <div className="w-full max-w-5xl p-1 mx-auto mb-8">
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
        </section >
    );
}
