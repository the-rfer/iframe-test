import { HelpCircle, Shield } from 'lucide-react';

export const schedule = [
    {
        day: 'Quinta, 14 de Agosto',
        events: [
            {
                time: '12:00',
                event: 'Oração a Nª Srª do Monte e início da Guarda Honra',
                location: 'Igreja do Monte',
            },
            {
                time: '16:00',
                event: 'Animação Musical',
                location:
                    'Largo da Fonte | Adro da Igreja | Caminho das Babosa | Largo das Babosas',
            },
            {
                time: '17:00',
                event: 'Comes e bebes',
                location: 'Casa de Chá',
            },
            {
                time: '20:30',
                event: 'Oração do Terço',
                location: 'Igreja do Monte',
            },
            {
                time: '21:00',
                event: 'Missa solene - Pregação do Pároco',
                location: 'Igreja do Monte',
            },
        ],
    },
    {
        day: 'Sexta, 15 de Agosto',
        events: [
            {
                time: '08:00',
                event: 'Missa do Romeiro presidida pelo Pároco',
                location: 'Igreja do Monte',
            },
            {
                time: '09:45',
                event: 'Oração do Terço',
                location: 'Igreja do Monte',
            },
            {
                time: '11:00',
                event: 'Missa solene presidida pelo Bispo do Funchal, seguida pela procissão',
                location: 'Igreja do Monte',
            },
            {
                time: '13:30',
                event: 'Animação Musical',
                location:
                    'Largo da Fonte | Adro da Igreja | Caminho das Babosa | Largo das Babosas',
            },
            {
                time: '19:00',
                event: 'Missa presidida pelo pároco',
                location: 'Igreja do Monte',
            },
            {
                time: '20:30',
                event: 'Fim da Guarda de Honra a Nª Srª do Monte',
                location: 'Igreja do Monte',
            },
        ],
    },
];

export const contacts = [
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
                name: 'Proteção civil',
                phone: '291 700 112',
                description: 'Serviço Regional de Proteção Civil',
            },
            //         {
            //             name: 'Tenda Médica',
            //             phone: '(555) 123-4568',
            //             description: 'Primeiros socorros e assistência médica',
            //         },
        ],
        // },
        // {
        //     category: 'Apoio ao Evento',
        //     icon: HelpCircle,
        //     color: 'text-blue-600 bg-blue-100',
        //     contacts: [
        //         {
        //             name: 'Information Desk',
        //             phone: '(555) 123-4569',
        //             description: 'Informações gerais do evento',
        //         },
        //         {
        //             name: 'Lost & Found',
        //             phone: '(555) 123-4570',
        //             description: 'Reportar itens perdidos e encontrados',
        //         },
        //         {
        //             name: 'Guest Services',
        //             phone: '(555) 123-4571',
        //             description: 'Assistência e reclamações',
        //         },
        //     ],
    },
];

export const fileList = [
    {
        name: 'Horários do teleférico (Campanha viagens)',
        file: 'horarios.png',
    },
    {
        name: 'Festas do Monte 2025',
        file: 'arraial.png',
    },
    {
        name: 'Condicionamento das estradas',
        file: 'estradas.pdf',
    },
];

export const legenda = [
    {
        legend: 'Meio motorizado',
        slug: 'meio_motorizado',
        tw: 'bg-[#fc4006] w-4 h-3 mr-2 relative',
    },
    {
        legend: 'Pequenos balcões',
        slug: 'pequenos_balcoes',
        tw: 'bg-[#9fff7e] w-4 h-3 mr-2 relative',
    },
    {
        legend: 'Venda de velas',
        slug: 'venda_de_velas',
        tw: 'bg-[#7edfff] w-4 h-3 mr-2 relative',
    },
    {
        legend: 'Venda de carne',
        slug: 'venda_de_carne',
        tw: 'bg-[#fce910] w-4 h-3 mr-2 relative',
    },
    {
        legend: 'Comes e bebes',
        slug: 'comes_e_bebes',
        tw: 'bg-[#dd11dd] w-4 h-3 mr-2 relative',
    },
    {
        legend: 'Meios proteção civil',
        slug: 'pc_meios',
        tw: 'bg-[#D1495B] w-4 h-4 mr-2 relative rounded-full',
    },
    {
        legend: 'Primeiros socorros',
        slug: 'pc_psocorros',
        tw: 'bg-[#E63946] w-4 h-4 mr-2 relative rounded-full',
    },
];

export const day_1 = [
    {
        legend: 'Circulação habitual',
        tw: 'bg-[#808080] w-6 h-1.5',
        css: null,
    },
    {
        legend: 'Circulação condicionada ao acesso local',
        tw: 'bg-[#9370DB] w-6 h-1.5',
        css: null,
    },
    {
        legend: 'Circulação condiconada a sentido único',
        tw: 'bg-[yellow] w-6 h-1.5 relative',
        css: {
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '8px solid #E6B800',
            marginLeft: '8px',
            position: 'absolute',
            top: -2.6,
        },
    },
];

export const day_2 = [
    {
        legend: 'Circulação habitual',
        tw: 'bg-[#808080] w-6 h-1.5',
        css: null,
    },
    {
        legend: 'Circulação interrompida, exceto taxis e moradores',
        tw: 'bg-[#9370DB] w-6 h-1.5',
        css: null,
    },
    {
        legend: 'Circulação interrompida',
        tw: 'w-6 h-1.5 bg-[#FF0000]',
        css: null,
    },
    {
        legend: 'Circulação condiconada a sentido único',
        tw: 'bg-[yellow] w-6 h-1.5 relative',
        css: {
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '8px solid #E6B800',
            marginLeft: '8px',
            position: 'absolute',
            top: -2.6,
        },
    },
];

export const day_3 = [
    {
        legend: 'Circulação habitual',
        tw: 'bg-[#808080] w-6 h-1.5',
        css: null,
    },
    {
        legend: 'Circulação condicionada ao acesso local',
        tw: 'bg-[#9370DB] w-6 h-1.5',
        css: null,
    },
    {
        legend: 'Circulação interrompida',
        tw: 'w-6 h-1.5 bg-[#FF0000]',
        css: null,
    },
    {
        legend: 'Circulação condiconada a sentido único',
        tw: 'bg-[yellow] w-6 h-1.5 relative',
        css: {
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '8px solid #E6B800',
            marginLeft: '8px',
            position: 'absolute',
            top: -2.6,
        },
    },
];
