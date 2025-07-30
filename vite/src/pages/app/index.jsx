import { MapPin, Phone, Info, Calendar } from 'lucide-react';
import { dateCounter } from '@/lib/date';
import { NavLink } from 'react-router';
import { ModeToggle } from '@/components/theme-toggle';
import { useIsMobile } from '@/lib/useMobile';

export default function App() {
    return (
        <div className='pb-20 min-h-screen'>
            {useIsMobile() && (
                <div className='flex justify-end mt-2 mr-2'>
                    <ModeToggle />
                </div>
            )}
            <div className='mx-auto px-4 py-8 container'>
                {/* Header */}
                <div className='mb-8 text-center'>
                    <h1 className='mb-2 font-bold text-3xl'>
                        Festa do Monte 2025
                    </h1>
                    <p className=''>
                        Consulte aqui toda a informação relevante sobre a
                        celebração em honra de Nossa Senhora do Monte.
                    </p>
                    <div className='inline-block bg-accent mt-4 px-4 py-2 rounded-full font-medium text-sm text-accent-content'>
                        📅 {dateCounter()}
                    </div>
                </div>

                {/* Quick Info */}

                <div className='bg-base-200 shadow-md hover:shadow-lg mx-auto mb-6 p-6 rounded-xl max-w-md transition-shadow'>
                    <div className='flex items-center mb-3'>
                        <div className='bg-orange-100 mr-4 p-3 rounded-lg'>
                            <Calendar className='w-6 h-6 text-orange-600' />
                        </div>
                        <div>
                            <h3 className='font-semibold text-lg'>
                                Informação Rápida
                            </h3>
                        </div>
                    </div>
                    <p className='text-sm text-base-content text-justify'>
                        A Festa do Monte é um dos momentos mais emblemáticos da
                        tradição madeirense, unindo fé, cultura e convívio
                        popular em honra de Nossa Senhora do Monte, padroeira do
                        Funchal. Reconhecida pela sua dimensão espiritual e pela
                        energia contagiante, atrai anualmente milhares de fiéis,
                        visitantes e emigrantes. <br />
                        Dos percursos religiosos aos corredores de flores e
                        sabores típicos, o Monte transforma-se num dos pontos
                        mais especiais da ilha nesta altura do ano.
                    </p>
                    <div className='space-y-2 my-6 text-sm'>
                        <div className='flex justify-between'>
                            <span className=''>Datas principais:</span>
                            <span className='font-medium'>
                                14 e 15 de Agosto 2025
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className=''>Local:</span>
                            <span className='font-medium'>Monte, Funchal</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className=''>Início:</span>
                            <span className='font-medium'>
                                dia 14 - 12:00 h | dia 15 - 8:00 h
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className=''>Novenas e Missas:</span>
                            <span className='font-medium'>
                                De 5 a 13 de agosto
                            </span>
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className='gap-6 grid mx-auto max-w-md'>
                    <NavLink to='/app/map' className='block'>
                        <div className='bg-base-200 shadow-md hover:shadow-lg p-6 rounded-xl transition-shadow'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-blue-100 mr-4 p-3 rounded-lg'>
                                    <MapPin className='w-6 h-6 text-blue-600' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-lg'>
                                        Mapa Interativo
                                    </h3>
                                    <p className='text-sm'>
                                        Explore as zonas da festa
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm text-base-content text-justify'>
                                descubra os percursos das procissões, áreas de
                                restauração, bancas de venda e consulte as
                                interdições de trânsito e acessos condicionados.
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/app/info' className='block'>
                        <div className='bg-base-200 shadow-md hover:shadow-lg p-6 rounded-xl transition-shadow'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-green-100 mr-4 p-3 rounded-lg'>
                                    <Info className='w-6 h-6 text-green-600' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-lg'>
                                        Editais e Informações
                                    </h3>
                                    <p className='text-sm'>
                                        Cronograma, trânsito e detalhes
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm text-base-content text-justify'>
                                Consulte o programa completo, horários das
                                celebrações, alterações ao trânsito e todos os
                                pormenores relevantes para viver as festas em
                                segurança e sem imprevistos.
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/app/contact' className='block'>
                        <div className='bg-base-200 shadow-md hover:shadow-lg p-6 rounded-xl transition-shadow'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-purple-100 mr-4 p-3 rounded-lg'>
                                    <Phone className='w-6 h-6 text-purple-600' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-lg'>
                                        Contatos Úteis
                                    </h3>
                                    <p className='text-sm'>
                                        Números de emergência e suporte
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm text-base-content text-justify'>
                                Tenha à mão os números de emergência, apoio
                                médico e outros contactos essenciais para
                                qualquer eventualidade.
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
