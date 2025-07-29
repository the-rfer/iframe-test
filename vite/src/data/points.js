export const pc_meios = {
    type: 'FeatureCollection',
    name: 'PC0052025_meios_5',
    crs: {
        type: 'name',
        properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
    },
    features: [
        {
            type: 'Feature',
            properties: {
                OBJECTID_1: 0.0,
                OBJECTID: 0.0,
                id: 0.0,
                Viatura: 'ABSC 0X',
                Corporacao: 'CBSF',
            },
            info: {
                nome: 'CBSF',
            },
            styles: {
                color: '#D1495B',
                fillColor: '#D1495B',
                fillOpacity: 0.5,
            },
            geometry: {
                type: 'Point',
                coordinates: [-16.903829648971094, 32.676607615326112],
            },
        },
        {
            type: 'Feature',
            properties: {
                OBJECTID_1: 0.0,
                OBJECTID: 0.0,
                id: 0.0,
                Viatura: 'VFCI 0X',
                Corporacao: 'CBSF',
            },
            info: {
                nome: 'CBSF',
            },
            styles: {
                color: '#D1495B',
                fillColor: '#D1495B',
                fillOpacity: 0.5,
            },
            geometry: {
                type: 'Point',
                coordinates: [-16.907371314365687, 32.676290492235466],
            },
        },
        {
            type: 'Feature',
            properties: {
                OBJECTID_1: 0.0,
                OBJECTID: 0.0,
                id: 0.0,
                Viatura: 'VLCI 1X',
                Corporacao: 'BVM',
            },
            info: {
                nome: 'BVM',
            },
            styles: {
                color: '#D1495B',
                fillColor: '#D1495B',
                fillOpacity: 0.5,
            },
            geometry: {
                type: 'Point',
                coordinates: [-16.898964314973284, 32.675994355701363],
            },
        },
        {
            type: 'Feature',
            properties: {
                OBJECTID_1: 0.0,
                OBJECTID: 0.0,
                id: 0.0,
                Viatura: 'ABSC 1X',
                Corporacao: 'BVM',
            },
            info: {
                nome: 'BVM',
            },
            styles: {
                color: '#D1495B',
                fillColor: '#D1495B',
                fillOpacity: 0.5,
            },
            geometry: {
                type: 'Point',
                coordinates: [-16.898967094367098, 32.675927963727553],
            },
        },
    ],
};

export const pc_psocorros = {
    type: 'FeatureCollection',
    name: 'PC0052025_primeiros_socorros_4',
    crs: {
        type: 'name',
        properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
    },

    features: [
        {
            type: 'Feature',
            properties: { id: '1', PCO: 'PS' },
            info: {
                nome: 'Primeiros socorros',
            },
            styles: {
                color: '#E63946',
                fillColor: '#E63946',
                fillOpacity: 0.5,
            },
            geometry: {
                type: 'Point',
                coordinates: [-16.904130567055905, 32.676502153329523],
            },
        },
    ],
};
