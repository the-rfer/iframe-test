import { MobileHeader } from '@/components/mobile-header';
import Map from '@/components/map';

export default function Maps() {
    return (
        <div className='mx-auto pb-20 md:max-w-2xl min-h-screen'>
            <MobileHeader title='Mapa do evento' />

            <div className='relative md:mt-8 h-96'>
                <Map />
            </div>
        </div>
    );
}
