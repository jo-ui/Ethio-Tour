/* eslint-disable */

// const locations = JSON.parse(document.getElementById('map').dataset.locations);

// mapboxgl.accessToken =
//   'pk.eyJ1Ijoiam8tYiIsImEiOiJjbDQzOG8zeTgwMjk0M2Ntbng1NmdnM3RoIn0.iH2tA3ggtN-KMXQrcS8hZQ';
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/jo-b/cl4su58xy000615s6qaac9nvy',
// });

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoiam8tYiIsImEiOiJjbDQzOG8zeTgwMjk0M2Ntbng1NmdnM3RoIn0.iH2tA3ggtN-KMXQrcS8hZQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jo-b/cl4su58xy000615s6qaac9nvy',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
