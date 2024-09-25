'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Boxes() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Executa a animação apenas uma vez
        threshold: 0.1,    // A animação dispara quando 10% do elemento está visível
    });

    return (
        <section className="text-white bg-primary-700">
            <div className='relative z-10 max-w-6xl pt-16 pb-12 mx-auto'>
                <h2 className="mb-4 text-xl font-semibold text-white md:text-center md:text-3xl">
                    Tudo que você precisa para ser um profissional do mercado
                </h2>

                <div className="flex mt-4 md:mt-8">
                    <div className="rounded-md border border-primary-300/35 w-full grid grid-cols-2">
                        <div className="bg-primary-500 p-8 flex flex-wrap items-center content-center">
                            <h2 className="text-3xl font-semibold">
                                Estudo organizado da <span className="gradient-yellow-text font-bold">teoria</span>
                            </h2>
                            <p>Conhecimento dividido por camadas para você fazer dinheiro desde os níveis mais baixos. Aulas de até 20 minutos para otimizar seu tempo.
                            </p>
                        </div>
                        <div className="bg-primary-700 p-8">
                            <motion.div
                                ref={ref} // Referência para monitorar quando o elemento entra na viewport
                                initial={{ opacity: 0, x: 100 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                                transition={{ duration: 1, delay: 0.3 }} // Adicionando um delay de 0.3 segundos
                            >
                                <Image src="/images/features/features-01.webp" alt="Features" className="rounded-md" width={700} height={375} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
