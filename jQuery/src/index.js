$(() => {
  const lat = 40.749825;
  const lng = -73.987963;

  $('#txtLat').dxTextBox({
    value: lat,
  });

  $('#txtLng').dxTextBox({
    value: lng,
  });

  $('#map').dxMap({
    apiKey: {
      google: 'YOUR_API_KEY',
    },
    providerConfig: {
      mapId: 'YOUR_MAP_ID',
    },
    zoom: 20,
    width: 1200,
    height: 700,
    onReady(s) {
      const map = s.component;

      map.addMarker({
        location: [lat, lng],
        tooltip: `Location: ${lat}; ${lng}`,
      }).done((marker) => {
        // eslint-disable-next-line spellcheck/spell-checker
        marker.gmpDraggable = true;

        marker.addListener('dragend', ({ latLng }) => {
          $('#txtLat').dxTextBox('instance').option('value', latLng.lat());
          $('#txtLng').dxTextBox('instance').option('value', latLng.lng());
        });
      });
    },
  });
});
