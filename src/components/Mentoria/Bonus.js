// src/components/Bonus.js
import Image from "next/image";

export default function Bonus() {
    return (
        <section className="relative text-white bg-black">
            <div className="max-w-6xl px-4 py-16 mx-auto md:text-lg">
                <h2 className="max-w-5xl mx-auto mb-4 text-2xl font-bold md:mb-8 text-center md:text-5xl"><span className="yellow">Bônus Exclusivos</span> da Mentoria</h2>
                <p className="md:text-center text-xl">Aproveite o suporte e as vantagens essenciais para o sucesso!</p>

                <div className="md:grid md:grid-cols-2 gap-8 mt-12">
                    <div className="relative col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4 border border-primary-500 group">
                        <p className="yellow uppercase font-bold text-2xl">12 meses de Acesso ao MacroFlow</p>
                        <p><b>Economize R$1.668 com 1 ano de acesso</b> à nossa ferramenta premium de análise macroeconômica, fundamental para antecipar grandes movimentos de mercado.</p>
                        <Image src="/images/icons/gift.webp" className="scale-75 md:scale-90 absolute -right-2 -bottom-3 group-hover:scale-110 transition-all duration-200" width={100} height={100} />
                    </div>
                    <div className="relative col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4 border border-primary-500 group">
                        <p className="yellow uppercase font-bold text-2xl">2 meses de Acesso a todos os 15 Indicadores Exclusivos</p>
                        <p><b>Economize R$300 e tenha à disposição as ferramentas</b> que os traders de elite usam para identificar as melhores oportunidades de entrada e saída no mercado.</p>
                        <Image src="/images/icons/gift.webp" className="scale-75 md:scale-90 absolute -right-2 -bottom-3 group-hover:scale-110 transition-all duration-200" width={100} height={100} />
                    </div>
                    <div className="relative col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4 border border-primary-500 group">
                        <p className="yellow uppercase font-bold text-2xl">Curso Análise Técnica Express</p>
                        <p>Um curso completo e direto ao ponto!<br />
                            <b>Domine as técnicas essenciais da Análise Técnica </b>
                            para operar com confiança e precisão no
                            mercado financeiro.</p>
                        <Image src="/images/icons/gift.webp" className="scale-75 md:scale-90 absolute -right-2 -bottom-3 group-hover:scale-110 transition-all duration-200" width={100} height={100} />
                    </div>
                    <div className="relative col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4 border border-primary-500 group">
                        <p className="yellow uppercase font-bold text-2xl">Método Dólar Turbo </p>
                        <p>Descubra um <b>setup simples e extremamente eficaz para operar o dólar</b>. Estratégia prática, de fácil execução, que garante resultados rápidos.</p>
                        <Image src="/images/icons/gift.webp" className="scale-75 md:scale-90 absolute -right-2 -bottom-3 group-hover:scale-110 transition-all duration-200" width={100} height={100} />
                    </div>
                    <div className="relative col-span-2 px-6 py-4 rounded-md bg-primary-700/75 mb-4 border border-primary-500 group">
                        <p className="yellow uppercase font-bold text-2xl">Método Mesa Fácil </p>
                        <p>O único <b>método no Brasil desenvolvido para te ajudar a ser aprovado em uma mesa proprietária!</b> Inclui um indicador exclusivo, regra de coloração personalizada e gestão específica, além de suporte contínuo. Tudo que você precisa para simplificar seu caminho para o sucesso.</p>
                        <Image src="/images/icons/gift.webp" className="scale-75 md:scale-90 absolute -right-2 -bottom-3 group-hover:scale-110 transition-all duration-200" width={100} height={100} />
                    </div>
                </div>

            </div>
        </section >
    );
}
