DxSample.Index = function (params) {
    var viewModel = {
        lat: ko.observable(40.749825),
        lng: ko.observable(-73.987963),

        mapReadyAction: function (s) {
            var map = s.component;
            
            map.addMarker({
                location: [viewModel.lat(), viewModel.lng()],
                tooltip: 'Location: ' + viewModel.lat() + "; " + viewModel.lng()
            }).done(function (marker) {
                marker.setDraggable(true);
                google.maps.event.addListener(marker, 'dragend', function (e) {
                    viewModel.lat(e.latLng.lat());
                    viewModel.lng(e.latLng.lng());
                });
            });

        }         
    };
    return viewModel;
}
