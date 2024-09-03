// src/components/Parceria.js
import Image from 'next/image';

export default function Parceria() {
    return (
        <section
            className="relative text-white black-gradient">
            <div className="flex flex-col items-center max-w-6xl px-8 py-8 mx-auto">
                <p class="mb-4 text-3xl md:text-4xl text-primary-100">Somos Parceiros</p>
                <Image src="/xpinc.webp" alt="Victor Garcia" className="rounded-md" width={280} height={61} />
            </div>
        </section>
    );
}
