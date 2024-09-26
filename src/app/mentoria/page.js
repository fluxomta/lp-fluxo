// src/app/mentoria/page.js
"use client";  // Keep this directive for client-side behavior

import { useState, useEffect } from 'react';
import HeroSection from '@/components/Mentoria/HeroSection';
import FAQAccordion from '@/components/Global/FAQAccordion';
import TextBlock from '@/components/Mentoria/TextBlock';
import TextBlockTwo from '@/components/Mentoria/TextBlockTwo';
import ListaPrincipios from '@/components/Mentoria/ListaPrincipios';
import ListaFundamentos from '@/components/Mentoria/ListaFundamentos';
import TextBlockFinal from '@/components/Mentoria/TextBlockFinal';
import Boxes from '@/components/Mentoria/Boxes';
import BgGlobe from '@/components/Mentoria/BgGlobe';

export default function Mentoria() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authenticateUser = () => {
            const username = window.prompt('Digite seu usuário:');
            const password = window.prompt('Digite sua senha:');

            const hardcodedUser = 'ana';
            const hardcodedPassword = 'morango';

            if (username === hardcodedUser && password === hardcodedPassword) {
                setIsAuthenticated(true);
                alert('Login bem-sucedido!');
            } else {
                alert('Usuário ou senha incorretos.');
            }
        };

        authenticateUser();
    }, []);

    if (!isAuthenticated) {
        return <p>Autenticando...</p>;
    }

    return (
        <>
            <HeroSection />
            <BgGlobe />
            <TextBlock />
            <TextBlockTwo />
            <ListaPrincipios />
            <ListaFundamentos />
            <Boxes />
            <TextBlockFinal />
            <FAQAccordion />
        </>
    );
}
