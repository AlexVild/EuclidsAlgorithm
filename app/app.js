'use strict'

angular.module('Euclid',
        ['ui.bootstrap',
        'ngRoute'])
.controller('mainController', function($scope){
})
.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
    });
}]);
