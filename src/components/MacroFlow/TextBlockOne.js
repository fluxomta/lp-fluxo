// src/components/TextBlockOne.js

export default function TextBlockOne() {
    return (
        <section className="text-white bg-primary-900">
            <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg ">
                <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">Benefícios Comprovados do <span className='yellow'>MasterFlow</span></h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-500">
                        <p className="font-semibold yellow">Um Sistema Completo</p>
                        <p>MacroFlow é formado por ferramentas poderosas que te mostram o fluxo  real do mercado.  Você vai estar sempre no controle.
                        </p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-500">
                        <p className="font-semibold yellow">Opere com Confiança</p>
                        <p>Elimine a necessidade de outras plataformas— tudo o que você precisa para entender o mercado está no MacroFlow.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-500">
                        <p className="font-semibold yellow">Maximize Seus Lucros</p>
                        <p>Opere como um Sniper, escolhendo apenas os trades de alta probabilidade e baixo risco</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
