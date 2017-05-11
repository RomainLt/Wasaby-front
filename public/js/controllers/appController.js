wasaby.controller('appController', function($scope, appFactory, uiGmapGoogleMapApi) {

    appFactory.loadBuoys().then(function(data) {
        $scope.map.markers = data;
    });

    appFactory.loadBuoysAll().then(function(data) {
        $scope.zobe = data;
    });

    $scope.map = {
        center: {
            latitude: 48.4,
            longitude: -4.4833
        },
        zoom: 2,
        markers: [], // Markers here
        markersEvents: {
            click: function(marker, eventName, model) {
                $scope.map.window.model = model;
                $scope.map.window.show = true;
            }
        },
        window: {
            marker: {},
            show: false,
            closeClick: function() {
                this.show = false;
            },
            options: {}
        }
    };

    uiGmapGoogleMapApi.then(function(maps) {});
});