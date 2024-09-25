// src/components/HeroSection.js
export default function HeroSection() {
    return (
        <section
            className="relative text-white bg-black h-auto md:min-h-[50vh]"

        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-50 bg-primary-700'></div>
            <div className='relative z-10 max-w-6xl px-4 py-12 mx-auto '>
                {/* Conteúdo principal */}
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Mentoria <span className='yellow block'>Fluxo Simplificado</span></h1>

                </div>

            </div>
        </section>
    );
}
