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
                        Festas do Monte 2025
                    </h1>
                    <p className=''>
                        Encontre toda a informação sobre o evento num só lugar!
                    </p>
                    <div className='inline-block bg-accent mt-4 px-4 py-2 rounded-full font-medium text-sm text-accent-content'>
                        📅 {dateCounter()}
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
                                        Localizações do evento e interdições
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm text-base-content'>
                                Navegue pelo terreno das festas, saiba a
                                localização das procissões, comida, vendedores e
                                verifique as informações sobre alterações a
                                circulação rodoviária.
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
                                        Informação do Evento
                                    </h3>
                                    <p className='text-sm'>
                                        Cronograma, trânsito e detalhes
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm'>
                                Cronograma completo do evento, procissões,
                                trânsito e todos os detalhes importantes a ter
                                conhecimento.
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
                                        Contatos Importantes
                                    </h3>
                                    <p className='text-sm'>
                                        Números de emergência e suporte
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm'>
                                Acesso rápido a segurança, serviços médicos, e
                                outros contatos essenciais.
                            </p>
                        </div>
                    </NavLink>
                </div>

                {/* Quick Info */}
                <div className='bg-base-200 shadow-md mx-auto mt-8 p-6 rounded-xl max-w-md'>
                    <h3 className='flex items-center mb-4 font-semibold text-lg'>
                        <Calendar className='mr-2 w-5 h-5 text-orange-600' />
                        Informação Rápida
                    </h3>
                    <div className='space-y-2 text-sm'>
                        <div className='flex justify-between'>
                            <span className=''>Data:</span>
                            <span className='font-medium'>
                                14 e 15 de Agosto 2025
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className=''>Localização:</span>
                            <span className='font-medium'>Monte, Funchal</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className=''>Início:</span>
                            <span className='font-medium'>12:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
