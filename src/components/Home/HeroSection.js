// src/components/HeroSection.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';

export default function HeroSection() {
    return (
        <section
            className="relative text-white bg-black h-auto md:min-h-[80vh] flex items-center"
            style={{
                backgroundImage: 'url(/images/bg/bg-02.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='relative z-10 max-w-6xl px-4 py-12 mx-auto flex flex-col'>
                {/* Conteúdo principal */}
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-bold md:text-7xl">A referência nº 1 em <span className="yellow">Educação de Traders</span> da América Latina</h1>
                    <p className="mb-8 text-3xl mt-8">
                        Sua jornada rumo ao <strong>sucesso começa aqui</strong>
                    </p>
                </div>
                <div className="relative z-10 flex mx-auto text-center mt-8">
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
