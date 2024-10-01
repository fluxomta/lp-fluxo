import axios from 'axios';

export async function POST(req) {
    const { email, fullName, phoneNumber, dayTrade } = await req.json();

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

    let contactId;

    try {
        // Usar o endpoint /contact/sync para sincronizar ou criar o contato
        const syncContactResponse = await axios.post(
            `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contact/sync`,
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

        contactId = syncContactResponse.data.contact.id;

    } catch (error) {
        console.error('Erro ao sincronizar o contato:', error.response?.data || error.message);
        return new Response(
            JSON.stringify({ message: 'Erro ao processar a inscrição.', error: error.message }),
            { status: 500 }
        );
    }

    try {
        // Associar o contato à lista correta
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

        // Adicionar o contato à automação correspondente
        if (automationId) {
            await axios.post(
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
        }

        return new Response(
            JSON.stringify({ message: 'Inscrição realizada com sucesso!' }),
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error('Erro ao adicionar o contato à lista ou automação:', error.response?.data || error.message);
        return new Response(
            JSON.stringify({ message: 'Erro ao processar a inscrição.', error: error.message }),
            { status: 500 }
        );
    }
}
