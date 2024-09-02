// src/components/TextBlock.js

export default function TextBlockTwo() {
    return (
        <section className="px-8 py-16 text-white bg-primary-500">
            <div className="max-w-6xl mx-auto md:text-lg">
                <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">Fluxo MTA é o melhor <span className='yellow'>caminho porque:</span></h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-700">
                        <p>Você terá a <strong>formação completa com cursos e mentorias</strong> para o seu momento do mercado, detalhados para traders de todos os níveis desenvolvidos por especialistas no mercado.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-700">
                        <p>Você terá <strong>indicadores essenciais para seu Trade</strong>. Acesse ferramentas exclusivas para análise de mercado para melhorar suas decisões de investimento.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-700">
                        <p>Você terá <strong>networking profissional aqui no Fluxo MTA</strong>. Participe de uma comunidade ativa de traders com conexão a uma rede de traders comprometidos em compartilhar conhecimento e experiências.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
