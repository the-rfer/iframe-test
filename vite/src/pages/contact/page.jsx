import { HelpCircle, Phone, Shield } from 'lucide-react';
import { MobileHeader } from '@/components/mobile-header';

export default function Contacts() {
    const contacts = [
        {
            category: 'Serviços de Emergência',
            icon: Shield,
            color: 'text-red-600 bg-red-100',
            contacts: [
                {
                    name: 'Linha de Emergência',
                    phone: '112',
                    description: 'Polícia, Bombeiros, Médicos',
                },
                {
                    name: 'Segurança do Evento',
                    phone: '(555) 123-4567',
                    description: 'Segurança do festival 24/7',
                },
                {
                    name: 'Tenda Médica',
                    phone: '(555) 123-4568',
                    description: 'Primeiros socorros e assistência médica',
                },
            ],
        },
        {
            category: 'Apoio ao Evento',
            icon: HelpCircle,
            color: 'text-blue-600 bg-blue-100',
            contacts: [
                {
                    name: 'Information Desk',
                    phone: '(555) 123-4569',
                    description: 'Informações gerais do evento',
                },
                {
                    name: 'Lost & Found',
                    phone: '(555) 123-4570',
                    description: 'Reportar itens perdidos e encontrados',
                },
                {
                    name: 'Guest Services',
                    phone: '(555) 123-4571',
                    description: 'Assistência e reclamações',
                },
            ],
        },
    ];

    return (
        <div className='mx-auto pb-20 md:max-w-2xl min-h-screen'>
            <MobileHeader title='Contactos' />

            <div className='mx-auto px-4 py-6 container'>
                <div className='bg-red-50 mb-6 p-4 border border-red-200 rounded-lg'>
                    <div className='flex items-center mb-2'>
                        <Shield className='mr-2 w-5 h-5 text-red-600' />
                        <h3 className='font-semibold text-red-800'>
                            Emergência
                        </h3>
                    </div>
                    <p className='text-red-700 text-sm'>
                        Para emergências imediatas, contacto{' '}
                        <strong>112</strong>. Para questões do arraial não
                        urgentes, use os contatos abaixo.
                    </p>
                </div>

                <div className='space-y-6'>
                    {contacts.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className='bg-white shadow-sm rounded-lg overflow-hidden'
                        >
                            <div className='p-4 border-gray-100 border-b'>
                                <div className='flex items-center'>
                                    <div
                                        className={`p-2 rounded-lg mr-3 ${category.color}`}
                                    >
                                        <category.icon className='w-5 h-5' />
                                    </div>
                                    <h2 className='font-semibold text-gray-800 text-lg'>
                                        {category.category}
                                    </h2>
                                </div>
                            </div>

                            <div className='divide-y divide-gray-100'>
                                {category.contacts.map(
                                    (contact, contactIndex) => (
                                        <div key={contactIndex} className='p-4'>
                                            <div className='flex justify-between items-start'>
                                                <div className='flex-1'>
                                                    <h3 className='mb-1 font-medium text-gray-800'>
                                                        {contact.name}
                                                    </h3>
                                                    <p className='mb-2 text-gray-600 text-sm'>
                                                        {contact.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='flex flex-wrap gap-2'>
                                                <a
                                                    href={`tel:${contact.phone}`}
                                                    className='inline-flex items-center bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded-lg font-medium text-blue-700 text-sm transition-colors'
                                                >
                                                    <Phone className='mr-1 w-4 h-4' />
                                                    {contact.phone}
                                                </a>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
