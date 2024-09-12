// src/components/RastreadorLiquidez/HeroSection.js
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
                        <h1 className="mb-4 text-3xl font-normal text-center md:text-6xl">
                            <span className='mt-3'><span className='yellow block'><strong>MacroFlow</strong>, opere como um Sniper</span> o fluxo real e <strong>gratuito</strong> em suas mãos</span>
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
