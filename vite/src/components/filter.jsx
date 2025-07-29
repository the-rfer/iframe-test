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
        name: 'Meio motorizado',
        slug: 'meio_motorizado',
    },
];

export function Filter({ day, setDay, barracas, setBarracas }) {
    return (
        <div className='my-2 p-2 w-full'>
            <h1 className='mb-2 pb-2 font-bold text-xl'>Filtros</h1>
            <div>
                <fieldset className='bg-base-100 p-4 border border-base-300 rounded-box w-full'>
                    <legend className='fieldset-legend'>Trânsito</legend>
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
                    </div>
                </fieldset>

                <fieldset className='bg-base-100 p-4 border border-base-300 rounded-box'>
                    <legend className='fieldset-legend'>Barracas</legend>
                    <div className='flex md:flex-row flex-col gap-5 my-2 md:w-full'>
                        {barracasValues.map((barraca) => (
                            <label className='label' key={barraca.slug}>
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
