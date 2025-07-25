import { MobileHeader } from '@/components/mobile-header';
import { useState } from 'react';
import Map from '@/components/map';

export default function Maps() {
    const [day, setDay] = useState(1);

    return (
        <div className='mx-auto pb-20 md:max-w-2xl min-h-screen'>
            <MobileHeader title='Mapa do evento' />

            <div className='relative md:mt-8 h-96'>
                <Map day={day} />
            </div>
            {/* COMPONENTE DE TESTES */}
            <TESTComponent day={day} setDay={setDay} />
        </div>
    );
}

function TESTComponent({ day, setDay }) {
    return (
        <div className='justify-between gap-2 grid grid-cols-3 mt-2 w-full'>
            <h1 className='col-span-3 font-bold text-lg text-center'>
                <span className='text-red-500'>TEST: </span> Info trânsito - Dia{' '}
                {day}.
            </h1>
            <button
                className={`btn btn-primary ${day === 1 && 'btn-active'}`}
                onClick={() => setDay(1)}
            >
                Dia 1
            </button>
            <button
                className={`btn btn-primary ${day === 2 && 'btn-active'}`}
                onClick={() => setDay(2)}
            >
                Dia 2
            </button>
            <button
                className={`btn btn-primary ${day === 3 && 'btn-active'}`}
                onClick={() => setDay(3)}
            >
                Dia 3
            </button>
        </div>
    );
}
