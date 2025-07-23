import { MapPin, Phone, Info, Calendar } from 'lucide-react';
import { dateCounter } from '@/lib/date';
import { NavLink } from 'react-router';

export default function App() {
    return (
        <div className='pb-20 min-h-screen'>
            <div className='mx-auto px-4 py-8 container'>
                {/* Header */}
                <div className='mb-8 text-center'>
                    <h1 className='mb-2 font-bold text-gray-800 text-3xl'>
                        Arraial do Monte 2025
                    </h1>
                    <p className='text-gray-600'>
                        Encontre toda a informação sobre o evento num só lugar!
                    </p>
                    <div className='inline-block bg-yellow-100 mt-4 px-4 py-2 rounded-full font-medium text-gray-800 text-sm'>
                        📅 {dateCounter()}
                    </div>
                </div>

                {/* Feature Cards */}
                <div className='gap-6 grid mx-auto max-w-md'>
                    <NavLink to='/app/map' className='block'>
                        <div className='bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition-shadow'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-blue-100 mr-4 p-3 rounded-lg'>
                                    <MapPin className='w-6 h-6 text-blue-600' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-800 text-lg'>
                                        Mapa Interativo
                                    </h3>
                                    <p className='text-gray-600 text-sm'>
                                        Localizações do evento e interdições
                                    </p>
                                </div>
                            </div>
                            <p className='text-gray-500 text-sm'>
                                Navegue pelo terreno do arraial, saiba a
                                localização das procissões, comida, vendedores e
                                verifique as informações sobre interdições.
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/app/info' className='block'>
                        <div className='bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition-shadow'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-green-100 mr-4 p-3 rounded-lg'>
                                    <Info className='w-6 h-6 text-green-600' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-800 text-lg'>
                                        Informação do Evento
                                    </h3>
                                    <p className='text-gray-600 text-sm'>
                                        Cronograma, trânsito e detalhes
                                    </p>
                                </div>
                            </div>
                            <p className='text-gray-500 text-sm'>
                                Cronograma completo do evento, procissões,
                                trânsito e todos os detalhes importantes a ter
                                conhecimento.
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/app/contact' className='block'>
                        <div className='bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition-shadow'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-purple-100 mr-4 p-3 rounded-lg'>
                                    <Phone className='w-6 h-6 text-purple-600' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-800 text-lg'>
                                        Contatos Importantes
                                    </h3>
                                    <p className='text-gray-600 text-sm'>
                                        Números de emergência e suporte
                                    </p>
                                </div>
                            </div>
                            <p className='text-gray-500 text-sm'>
                                Acesso rápido a segurança, serviços médicos, e
                                outros contatos essenciais.
                            </p>
                        </div>
                    </NavLink>
                </div>

                {/* Quick Info */}
                <div className='bg-white shadow-md mx-auto mt-8 p-6 rounded-xl max-w-md'>
                    <h3 className='flex items-center mb-4 font-semibold text-gray-800 text-lg'>
                        <Calendar className='mr-2 w-5 h-5 text-orange-600' />
                        Informação Rápida
                    </h3>
                    <div className='space-y-2 text-sm'>
                        <div className='flex justify-between'>
                            <span className='text-gray-600'>Data:</span>
                            <span className='font-medium'>
                                14 e 15 de Agosto 2025
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-600'>Localização:</span>
                            <span className='font-medium'>Monte, Funchal</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-600'>Início:</span>
                            <span className='font-medium'>12:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
