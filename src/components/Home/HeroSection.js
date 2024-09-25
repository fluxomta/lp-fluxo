// src/components/HeroSection.js

export default function HeroSection() {
    return (
        <section
            className="relative text-white bg-black h-auto md:min-h-[40vh] flex items-center"
            style={{
                backgroundImage: 'url(/images/bg/bg-02.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='relative z-10 max-w-6xl px-4 py-12 mx-auto'>
                {/* Conteúdo principal */}
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-bold md:text-6xl">A maior escola de <span className='yellow'>Traders</span> da América Latina</h1>
                    <p className="mb-8 text-3xl ">
                        Tudo que você precisa para <strong>vencer no Mercado Financeiro</strong>, aprenda com os melhores
                    </p>
                </div>
            </div>
        </section>
    );
}
