var wasaby = angular.module('wasaby', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngCookies',
    'ngAria',
    'uiGmapgoogle-maps'
]);

wasaby.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    var defaultState = {
        name: 'accueil',
        url: '/',
        controller: 'appController',
        templateUrl: '../html/app.html'
    };

    $stateProvider.state(defaultState);
});

wasaby.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBJ9Ca4MG0CY-A3IW7KuSXU0vMj4X1jkLI',
//        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});