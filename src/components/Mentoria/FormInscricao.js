// src/components/Indicadores/FormInscricao.js
'use client';

import Link from "next/link";
import Icons from "@/components/Global/Icons";
import Image from 'next/image';
import FormHubspot from "../Forms/FormHubspot";

export default function FormInscricao() {
    return (
        <section
            className="relative text-white bg-primary-500 group">
            <FormHubspot label="Entrar na Lista de espera" origem="mentoria" />
        </section >
    );
}
