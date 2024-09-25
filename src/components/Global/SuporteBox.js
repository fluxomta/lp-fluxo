"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Icons from './Icons';

export default function SuporteBox() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const isLps = pathname.startsWith('/lps/');

    if (isLps) return null;

    return (
        <>
            {isHome ? (
                <>
                    <div id="home-box" className='px-4 py-12 bg-primary-600 text-white'>
                        <div className='max-w-6xl mx-auto flex flex-col items-center'>
                            <h3 className='font-bold text-2xl text-center w-full'>Pronto para dar o próximo passo?</h3>
                            <p className='text-lg'>Fale diretamente com um dos nossos atendentes pelo whatsapp</p>
                            <div className='rounded-full bg-[#0B6056] text-white p-2 mt-2 scale-95 hover:scale-105 transition-all duration-300'>
                                <Link className="flex gap-2 items-center font-semibold" href="https://wa.me/55554196578795?text=Ol%C3%A1%2C+Estou+com+duvidas+sobre+o+Fluxo+MTA">
                                    <Icons.Whatsapp className="w-8 text-white" /> Precisa de Ajuda?
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="whatsapp" className='hidden md:block rounded-full bg-[#0B6056] text-white p-2 fixed right-0 m-8 bottom-10 z-30 scale-95 hover:scale-105 transition-all duration-300'>
                        <Link className="flex gap-2 items-center font-semibold" href="https://wa.me/55554196578795?text=Ol%C3%A1%2C+Estou+com+duvidas+sobre+o+Fluxo+MTA">
                            <Icons.Whatsapp className="w-8 text-white" /> Precisa de Ajuda?
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div id="suporte-box" className='px-4 py-12 bg-primary-600 text-white'>
                        <div className='max-w-6xl mx-auto flex flex-col items-center'>
                            <h3 className='font-bold text-2xl text-center w-full'>Ficou com qualquer dúvida, entre em contato!</h3>
                            <div className='rounded-full bg-[#0B6056] text-white p-2 mt-8 scale-95 hover:scale-105 transition-all duration-300'>
                                <Link className="flex gap-2 items-center font-semibold" href="https://wa.me/55554196578795?text=Ol%C3%A1%2C+Estou+com+duvidas+sobre+o+Fluxo+MTA">
                                    <Icons.Whatsapp className="w-8 text-white" /> Precisa de Ajuda?
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="whatsapp" className='hidden md:block rounded-full bg-[#0B6056] text-white p-2 fixed right-0 m-8 bottom-10 z-30 scale-95 hover:scale-105 transition-all duration-300'>
                        <Link className="flex gap-2 items-center font-semibold" href="https://wa.me/55554196578795?text=Ol%C3%A1%2C+Estou+com+duvidas+sobre+o+Fluxo+MTA">
                            <Icons.Whatsapp className="w-8 text-white" /> Precisa de Ajuda?
                        </Link>
                    </div>
                </>
            )}
        </>
    );
}
