'use strict';


angular.module('track').config(
    function (uiGmapGoogleMapApiProvider,
              $locationProvider, $routeProvider, $resourceProvider) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
        $resourceProvider.defaults.stripTrailingSlashes = false;

        $locationProvider.html5Mode({
            enabled: true
        });

        $routeProvider.when("/", {
            template:"<dashboard></dashboard>"
        }).otherwise({
            template:"Not Found"
        })

    }  
);