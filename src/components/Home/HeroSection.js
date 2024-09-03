// src/components/HeroSection.js

export default function HeroSection() {
    return (
        <section
            className="relative text-white bg-black h-auto md:h-[50vh]"
            style={{
                backgroundImage: 'url(/images/bg/bg-02.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-50 bg-primary-700'></div>
            <div className='relative z-10 max-w-6xl px-4 py-8 mx-auto '>
                {/* Conteúdo principal */}
                <div className="max-w-2xl">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">A maior escola de Traders da <span className='yellow'>América Latina</span></h1>
                    <p className="mb-8 text-lg">
                        Cadastre seu email para <span className='font-semibold yellow'>aprender investimento de graça</span>
                    </p>
                </div>
                <div className='w-full p-8 border rounded-md border-secondary-700 bg-primary-700'>
                    &quot;vai entrar o form do active aqui&quot;
                </div>
            </div>
        </section>
    );
}
