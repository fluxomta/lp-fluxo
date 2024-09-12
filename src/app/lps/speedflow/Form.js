// components/forms/Form.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa o hook useRouter
import TextInput from '@components/Forms/TextInput';
import PhoneInput from '@components/Forms//PhoneInput';
import SelectInput from '@components/Forms//SelectInput';
import SubmitButton from '@components/Forms//SubmitButton';
import Message from '@components/Forms//Message';
import LgpdText from '@components/Forms//LgpdText';

const Form = () => {
    const router = useRouter(); // Inicializa o hook useRouter

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        dayTrade: '',
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage('Enviando...');
        setMessageType('success');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatusMessage('Inscrição realizada com sucesso!');
                setFormData({
                    fullName: '',
                    phoneNumber: '',
                    email: '',
                    dayTrade: '',
                });

                // Obtém a URL atual usando o window.location.pathname
                const currentPath = window.location.pathname;

                // Redireciona para a página de "Obrigado" baseada na URL atual
                router.push(`${currentPath}/obrigado`);
            } else {
                setStatusMessage('Erro ao enviar inscrição.');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Erro ao enviar para o ActiveCampaign:', error);
            setStatusMessage('Erro ao enviar inscrição.');
            setMessageType('error');
        }
    };

    return (
        <div className="bg-primary-700/50 border border-secondary-600 p-8 rounded-md">
            <form onSubmit={handleSubmit} className='md:grid grid-cols-4 gap-4'>
                <div className='col-span-1 text-primary-200'>
                    <TextInput
                        label="Nome completo"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                    />
                </div>
                <div className='col-span-1 text-primary-200'>
                    <TextInput
                        label="E-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Seu melhor e-mail"
                        required
                    />
                </div>
                <div className='col-span-1 text-primary-200'>
                    <PhoneInput
                        label="Número de Celular"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="(DD) 00000-0000"
                        required
                    />
                </div>
                <div className='col-span-1 text-primary-200'>
                    <SelectInput
                        label="Já opera Day Trade?"
                        name="dayTrade"
                        value={formData.dayTrade}
                        onChange={handleChange}
                        options={[
                            { value: 'daytrade3', label: 'Opero todos os dias' },
                            { value: 'daytrade2', label: 'Opero quase todos os dias' },
                            { value: 'daytrade1', label: 'Já operei, mas parei por um tempo' },
                            { value: 'daytrade0', label: 'Não opero ainda, mas quero começar' },
                        ]}
                        required
                    />
                </div>
                <div className='col-span-5 text-center max-w-2xl mx-auto'>
                    <SubmitButton label="Aprenda grátis agora" />
                </div>
            </form>
            {statusMessage && <Message message={statusMessage} type={messageType} />}
            <div className='col-span-2'>
                <LgpdText />
            </div>
        </div>
    );
};

export default Form;
