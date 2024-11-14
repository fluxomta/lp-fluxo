// src/components/BgGlobe.js

import Link from "next/link";
import Icons from "../Global/Icons";

export default function BgGlobe() {
    return (
        <section
            className="relative text-white bg-black"
        >
            <div className="max-w-6xl px-4 py-16 mx-auto md:text-lg ">
                <h2 className="max-w-5xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">Método <span className="yellow">Fluxo simplificado 3.0</span></h2>
                <p className="text-center text-xl font-bold">Entenda definitivamente como o mercado funciona e lucre com isso.</p>
                <div className="md:grid md:grid-cols-3  gap-4 mt-12">
                    <div className="col-span-1  px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <p><strong>Estudo Objetivo</strong><br /> A técnica começa pela teoria. Aulas objetivas e organizadas por camadas do conhecimento. Você evolui aos poucos e sem pressa.
                        </p>
                    </div>
                    <div className="col-span-1   px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <p><strong>Execução</strong><br /> Aqui você ganha confiança. Usando nosso Fluxo simplificado, você vai treinar cada entrada e estar seguro para executar o trade na conta real.
                        </p>
                    </div>
                    <div className="col-span-1   px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <p><strong>Ganha</strong><br /> Aplicando o método, em pouco tempo você colhe resultados e tem confiança para aumentar suas posições e conquistar seus objetivos no mercado.
                        </p>
                    </div>
                </div>
                <div className="relative z-10 flex mx-auto text-center items-center justify-center mt-8">
                    <Link href="/mentoria">
                        <button className="flex items-center justify-center w-full group btn md:btn-large">
                            Conheça mais sobre a Mentoria <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
