// src/components/TextBlock.js
import Icons from '@/components/Icons';
import Link from 'next/link';

export default function TextBlockFinal() {
    return (
        <section className="px-8 py-16 text-white bg-primary-900">
            <div className="max-w-3xl mx-auto text-lg md:text-center">
                <h2 className="mb-4 text-2xl font-bold md:text-4xl md:text-center md:text-5xl yellow">Descubra o caminho para o sucesso no mercado financeiro com nossa abordagem comprovada.</h2>
                <p>Desenvolva as habilidades e o conhecimento necessário para se destacar como Trader</p>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl md:text-center">Segue <span className='yellow'>O Fluxo</span></h2>
                <Link href="/indicadores">
                    <button className="group btn-large w-full !text-sm flex items-center justify-center">
                        Quero aprender com vocês <Icons.AngleRight className='w-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                    </button>
                </Link>
            </div>
        </section>
    );
}
