import { Phone } from 'lucide-react';

export function ContactList({ contacts }) {
    return (
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
                        {category.contacts.map((contact, contactIndex) => (
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
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
