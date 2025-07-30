import { MobileHeader } from '@/components/mobile-header';
import { Carousel } from '@/components/carousel';

export default function Page() {
    return (
        <div className='flex flex-col md:items-center mx-auto pb-20 md:pb-0 md:max-w-[1500px] h-full md:h-fit'>
            <MobileHeader title='Mídia' />
            <div className='md:mt-6'>
                <Carousel />
            </div>
        </div>
    );
}
