// src/components/HeroSection.js

import Form from "../Forms/Form";

export default function HeroSection() {
    return (
        <section
            className="relative text-white bg-black h-auto md:min-h-[50vh]"
            style={{
                backgroundImage: 'url(/images/bg/bg-02.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-50 bg-primary-700'></div>
            <div className='relative z-10 max-w-6xl px-4 py-12 mx-auto '>
                {/* Conteúdo principal */}
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">A maior escola de Traders da <span className='yellow'>América Latina</span></h1>
                    <p className="mb-8 text-lg">
                        Cadastre seu email para <span className='font-semibold yellow'>aprender investimento de graça</span>
                    </p>
                </div>
                <div className='w-full mb-8'>
                    <Form />
                </div>
            </div>
        </section>
    );
}
