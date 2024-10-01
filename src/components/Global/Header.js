"use client"; // Adicione esta linha no topo

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Icons from '@/components/Global/Icons';

export default function Header() {
    // Estado para controlar a visibilidade do submenu
    const [showSubmenu, setShowSubmenu] = useState(false);
    // Estado para controle do drawer no mobile
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Função para esconder o submenu ao clicar fora
    const handleClickOutside = () => {
        setShowSubmenu(false);
    };

    // Efeito para adicionar e remover o event listener de clique
    useEffect(() => {
        if (showSubmenu) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        // Cleanup do event listener ao desmontar
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showSubmenu]);

    return (
        <div className="fixed z-50 w-full h-16 md:h-20">
            {/* Cabeçalho */}
            <header className="relative z-20 w-full h-full bg-primary-500">
                <div className='flex items-center h-full justify-between max-w-6xl p-4 mx-auto text-white'>
                    {/* Logotipo com Link para a Home */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Image src="/fluxomta.webp" alt="Logo" width={130} height={29} className="cursor-pointer" />
                        </Link>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <button className="lg:hidden focus:outline-none" onClick={() => setIsDrawerOpen(true)}>
                            <Icons.Menu className="w-8 text-white" /> {/* Utiliza o componente de ícone do menu */}
                        </button>

                        <nav className="items-center hidden space-x-6 font-medium lg:flex text-md">

                            <Link href="/indicadores"
                                className="relative"
                                onMouseEnter={() => setShowSubmenu(true)}
                            >
                                <button className="hover:text-secondary-600 focus:outline-none">
                                    Indicadores
                                </button>
                            </Link>
                            <Link target='_blank' href="https://dashboard.fluxomta.com/login" className=" btn">
                                Login
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            {/* MobileMenu */}
            <div className={`fixed inset-0 z-30 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-primary-500 text-white lg:hidden`}>
                <div className="flex items-center justify-between p-4">
                    <Link href="/">
                        <Image src="/fluxomta.webp" alt="Logo" width={130} height={29} className="cursor-pointer" />
                    </Link>
                    <button onClick={() => setIsDrawerOpen(false)} className="focus:outline-none">
                        <Icons.Close className="w-8 text-white" />
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <Link href="/" className="hover:text-secondary-400" onClick={() => setIsDrawerOpen(false)}>
                        Inicio
                    </Link>
                    <div className="space-y-2">
                        <Link href="/indicadores" onClick={() => setIsDrawerOpen(false)}>
                            <span className="block font-semibold text-secondary-400">Indicadores</span>
                        </Link>

                        <Link href="/indicadores/quantum-LT" onClick={() => setIsDrawerOpen(false)} className="block px-4 py-2 hover:text-secondary-400">
                            <span className="block font-semibold">Quantum LT</span>
                        </Link>
                        <Link href="/indicadores/alvo-R3" onClick={() => setIsDrawerOpen(false)} className="block px-4 py-2 hover:text-secondary-400">
                            <span className="block font-semibold">Alvo R3 </span>
                        </Link>
                        <Link href="/indicadores/fluxo-V6" onClick={() => setIsDrawerOpen(false)} className="block px-4 py-2 hover:text-secondary-400">
                            <span className="block font-semibold">Fluxo V6</span>
                        </Link>
                        <Link href="/indicadores/macroflow" onClick={() => setIsDrawerOpen(false)} className="block px-4 py-2 hover:text-secondary-400">
                            <span className="block font-semibold">Macroflow </span>
                        </Link>
                        <Link href="/indicadores/speedflow" onClick={() => setIsDrawerOpen(false)} className="block px-4 py-2 hover:text-secondary-400">
                            <span className="block font-semibold">SpeedFlow </span>
                        </Link>
                        <Link href="/mentoria" className="block px-4 py-2 hover:text-secondary-400">
                            Mentoria
                        </Link>

                    </div>
                    <Link target='_blank' href="https://dashboard.fluxomta.com/login" className="mt-8 btn flex items-center">
                        Login <Icons.AngleRight className="w-6" />
                    </Link>
                </nav>
            </div >
            {/* DesktopMenu */}
            < div
                className={`absolute left-0 w-full bg-primary-700 text-white p-4 transition-all duration-300 z-10 ${showSubmenu ? 'block' : 'hidden'}`
                }
                onMouseEnter={() => setShowSubmenu(true)}
            >
                <div className="flex justify-start max-w-6xl mx-auto space-x-6 font-semibold">
                    <Link href="/indicadores/quantum-LT" className="block px-4 py-2 hover:text-secondary-400">
                        Quantum LT
                    </Link>
                    <Link href="/indicadores/alvo-R3" className="block px-4 py-2 hover:text-secondary-400">
                        Alvo R3
                    </Link>
                    <Link href="/indicadores/fluxo-V6" className="block px-4 py-2 hover:text-secondary-400">
                        Fluxo V6
                    </Link>
                    <Link href="/indicadores/macroflow" className="block px-4 py-2 hover:text-secondary-400">
                        Macroflow
                    </Link>
                    <Link href="/indicadores/speedflow" className="block px-4 py-2 hover:text-secondary-400">
                        SpeedFlow
                    </Link>
                    <Link href="/mentoria" className="block px-4 py-2 hover:text-secondary-400">
                        Mentoria
                    </Link>

                </div>
            </div >
        </div >
    );
}
