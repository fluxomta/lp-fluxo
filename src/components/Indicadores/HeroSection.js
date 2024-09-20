// src/components/Indicadores/HeroSection.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';

export default function HeroSection() {
    return (
        <section
            className="relative text-white bg-black h-auto md:h-[60vh] "
            style={{
                backgroundImage: 'url(/images/bg/bg-02.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
            <div className="flex-col justify-between hidden h-full max-w-6xl px-4 py-12 mx-auto md:flex">
                <div className="relative z-10 flex items-center ">
                    <div className="w-full">
                        <h1 className="mb-4 text-3xl font-bold text-center md:text-5xl md:text-left">
                            Decisões certas, <br className="hidden md:block" />com as <span className="yellow">ferramentas perfeitas</span>
                        </h1>
                    </div>
                </div>
                <div className="relative z-10 flex justify-end">
                    <div className="w-full md:w-1/2">
                        <h2 className="mb-4 text-xl text-center md:text-right md:text-4xl ">
                            Use tecnologia Quant para acelerar de uma vez os <br className="hidden md:block" /><span className="yellow">seus resultados</span>
                        </h2>
                    </div>
                </div>
                <div className="relative z-10 flex mx-auto">
                    <Link href="/indicadores/speedflow">
                        <button className="flex items-center justify-center w-full group btn-dark md:btn-dark-large">
                            Quero Acelerar meus Resultados <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-between h-full max-w-6xl px-6 py-12 pb-4 mx-auto md:hidden">
                <div className="relative z-10 flex items-center ">
                    <div className="w-full">
                        <h1 className="mb-4 text-3xl font-bold text-left md:text-5xl">
                            Decisões certas, <br />com as <span className="yellow">ferramentas perfeitas</span>
                        </h1>
                    </div>
                </div>
                <div className="relative z-10 flex justify-end">
                    <div className="w-full md:w-1/2">
                        <h2 className="mb-4 text-xl text-right md:text-right md:text-4xl ">
                            Use tecnologia Quant<br /> para acelerar de uma vez<br /> os <span className="yellow">seus resultados</span>
                        </h2>
                    </div>
                </div>
                <div className="relative z-10 flex mx-auto mt-8">
                    <Link href="/indicadores/speedflow">
                        <button className="flex items-center justify-center w-full group btn-dark md:btn-dark-large">
                            Quero Acelerar meus Resultados <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
