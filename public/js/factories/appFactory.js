wasaby.factory('appFactory', function($http) {

    var buoysJson = "../../resources/buoys.json";

    return {
        loadBuoys: function() {
            return $http({
                method: 'GET',
                url: buoysJson,
                headers: { 'Content-Type': 'application/json' }
            }).then(function(response) {
                return response.data;
            });
        },
        loadBuoysAll: function() {
            return $http({
                method: 'GET',
                url: "http://wasabyback.cleverapps.io/search/",
                headers: { 'Content-Type': 'application/json' }
            }).then(function(response) {
                return response.data;
            });
        },
        loadOneBuoys: function(id) {
                return $http({
                    method: 'GET',
                    url: "http://wasabyback.cleverapps.io/searchabuoy/?id=" + id,
                    headers: { 'Content-Type': 'application/json' }
                }).then(function(response) {
                    return response.data;
                });
            }
            // loadSpectre: function(id) {
            //     return $http({
            //         method: 'GET',
            //         url: "http://www.ifremer.fr/datavore/exp/datavore/public/GWBUOYNDBCSPECTRA%3EV1/spectra/global/20160101002600/process/?service=generateSpectra&nearest=4600&id=" + id,
            //         headers: { 'Content-Type': 'application/json' }
            //     }).then(function(response) {
            //         console.log(response.data);

        //         var buffer = response.data;
        //         var binary = '';
        //         var bytes = new Uint8Array(buffer);
        //         var len = bytes.byteLength;
        //         for (var i = 0; i < len; i++) {
        //             binary += String.fromCharCode(bytes[i]);
        //         }
        //         return window.btoa(binary);

        //     }).catch(function(err) {
        //         console.error('error in getting static img.');
        //     });
        //}
    }
});