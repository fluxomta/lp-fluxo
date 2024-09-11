// src/components/TextBlock.js

import Icons from "../Global/Icons";

export default function TextBlockTwo() {
    return (
        <section className="text-white bg-primary-500">
            <div className="max-w-6xl px-4 py-16 mx-auto md:text-lg ">
                <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">E como funciona na <span className="yellow">prática?</span></h2>
                <p className="max-w-6xl mx-auto font-semibold text-center">O <span className="font-bold yellow">Rastreador de Alvos - Alvo R3</span> utiliza cinco bandas para analisar os movimentos dos ativos.</p>
                <p className="max-w-6xl mx-auto text-center">Em nossa bolsa, os ativos normalmente alcançam, no máximo, a terceira banda,
                    com exceções em eventos extraordinários, como o crash de 2020. Em criptomoedas, é comum alcançar bandas superiores devido à alta volatilidade.</p>
                {/* Bandas */}
                <div className="grid max-w-6xl md:grid-cols-2 gap-4 mx-auto">
                    <div className="px-4 py-8 overflow-hidden rounded-md bg-primary-700 border border-primary-400/50">
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold yellow">Bandas Extremas e Regiões Centrais: </span>
                            <span>Quando o preço atinge as bandas extremas, ele tende a retornar para a região central – a média do preço – devido a fatores como volatilidade e ações de HFT (High-Frequency Trading).</span>
                        </div>
                    </div>
                    <div className="px-4 py-8 overflow-hidden rounded-md bg-primary-700 border border-primary-400/50">
                        <div className="flex flex-col ">
                            <span className="text-lg font-semibold yellow">Média Ponderada: </span>
                            <span>Incluímos uma média ponderada de 200, mas você pode escolher a média que preferir. Isso oferece uma camada adicional de personalização para suas operações.</span>
                        </div>
                    </div>
                    <div className="px-4 py-8 overflow-hidden rounded-md bg-primary-700 border border-primary-400/50 ">
                        <div className="flex flex-col ">
                            <span className="text-lg font-semibold yellow">Alta Frequência e Volatilidade:</span>
                            <span>Muitos HFTs operam exclusivamente com base na volatilidade, expulsando o preço das regiões extremas e retornando à região central. Nosso algoritmo considera esses fatores para fornecer uma análise mais robusta.</span>
                        </div>
                    </div>
                    <div className="px-4 py-8 overflow-hidden rounded-md bg-primary-700 border border-primary-400/50 ">
                        <div className="flex flex-col ">
                            <span className="text-lg font-semibold yellow">Contextualização de Trades:</span>
                            <span>O Rastreador de Alvos contextualiza seu trade, garantindo que você opere com maior segurança, especialmente nas regiões extremas onde a capacidade do preço de se mover é reduzida.</span>
                        </div>
                    </div>
                </div>
                <p className="max-w-3xl mx-auto text-center !mb-0">Essa simbologia permite que você entenda rapidamente a força dos pontos de liquidez e ajuste suas operações de acordo.</p>
            </div>
        </section>
    );
}
