'use strict';


angular.module('dashboard').component('dashboard', {
    templateUrl: '/templates/dashboard.html',
    controller: function (
        uiGmapGoogleMapApi,
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
        $scope.devices = [];
        var reqConfig = function(url, params){
            return {
                method: "GET",
                url: url,
                params: params,
                header: {"Authorization": "Negotiate"}
            }
        };

        var requestContents = $http(reqConfig(url, {}));

        requestContents.success(function (r_data, r_status, r_headers, r_config) {
            $scope.devices = r_data;
        });
    }
});