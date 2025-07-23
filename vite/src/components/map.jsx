import 'leaflet/dist/leaflet.css';
import {
    MapContainer,
    TileLayer,
    ScaleControl,
    Polygon,
    Tooltip,
} from 'react-leaflet';

import {
    venda_de_carne,
    comes_e_bebes,
    venda_de_velas,
    meio_motorizado,
    pequenos_balcoes,
} from '@/data/polygons';

export default function Map() {
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

            {/* <Polygon positions={monteData.position}>
                    <Tooltip direction='top' sticky>
                        {monteData.name}
                    </Tooltip>
                </Polygon> */}
            <RenderPolygons poly={venda_de_carne} />
            <RenderPolygons poly={comes_e_bebes} />
            <RenderPolygons poly={venda_de_velas} />
            <RenderPolygons poly={meio_motorizado} />
            <RenderPolygons poly={pequenos_balcoes} />

            <ScaleControl position='bottomleft' imperial={false} />
        </MapContainer>
    );
}

function RenderPolygons({ poly }) {
    return poly.features.map((feature, index) => {
        return (
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

    return coords.map(swapCoordsArray);
}
