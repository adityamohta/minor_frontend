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
        var url = "http://34.211.158.108:8000/devices/";
        $scope.page = "Devices";
        $scope.loading = false;
        var reqConfig = function(url, params){
            return {
                method: "GET",
                url: url,
                params: params
            }
        };

        var requestContents = $http(reqConfig(url, {number: $routeParams.number}));

        requestContents.success(function (r_data, r_status, r_headers, r_config) {
            console.log(r_data);
        });
        $scope.devices = [
            {
                number:"9560300046",
                network_operator: "Vodafone",
                active: true
            },
            {
                number:"8949620699",
                network_operator: "JIO",
                active: true
            }
        ]



    }
});