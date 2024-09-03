// src/components/Numbers.js

export default function Numbers() {
    return (
        <section
            className="relative text-white yellow-gradient ">
            <div className="max-w-6xl px-4 py-8 mx-auto md:py-12">
                <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                    <div className='space-y-0 font-bold text-center text-primary-700 '>
                        <p className='text-4xl !mb-0'>+ 530</p>
                        <p className='text-lg'>Clientes Ativos</p>
                        <hr className='px-8 border-b-2 border-primary-900' />
                    </div>
                    <div className='space-y-0 font-bold text-center text-primary-700 '>
                        <p className='text-4xl !mb-0'>% 63</p>
                        <p className='text-lg'>Taxa de acerto dos indicadores</p>
                        <hr className='px-8 border-b-2 border-primary-900' />
                    </div>
                    <div className='space-y-0 font-bold text-center text-primary-700 '>
                        <p className='text-4xl !mb-0'>100 %</p>
                        <p className='text-lg'>Análise Quant por meio de algorítimos</p>
                        <hr className='px-8 border-b-2 border-primary-900' />
                    </div>
                </div>
            </div>
        </section>
    );
}
