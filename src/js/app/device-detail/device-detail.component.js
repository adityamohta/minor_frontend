'use strict';

angular.module('deviceDetail').component('deviceDetail', {
    templateUrl: '/templates/device-detail.html',
    controller: function ($cookies, $http, $location, $routeParams, $rootScope, $scope) {
        $scope.page = "Device Details";


    }
});