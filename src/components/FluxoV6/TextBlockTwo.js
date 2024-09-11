// src/components/TextBlock.js

import Icons from "../Global/Icons";

export default function TextBlockTwo() {
    return (
        <section className="text-white bg-primary-500">
            <div className="max-w-6xl px-4 py-16 mx-auto md:text-lg ">
                <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">E como funciona na <span className="yellow">prática?</span></h2>
                <p className="max-w-6xl mx-auto font-semibold text-center">O <span className="font-bold yellow">Fluxo V6 - O Rastreador de Fluxo</span> utiliza cores para indicar a intensidade do fluxo:</p>
                {/* Bandas */}
                <div className="grid max-w-6xl md:grid-cols-2 gap-4 mx-auto">
                    <div className="px-4 py-8 overflow-hidden rounded-md bg-primary-700 border border-primary-400/50">
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold yellow">Cores Fortes: </span>
                            <span>Indicam um fluxo intenso e uma forte intenção dos compradores ou vendedores.</span>
                        </div>
                    </div>
                    <div className="px-4 py-8 overflow-hidden rounded-md bg-primary-700 border border-primary-400/50">
                        <div className="flex flex-col ">
                            <span className="text-lg font-semibold yellow">Cores Fracas: </span>
                            <span>Indicam um fluxo mais fraco, sugerindo tentativas de movimento sem força suficiente para sustentá-lo.</span>
                        </div>
                    </div>
                    <div className="px-4 py-8 overflow-hidden rounded-md bg-primary-700 border border-primary-400/50 ">
                        <div className="flex flex-col ">
                            <span className="text-lg font-semibold yellow">Região de Ancoragem (RDA):</span>
                            <span>Indica a montagem de posição dos players é uma região de Oferta e demanda que será obedecida como grande suporte ou resistência.</span>
                        </div>
                    </div>
                    <div className="px-4 py-8 overflow-hidden rounded-md bg-primary-700 border border-primary-400/50 ">
                        <div className="flex flex-col ">
                            <span className="text-lg font-semibold yellow">Ponto de Decisão (PD):</span>
                            <span>Região onde os institucionais tomam decisões importantes para inicio ou continuidade de movimentos.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
