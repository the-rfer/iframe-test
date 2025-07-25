import { Clock, MapPin, Music, ScrollText } from 'lucide-react';
import { MobileHeader } from '@/components/mobile-header';
import { Calendar } from '@/components/calendar';
import { schedule, fileList } from '@/data/static';
import { Downloads } from '@/components/downloads';

export default function Information() {
    return (
        <div className='mx-auto pb-20 md:max-w-2xl min-h-screen'>
            <MobileHeader title='Informação' />

            <div className='space-y-6 mx-auto px-4 py-6 container'>
                <div className='bg-base-300 shadow-sm p-6 rounded-lg'>
                    <h2 className='flex items-center mb-4 font-semibold text-xl'>
                        <Music className='mr-2 w-5 h-5 text-blue-600' />
                        Arraial do Monte 2025
                    </h2>
                    <div className='gap-4 grid text-sm'>
                        <div className='flex items-center'>
                            <Clock className='mr-2 w-4 h-4 text-base' />
                            <span>
                                14 e 15 de Agosto de 2025 • 12:00 - Madrugada
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <MapPin className='mr-2 w-4 h-4 text-base' />
                            <span>Monte, Funchal, Ilha da Madeira</span>
                        </div>
                    </div>
                    <p className='mt-4'>
                        O Arraial do Monte é uma celebração tradicional que
                        reúne música, gastronomia e muita animação. Venha viver
                        dois dias de festa com concertos ao vivo, barracas de
                        comida regional, folclore e atividades para toda a
                        família.
                    </p>
                </div>

                <div className='bg-base-300 shadow-sm rounded-lg overflow-hidden'>
                    <div className='p-4 border-b border-base-100'>
                        <h2 className='flex items-center font-semibold text-lg'>
                            <Clock className='mr-2 w-5 h-5 text-green-600' />
                            Calendário
                        </h2>
                    </div>

                    <Calendar schedule={schedule} />
                </div>

                <div className='bg-base-300 shadow-sm rounded-lg overflow-hidden'>
                    <div className='p-4 border-b border-base-100'>
                        <h2 className='flex items-center font-semibold text-lg'>
                            <ScrollText className='mr-2 w-5 h-5 text-amber-600' />
                            Fliers
                        </h2>
                    </div>
                    {/* aqui */}
                    <Downloads files={fileList} />
                </div>
            </div>
        </div>
    );
}

// <a href='/api/download/<filename.ext>' download> Download </a>
