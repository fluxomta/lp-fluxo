// src/components/RastreadorLiquidez/ZDSection.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';
import VimeoPlayer from '@/components/Global/VideoPlayer';

export default function ZDSection() {
    return (
        <section
            className="relative h-auto text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-02.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-50 bg-primary-500'></div>
            <div className="flex flex-col justify-between h-full max-w-6xl px-4 py-16 mx-auto">
                <div className="relative z-10 flex items-center ">
                    <div className="w-full">
                        <p className="text-3xl font-bold text-center md:text-5xl ">
                            Assinando o LT | O Rastreador de Liquidez
                        </p>
                        <h2 className="mb-6 text-3xl font-bold text-center md:text-5xl yellow">
                            receba de bônus o Indicador ZD
                        </h2>
                        <p className="text-lg md:text-2xl md:text-center">
                            <strong>O Indicador ZD (Zonas de Decisão) é exclusivo para Índice e Dólar</strong>, ele mostra com precisão as regiões mais importantes do mercado.
                        </p>
                        <p className="!-mb-4 text-lg font-semibold md:text-2xl md:text-center yellow">
                            Dúvida nas entradas e saídas?
                        </p>
                        <p className="text-lg md:text-2xl md:text-center">
                            O ZD vai ser seu aliado, o indicador conta com uma taxa de 89% de acerto.
                        </p>
                        <p className="text-lg md:text-2xl md:text-center">É um dos indicadores mais utilizados pelos meus alunos de Day Trade, aumentando de forma considerável suas performances e vou <strong className='yellow'>te oferecer como bônus na assinatura de qualquer indicador do MTA</strong>.</p>

                    </div>
                </div>

                <div className="w-full max-w-3xl p-1 mx-auto ">
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
        </section>
    );
}
