// src/components/TextBlockThree.js

export default function TextBlockThree() {
    return (
        <section className="text-white bg-primary-900">
            <div className="max-w-6xl px-4 py-16 mx-auto md:text-lg ">
                <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">Benefícios Comprovados do <span className='yellow'>LT | O Rastreador de Liquidez</span></h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-500">
                        <p className="font-semibold yellow">Precisão em Topos e Fundos</p>
                        <p>Destaca pontos de liquidez em tempo real, atuando como um GPS para suas operações.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-500">
                        <p className="font-semibold yellow">Simplicidade operacional</p>
                        <p>Permite definir rapidamente as regiões mais importantes dos gráficos, com uma interface intuitiva.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-500">
                        <p className="font-semibold yellow">Versatilidade</p>
                        <p>Funciona em qualquer mercado e ritmo gráfico, oferecendo flexibilidade total nas suas análises.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
