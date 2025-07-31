import { MobileHeader } from '@/components/mobile-header';
import { fileList2 } from '@/data/static';
import { ScrollText } from 'lucide-react';
import { Downloads } from '@/components/downloads';

export default function Contacts() {
    console.log(fileList2['outras'].map((file) => file.name));
    return (
        <div className='mx-auto pb-20 md:max-w-2xl min-h-screen'>
            <MobileHeader title='Contactos' />

            <div className='space-y-6 mx-auto px-4 py-6 container'>
                <div className='bg-base-300 shadow-sm rounded-lg overflow-hidden'>
                    <div className='p-4 border-b border-base-100'>
                        <h2 className='flex items-center font-semibold text-lg'>
                            <ScrollText className='mr-2 w-5 h-5 text-amber-600' />
                            Publicações oficiais
                        </h2>
                        <p className='mt-2 text-sm text-justify'>
                            Nesta secção encontra-se disponível toda a
                            documentação oficial relativa à Festa do Monte.
                        </p>
                    </div>
                    {/* aqui */}
                    {/* <Downloads files={fileList} /> */}
                    <div className='mx-2 mb-2'>
                        <fieldset className='p-4 border border-base-100 rounded-box'>
                            <legend className='fieldset-legend'>
                                Divisão de Mobilidade e Trânsito - Informação
                                Trânsito
                            </legend>
                            <div className='gap-5 my-2 max-w-4xl'>
                                <Downloads files={fileList2['transito']} />
                            </div>
                        </fieldset>

                        <fieldset className='p-4 border border-base-100 rounded-box'>
                            <legend className='fieldset-legend'>
                                Divisão de Gestão de Espaços Públicos e
                                Publicidade - Barracas
                            </legend>
                            <div className='gap-5 my-2 max-w-4xl'>
                                <Downloads files={fileList2['dgep']} />
                            </div>
                        </fieldset>

                        <fieldset className='p-4 border border-base-100 rounded-box'>
                            <legend className='fieldset-legend'>
                                Divisão de Jardins e Espaços Verdes Urbanos
                            </legend>
                            <div className='gap-5 my-2 max-w-4xl'>
                                <Downloads files={fileList2['tontos']} />
                            </div>
                        </fieldset>

                        <fieldset className='p-4 border border-base-100 rounded-box'>
                            <legend className='fieldset-legend'>
                                Divisão de Inovação e Planeamento - Ambiente
                            </legend>
                            <div className='gap-5 my-2 max-w-4xl'>
                                <Downloads files={fileList2['autistas']} />
                            </div>
                        </fieldset>

                        <fieldset className='p-4 border border-base-100 rounded-box'>
                            <legend className='fieldset-legend'>
                                Outras informações
                            </legend>
                            <div className='gap-5 my-2 max-w-4xl'>
                                <Downloads files={fileList2['outras']} />
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
}
