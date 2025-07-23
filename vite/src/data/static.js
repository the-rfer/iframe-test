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

export const fileList = [
    {
        name: 'Horários do funchal (Campanha viagens)',
        file: 'horarios.png',
    },
    {
        name: 'Arraial do Monte 2025',
        file: 'arraial.png',
    },
];
