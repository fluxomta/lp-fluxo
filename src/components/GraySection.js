// src/components/GraySection.js
export default function GraySection() {
    return (
        <section className="px-8 py-16 text-black bg-gray-100">
            <div className="container mx-auto mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">
                    Um serviço diferenciado para cada faixa de investimento
                </h2>
                <p className="text-lg text-gray-600">
                    Conheça as vantagens e benefícios exclusivos para cada tipo de conta
                </p>
            </div>

            <div className="container grid grid-cols-1 gap-8 mx-auto mb-12 md:grid-cols-4">
                {/* Cartão de Nível Digital */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="mb-2 text-xl font-semibold">Digital</h3>
                    <p className="mb-4 text-sm text-gray-600">Investimentos até R$ 100 mil</p>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                        <li>Suporte de nossos especialistas pelo chat</li>
                        <li>Carteiras automatizadas feitas por especialistas</li>
                        <li>Isenção em serviços de conta, cartão e seguros</li>
                    </ul>
                </div>

                {/* Cartão de Nível Exclusiva */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="mb-2 text-xl font-semibold">Exclusiva</h3>
                    <p className="mb-4 text-sm text-gray-600">A partir de R$ 100 mil</p>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                        <li>Todos os benefícios do Digital e mais:</li>
                        <li>Atendimento especializado sob demanda</li>
                        <li>Contato direto via WhatsApp e outros canais</li>
                        <li>Alertas exclusivos de oportunidades de investimento</li>
                        <li>Mesa de Seguros dedicada para você</li>
                    </ul>
                </div>

                {/* Cartão de Nível Premium */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="mb-2 text-xl font-semibold">Premium</h3>
                    <p className="mb-4 text-sm text-gray-600">A partir de R$ 300 mil</p>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                        <li>Todos os benefícios da Exclusiva e mais:</li>
                        <li>Assessoria dedicada com a expertise da XP</li>
                        <li>Atendimento presencial, por vídeo chamada e telefone</li>
                        <li>Acesso direto à Mesa de Operações</li>
                        <li>Gerenciamento de risco e blindagem patrimonial</li>
                        <li>Conteúdos e análises feito por especialistas</li>
                        <li>Eventos exclusivos</li>
                    </ul>
                </div>

                {/* Cartão de Nível Unique */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="mb-2 text-xl font-semibold">Unique</h3>
                    <p className="mb-4 text-sm text-gray-600">A partir de R$ 3 milhões</p>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                        <li>Todos os benefícios do Premium e mais:</li>
                        <li>Bankers com certificação CFP</li>
                        <li>Recorrência de reuniões presenciais</li>
                        <li>Banker Offshore Exclusivo</li>
                        <li>Estrutura de Wealth Planning dedicada</li>
                        <li>Planejamento sucessório do seu patrimônio</li>
                        <li>Fundos exclusivos e soluções customizadas</li>
                    </ul>
                </div>
            </div>

            {/* Botão de Chamada para Ação */}
            <div className="text-center">
                <button className="px-6 py-3 font-medium text-black transition bg-yellow-500 rounded-md hover:bg-yellow-600">
                    Abra sua conta
                </button>
            </div>
        </section>
    );
}
