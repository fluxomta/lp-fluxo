// src/components/TextBlock.js

export default function TextBlock() {
    return (
        <section className="text-white bg-primary-900">
            <div className="max-w-3xl px-8 py-16 mx-auto text-lg md:text-center">
                <h2 className="mb-4 text-2xl font-bold md:text-4xl md:text-center md:text-5xl">Nossa missão é <span className='yellow'>capacitar Traders a alcance de sucesso</span></h2>
                <p>Nós acreditamos que o sucesso no mercado financeiro começa com uma base sólida de conhecimento e as ferramentas certas.</p>
                <p>O Fluxo MTA foi idealizado para proporcionar educação de alta qualidade e suporte contínuo, garantindo que cada trader tenha os recursos necessários para alcançar seus objetivos dentro do Mercado Financeiro.</p>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl md:text-center">Por isso o Fluxo é <span className='yellow'>feito para você!</span></h2>
            </div>
        </section>
    );
}
