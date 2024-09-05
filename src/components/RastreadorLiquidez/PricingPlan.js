// components/PricingPlan.js
"use client"; // Adicione esta linha

import Link from 'next/link';
import Image from 'next/image';
import Icons from '@/components/Global/Icons';
import React, { useState } from 'react';

const PricingPlan = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const togglePlan = () => {
        setIsAnnual(!isAnnual);
    };

    return (
        <section className="text-white bg-white border-t-2 border-secondary-700">
            <div className="max-w-6xl px-4 py-12 mx-auto md:text-lg ">
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl font-bold text-center md:text-4xl '>Assine agora
                    </h2>
                    <p className='mb-6 text-3xl font-bold text-center md:text-4xl yellow'>e acesse seu indicador imediatamente</p>
                </div>
            </div>
        </section>
    );
};

export default PricingPlan;
