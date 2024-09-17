import Image from 'next/image';
import Link from 'next/link';
import Icons from './Icons';

export default function Footer() {
    return (
        <>
            <div className='px-4 py-12 bg-primary-600 text-white'>
                <div className='max-w-6xl mx-auto flex flex-col items-center'>
                    <h3 className='font-bold text-2xl text-center w-full'>Ficou com qualquer dúvida, entre em contato!</h3>
                    <div className='rounded-full bg-[#0B6056] text-white p-2 mt-8 scale-95 hover:scale-105 transition-all duration-300'>
                        <Link className="flex gap-2 items-center font-semibold" href="https://wa.me/5555418433088?text=Ol%C3%A1%2C+Estou+com+duvidas+sobre+o+Fluxo+MTA">
                            <Icons.Whatsapp className="w-8 text-white" /> Precisa de Ajuda?
                        </Link>
                    </div>
                </div>
            </div>
            <footer className="relative py-6 text-white bg-primary-500">

                {/* Precisa de Ajuda? */}
                <div className='rounded-full bg-[#0B6056] text-white p-2 fixed right-0 m-8 bottom-10 z-30 scale-95 hover:scale-105 transition-all duration-300'>
                    <Link className="flex gap-2 items-center font-semibold" href="https://wa.me/5555418433088?text=Ol%C3%A1%2C+Estou+com+duvidas+sobre+o+Fluxo+MTA">
                        <Icons.Whatsapp className="w-8 text-white" /> Precisa de Ajuda?
                    </Link>
                </div>
                <div className="flex flex-col max-w-6xl px-4 mx-auto space-y-4 md:items-center">
                    {/* Links de navegação */}
                    <div className="flex flex-col items-start text-sm font-medium md:flex-row md:space-x-6">
                        <Link href="/suporte" className="py-2 hover:underline">
                            Suporte
                        </Link>
                        <Link href="/privacidade" className="py-2 hover:underline">
                            Política de Privacidade
                        </Link>
                        <Link href="/termos" className="py-2 hover:underline">
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
