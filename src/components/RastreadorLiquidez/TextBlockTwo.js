// src/components/TextBlock.js

import Icons from "../Global/Icons";

export default function TextBlockTwo() {
    return (
        <section className="text-white bg-primary-500">
            <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg">
                <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">E como funciona na <span className="yellow">prática?</span></h2>
                <p className="max-w-3xl mx-auto text-center">O <span className="font-semibold yellow">LT identifica pontos de liquidez relevantes no gráfico,</span> destacando topos e fundos que são cruciais para suas operações.</p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-900">
                        <p className="font-semibold yellow">Jogo da Velha Verde ou Vermelho</p>
                        <p>Indica topos e fundos muito fortes.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-900">
                        <p className="font-semibold yellow">Asterisco Verde ou Vermelho</p>
                        <p>Indica topos e fundos fortes.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-900">
                        <p className="font-semibold yellow">Asterisco Amarelo</p>
                        <p>Indica topos e fundos fracos, que tendem a ser violados.</p>
                    </div>
                </div>

                <p className="max-w-3xl mx-auto text-center">Essa simbologia permite que você entenda rapidamente a força dos pontos de liquidez e ajuste suas operações de acordo.</p>
            </div>
        </section>
    );
}
