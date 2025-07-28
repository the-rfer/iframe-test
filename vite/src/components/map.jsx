import 'leaflet/dist/leaflet.css';
import 'leaflet-polylinedecorator';
import L from 'leaflet';
import { useEffect } from 'react';
import { useIsMobile } from '@/lib/useMobile';
import { acesso_local_1, sentido_unico_1 } from '@/data/transito/11-12-13';
import {
    MapContainer,
    TileLayer,
    ScaleControl,
    Polygon,
    Polyline,
    Tooltip,
    useMap,
} from 'react-leaflet';
import {
    venda_de_carne,
    comes_e_bebes,
    venda_de_velas,
    meio_motorizado,
    pequenos_balcoes,
} from '@/data/polygons';
import {
    sentido_unico_2,
    via_interrompida_1,
    acesso_local_2,
} from '@/data/transito/14-15';
import {
    via_interrompida_2,
    sentido_unico_3,
    acesso_local_3,
} from '@/data/transito/17';

const day1 = [acesso_local_1, sentido_unico_1];
const day2 = [sentido_unico_2, via_interrompida_1, acesso_local_2];
const day3 = [via_interrompida_2, sentido_unico_3, acesso_local_3];

const barracas = [
    venda_de_carne,
    comes_e_bebes,
    venda_de_velas,
    meio_motorizado,
    pequenos_balcoes,
];

export default function Map({ day }) {
    const isMobile = useIsMobile();

    return (
        <MapContainer
            className='z-0 w-full h-full'
            attributionControl={false}
            zoomControl={true}
            zoom={16}
            minZoom={16}
            center={[32.676623, -16.900641]}
            maxBoundsViscosity={1.0}
            maxBounds={[
                [32.67, -16.9135],
                [32.6905, -16.885],
            ]}
        >
            <TileLayer
                attribution='Mapa: <a href="https://www.arcgis.com/index.html">ArcGIS</a>'
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                //DEBUGGING:
                eventHandlers={{
                    tileerror: (e) => {
                        console.log('Tile load error:', e);
                        console.log('Failed tile URL:', e.tile?.src);
                    },
                }}
            />

            {barracas.map((poly, i) => {
                return <RenderPolygons key={i} poly={poly} type='poly' />;
            })}
            <Transito day={day} />

            {!isMobile && <Legend day={day} />}
            <ScaleControl position='bottomleft' imperial={false} />
        </MapContainer>
    );
}

function RenderPolygons({ poly, type }) {
    return poly.features.map((feature, index) => {
        const styles = feature.styles;
        let positions = swapCoordsArray(feature.geometry.coordinates);

        // corrigir orientação das setas
        if (feature.properties.Entity?.includes('sentido_unico')) {
            if (feature.properties.orientation === 'sul') {
                positions = positions.map((line) => line.reverse());
            }
        }

        return type === 'line' ? (
            <div key={index}>
                <Polyline positions={positions} pathOptions={styles} />

                {feature.properties.Entity?.includes('sentido_unico') && (
                    <ArrowDecorator
                        positions={positions}
                        color={feature.properties.styles?.color}
                    />
                )}
            </div>
        ) : (
            <Polygon key={index} positions={positions} pathOptions={styles}>
                <Tooltip direction='top' sticky>
                    {feature.properties?.NOME}
                </Tooltip>
            </Polygon>
        );
    });
}

function swapCoordsArray(coords) {
    if (typeof coords[0] === 'number' && coords.length === 2) {
        return [coords[1], coords[0]];
    }
    // chamada recursiva para deep nest arrays
    return coords.map(swapCoordsArray);
}

function Transito({ day }) {
    switch (day) {
        case 1:
            return day1.map((poly, i) => (
                <RenderPolygons key={i} poly={poly} type='line' />
            ));

        case 2:
            return day2.map((poly, i) => (
                <RenderPolygons key={i} poly={poly} type='line' />
            ));
        case 3:
            return day3.map((poly, i) => (
                <RenderPolygons key={i} poly={poly} type='line' />
            ));
        default:
            return null;
    }
}

function ArrowDecorator({ positions, color }) {
    const map = useMap();

    useEffect(() => {
        const polyline = L.polyline(positions, {
            color: color || '#000',
            opacity: 0,
        });

        polyline.addTo(map);

        const decorator = L.polylineDecorator(polyline, {
            patterns: [
                {
                    offset: 25,
                    repeat: 100,
                    symbol: L.Symbol.arrowHead({
                        pixelSize: 10,
                        headAngle: 45,
                        polygon: true,
                        pathOptions: {
                            color: color || '#E6B800',
                            fillColor: color || '#E6B800',
                            fillOpacity: 0.8,
                            weight: 2,
                            opacity: 0.9,
                            stroke: true,
                            lineCap: 'round',
                            lineJoin: 'round',
                            smoothFactor: 1.5,
                        },
                    }),
                },
                {
                    offset: '50%',
                    repeat: 0,
                    symbol: L.Symbol.arrowHead({
                        pixelSize: 12,
                        headAngle: 45,
                        polygon: true,
                        pathOptions: {
                            color: color || '#E6B800',
                            fillColor: color || '#E6B800',
                            fillOpacity: 1,
                            weight: 2.5,
                            opacity: 1,
                            stroke: true,
                            lineCap: 'round',
                            lineJoin: 'round',
                            smoothFactor: 1.5,
                        },
                    }),
                },
            ],
        }).addTo(map);

        return () => {
            decorator.remove();
            polyline.remove();
        };
    }, [positions, color, map]);

    return null;
}

export function Legend({ day }) {
    const isMobile = useIsMobile();

    let data;

    // definir dados da legenda baseados no dia
    switch (day) {
        case 1:
            data = [
                {
                    legend: 'circulação rodoviária condicionada ao acesso local',
                    tw: 'bg-[#9370DB] w-6 h-1.5',
                    css: null,
                },
                {
                    legend: 'circulação rodoviária condiconada a sentido único',
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
            break;
        case 2:
            data = [
                {
                    legend: 'circulação rodoviária interrompida, exceto taxis e moradores',
                    tw: 'bg-[#9370DB] w-6 h-1.5',
                    css: null,
                },
                {
                    legend: 'circulação rodoviária interrompida',
                    tw: 'w-6 h-1.5 bg-[#FF0000]',
                    css: null,
                },
                {
                    legend: 'circulação rodoviária condiconada a sentido único',
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
            break;
        case 3:
            data = [
                {
                    legend: 'circulação rodoviária condicionada ao acesso local',
                    tw: 'bg-[#9370DB] w-6 h-1.5',
                    css: null,
                },
                {
                    legend: 'circulação rodoviária interrompida',
                    tw: 'w-6 h-1.5 bg-[#FF0000]',
                    css: null,
                },
                {
                    legend: 'circulação rodoviária condiconada a sentido único',
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
            break;
        default:
            null;
            break;
    }

    if (!data) return;

    return (
        <div
            className={
                isMobile ? ' flex w-full ' : 'leaflet-right leaflet-bottom p-4'
            }
        >
            <div className='bg-base-100 bg-opacity-90 shadow-md p-3 rounded-lg w-[100%] leaflet-control'>
                <h4 className='mb-2 font-bold'>Legenda</h4>
                <div className='space-y-2'>
                    {data.map((day, index) => {
                        return (
                            <div
                                key={index}
                                className='flex items-center gap-2'
                            >
                                <div className={day.tw}>
                                    {day.css && (
                                        <div
                                            className='w-0 h-0'
                                            style={day.css}
                                        />
                                    )}
                                </div>
                                <span>{day.legend}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
