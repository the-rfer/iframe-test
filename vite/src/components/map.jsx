import 'leaflet/dist/leaflet.css';
import 'leaflet-polylinedecorator';
import L from 'leaflet';
import { useEffect } from 'react';
import { useIsMobile } from '@/lib/useMobile';
import { legenda, day_1, day_2, day_3 } from '@/data/static';
import {
    MapContainer,
    TileLayer,
    ScaleControl,
    Polygon,
    Polyline,
    Tooltip,
    useMap,
    Pane,
    Marker,
} from 'react-leaflet';
import {
    venda_de_carne,
    comes_e_bebes,
    venda_de_velas,
    meio_motorizado,
    pequenos_balcoes,
} from '@/data/polygons';
import {
    acesso_local_1,
    sentido_unico_1,
    circulacao_habitual_1,
} from '@/data/transito/11-12-13';
import {
    sentido_unico_2,
    via_interrompida_1,
    acesso_local_2,
    circulacao_habitual_2,
} from '@/data/transito/14-15';
import {
    via_interrompida_2,
    sentido_unico_3,
    acesso_local_3,
    circulacao_habitual_3,
} from '@/data/transito/17';
import {
    pc_meios,
    pc_psocorros,
    taxi,
    sanitarios,
    c_vidro,
    c_papel,
    c_emb,
    c_ri,
} from '@/data/points';
import bombeiro from '@/assets/pc-ft.svg';
import cruz from '@/assets/pc-rc.svg';
import taxisvg from '@/assets/taxi.svg';
import emb from '@/assets/embalao.svg';
import pap from '@/assets/papelao.svg';
import ri from '@/assets/ri.svg';
import vid from '@/assets/vidrao.svg';
import wc from '@/assets/wc.svg';

const day1 = [circulacao_habitual_1, acesso_local_1, sentido_unico_1];
const day2 = [
    circulacao_habitual_2,
    sentido_unico_2,
    acesso_local_2,
    via_interrompida_1,
];
const day3 = [
    via_interrompida_2,
    circulacao_habitual_3,
    sentido_unico_3,
    acesso_local_3,
];
const barracas = [
    { slug: 'venda_de_carne', poly: venda_de_carne, type: 'poly' },
    { slug: 'comes_e_bebes', poly: comes_e_bebes, type: 'poly' },
    { slug: 'venda_de_velas', poly: venda_de_velas, type: 'poly' },
    { slug: 'meio_motorizado', poly: meio_motorizado, type: 'poly' },
    { slug: 'pequenos_balcoes', poly: pequenos_balcoes, type: 'poly' },
    { slug: 'pc_meios', poly: pc_meios, type: 'point' },
    { slug: 'pc_psocorros', poly: pc_psocorros, type: 'point' },
    { slug: 'Taxi', poly: taxi, type: 'point' },
    { slug: 'Sanitários', poly: sanitarios, type: 'point' },
    { slug: 'Embalão', poly: c_emb, type: 'point' },
    { slug: 'Vidrão', poly: c_vidro, type: 'point' },
    { slug: 'Papelão', poly: c_papel, type: 'point' },
    { slug: 'R_I', poly: c_ri, type: 'point' },
];

export default function Map({ day, barracaState }) {
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
                [32.66, -16.92], // Moved southwest (lower-left) corner down and left
                [32.6905, -16.885], // Kept northeast (upper-right) corner the same
            ]}
        >
            <TileLayer
                attribution='Mapa: <a href="https://www.arcgis.com/index.html">ArcGIS</a>'
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                eventHandlers={{
                    tileerror: (e) => {
                        console.log('Tile load error:', e);
                        console.log('Failed tile URL:', e.tile?.src);
                    },
                }}
            />

            <Pane name='upper' pane='upper' style={{ zIndex: 500 }} />
            <Pane name='lower' pane='lower' style={{ zIndex: 499 }} />

            {barracas
                .filter(({ slug }) => barracaState[slug])
                .map(({ poly, slug, type }) => (
                    <RenderPolygons key={slug} poly={poly} type={type} />
                ))}

            <Transito day={day} />

            {!isMobile && <Legend day={day} barracaState={barracaState} />}
            <ScaleControl position='bottomleft' imperial={false} />
        </MapContainer>
    );
}

