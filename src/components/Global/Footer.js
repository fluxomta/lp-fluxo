import Image from 'next/image';
import Link from 'next/link';
import Icons from './Icons';
import SuporteBox from './SuporteBox';

export default function Footer() {
    return (
        <>
            <SuporteBox />
            <footer className="relative py-6 text-white bg-primary-500">
                <div className="flex flex-col max-w-6xl px-4 mx-auto space-y-4 md:items-center">
                    {/* Links de navegação */}
                    <div className="flex flex-col items-start text-sm font-medium md:flex-row md:space-x-6">
                        <Link href="/suporte" className="py-2 hover:underline">
                            Suporte
                        </Link>
                        <Link href="/politica-de-privacidade" className="py-2 hover:underline">
                            Política de Privacidade
                        </Link>
                        <Link href="/termos-de-uso" className="py-2 hover:underline">
                            Termos de Uso
                        </Link>
                    </div>

                    {/* Logo */}
                    <div>
                        <Image src="/fluxomta.webp" alt="Logo" width={130} height={29} className="cursor-pointer" />
                    </div>

                    {/* Informações da empresa */}
                    <div className="text-sm md:text-center">
                        GARCIA CONSULTORIA FINANCEIRA E TREINAMENTOS LTDA / CNPJ: 39.484.899/0001-09
                    </div>
                </div>
            </footer>
        </>
    );
}
