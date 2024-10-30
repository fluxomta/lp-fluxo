// src/app/api/hubspotXP/route.js

export async function POST(req) {
    try {
        const body = await req.json();
        const { fullName, email, phoneNumber, dayTrade, formularioDeOrigem } = body;

        // Configuração da URL do formulário do HubSpot
        const HUBSPOT_PORTAL_ID = '47746837'; // Seu Portal ID
        const HUBSPOT_FORM_ID = 'b780799c-1c8d-4f7e-9639-adc8f0198627'; // Seu Form ID

        const response = await fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields: [
                        { name: 'firstname', value: fullName },
                        { name: 'email', value: email },
                        { name: 'hs_whatsapp_phone_number', value: phoneNumber },
                        { name: 'day_trade_status', value: dayTrade },
                        { name: 'formulario_de_origem', value: formularioDeOrigem },

                    ],
                    context: {
                        pageUri: req.headers.referer || 'N/A',
                        pageName: 'Formulário Integrado',
                    },
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erro ao enviar formulário:', errorData);
            return new Response(
                JSON.stringify({
                    message: 'Erro ao enviar formulário.',
                    error: errorData,
                }),
                { status: 400 }
            );
        }

        return new Response(
            JSON.stringify({ message: 'Formulário enviado com sucesso!' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Erro interno no servidor:', error);
        return new Response(
            JSON.stringify({
                message: 'Erro interno no servidor.',
                error: error.message,
            }),
            { status: 500 }
        );
    }
}
