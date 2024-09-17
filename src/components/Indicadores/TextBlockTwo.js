// src/components/Indicadores/TextBlockTwo.js
'use client';
import Link from 'next/link';
import Icons from '@/components/Global/Icons';

export default function TextBlockTwo() {
    return (
        <section className="text-white bg-black border-y border-secondary-700">
            <div className="max-w-6xl px-8 py-12 mx-auto text-lg ms:px-4 md:text-center">
                <p className="mb-4 text-2xl font-bold md:text-3xl md:text-center">Não perca mais tempo e dinheiro com ferramentas ineficazes.</p>
                <p className="mb-4 text-2xl md:text-2xl md:text-center ">Experimente nossos indicadores e transforme sua abordagem <br className="hidden md:block" /> no mercado financeiro <span className='font-semibold yellow'>por menos de R$3 por dia?</span></p>
                <p className="mb-4 text-2xl md:text-3xl md:text-center yellow">Invista em tecnologia e inteligência na informação.</p>
                <p className="mb-4 text-2xl font-bold md:text-3xl md:text-center yellow">Comece Agora!</p>

                <Link href="#assine">
                    <button className="flex items-center justify-center group btn-dark-large !text-left w-full">
                        Conheça o SpeedFlow <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                    </button>
                </Link>

            </div>
        </section>
    );
}
