"use client"; // Adiciona esta linha

import { useState } from 'react';

const faqData = [
    {
        question: "Terei quanto tempo de acesso ao indicador.",
        answer: "O ciclo de faturamento do indicador é contado do primeiro dia até o dia final do mês, você sempre vai pagar proporcional a quantos dias faltam para acabar o mês e terá esse tempo de acesso.Por exemplo, se pagar no dia 10, você paga o proporcional e o indicador funciona até o último dia do mês atual.",
    },
    {
        question: "Quais as formas de pagamento?",
        answer: "Cartão, ou PIX via atendimento Whatsapp",
    },
    {
        question: "Para quem são os indicadores?",
        answer: "Para todos aqueles que querem avançar no mercado tendo a sua disposição ferramentas que realmente geram resultados.",
    },
    {
        question: "E se eu comprar e não for pra mim?",
        answer: "Você tem 7 dias garantidos por lei para o arrependimento da compra.",
    },
    {
        question: "E se eu quiser fazer a mentoria MTA, tenho desconto?",
        answer: "Sim, os assinantes dos indicadores tem desconto na assinatura dos nossos planos de mentoria, chame no Whatsapp e solicite seu cupom.",
    },
];

export default function FAQAccordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Fecha a questão se clicar novamente
        } else {
            setActiveIndex(index); // Abre a questão clicada
        }
    };

    return (
        <section className="text-white bg-primary-900">
            <div className="container px-8 py-16 mx-auto ">
                <h2 className="mb-8 text-3xl font-bold">
                    <span className="text-yellow-400">?</span> Ficou com alguma dúvida?
                </h2>

                {faqData.map((item, index) => (
                    <div key={index} className="border-b border-gray-700">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="flex items-center justify-between w-full py-4 text-left"
                        >
                            <span className="text-lg">{item.question}</span>
                            <span>{activeIndex === index ? '▲' : '▼'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="pb-4 pl-4 text-gray-400">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
