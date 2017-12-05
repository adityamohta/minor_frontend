'use strict';

angular.module('deviceDetail').component('deviceDetail', {
    templateUrl: '/templates/device-detail.html',
    controller: function ($cookies, $http, $location, $routeParams, $rootScope, $scope) {
        $scope.page = "Device Details";
        $scope.device = {};
        $scope.trackings = [];
        var url = "http://34.211.158.108:8000/device/";
        console.log($routeParams.number);
        var reqConfig = function(url, params){
            return {
                method: "GET",
                url: url,
                params: params,
                header: {"Authorization": "Negotiate"}
            }
        };

        var requestContents = $http(reqConfig(url, {"number": $routeParams.number}));

        requestContents.success(function (r_data, r_status, r_headers, r_config) {
            $scope.device = r_data.device;
            $scope.trackings = r_data.trackings;
            console.log(r_data);
            var track = $scope.trackings[0];
            $scope.marker.coords.latitude = track.latitude;
            $scope.marker.coords.longitude = track.longitude;
            $scope.map.center.latitude = track.latitude;
            $scope.map.center.longitude = track.longitude;
        });
        $scope.map = {center: {latitude: 26.8070, longitude: 75.8098 }, zoom: 14 };
        $scope.options = {scrollwheel: false};
        $scope.marker = {
            id: 0,
            coords: {
                latitude: 26.8070,
                longitude: 75.8098
            },
            options: { draggable: true }
        };
    }
});