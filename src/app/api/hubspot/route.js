// src/app/api/hubspot/route.js

export async function POST(req) {
    try {
        const body = await req.json();
        const { fullName, email, phoneNumber, dayTrade } = body;

        const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

        // Verificar se o contato já existe pelo e-mail
        const existingContactResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${HUBSPOT_TOKEN}`,
            },
            body: JSON.stringify({
                filterGroups: [
                    {
                        filters: [
                            {
                                propertyName: 'email',
                                operator: 'EQ',
                                value: email,
                            },
                        ],
                    },
                ],
                limit: 1,
            }),
        });

        let contactId;

        if (existingContactResponse.ok) {
            const searchData = await existingContactResponse.json();
            if (searchData.results.length > 0) {
                contactId = searchData.results[0].id;

                // Atualizar o contato existente
                const updateResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${HUBSPOT_TOKEN}`,
                    },
                    body: JSON.stringify({
                        properties: {
                            firstname: fullName,
                            email: email,
                            hs_whatsapp_phone_number: phoneNumber,
                            day_trade_status: dayTrade,
                        },
                    }),
                });

                if (!updateResponse.ok) {
                    const errorData = await updateResponse.json();
                    console.error('Erro ao atualizar contato:', errorData);
                    return new Response(JSON.stringify({
                        message: 'Erro ao atualizar contato.',
                        error: errorData,
                    }), { status: 400 });
                }
            }
        }

        if (!contactId) {
            const createResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${HUBSPOT_TOKEN}`,
                },
                body: JSON.stringify({
                    properties: {
                        firstname: fullName,
                        email: email,
                        hs_whatsapp_phone_number: phoneNumber,
                        day_trade_status: dayTrade,
                    },
                }),
            });

            if (!createResponse.ok) {
                const errorData = await createResponse.json();
                console.error('Erro ao criar contato:', errorData);
                return new Response(JSON.stringify({
                    message: 'Erro ao criar contato.',
                    error: errorData,
                }), { status: 400 });
            }

            const createData = await createResponse.json();
            contactId = createData.id;
        }

        return new Response(JSON.stringify({
            message: 'Contato criado ou atualizado com sucesso!',
        }), { status: 200 });

    } catch (error) {
        console.error('Erro na requisição para o HubSpot:', error);
        return new Response(JSON.stringify({
            message: 'Erro interno no servidor.',
            error: error.message,
        }), { status: 500 });
    }
}
