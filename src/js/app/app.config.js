'use strict';


angular.module('track').config(
    function (uiGmapGoogleMapApiProvider,
              $locationProvider, $routeProvider, $resourceProvider) {
        uiGmapGoogleMapApiProvider.configure({
            // key: 'AIzaSyD7Y_yd5yGJellbEHQhaS0tU91GKIUWweE',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
        $resourceProvider.defaults.stripTrailingSlashes = false;

        $locationProvider.html5Mode({
            enabled: true
        });

        $routeProvider.when("/", {
            template:"<dashboard></dashboard>"
        }).when("/devices/:number", {
            template:"<device-detail></device-detail>"
        }).otherwise({
            template:"Not Found"
        })

    }  
);