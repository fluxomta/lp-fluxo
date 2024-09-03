// src/components/Solucoes.js

import SimpleCardGrid from './SimpleCardGrid';

export default function Solucoes() {
    return (
        <section
            className="relative text-white bg-primary-900"
            style={{
                backgroundImage: 'url(/images/bg/bg-01.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-80 bg-primary-700'></div>
            <div className="flex flex-col justify-between h-full max-w-6xl px-4 py-16 mx-auto md:px-8">
                <div className="relative z-10 flex items-center ">
                    <div className="w-full">
                        <h2 className="mb-4 text-3xl font-bold text-center md:text-5xl">
                            Conheça nossas soluções <span className='yellow'>operacionais</span>
                        </h2>
                    </div>
                </div>
                <div className="relative z-10 ">
                    <SimpleCardGrid />
                </div>

            </div>
        </section>
    );
}
