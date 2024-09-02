"use client"; // Adicione esta linha no topo

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Icons from '@components/Icons';

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
        <div className="fixed z-50 w-full h-auto md:h-20">
            {/* Cabeçalho */}
            <header className="relative z-20 w-full h-full bg-primary-500">
                <div className='flex items-center justify-between max-w-6xl p-4 mx-auto text-white'>
                    {/* Logotipo com Link para a Home */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Image src="/fluxomta.webp" alt="Logo" width={130} height={29} className="cursor-pointer" />
                        </Link>
                    </div>
                    <div className='flex items-center space-x-6'>
                        {/* Botão para abrir menu no mobile */}
                        <button className="lg:hidden focus:outline-none" onClick={() => setIsDrawerOpen(true)}>
                            <Icons.Menu className="w-8 text-white" /> {/* Utiliza o componente de ícone do menu */}
                        </button>

                        {/* Links de Navegação (Desktop) */}
                        <nav className="items-center hidden space-x-6 font-medium lg:flex text-md">
                            <Link href="/sobre" className="hover:text-secondary-600">
                                Inicio
                            </Link>

                            {/* Menu para Indicadores */}
                            <div
                                className="relative"
                                onMouseEnter={() => setShowSubmenu(true)}
                            >
                                <button className="hover:text-secondary-600 focus:outline-none">
                                    Indicadores
                                </button>
                            </div>

                        </nav>

                        {/* Botão para abrir conta (Desktop) */}
                        <div className="hidden space-x-4 lg:block">
                            <Link href="/abrir-conta">
                                <button className="btn">
                                    Abra sua conta
                                </button>
                            </Link>
                            <Link href="/abrir-conta">
                                <button className="btn-dark">
                                    Assine Agora
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Drawer Menu para Mobile */}
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
                    <Link href="/sobre" className="hover:text-secondary-400">
                        Inicio
                    </Link>
                    <Link href="/sobre" className="hover:text-secondary-400">
                        Sobre
                    </Link>
                    <div className="space-y-2">
                        <span className="block font-semibold text-secondary-400">Indicadores</span>
                        <Link href="/conteudos" className="block px-4 py-2 hover:text-secondary-400">
                            LT - O Rastreador de Liquidez
                        </Link>
                        <Link href="/empresas" className="block px-4 py-2 hover:text-secondary-400">
                            TargetVision - O Rastreador de Alvos
                        </Link>
                        <Link href="/trader" className="block px-4 py-2 hover:text-secondary-400">
                            Fluxo V6 - O Rastreador de Fluxo
                        </Link>
                    </div>
                    <Link href="/abrir-conta" className="text-center btn">
                        Abra sua conta
                    </Link>
                    <Link href="/abrir-conta" className="text-center btn-dark">
                        Assine Agora

                    </Link>
                </nav>
            </div>

            {/* Submenu abaixo do header (Desktop) */}
            <div
                className={`absolute left-0 w-full bg-primary-700 text-white p-4 transition-all duration-300 z-10 ${showSubmenu ? 'block' : 'hidden'}`}
                onMouseEnter={() => setShowSubmenu(true)}
            >
                <div className="flex justify-start max-w-6xl mx-auto space-x-6 font-semibold">
                    <Link href="/conteudos" className="block px-4 py-2 hover:text-secondary-400">
                        LT  <br />O Rastreador de Liquidez
                    </Link>
                    <Link href="/empresas" className="block px-4 py-2 hover:text-secondary-400">
                        TargetVision <br /> O Rastreador de Alvos
                    </Link>
                    <Link href="/trader" className="block px-4 py-2 hover:text-secondary-400">
                        Fluxo V6 <br /> O Rastreador de Fluxo
                    </Link>
                </div>
            </div>
        </div>
    );
}
