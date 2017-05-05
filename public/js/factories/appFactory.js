wasaby.factory('appFactory', function ($http) {
    
    var buoysJson = "../../resources/buoys.json";

    return {
        loadBuoys: function(){
            return $http({
                method: 'GET',
                url: buoysJson,
                headers: {'Content-Type': 'application/json'}
            }).then(function(response){
                return response.data;
            });
        },
    }
});