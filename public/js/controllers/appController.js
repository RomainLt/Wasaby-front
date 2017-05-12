wasaby.controller('appController', function($scope, appFactory, uiGmapGoogleMapApi) {

    appFactory.loadBuoys().then(function(data) {
        $scope.map.markers = data;
    });

    // appFactory.loadBuoysAll().then(function(data) {
    //     $scope.zobe = data;
    // });

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

    // $scope.searchBuoysByClick = function(id) {
    //     console.log("hello");
    //     console.log(id);
    //     $scope.dataBuoys = id;
    // }

    uiGmapGoogleMapApi.then(function(maps) {});

    $scope.searchBuoysByID = function() {
        id = $scope.buoysID;
        appFactory.loadOneBuoys(id).then(function(data) {
            console.log(data);
            $scope.dataBuoys = data;
            if (document.getElementById("buoysById").style.display == "none")
                document.getElementById("buoysById").style.display = "block";
            else
                document.getElementById("buoysById").style.display = "none";
        });
    };
});

wasaby.controller('markController', function($scope) {
    $scope.searchByClick = function() {
        if (document.getElementById("buoysByClick").style.display == "none")
            document.getElementById("buoysByClick").style.display = "block";
        else
            document.getElementById("buoysByClick").style.display = "none";
    };
});