import axios from 'axios';

export async function POST(req) {
    const { email, name } = await req.json();

    try {
        const response = await axios.post(
            `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contacts`,
            {
                contact: {
                    email,
                    firstName: name,
                    listId: [1], // Substitua com o ID da sua lista de contatos
                },
            },
            {
                headers: {
                    'Api-Token': process.env.ACTIVE_CAMPAIGN_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        return new Response(JSON.stringify({ message: 'Inscrição realizada com sucesso!' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Erro ao enviar para o ActiveCampaign:', error.response?.data || error.message);
        return new Response(JSON.stringify({ message: 'Erro ao enviar inscrição.' }), {
            status: 500,
        });
    }
}
