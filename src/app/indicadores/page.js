// src/app/page.js
"use client";
import HeroSection from '@/components/Indicadores/HeroSection';
import TextBlock from '@/components/Indicadores/TextBlock';
import TextBlockTwo from '@/components/Indicadores/TextBlockTwo';
import Parceria from '@/components/Indicadores/Parceria';
import Solucoes from '@/components/Indicadores/Solucoes';
import SpeedFlow from '@/components/Indicadores/SpeedFlow';


export default function Indicadores() {
    return (
        <>
            <HeroSection />
            <Parceria />
            <Solucoes />
            <TextBlock />
            <SpeedFlow />
            <TextBlockTwo />
        </>
    );
}
