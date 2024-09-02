// src/components/WhiteSection.js
export default function WhiteSection() {
    return (
        <section className="px-8 py-16 text-black bg-white">
            <div className="container mx-auto mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold">
                    Há mais de 20 anos transformando o mercado financeiro para melhorar a vida das pessoas
                </h2>
                <p className="text-lg text-gray-700">
                    Somos referência em diversidade e exclusividade de produtos, imparcialidade, transparência e relacionamento.
                </p>
            </div>

            <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
                {/* Item 1 */}
                <div className="text-center">
                    <img src="/path-to-icon1.png" alt="Pioneiros em assessoria" className="mx-auto mb-4" />
                    <h3 className="mb-2 text-xl font-semibold">Pioneiros em assessoria</h3>
                    <p className="text-gray-700">
                        Com a Assessoria XP, ajudamos as pessoas nas decisões relacionadas aos seus investimentos, sempre de acordo com seus objetivos e perfil.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="text-center">
                    <img src="/path-to-icon2.png" alt="Desafiamos padrões" className="mx-auto mb-4" />
                    <h3 className="mb-2 text-xl font-semibold">Desafiamos padrões</h3>
                    <p className="text-gray-700">
                        Nosso time de tecnologia antecipa tendências do mercado, para tornar a experiência de investir mais simples e acessível para todas as pessoas.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="text-center">
                    <img src="/path-to-icon3.png" alt="Tudo em um lugar" className="mx-auto mb-4" />
                    <h3 className="mb-2 text-xl font-semibold">Tudo em um lugar</h3>
                    <p className="text-gray-700">
                        Serviços financeiros a favor dos seus investimentos. Tudo em um só lugar, para quem investe não depender mais dos bancos convencionais.
                    </p>
                </div>
            </div>
        </section>
    );
}
