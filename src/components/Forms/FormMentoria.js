// components/forms/FormHubSpot.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import TextInput from '@components/Forms/TextInput';
import PhoneInput from '@components/Forms/PhoneInput';
import SelectInput from '@components/Forms/SelectInput';
import SubmitButton from '@components/Forms/SubmitButton';
import Message from '@components/Forms/Message';
import LgpdText from '@components/Forms/LgpdText';

const FormMentoria = ({ label = "Enviar", origem = "Origem Padrão" }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        dayTrade: '',
        formularioDeOrigem: '',
    });

    // Atualiza o estado com a prop `origem` assim que o componente é montado.
    useEffect(() => {
        setFormData((prevState) => ({
            ...prevState,
            formularioDeOrigem: origem,
        }));
    }, [origem]);

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
            const response = await fetch('/api/hubspot', {
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
                    formularioDeOrigem: origem,
                });

                const currentPath = window.location.origin + pathname;
                router.push(`${currentPath}/obrigado`);
            } else {
                const errorData = await response.json();
                console.error('Erro ao enviar para o HubSpot:', errorData);
                setStatusMessage('Erro ao enviar inscrição.');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Erro ao enviar para o HubSpot:', error);
            setStatusMessage('Erro ao enviar inscrição.');
            setMessageType('error');
        }
    };

    return (
        <div className="bg-primary-700/50 border border-secondary-600 p-8 rounded-md">
            <form onSubmit={handleSubmit} className="md:grid grid-cols-4 gap-4 group-[.group]:block">
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
                            { value: 'Opero todos os dias', label: 'Opero todos os dias' },
                            { value: 'Opero quase todos os dias', label: 'Opero quase todos os dias' },
                            { value: 'Já operei, mas parei por um tempo', label: 'Já operei, mas parei por um tempo' },
                            { value: 'Não opero ainda, mas quero começar', label: 'Não opero ainda, mas quero começar' },
                        ]}
                        required
                    />
                </div>
                {/* Campo Hidden para Formulário de Origem */}
                <input
                    type="hidden"
                    name="formularioDeOrigem"
                    value={formData.formularioDeOrigem}
                />
                <div className='col-span-5 text-center max-w-2xl mx-auto'>
                    <SubmitButton label={label} />
                </div>
            </form>
            {statusMessage && <Message message={statusMessage} type={messageType} />}
            <div className='col-span-2'>
                <LgpdText />
            </div>
        </div>
    );
};

export default FormMentoria;
