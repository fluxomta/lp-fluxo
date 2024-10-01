import axios from 'axios';

export async function POST(req) {
    const { email, fullName, phoneNumber, dayTrade } = await req.json();

    // Mapeamento das opções de dayTrade com os IDs das tags correspondentes
    const tagMap = {
        opcao_01: 24,
        opcao_02: 25,
        opcao_03: 26,
        opcao_04: 28,
    };

    const listId = 2; // List ID constante
    const automationId = '38'; // Automation ID constante
    const tagId = tagMap[dayTrade]; // Obter o ID da tag baseado no dayTrade

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
        // Associar o contato à lista constante
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

        // Adicionar o contato à automação constante
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

        // Adicionar a tag específica baseada no dayTrade
        await axios.post(
            `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactTags`,
            {
                contactTag: {
                    contact: contactId,
                    tag: tagId,
                },
            },
            {
                headers: {
                    'Api-Token': process.env.ACTIVE_CAMPAIGN_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Retorna uma resposta de sucesso
        return new Response(
            JSON.stringify({ message: 'Inscrição realizada com sucesso!' }),
            { status: 200 }
        );
    } catch (error) {
        // Tratamento de erros para as etapas seguintes (listas, automações, tags)
        console.error('Erro ao adicionar o contato à lista ou automação:', error.response?.data || error.message);
        return new Response(
            JSON.stringify({ message: 'Erro ao processar a inscrição.', error: error.message }),
            { status: 500 }
        );
    }
}
