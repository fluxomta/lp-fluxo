// src/components/TextBlock.js
import Icons from '@/components/Global/Icons';
import Link from 'next/link';

export default function TextBlockFinal() {
    return (
        <section className="text-white bg-primary-900">
            <div className="max-w-5xl px-8 py-16 mx-auto text-lg md:text-center">
                <h2 className="mb-8 text-2xl font-semibold md:text-4xl md:text-center">Descubra o <span className='yellow'>caminho para o sucesso no mercado financeiro</span> com nossa abordagem comprovada.</h2>
                <h2 className='mb-8 text-2xl font-semibold md:text-4xl md:text-center'>Desenvolva as habilidades e o conhecimento necessário para se destacar como <span className='yellow'>Trader</span></h2>
                <h2 className="mb-8 text-2xl font-bold md:text-5xl md:text-center">Segue <span className='yellow'>O Fluxo</span></h2>
                <Link href="/indicadores">
                    <button className="flex items-center justify-center mx-auto group btn-large">
                        Quero aprender com vocês <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                    </button>
                </Link>
            </div>
        </section>
    );
}
