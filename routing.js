"use strict";

let app = angular.module('myApp', ['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider
        .when('/', {
             templateUrl : "main.html"
        })
        .when('/London',{
            templateUrl : "London.html"
        })
        .when('/Parizs',{
            templateUrl : "Parizs.html"
        })
        .when('/Roma',{
            templateUrl : "Roma.html"
        })
    });

app.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('fovarosok.txt')
    .then(function(response){
        $scope.adatok = response.data;
        $scope.tomb = $scope.adatok.split('\n');
        $scope.london = $scope.tomb[0].split(';');
        $scope.parizs = $scope.tomb[1].split(';');
        $scope.roma = $scope.tomb[2].split(';');
    });
}]);