// src/components/BgGlobe.js

export default function BgGlobe() {
    return (
        <section
            className="relative text-white bg-black"
            style={{
                backgroundImage: 'url(/images/bg/bg-cards.webp)',
                backgroundSize: 'auto',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-6xl px-4 py-16 mx-auto md:text-lg ">
                <h2 className="max-w-5xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">O campeão das mesas vai te ensinar a ser um <span className="yellow">mestre no Mercado</span></h2>
                <p className="text-center text-xl font-bold">Entenda definitivamente como o mercado funciona e lucre com isso.</p>
                <div className="md:grid md:grid-cols-3 md:grid-rows-3 gap-4 mt-12">
                    <div className="col-span-1 row-start-1 col-start-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <p><strong>Estudo Objetivo</strong><br /> A técnica começa pela teoria. Aulas objetivas e organizadas por camadas do conhecimento. Você evolui aos poucos e sem pressa.
                        </p>
                    </div>
                    <div className="col-span-1 row-start-2 col-start-3 px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <p><strong>Execução</strong><br /> Aqui você ganha confiança. Usando nosso Fluxo simplificado, você vai treinar cada entrada e estar seguro para executar o trade na conta real.
                        </p>
                    </div>
                    <div className="col-span-1 row-start-3 col-start-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <p><strong>Ganha</strong><br /> Aplicando o método, em pouco tempo você colhe resultados e tem confiança para aumentar suas posições e conquistar seus objetivos no mercado.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
