$(function(){  
    var lat=40.749825;
    var lng=-73.987963;
    $("#txtLat").dxTextBox({
        value: lat
    });
    $("#txtLng").dxTextBox({
        value: lng
    });
    $("#map").dxMap({
        zoom: 20,
        width: 1200,
        height: 700,
        onReady: function (s) {
            var map = s.component;

            map.addMarker({
                location: [lat, lng],
                tooltip: 'Location: ' + lat + "; " + lng
            }).done(function (marker) {
                marker.setDraggable(true);
                google.maps.event.addListener(marker, 'dragend', function (e) {
                    $("#txtLat").dxTextBox("instance").option("value", e.latLng.lat());
                    $("#txtLng").dxTextBox("instance").option("value", e.latLng.lng());
                });
            });

        }
    });
});