const bombeiroIcon = L.icon({
    iconUrl: bombeiro,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

const cruzIcon = L.icon({
    iconUrl: cruz,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

const taxiIcon = L.icon({
    iconUrl: taxisvg,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

const saniIcon = L.icon({
    iconUrl: wc,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

const viIcon = L.icon({
    iconUrl: vid,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

const papIcon = L.icon({
    iconUrl: pap,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

const embIcon = L.icon({
    iconUrl: emb,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

const riIcon = L.icon({
    iconUrl: ri,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

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
        ) : type === 'poly' ? (
            <Polygon key={index} positions={positions} pathOptions={styles}>
                <Tooltip direction='top' sticky>
                    {feature.info?.nome}
                </Tooltip>
            </Polygon>
        ) : (
            <Marker
                key={index}
                radius={6}
                position={positions}
                pathOptions={styles}
                icon={
                    feature.info?.nome === 'Primeiros socorros'
                        ? cruzIcon
                        : feature.info?.nome === 'Taxi'
                        ? taxiIcon
                        : feature.info?.nome === 'Sanitários'
                        ? saniIcon
                        : feature.info?.nome === 'Vidrão'
                        ? viIcon
                        : feature.info?.nome === 'Papelão'
                        ? papIcon
                        : feature.info?.nome === 'Embalão'
                        ? embIcon
                        : feature.info?.nome === 'R.I'
                        ? riIcon
                        : bombeiroIcon
                }
            >
                <Tooltip direction='top' sticky>
                    {feature.info?.nome}
                </Tooltip>
            </Marker>
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

export function Legend({ day, barracaState }) {
    const isMobile = useIsMobile();

    let data;

    // definir dados da legenda baseados no dia
    switch (day) {
        case 1:
            data = day_1;
            break;
        case 2:
            data = day_2;
            break;
        case 3:
            data = day_3;
            break;
        default:
            null;
            break;
    }

    if (
        Object.values(barracaState).every((value) => value === false) &&
        data == null
    )
        return;

    return (
        <div
            className={
                isMobile
                    ? ' flex w-full shadow-sm'
                    : 'leaflet-right w-fit shadow-md leaflet-bottom p-4'
            }
        >
            <div className='bg-base-100 bg-opacity-90 p-3 rounded-lg w-[100%] leaflet-control'>
                <h4 className='mb-2 font-bold'>Legenda</h4>
                <div>
                    <div className='mb-2 pb-2 border-gray-200/50 border-b'>
                        {day > 0 &&
                            data.map((day, index) => {
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
                    <div>
                        {legenda
                            .filter(({ slug }) => barracaState[slug])
                            .map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='flex items-center gap-2'
                                    >
                                        {item.slug === 'pc_meios' ? (
                                            <img
                                                src={bombeiro}
                                                height={16}
                                                width={16}
                                            />
                                        ) : item.slug === 'pc_psocorros' ? (
                                            <img
                                                src={cruz}
                                                height={16}
                                                width={16}
                                            />
                                        ) : item.slug === 'Taxi' ? (
                                            <img
                                                src={taxisvg}
                                                height={16}
                                                width={16}
                                            />
                                        ) : item.slug === 'Sanitários' ? (
                                            <img
                                                src={wc}
                                                height={16}
                                                width={16}
                                            />
                                        ) : item.slug === 'Embalão' ? (
                                            <img
                                                src={emb}
                                                height={16}
                                                width={16}
                                            />
                                        ) : item.slug === 'Vidrão' ? (
                                            <img
                                                src={vid}
                                                height={16}
                                                width={16}
                                            />
                                        ) : item.slug === 'Papelão' ? (
                                            <img
                                                src={pap}
                                                height={16}
                                                width={16}
                                            />
                                        ) : item.slug === 'R_I' ? (
                                            <img
                                                src={ri}
                                                height={16}
                                                width={16}
                                            />
                                        ) : (
                                            <div className={item.tw}></div>
                                        )}
                                        <span>{item.legend}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}
