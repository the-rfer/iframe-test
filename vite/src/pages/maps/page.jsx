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
        Taxi: true,
    });

    const isMobile = useIsMobile();

    return (
        <div className='mx-auto pb-20 md:max-w-[1500px] min-h-screen'>
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
                    <Legend day={day} barracaState={barracas} />
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
