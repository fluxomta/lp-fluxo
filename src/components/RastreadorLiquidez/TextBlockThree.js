// src/components/TextBlockThree.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';

export default function TextBlockThree() {
    return (
        <section className="text-white bg-primary-900">
            <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg ">
                <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">Benefícios Comprovados do <span className='yellow'>QUANTUM LT | O Rastreador de Liquidez</span></h2>
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
                <div className="max-w-4xl px-4 pt-16 mx-auto text-center">
                    <p className="text-xl font-bold md:mb-8 md:text-center md:text-3xl">Invista no seu operacional com tecnologia de informação. Pare de operar no escuro.</p>
                    <p className="mb-6 text-xl font-bold text-center md:text-3xl ">Experimente o <span className='yellow'>QUANTUM LT</span> e transforme
                        suas operações, evitando perdas e maximizando seus lucros.</p>
                    <p className="mb-6 text-2xl font-bold text-center md:text-4xl yellow">Invista em um tradesystem eficiente. </p>
                    <div className="relative z-10 flex justify-center w-full mx-auto">
                        <Link href="/indicadores">
                            <button className="flex items-center justify-center w-full group btn md:btn-large">
                                Comece Agora! <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
