import { Shield } from 'lucide-react';
import { MobileHeader } from '@/components/mobile-header';
import { contacts } from '@/data/static';
import { ContactList } from '@/components/contacts';

export default function Contacts() {
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
                <ContactList contacts={contacts} />
            </div>
        </div>
    );
}
