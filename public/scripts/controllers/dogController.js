myApp.controller('DogController', ['$scope', '$http', function($scope, $http) {
    $scope.message = 'Dog Controller!';

    function petFinder() {
        // API key
        var key = '0805e1690cddb763f4f59ebe3be0a201';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=dog';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.animal = response.data.petfinder.pet;
                console.log($scope.animal);
            }
        );
    }

    petFinder();

    console.log('Dog Controller');
}]);