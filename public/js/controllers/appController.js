wasaby.controller('appController', function($scope, $http, appFactory, uiGmapGoogleMapApi) {

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
                id = model.id;
                console.log(id);
                var res = id.replace("WMO", "");
                console.log(res);

                var url = "http://www.ifremer.fr/datavore/exp/datavore/public/GWBUOYNDBCSPECTRA%3EV1/spectra/global/20160101002600/process/?service=generateSpectra&nearest=4600&id=" + res;

                $scope.buoysSpectre = url;


                // $http({
                //     method: 'GET',
                //     url: "http://www.ifremer.fr/datavore/exp/datavore/public/GWBUOYNDBCSPECTRA%3EV1/spectra/global/20160101002600/process/?service=generateSpectra&nearest=4600&id=" + res,
                //     headers: { 'Content-Type': 'application/json' }
                // }).then(function(response) {
                //     console.log(response.data);

                //     var test = false;

                //     while (test == false) {
                //         if (response.data != "") {
                //             test = true;
                //         }
                //     }

                //     if (test == true) {
                //         var buffer = response.data;
                //         var binary = '';
                //         var bytes = new Uint8Array(buffer);
                //         var len = bytes.byteLength;
                //         for (var i = 0; i < len; i++) {
                //             binary += String.fromCharCode(bytes[i]);
                //         }
                //         $scope.buoysSpectre = window.btoa(binary);
                //     }

                // }).catch(function(err) {
                //     console.error('error in getting static img.');
                // });
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