import { Clock, MapPin, Music } from 'lucide-react';
import { MobileHeader } from '@/components/mobile-header';

export default function Information() {
    const schedule = [
        {
            day: 'Quinta, 14 de Agosto',
            events: [
                {
                    time: '10:00 AM',
                    event: 'Gates Open',
                    location: 'All Entrances',
                },
                {
                    time: '12:00 PM',
                    event: 'Opening Ceremony',
                    location: 'Main Stage',
                },
                {
                    time: '7:00 PM',
                    event: 'Headliner: The Electric Waves',
                    location: 'Main Stage',
                },
            ],
        },
        {
            day: 'Sexta, 15 de Agosto',
            events: [
                {
                    time: '10:00 AM',
                    event: 'Gates Open',
                    location: 'All Entrances',
                },
                {
                    time: '1:00 PM',
                    event: 'Acoustic Sessions',
                    location: 'Acoustic Stage',
                },
                {
                    time: '8:00 PM',
                    event: 'Headliner: Midnight Symphony',
                    location: 'Main Stage',
                },
            ],
        },
    ];

    return (
        <div className='mx-auto pb-20 md:max-w-2xl min-h-screen'>
            <MobileHeader title='Informação' />

            <div className='space-y-6 mx-auto px-4 py-6 container'>
                <div className='bg-white shadow-sm p-6 rounded-lg'>
                    <h2 className='flex items-center mb-4 font-semibold text-gray-800 text-xl'>
                        <Music className='mr-2 w-5 h-5 text-blue-600' />
                        Arraial do Monte 2025
                    </h2>
                    <div className='gap-4 grid text-sm'>
                        <div className='flex items-center'>
                            <Clock className='mr-2 w-4 h-4 text-gray-500' />
                            <span className='text-gray-600'>
                                14-15 de Agosto de 2025 • 10:00 - 23:00
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <MapPin className='mr-2 w-4 h-4 text-gray-500' />
                            <span className='text-gray-600'>
                                Monte, Funchal, Ilha da Madeira
                            </span>
                        </div>
                    </div>
                    <p className='mt-4 text-gray-700'>
                        O Arraial do Monte é uma celebração tradicional que
                        reúne música, gastronomia e muita animação. Venha viver
                        dois dias de festa com concertos ao vivo, barracas de
                        comida regional, folclore e atividades para toda a
                        família.
                    </p>
                </div>

                <div className='bg-white shadow-sm rounded-lg overflow-hidden'>
                    <div className='p-4 border-gray-100 border-b'>
                        <h2 className='flex items-center font-semibold text-gray-800 text-lg'>
                            <Clock className='mr-2 w-5 h-5 text-green-600' />
                            Calendário
                        </h2>
                    </div>

                    <div className='divide-y divide-gray-100'>
                        {schedule.map((day, dayIndex) => (
                            <div key={dayIndex} className='p-4'>
                                <h3 className='mb-3 font-semibold text-gray-800 text-lg'>
                                    {day.day}
                                </h3>
                                <div className='space-y-3'>
                                    {day.events.map((event, eventIndex) => (
                                        <div
                                            key={eventIndex}
                                            className='flex items-start'
                                        >
                                            <div className='bg-blue-100 mt-0.5 mr-3 px-2 py-1 rounded min-w-fit font-medium text-blue-800 text-xs'>
                                                {event.time}
                                            </div>
                                            <div className='flex-1'>
                                                <div className='font-medium text-gray-800'>
                                                    {event.event}
                                                </div>
                                                <div className='text-gray-600 text-sm'>
                                                    {event.location}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
