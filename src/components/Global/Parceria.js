// src/components/Indicadores/Parceria.js
import Image from 'next/image';

export default function Parceria() {
    return (
        <section
            className="relative text-white black-gradient">
            <div className="flex justify-center items-center max-w-6xl px-8 py-8 mx-auto">
                <p className="text-2xl md:text-4xl text-white mb-0 font-semibold mt-0">Parceiro</p>
                <Image src="/logo-xp.webp" alt="Xp Investimentos" className="w-auto h-12 ml-4 rounded-md " width={280} height={61} />
            </div>
        </section>
    );
}
