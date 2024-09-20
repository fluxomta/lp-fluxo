// src/components/Indicadores/ListaIndicadores.js
import Image from 'next/image';

export default function ListaIndicadores() {
    return (
        <section
            className="relative h-auto text-white"
            style={{
                backgroundImage: 'url(/images/bg/bg-03.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-opacity-20 bg-primary-500'></div>
            <div className="relative max-w-5xl px-4 py-12 mx-auto z-10">
                <p className="text-2xl font-bold md:-mb-1 md:text-center md:text-4xl">Se você já possui uma estratégia de operação,
                    o SpeedFlow vai melhorar ela ainda mais.</p>
                <p className="mb-6 text-2xl font-base md:text-center md:text-3xl md:-mb-1">Mas se ainda não tem um operacional, não se preocupe
                    o Speed Flow é a solução que você procura.</p>
                <p className="mb-6 text-2xl font-base md:text-center md:text-3xl ">Este método revolucionário simplifica sua análise de mercado e garante que você alcance um novo patamar de leitura</p>
                <p className="mb-6 text-3xl font-bold text-center md:text-4xl yellow uppercase">SPEEDFLOW utiliza as ferramentas </p>
                <div className='grid gap-4 max-w-6xl mx-auto mb-12 md:grid-cols-2 shadow-xl backdrop-blur-md'>
                    <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                        <h2 className='relative font-semibold yellow text-3xl'>Quantum LT</h2>
                        <p className='relative'>LT é o mapa perfeito do mercado, destacando pontos cruciais para operações mais lucrativas. Evite armadilhas, encontre entradas e saídas ideais, e faça análises profundas em segundos.</p>
                    </div>
                    <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                        <h2 className='relative font-semibold yellow text-3xl'>Alvo R3</h2>
                        <p className='relative'>O Alvo R3 revela o segredo dos grandes fundos, traçando automaticamente os alvos perfeitos. Pare de perder oportunidades e opere com soluções em futuros, ações e opções, com a tecnologia TradeVision ao seu lado.</p>
                    </div>
                    <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                        <h2 className='relative font-semibold yellow text-3xl'>Fluxo V6</h2>
                        <p className='relative'>O Fluxo V6 oferece leitura rápida de fluxo, regras de coloração simples e navegação segura nas regiões de manipulação. Aumente seus lucros e opere com confiança.</p>
                    </div>
                    <div className='col-span-2 md:col-span-1 rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                        <h2 className='relative font-semibold yellow text-3xl'>ZD</h2>
                        <p className='relative'>O Indicador ZD (Zonas de Decisão) é exclusivo para Índice e Dólar, destacando as regiões mais importantes do mercado com 89% de acerto. Um dos favoritos dos meus alunos de Day Trade, ele melhorou o desempenho e vem como bônus na assinatura de qualquer indicador do MTA.</p>
                    </div>
                    <div className='col-span-2  rounded-md bg-primary-500 border border-secondary-500/25 p-4'>
                        <h2 className='relative font-semibold yellow text-3xl'>MacroFlow</h2>
                        <p className='relative'>MacroFlow é o indicador mais avançado do mercado, unindo 8 ferramentas em uma para detectar posições de grandes players e prever movimentos com precisão. Tome decisões assertivas e domine o fluxo real em qualquer ativo.</p>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <p className=" md:flex mb-6 text-3xl font-bold text-center md:text-4xl yellow uppercase items-center justify-center">+ Comunidade  <Image src="/speedflow.webp" alt="Logo" width={280} height={250} className='ml-4 -mt-3' /> * </p>
                </div>
                <div className='flex md:hidden flex-col items-center'>
                    <p className="text-3xl font-bold  md:text-4xl yellow uppercase">+ Comunidade</p>
                    <Image src="/speedflow.webp" alt="Logo" width={250} height={250} className='ml-4 -mt-5' />
                </div>
                <p className='text-2xl font-semibold text-white text-center'>Aprenda fluxo, melhore suas operações, ajuste seus alvos e aumente sua precisão no mercado com o <span className='yellow'>SpeedFlow, nosso pacote de indicadores indispensável para seu operacional.</span> </p>
            </div>
        </section >
    );
}
