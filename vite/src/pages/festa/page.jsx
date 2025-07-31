import { Clock, MapPin, Music } from 'lucide-react';
import { MobileHeader } from '@/components/mobile-header';
import { Calendar } from '@/components/calendar';
import { schedule } from '@/data/static';

export default function Page() {
    return (
        <div className='mx-auto pb-20 md:max-w-2xl min-h-screen'>
            <MobileHeader title='Informação' />

            <div className='space-y-6 mx-auto px-4 py-6 container'>
                <div className='bg-base-300 shadow-sm p-6 rounded-lg'>
                    <h2 className='flex items-center mb-4 font-semibold text-xl'>
                        <Music className='mr-2 w-5 h-5 text-blue-600' />
                        Festa do Monte 2025
                    </h2>
                    <div className='gap-4 grid text-sm'>
                        <div className='flex items-center'>
                            <Clock className='mr-2 w-4 h-4 text-base' />
                            <span>
                                14 e 15 de Agosto de 2025 • 12:00 ás 4:00 e 8:00
                                ás 19:00
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <MapPin className='mr-2 w-4 h-4 text-base' />
                            <span>Monte, Funchal, Ilha da Madeira</span>
                        </div>
                    </div>
                    <p className='mt-4 text-justify'>
                        A Festa do Monte constitui um dos momentos mais
                        significativos da tradição madeirense, integrando fé,
                        cultura e celebração popular numa expressão coletiva.
                        Realizada em honra de Nossa Senhora do Monte, padroeira
                        da cidade do Funchal, esta celebração destaca-se como
                        uma das mais relevantes manifestações religiosas e
                        culturais da Madeira, reconhecida nacional e
                        internacionalmente, e que atrai anualmente milhares de
                        fiéis, emigrantes e visitantes.
                        <br />
                        <br />
                        A edição de 2025 inicia-se a 5 de agosto, com a
                        realização das novenas e missas diárias até ao dia 13,
                        proporcionando um período de preparação espiritual e
                        fortalecimento comunitário. Nos dias 14 e 15 de agosto
                        decorrem os momentos solenes da Festa, incluindo a
                        tradicional procissão em honra de Nossa Senhora do
                        Monte, vivenciada com profunda devoção por todos os
                        participantes.
                        <br />
                        <br />
                        Paralelamente ao carácter religioso, a Festa do Monte
                        assume também uma dimensão social e cultural, com os
                        percursos até ao santuário adornados pelos tradicionais
                        corredores de flores. As áreas de restauração e venda de
                        produtos regionais — desde a gastronomia típica aos
                        doces e artesanato local — contribuem para dinamizar
                        este evento, que se afirma como um dos mais importantes
                        no calendário anual da ilha. Este equilíbrio entre fé e
                        convívio popular reforça a importância da Festa do Monte
                        como um elemento fundamental da identidade e património
                        madeirense.
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
            </div>
        </div>
    );
}
