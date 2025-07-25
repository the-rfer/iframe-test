import 'leaflet/dist/leaflet.css';
import 'leaflet-arrowheads';
import {
    MapContainer,
    TileLayer,
    ScaleControl,
    Polygon,
    Polyline,
    Tooltip,
} from 'react-leaflet';
import {
    venda_de_carne,
    comes_e_bebes,
    venda_de_velas,
    meio_motorizado,
    pequenos_balcoes,
} from '@/data/polygons';
import { acesso_local_1, sentido_unico_1 } from '@/data/transito/11-12-13';
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
    return (
        <MapContainer
            className='z-0 w-full h-full'
            attributionControl={false}
            zoomControl={true}
            zoom={16}
            minZoom={15}
            // maxZoom={18}
            center={[32.676623, -16.900641]}
            maxBoundsViscosity={1.0}
            maxBounds={[
                [32.67, -16.9135],
                [32.6905, -16.885],
            ]}
        >
            <TileLayer
                attribution='Mapa: <a href="https://www.arcgis.com/index.html">ArcGIS</a>'
                // url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
                // url='https://tiles-eu.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}@2x.png' // ou alidade_satellite

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

            <ScaleControl position='bottomleft' imperial={false} />
        </MapContainer>
    );
}

function RenderPolygons({ poly, type, styles }) {
    return poly.features.map((feature, index) => {
        return type === 'line' ? (
            <Polyline
                key={index}
                positions={swapCoordsArray(feature.geometry.coordinates)}
                styles={styles}
            >
                <Tooltip direction='top' sticky>
                    {feature.properties.Entity}
                </Tooltip>
            </Polyline>
        ) : (
            <Polygon
                key={index}
                positions={swapCoordsArray(feature.geometry.coordinates)}
            >
                <Tooltip direction='top' sticky>
                    {feature.properties.Entity}
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

//FIXME:
// 1. styles não estão a ser aplicados corretamente
// 2. arrowheads nas lines não estão a funcionar
function Transito({ day }) {
    switch (day) {
        case 1:
            return day1.map((poly, i) => (
                <RenderPolygons
                    key={i}
                    poly={poly}
                    type='line'
                    styles={{ color: 'red', weight: 3 }}
                />
            ));

        case 2:
            return day2.map((poly, i) => (
                <RenderPolygons
                    key={i}
                    poly={poly}
                    type='line'
                    styles={{ color: 'red', weight: 3 }}
                />
            ));
        case 3:
            return day3.map((poly, i) => (
                <RenderPolygons
                    key={i}
                    poly={poly}
                    type='line'
                    styles={{ color: 'red', weight: 3 }}
                />
            ));
        default:
            return null;
    }
}
