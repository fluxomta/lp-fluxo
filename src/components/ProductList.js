// src/components/ProductList.js
import Link from 'next/link';

export default function ProductList() {
    return (
        <section className="px-8 py-16 text-white bg-black">
            <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2">
                {/* Cartão de Produto 1 */}
                <div className="overflow-hidden bg-gray-900 rounded-lg shadow-lg">
                    <div className="relative">
                        <img
                            src="/path-to-image1.jpg"
                            alt="XP Empresas"
                            className="w-full"
                        />
                        {/* Texto sobre imagem */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="mb-2 text-xl font-bold">XP Empresas</h3>
                        <p className="mb-4 text-sm">
                            Soluções financeiras completas para o perfil e momento da sua empresa.
                        </p>
                        <Link href="/empresas">
                            <span className="text-sm font-medium text-yellow-400 hover:text-yellow-300">
                                Abrir conta empresa &rarr;
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Cartão de Produto 2 */}
                <div className="overflow-hidden bg-gray-900 rounded-lg shadow-lg">
                    <div className="relative">
                        <img
                            src="/path-to-image2.jpg"
                            alt="Fator XP"
                            className="w-full"
                        />
                        {/* Texto sobre imagem */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="mb-2 text-xl font-bold">Fator XP</h3>
                        <p className="mb-4 text-sm">
                            O fator que só a melhor assessoria de investimentos pode oferecer para você.
                        </p>
                        <Link href="/fator-xp">
                            <span className="text-sm font-medium text-yellow-400 hover:text-yellow-300">
                                Conheça o Fator XP &rarr;
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
