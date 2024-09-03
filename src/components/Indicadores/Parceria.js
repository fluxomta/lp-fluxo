// src/components/Indicadores/Parceria.js
import Image from 'next/image';

export default function Parceria() {
    return (
        <section
            className="relative text-white black-gradient">
            <div className="flex flex-col items-center max-w-6xl px-8 py-8 mx-auto">
                <p class="mb-4 text-2xl md:text-4xl text-primary-100 mt-0">Somos Parceiros</p>
                <Image src="/xpinc.webp" alt="Victor Garcia" className="w-auto h-12 rounded-md " width={280} height={61} />
            </div>
        </section>
    );
}
