// src/components/AboutSection.js
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="text-white bg-primary-500">
            <div className='relative z-10 max-w-6xl px-4 py-12 mx-auto'>
                {/* Conteúdo principal */}
                <div className='grid max-w-6xl grid-cols-1 mx-auto md:space-x-6 md:grid-cols-2 '>
                    <div className="col-span-1">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Quem faz o Fluxo?</h1>
                        <p className="mb-8 text-2xl font-semibold yellow">
                            Victor Garcia | Tony do Call
                        </p>
                        <p>Aprenda com quem desenvolveu o método SIMPLIFICADO deixando o mercado simples e objetivo.</p>
                        <p>Victor Garcia é mentor de investimento e está no mercado desde 2010. O Campeão Brasileiro de Poker aliou toda sua visão estratégica em um operacional exclusivo focado em resultados.</p>
                        <p>Hoje forma traders profissionais contando com uma comunidade de imenso valor.</p>

                        <blockquote className='pl-2 text-xl font-semibold border-l-2 border-secondary-700'>
                            “O Fluxo simplificado é uma virada de chave para quem está no mercado financeiro. Ele chegou para transformar as operações como um método comprovado por resultados e testes que impressionam.”
                            <p className='!font-normal block yellow'>Victor Garcia</p>
                        </blockquote>

                    </div>
                    <div className="flex items-center justify-end col-span-1">
                        <Image src="/profile-2.webp" alt="Victor Garcia" className="rounded-md w-48 mx-auto md:w-auto" width={384} height={443} />
                    </div>
                </div>
            </div>
        </section>
    );
}
