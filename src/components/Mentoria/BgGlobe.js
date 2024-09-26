// src/components/BgGlobe.js
import Image from 'next/image';

export default function BgGlobe() {
    return (
        <section
            className="relative h-auto text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-05.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg h-[1000px] relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[521px] ">
                    <div className="animate-spin">
                        <Image src="/images/bg/circle.png" alt="Logo" width={521} height={521} />

                    </div>
                </div>
            </div>
        </section >
    );
}
