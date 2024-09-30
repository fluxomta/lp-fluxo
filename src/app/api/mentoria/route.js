// app/api/subscribe/route.js
import axios from 'axios';

export async function POST(req) {
    // console.log('Recebendo requisição...'); // Log para verificar a chegada da requisição
    const { email, fullName, phoneNumber, dayTrade } = await req.json();
    // console.log('Dados recebidos:', { email, fullName, phoneNumber, dayTrade }); // Log dos dados recebidos

    const tagToListMap = {
        daytrade17_1: 17,
        daytrade17_2: 17,
        daytrade16: 16,
        daytrade15: 15,
    };

    const automationIdMap = {
        daytrade17_1: '33',
        daytrade17_2: '33',
        daytrade16: '32',
        daytrade15: '31',
    };

    const listId = tagToListMap[dayTrade];
    const automationId = automationIdMap[dayTrade];

    try {
        // Verifique se o contato já existe no ActiveCampaign
        const searchContactResponse = await axios.get(
            `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contacts?email=${email}`,
            {
                headers: {
                    'Api-Token': process.env.ACTIVE_CAMPAIGN_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        let contactId;

        if (searchContactResponse.data.contacts.length > 0) {
            contactId = searchContactResponse.data.contacts[0].id;
            // console.log('Contato existente encontrado:', contactId); // Log do contato existente

            // Atualizar contato existente
            await axios.put(
                `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contacts/${contactId}`,
                {
                    contact: {
                        email,
                        firstName: fullName.split(' ')[0],
                        lastName: fullName.split(' ').slice(1).join(' '),
                        phone: phoneNumber,
                    },
                },
                {
                    headers: {
                        'Api-Token': process.env.ACTIVE_CAMPAIGN_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            );
        } else {
            // console.log('Criando novo contato...'); // Log para criação de novo contato
            const createContactResponse = await axios.post(
                `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contacts`,
                {
                    contact: {
                        email,
                        firstName: fullName.split(' ')[0],
                        lastName: fullName.split(' ').slice(1).join(' '),
                        phone: phoneNumber,
                    },
                },
                {
                    headers: {
                        'Api-Token': process.env.ACTIVE_CAMPAIGN_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            );

            contactId = createContactResponse.data.contact.id;
        }

        // console.log(`Adicionando contato ${contactId} à lista ${listId}`);

        // Associe o contato à lista correta
        const listResponse = await axios.post(
            `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactLists`,
            {
                contactList: {
                    list: listId,
                    contact: contactId,
                    status: 1, // Status 1 significa "subscrito"
                },
            },
            {
                headers: {
                    'Api-Token': process.env.ACTIVE_CAMPAIGN_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        // console.log('Resposta da API ao adicionar contato à lista:', listResponse.data);

        // Adicione o contato à automação
        if (automationId) {
            const automationResponse = await axios.post(
                `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactAutomations`,
                {
                    contactAutomation: {
                        contact: contactId,
                        automation: automationId,
                    },
                },
                {
                    headers: {
                        'Api-Token': process.env.ACTIVE_CAMPAIGN_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            );

            // console.log('Resposta da API ao adicionar contato à automação:', automationResponse.data);
        }

        return new Response(
            JSON.stringify({ message: 'Inscrição realizada com sucesso!' }),
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error(
            'Erro ao enviar para o ActiveCampaign:',
            error.response?.data || error.message
        );
        return new Response(
            JSON.stringify({ message: 'Erro ao enviar inscrição.', error: error.message }),
            {
                status: 500,
            }
        );
    }
}
