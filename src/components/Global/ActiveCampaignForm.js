'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Nova forma de usar o router no Next.js 14

const ActiveCampaignForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage('Enviando...');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name }),
            });

            if (response.ok) {
                setStatusMessage('Inscrição realizada com sucesso!');
                setEmail('');
                setName('');
                router.refresh(); // Recarrega a página ou pode ser usado para atualizar dados
            } else {
                setStatusMessage('Erro ao enviar inscrição.');
            }
        } catch (error) {
            console.error('Erro ao enviar para o ActiveCampaign:', error);
            setStatusMessage('Erro ao enviar inscrição.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Inscrever-se</button>
            <p>{statusMessage}</p>
        </form>
    );
};

export default ActiveCampaignForm;
