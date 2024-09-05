// src/components/TextBlock.js

import Icons from "../Global/Icons";

export default function TextBlockTwo() {
    return (
        <section className="text-white bg-primary-500">
            <div className="max-w-6xl px-4 py-16 mx-auto md:text-lg ">
                <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">E como funciona na <span className="yellow">prática?</span></h2>
                <p className="max-w-3xl mx-auto text-center">O <span className="font-semibold yellow">LT identifica pontos de liquidez relevantes no gráfico,</span> destacando topos e fundos que são cruciais para suas operações.</p>
                <div className="grid max-w-3xl grid-cols-1 gap-4 mx-auto">
                    <div className="px-4 py-8 overflow-hidden text-center rounded-md bg-primary-700">
                        <div className="flex flex-col ">
                            <Icons.Hashtag className='w-8 mx-auto yellow opacity-20' />
                            <span className="text-lg font-semibold yellow">Jogo da Velha Verde ou Vermelho: </span>
                            <span>Indica topos e fundos muito fortes.</span>
                        </div>
                    </div>
                    <div className="px-4 py-8 overflow-hidden text-center rounded-md bg-primary-700">
                        <div className="flex flex-col ">
                            <Icons.Asterisco className='w-8 mx-auto yellow opacity-20' />
                            <span className="text-lg font-semibold yellow">Asterisco Verde ou Vermelho: </span>
                            <span className="">Indica topos e fundos fortes.</span>
                        </div>
                    </div>
                    <div className="px-4 py-8 overflow-hidden text-center rounded-md bg-primary-700">
                        <div className="flex flex-col ">
                            <Icons.Asterisco className='w-8 mx-auto yellow opacity-20' />
                            <span className="text-lg font-semibold yellow">Asterisco Amarelo:
                            </span>
                            <span> Indica topos e fundos fracos, que tendem a ser violados.</span>
                        </div>
                    </div>
                </div>
                <p className="max-w-3xl mx-auto -mb-8 text-center">Essa simbologia permite que você entenda rapidamente a força dos pontos de liquidez e ajuste suas operações de acordo.</p>
            </div>
        </section>
    );
}
