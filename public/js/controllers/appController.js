wasaby.controller('appController', function ($scope, appFactory, uiGmapGoogleMapApi) {

    $scope.list = [];
    
    appFactory.loadBuoys().then(function(data){
        $scope.markers = data;
    });
    
    $scope.map = {
        center: {
            latitude: 48.4,
            longitude: -4.4833
        },
        zoom: 2,
    };
    
    uiGmapGoogleMapApi.then(function (maps) {});
});