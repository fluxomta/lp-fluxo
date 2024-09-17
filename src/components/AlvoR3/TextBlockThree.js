// src/components/TextBlockThree.js
import Link from 'next/link';
import Icons from '@/components/Global/Icons';

export default function TextBlockThree() {
    return (
        <section className="text-white bg-primary-900">
            <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg ">
                <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">Benefícios Comprovados do <span className='yellow'>Rastreador de Alvos - Alvo R3</span></h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-500">
                        <p className="font-semibold yellow">Precisão em Topos e Fundos</p>
                        <p>Identifique com exatidão o estágio do movimento de preço, ajudando a maximizar seus ganhos.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-500">
                        <p className="font-semibold yellow">Flexibilidade Operacional</p>
                        <p>Funciona em diversos tempos gráficos e ativos, adaptando-se às suas necessidades.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-500">
                        <p className="font-semibold yellow">Simplicidade e Integração</p>
                        <p>Fácil de usar e potencializa resultados quando combinado com outros algoritmos da família Fluxo.</p>
                    </div>
                </div>
                <div className="max-w-6xl px-4 pt-16 mx-auto text-center">
                    <p className="text-xl font-bold md:mb-8 md:text-center md:text-3xl">Invista no seu operacional com tecnologia de informação. Pare de operar no escuro.</p>
                    <p className="mb-6 text-xl font-bold text-center md:text-3xl">Experimente o <span className='yellow'>Alvo R3</span> e transforme
                        suas operações, evitando perdas e maximizando seus lucros.</p>
                    <p className="mb-6 text-2xl font-bold text-center md:text-4xl ">Invista em um tradesystem eficiente. </p>
                    <div className="relative z-10 flex justify-center w-full mx-auto">
                        <Link href="#assine">
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
