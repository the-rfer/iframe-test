import { ScrollText } from 'lucide-react';
import { MobileHeader } from '@/components/mobile-header';
import { Shield } from 'lucide-react';

export default function Information() {
    return (
        <div className='mx-auto pb-20 md:max-w-2xl min-h-screen'>
            <MobileHeader title='Informação' />

            <div className='space-y-6 mx-auto px-4 py-6 container'>
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

                <div className='bg-base-300 shadow-sm rounded-lg overflow-hidden'>
                    <div className='p-4 border-b border-base-100'>
                        <h2 className='flex items-center font-semibold text-lg'>
                            <ScrollText className='mr-2 w-5 h-5 text-amber-600' />
                            Informações úteis
                        </h2>
                        <p className='mt-2 text-sm text-justify'>
                            Nesta secção encontra tudo o que precisa para
                            aproveitar ao máximo a Festa do Monte: horários das
                            novenas e missas, informações sobre o teleférico,
                            pontos de apoio, serviços disponíveis e outras
                            orientações práticas. <br />
                            Consulte aqui os detalhes essenciais para uma
                            experiência organizada, segura e memorável.
                        </p>
                    </div>
                    <Infos />
                </div>
            </div>
        </div>
    );
}

function Infos() {
    return (
        <div>
            <div className='collapse collapse-arrow border border-base-300'>
                <input type='radio' name='my-accordion-2' defaultChecked />
                <div className='collapse-title font-semibold'>Teleféricos</div>
                <div className='collapse-content text-sm'>
                    <fieldset className='p-4 border border-base-100 rounded-box'>
                        <legend className='fieldset-legend'>
                            Jardim Botânico
                        </legend>
                        <div className='gap-5 columns-1 md:columns-2 my-2 max-w-4xl'>
                            <div>
                                <span className='font-bold'>
                                    Horário de funcionamento
                                </span>
                                <br />
                                9:00h as 17:00h
                            </div>
                            <div>
                                <span className='font-bold'>
                                    Último embarque
                                </span>
                                <br />
                                16:50h
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className='p-4 border border-base-100 rounded-box'>
                        <legend className='fieldset-legend'>
                            Teleféricos da Madeira, S.A.
                        </legend>
                        <div className='gap-5 columns-1 md:columns-2 my-2 max-w-4xl'>
                            <div className='break-inside-avoid'>
                                <span className='font-bold'>
                                    Horário de funcionamento
                                </span>
                                <br />
                                8:45h as 17:45h
                            </div>
                            <div className='break-inside-avoid'>
                                <p className='mb-2'>
                                    <p className='font-bold'>
                                        Horário extraordinário
                                    </p>
                                    <span className='mr-1'>
                                        14 e 15 de Agosto -
                                    </span>
                                    18:00h às 1:00h
                                </p>

                                <p>
                                    Estacionamento gratuito Estacione o seu
                                    carro gratuitamente no Parque Almirante
                                    Reis. Das 18h do dia 14 às 02h do dia 15.
                                    Mediante a apresentação do bilhete do
                                    teleférico na caixa central.
                                </p>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className='collapse collapse-arrow border border-base-300'>
                <input type='radio' name='my-accordion-2' />
                <div className='collapse-title font-semibold'>
                    Horários do Funchal
                </div>
                <div className='collapse-content text-sm'>
                    O serviço excecional dos Horários do Funchal funcionará nos
                    dias 14 de agosto (18:00-04:00) e 15 de agosto
                    (09:30-18:30), com tarifas especiais de 1,80 € ida e 3,20 €
                    ida e volta.
                </div>
            </div>
            <div className='collapse collapse-arrow border border-base-300'>
                <input type='radio' name='my-accordion-2' />
                <div className='collapse-title font-semibold'>
                    Parque de Estacionamento Almirante Reis
                </div>
                <div className='collapse-content text-sm'>
                    Horário de funcionamento: 24 horas. <br />
                    Estacionamento gratuito das 18h do dia 14 às 02h do dia 15
                    mediante a apresentação do bilhete do teleférico na caixa
                    central.
                </div>
            </div>
        </div>
    );
}
