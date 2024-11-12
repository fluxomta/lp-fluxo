// src/components/BgGlobe.js
import Image from "next/image";

export default function BgGlobe() {
    return (
        <section className="relative text-white bg-black">
            <div className="max-w-6xl px-4 py-16 mx-auto md:text-lg">
                <h2 className="max-w-5xl mx-auto mb-4 text-2xl font-bold md:mb-8 md:text-center md:text-5xl">Entenda como o <span className="yellow">mercado</span> realmente funciona</h2>
                <p className="md:text-center text-xl">Eu criei uma <span className=" font-bold">mentoria estruturada em uma estratégia única e exclusiva</span>, para você ter resultados de verdade!</p>

                <div className="md:grid md:grid-cols-3 gap-4 mt-12">
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <Image src="/images/icons/line-chart.gif" className="mx-auto bg-white p-2 rounded-md" alt="Sistema Exclusivo de Daytrade e SwingTrade" width={100} height={100} />
                        <p className="yellow uppercase text-center font-bold">Sistema Exclusivo de Daytrade e SwingTrade</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <Image src="/images/icons/stock-market.gif" className="mx-auto bg-white p-2 rounded-md" alt="Única Metodologia no Brasil com Backtesting" width={100} height={100} />

                        <p className="yellow uppercase text-center font-bold">Única Metodologia no Brasil com Backtesting</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <Image src="/images/icons/chat.gif" className="mx-auto bg-white p-2 rounded-md" alt="Sala Vip com profissionais do Mercado" width={100} height={100} />
                        <p className="yellow uppercase text- font-bold text-center">Sala Vip com profissionais do Mercado</p>
                    </div>
                </div>

                <p className="text-center text-xl">O problema do mercado não é você e sim o seu sistema de operações.<br />
                    O <strong>fluxo simplificado além de um sistema que funciona e impressiona</strong>, tem muitos testes e resultados para comprovar a eficácia.</p>

                <div className="md:grid md:grid-cols-3 gap-4 mt-12">
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <p className="yellow uppercase text-center font-bold">comece a ganhar de verdade</p>
                        <p className="text-center"> Chega de ganhar pouco e perder muito, o Fluxo vai colocar dinheiro no seu bolso com o mercado financeiro.</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <p className="yellow uppercase text-center font-bold">você operando como um profissional</p>
                        <p className="text-center"> Não vamos ficar na promessa, nossa missão é te levar ao próximo nível, preparado para avançar?</p>
                    </div>
                    <div className="col-span-1 px-6 py-4 rounded-md bg-primary-700/75 mb-4">
                        <p className="yellow uppercase text- font-bold text-center">chega de sentir ansiedade<br /><br /></p>
                        <p className="text-center">Com um sistema completo e profissionais ao seu lado, operar não vai mais ser uma dificuldade.</p>
                    </div>
                </div>

            </div>
        </section >
    );
}
