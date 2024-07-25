import React from 'react'
import DeckGL from '@deck.gl/react';
import StaticMap from 'react-map-gl';
import maplibregl from 'maplibre-gl';
function Map({apiKey,coordiates={lat:20.5937,lng:78.9629},zoom=8,width="100vw",height="100vh"}) {

    const [viewState, setViewState] = React.useState({
        latitude:coordiates.lat,
        longitude: coordiates.lng,
        zoom: zoom
      });

  return (

    <DeckGL
        style={{ width: width, height: height, overflow: "hidden" }}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller={true}
        layers={[]}
      >
          <StaticMap
              mapLib={maplibregl}
              mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json?"
              transformRequest={(url, resourceType) => {
                url = url + '&api_key='+apiKey;
                return { url, resourceType };
              }}
            />
      </DeckGL>

  )
}

export default Map