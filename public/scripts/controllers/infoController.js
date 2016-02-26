myApp.controller('InfoController', ['$scope', function($scope) {

    $scope.showThis = false;

    $scope.showInfo = function () {
        $scope.showThis = true;
    }

}]);