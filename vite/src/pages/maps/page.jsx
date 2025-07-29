import { MobileHeader } from '@/components/mobile-header';
import { useState } from 'react';
import Map from '@/components/map';
import { useIsMobile } from '@/lib/useMobile';
import { Legend } from '@/components/map';
import { calculateCurrentEventDay } from '@/lib/date';
import { Filter } from '@/components/filter';

export default function Maps() {
    const [day, setDay] = useState(calculateCurrentEventDay() || 1);
    const [barracas, setBarracas] = useState({
        comes_e_bebes: true,
        venda_de_carne: true,
        venda_de_velas: true,
        pequenos_balcoes: true,
        meio_motorizado: true,
        pc_meios: true,
        pc_psocorros: true,
    });

    const isMobile = useIsMobile();

    return (
        <div className='mx-auto pb-20 md:max-w-4xl min-h-screen'>
            <MobileHeader title='Mapa do evento' />

            <div
                className={`relative md:mt-8 ${
                    isMobile ? 'h-[450px]' : 'h-[600px]'
                }`}
            >
                <Map day={day} barracaState={barracas} />
            </div>

            {isMobile && (
                <div className='flex mt-2 min-w-full'>
                    <Legend day={day} />
                </div>
            )}

            <Filter
                day={day}
                setDay={setDay}
                barracas={barracas}
                setBarracas={setBarracas}
            />
        </div>
    );
}

// function TESTComponent({ day, setDay }) {
//     return (
//         <div className='justify-between gap-2 grid grid-cols-3 mt-2 w-full'>
//             <h1 className='col-span-3 font-bold text-lg text-center'>
//                 <span className='text-red-500'>TEST: </span> Info trânsito - Dia{' '}
//                 {day}.
//             </h1>
//             <button
//                 className={`btn btn-primary ${day === 1 && 'btn-active'}`}
//                 onClick={() => setDay(1)}
//             >
//                 Dia 1
//             </button>
//             <button
//                 className={`btn btn-primary ${day === 2 && 'btn-active'}`}
//                 onClick={() => setDay(2)}
//             >
//                 Dia 2
//             </button>
//             <button
//                 className={`btn btn-primary ${day === 3 && 'btn-active'}`}
//                 onClick={() => setDay(3)}
//             >
//                 Dia 3
//             </button>
//         </div>
//     );
// }
