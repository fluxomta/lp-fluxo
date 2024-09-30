// src/components/Indicadores/FormInscricao.js
'use client';

import Link from "next/link";
import Icons from "@/components/Global/Icons";
import Image from 'next/image';
import FormMentoria from "../Forms/FormMentoria";

export default function FormInscricao() {
    return (
        <section
            className="relative text-white bg-primary-500 group">
            <FormMentoria label="Aprenda grátis agora" />
        </section >
    );
}
