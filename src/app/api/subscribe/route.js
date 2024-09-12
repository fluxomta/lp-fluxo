// app/api/subscribe/route.js
import axios from 'axios';

export async function POST(req) {
    const { email, fullName, phoneNumber, dayTrade } = await req.json();

    // Mapeamento de tags para IDs de listas no ActiveCampaign
    const tagToListMap = {
        daytrade3: 10, // Substitua '1' pelo ID da lista para "Opero todos os dias"
        daytrade2: 10, // Substitua '2' pelo ID da lista para "Opero quase todos os dias"
        daytrade1: 8, // Substitua '3' pelo ID da lista para "Já operei, mas parei por um tempo"
        daytrade0: 9, // Substitua '4' pelo ID da lista para "Não opero ainda, mas quero começar"
    };

    const listId = tagToListMap[dayTrade];

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
            // O contato já existe, atualize as informações
            contactId = searchContactResponse.data.contacts[0].id;

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
            // O contato não existe, crie um novo contato
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

        // Associe o contato à lista correta
        await axios.post(
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
