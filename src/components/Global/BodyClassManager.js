// src/components/Global/BodyClassManager.js
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import clsx from 'clsx';

const BodyClassManager = ({ baseClass }) => {
    const pathname = usePathname(); // Obtém o caminho atual

    useEffect(() => {
        const pathParts = pathname.split('/').filter(Boolean);
        const classNames = clsx(baseClass, ...pathParts);

        document.body.className = classNames; // Define as classes do body

        return () => {
            document.body.className = ''; // Limpa as classes ao desmontar
        };
    }, [pathname, baseClass]);

    return null; // Este componente não renderiza nada
};

export default BodyClassManager;