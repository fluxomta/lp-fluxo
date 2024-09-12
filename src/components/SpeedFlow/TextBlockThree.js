// src/components/TextBlockThree.js
import Image from 'next/image';

export default function TextBlockThree() {
    return (
        <section className="text-white bg-primary-900">
            <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg ">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-3xl font-bold md:-mb-1 md:text-center md:text-4xl">Agora  que você já entendeu o método </p>
                    <p className="text-4xl font-bold md:mb-2 md:text-center md:text-4xl">SpeedFlow, está na hora de decidir o seu plano.</p>

                    <p className="mb-6 text-3xl font-base text-center md:text-3xl ">Experimente o <span className="yellow font-bold">SpeedFlow</span> e transforme
                        suas operações, evitando perdas e maximizando seus lucros.</p>
                    <p className="mb-6 text-3xl font-bold text-center md:text-4xl yellow">Invista em um tradesystem eficiente. </p>
                    <p className="mb-6 text-3xl font-bold text-center md:text-4xl yellow">Comece agora com </p>
                    <Image src="/speedflow.webp" alt="Logo" width={380} height={102} className=' relative  mx-auto py-2 px-6 rounded-lg shadow-md  z-10' />
                </div>
            </div>
        </section>
    );
}
