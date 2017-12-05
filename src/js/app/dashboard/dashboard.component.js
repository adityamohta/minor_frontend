'use strict';


angular.module('dashboard').component('dashboard', {
    templateUrl: '/templates/dashboard.html',
    controller: function (
        $cookies,
        $http,
        $location,
        $routeParams,
        $rootScope,
        $scope
    ) {
        $scope.page = "Yo Beech";
        $scope.loading = false;
    }
});