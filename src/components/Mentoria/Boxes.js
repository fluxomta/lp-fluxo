'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Boxes() {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: ref5, inView: inView5 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: ref6, inView: inView6 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: ref7, inView: inView7 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: ref8, inView: inView8 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="text-white bg-primary-700">
            <div className='relative z-10 max-w-6xl px-4 pt-16 pb-12 mx-auto'>
                <h2 className="mb-4 text-xl font-semibold text-white md:text-center md:text-3xl">
                    Tudo que você precisa para ser um Trader Profissional
                </h2>

                <div className="flex flex-col gap-8 mt-4 md:mt-8">
                    {/* Item01 */}
                    <div className="rounded-md border border-primary-300/35 w-full md:grid grid-cols-2">
                        <div className="bg-primary-500 p-8 flex flex-wrap items-center content-center">
                            <h2 className="text-3xl font-semibold">
                                <span className="gradient-yellow-text font-bold">Estudo organizado</span> da teoria: <br />
                                Aprenda no seu tempo
                            </h2>
                            <p>Conhecimento dividido por camadas para você fazer dinheiro desde os níveis mais baixos. Aulas práticas e objetivas para otimizar seu tempo e ter controle total do seu processo.
                            </p>
                        </div>
                        <div className="bg-primary-700 p-8">
                            <motion.div
                                ref={ref1} // Referência para monitorar quando o elemento entra na viewport
                                initial={{ opacity: 0, x: 100 }}
                                animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                                transition={{ duration: 1, delay: 0.3 }} // Adicionando um delay de 0.3 segundos
                            >
                                <Image src="/images/features/features-01.webp" alt="Features" className="rounded-md" width={700} height={375} />
                            </motion.div>
                        </div>
                    </div>
                    {/* Item02 */}
                    <div className="rounded-md border border-primary-300/35 w-full md:grid grid-cols-2 ">
                        <div className="bg-primary-500 p-8 flex flex-wrap items-center content-center order-2">
                            <h2 className="text-3xl font-semibold">
                                <span className="gradient-yellow-text font-bold">15 indicadores</span> Exclusivos: <br />
                                o poder nas suas mãos
                            </h2>
                            <p>No método você conta com ferramentas poderosas de análise do fluxo real, são mais de 15 indicadores exclusivos e uma plataforma essencial para leitura refinada O Macroflow.
                            </p>
                        </div>
                        <div className="bg-primary-700 p-8">
                            <motion.div
                                ref={ref2} // Referência para monitorar quando o elemento entra na viewport
                                initial={{ opacity: 0, x: -100 }}
                                animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                                transition={{ duration: 1, delay: 0.3 }} // Adicionando um delay de 0.3 segundos
                            >
                                <Image src="/images/features/features-01.webp" alt="Features" className="rounded-md" width={700} height={375} />
                            </motion.div>
                        </div>
                    </div>
                    {/* Item03 */}
                    <div className="rounded-md border border-primary-300/35 w-full md:grid grid-cols-2">
                        <div className="bg-primary-500 p-8 flex flex-wrap items-center content-center">
                            <h2 className="text-3xl font-semibold">
                                <span className="gradient-yellow-text font-bold">Plataforma</span> Otimizada: <br />
                                acesso em qualquer hora e lugar
                            </h2>
                            <p>Plataforma online de ponta com recursos essenciais e  acessível pelo celular. Evolua rapidamente com um sistema integrado entre a prática e a execução.
                            </p>
                        </div>
                        <div className="bg-primary-700 p-8">
                            <motion.div
                                ref={ref3} // Referência para monitorar quando o elemento entra na viewport
                                initial={{ opacity: 0, x: 100 }}
                                animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                                transition={{ duration: 1, delay: 0.3 }} // Adicionando um delay de 0.3 segundos
                            >
                                <Image src="/images/features/features-01.webp" alt="Features" className="rounded-md" width={700} height={375} />
                            </motion.div>
                        </div>
                    </div>
                    {/* Item04 */}
                    <div className="rounded-md border border-primary-300/35 w-full md:grid grid-cols-2">
                        <div className="bg-primary-500 p-8 flex flex-wrap items-center content-center order-1">
                            <h2 className="text-3xl font-semibold">
                                <span className="gradient-yellow-text font-bold">Aulas práticas</span> ao vivo: <br />
                                evolua mais rápido
                            </h2>
                            <p>Aula ao vivo toda semana respondendo as suas dúvidas, revisando o mercado e mostrando a execução de forma prática para você evoluir mais rápido.
                            </p>
                        </div>
                        <div className="bg-primary-700 p-8">
                            <motion.div
                                ref={ref4} // Referência para monitorar quando o elemento entra na viewport
                                initial={{ opacity: 0, x: -100 }}
                                animate={inView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                                transition={{ duration: 1, delay: 0.3 }} // Adicionando um delay de 0.3 segundos
                            >
                                <Image src="/images/features/features-01.webp" alt="Features" className="rounded-md" width={700} height={375} />
                            </motion.div>
                        </div>
                    </div>
                    {/* Item05 */}
                    <div className="rounded-md border border-primary-300/35 w-full md:grid grid-cols-2">
                        <div className="bg-primary-500 p-8 flex flex-wrap items-center content-center">
                            <h2 className="text-3xl font-semibold">
                                <span className="gradient-yellow-text font-bold">Backtesting</span> e análise dinâmica: <br />
                                evolua mais rápido
                            </h2>
                            <p>Backtesting focado em minimizar suas perdas, para você poder ganhar de forma consistente no mercado enfrentando as oscilações e lucrando de forma eficiente.
                            </p>
                        </div>
                        <div className="bg-primary-700 p-8">
                            <motion.div
                                ref={ref5} // Referência para monitorar quando o elemento entra na viewport
                                initial={{ opacity: 0, x: 100 }}
                                animate={inView5 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                                transition={{ duration: 1, delay: 0.3 }} // Adicionando um delay de 0.3 segundos
                            >
                                <Image src="/images/features/features-01.webp" alt="Features" className="rounded-md" width={700} height={375} />
                            </motion.div>
                        </div>
                    </div>
                    {/* Item06 */}
                    <div className="rounded-md border border-primary-300/35 w-full md:grid grid-cols-2">
                        <div className="bg-primary-500 p-8 flex flex-wrap items-center content-center order-1">
                            <h2 className="text-3xl font-semibold">
                                <span className="gradient-yellow-text font-bold">Estratégia</span> de foco em true points: <br />
                                evolua mais rápido
                            </h2>
                            <p>Estratégias simplificadas conforme cada região e Desafios do Mercado. Uma receita de análise de contexto onde o movimento realmente importa, para você explorar o mercado e tirar vantagem disso.
                            </p>
                        </div>
                        <div className="bg-primary-700 p-8">
                            <motion.div
                                ref={ref6} // Referência para monitorar quando o elemento entra na viewport
                                initial={{ opacity: 0, x: -100 }}
                                animate={inView6 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                                transition={{ duration: 1, delay: 0.3 }} // Adicionando um delay de 0.3 segundos
                            >
                                <Image src="/images/features/features-01.webp" alt="Features" className="rounded-md" width={700} height={375} />
                            </motion.div>
                        </div>
                    </div>
                    {/* Item07 */}
                    <div className="rounded-md border border-primary-300/35 w-full md:grid grid-cols-2">
                        <div className="bg-primary-500 p-8 flex flex-wrap items-center content-center">
                            <h2 className="text-3xl font-semibold">
                                <span className="gradient-yellow-text font-bold">Comunidade:</span><br />
                                aprenda com quem vive do mercado
                            </h2>
                            <p>O melhor ambiente para se conectar com profissionais, compartilhar e evoluir mais rápido. Quase 500 traders com o mesmo objetivo, operando e trocando experiências todos os dias.
                            </p>
                        </div>
                        <div className="bg-primary-700 p-8">
                            <motion.div
                                ref={ref7} // Referência para monitorar quando o elemento entra na viewport
                                initial={{ opacity: 0, x: 100 }}
                                animate={inView7 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                                transition={{ duration: 1, delay: 0.3 }} // Adicionando um delay de 0.3 segundos
                            >
                                <Image src="/images/features/features-01.webp" alt="Features" className="rounded-md" width={700} height={375} />
                            </motion.div>
                        </div>
                    </div>
                    {/* Item08 */}
                    <div className="rounded-md border border-primary-300/35 w-full md:grid grid-cols-2">
                        <div className="bg-primary-500 p-8 flex flex-wrap items-center content-center order-1">
                            <h2 className="text-3xl font-semibold">
                                <span className="gradient-yellow-text font-bold">+ de 150 aulas </span><br />
                                e conteúdos extra
                            </h2>
                            <p>São centenas de horas de material para você avançar de forma consistente na sua jornada com o Fluxo Simplificado.
                            </p>
                        </div>
                        <div className="bg-primary-700 p-8">
                            <motion.div
                                ref={ref8} // Referência para monitorar quando o elemento entra na viewport
                                initial={{ opacity: 0, x: -100 }} // Começa fora da tela à esquerda (x negativo)
                                animate={inView8 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
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
