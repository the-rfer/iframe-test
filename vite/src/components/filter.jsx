const barracasValues = [
    {
        name: 'Comes e bebes',
        slug: 'comes_e_bebes',
    },
    {
        name: 'Venda de carne',
        slug: 'venda_de_carne',
    },
    {
        name: 'Venda de velas',
        slug: 'venda_de_velas',
    },
    {
        name: 'Pequenos balcões',
        slug: 'pequenos_balcoes',
    },
    {
        name: 'Pipocas e Algodão Doce',
        slug: 'meio_motorizado',
    },
];
const pcivil = [
    {
        name: 'Meios proteção civil',
        slug: 'pc_meios',
    },
    {
        name: 'Ponto socorro',
        slug: 'pc_psocorros',
    },
];
const outros = [
    {
        name: 'Praça de taxis',
        slug: 'Taxi',
    },
];

export function Filter({ day, setDay, barracas, setBarracas }) {
    return (
        <div className='flex flex-col my-2 p-2 max-w-4xl'>
            <h1 className='mb-2 pb-2 font-bold text-xl'>Filtros</h1>
            <div>
                <fieldset className='bg-base-100 p-4 border border-base-300 rounded-box w-full'>
                    <legend className='fieldset-legend'>
                        Divisão de Mobilidade e Trânsito - Informação Trânsito
                    </legend>
                    <div className='flex md:flex-row flex-col gap-5 my-2 w-full'>
                        <label className='label'>
                            <input
                                type='radio'
                                name='transito'
                                className='radio'
                                onChange={() => setDay(1)}
                                defaultChecked={day === 1 ? true : false}
                            />
                            Dias 11, 12 e 13
                        </label>

                        <label className='label'>
                            <input
                                type='radio'
                                name='transito'
                                className='radio'
                                onChange={() => setDay(2)}
                                defaultChecked={day === 2 ? true : false}
                            />
                            Dias 14 e 15
                        </label>

                        <label className='label'>
                            <input
                                type='radio'
                                name='transito'
                                className='radio'
                                onChange={() => setDay(3)}
                                defaultChecked={day === 3 ? true : false}
                            />
                            Dia 17
                        </label>

                        <label className='label'>
                            <input
                                type='radio'
                                name='transito'
                                className='radio'
                                onChange={() => setDay(0)}
                                defaultChecked={day === 0 ? true : false}
                            />
                            Ocultar informação trânsito
                        </label>
                    </div>
                </fieldset>

                <fieldset className='bg-base-100 p-4 border border-base-300 rounded-box'>
                    <legend className='fieldset-legend'>
                        Divisão de Gestão de Espaços Públicos e Publicidade -
                        Barracas
                    </legend>
                    <div className='gap-5 columns-1 md:columns-2 my-2 max-w-4xl'>
                        {barracasValues.map((barraca) => (
                            <label className='mx-4 label' key={barraca.slug}>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                    checked={barracas[barraca.slug]}
                                    onChange={() =>
                                        setBarracas((prev) => ({
                                            ...prev,
                                            [barraca.slug]: !prev[barraca.slug],
                                        }))
                                    }
                                />
                                <span className='ml-2'>{barraca.name}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                <fieldset className='bg-base-100 p-4 border border-base-300 rounded-box'>
                    <legend className='fieldset-legend'>
                        Serviço Municipal de Proteção Civil - Meios
                    </legend>
                    <div className='gap-5 columns-1 md:columns-2 my-2 max-w-4xl'>
                        {pcivil.map((barraca) => (
                            <label className='mx-4 label' key={barraca.slug}>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                    checked={barracas[barraca.slug]}
                                    onChange={() =>
                                        setBarracas((prev) => ({
                                            ...prev,
                                            [barraca.slug]: !prev[barraca.slug],
                                        }))
                                    }
                                />
                                <span className='ml-2'>{barraca.name}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                <fieldset className='bg-base-100 p-4 border border-base-300 rounded-box'>
                    <legend className='fieldset-legend'>Outros</legend>
                    <div className='gap-5 columns-1 md:columns-2 my-2 max-w-4xl'>
                        {outros.map((barraca) => (
                            <label className='mx-4 label' key={barraca.slug}>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                    checked={barracas[barraca.slug]}
                                    onChange={() =>
                                        setBarracas((prev) => ({
                                            ...prev,
                                            [barraca.slug]: !prev[barraca.slug],
                                        }))
                                    }
                                />
                                <span className='ml-2'>{barraca.name}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
            </div>
        </div>
    );
}
