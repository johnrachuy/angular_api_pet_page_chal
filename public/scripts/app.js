var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        .when('/dog', {
            templateUrl: '/views/templates/dog.html',
            controller: 'DogController',
        })
        .when('/cat', {
            templateUrl: '/views/templates/cat.html',
            controller: 'CatController'
        })
        .when('/bird', {
            templateUrl: '/views/templates/bird.html',
            controller: 'BirdController'
        })
        .when('/shelter', {
            templateUrl: '/views/templates/shelter.html',
            controller: 'ShelterController'
        })
        .otherwise({
            redirectTo: 'home'
        });


}]);



//API Key
//0805e1690cddb763f4f59ebe3be0a201
//API Secret
//316c482c2a1e95f00e6f2e6455c515c2


