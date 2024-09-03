"use client"; // Adiciona esta linha

import { useState } from 'react';

const faqData = [
    {
        question: "Como abrir uma conta na XP Investimentos?",
        answer: "Para abrir uma conta na XP Investimentos, você deve acessar o site oficial e seguir o passo a passo do formulário de abertura de conta.",
    },
    {
        question: "Como funciona a assessoria na XP?",
        answer: "A assessoria na XP oferece suporte personalizado para seus investimentos, ajudando a escolher as melhores opções de acordo com seu perfil e objetivos.",
    },
    {
        question: "Como entrar em contato com a XP?",
        answer: "Você pode entrar em contato com a XP através do telefone, email, ou pelo chat disponível no site oficial.",
    },
    {
        question: "Quanto custa para investir na XP?",
        answer: "Os custos para investir na XP variam de acordo com o tipo de investimento escolhido. Consulte o site para mais detalhes sobre as taxas e custos envolvidos.",
    },
    {
        question: "O que é a XP Inc.?",
        answer: "A XP Inc. é a holding que controla diversas empresas de serviços financeiros, incluindo a XP Investimentos, e atua no mercado financeiro oferecendo uma ampla gama de produtos e serviços.",
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
