// src/components/Indicadores/FormInscricao.js
import Link from "next/link";
import Icons from "@/components/Global/Icons";

export default function FormInscricao() {
    return (
        <section
            className="relative text-white bg-primary-500">
            <div className="max-w-7xl px-4 py-12 mx-auto md:text-center">
                <p className="mb-6 text-2xl font-bold text-center md:text-3xl ">Assine agora mesmo o SpeedFlow e <span className="yellow block">receba gratuito o meu Curso de Fluxo!</span></p>

                <div className='w-full p-8 border rounded-md border-secondary-700 bg-primary-700 text-white'>

                </div>
                <div className="relative z-10 flex items-center justify-center mx-auto mt-8">
                    <Link href="/lps/">
                        <button className="flex items-center justify-center w-full group btn md:btn-large">
                            Quero Agora Mesmo <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
