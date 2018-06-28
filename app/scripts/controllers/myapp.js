'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
  .controller('MyAppCtrl', ['$scope', 'infoFinder', '$window', function($scope, infoFinder, $window) {
    var apps = this;
    // Using service infoFinder to retrieve a app list from json file
    infoFinder.getData().then(function(info){
        apps.applist = info.data.apps;
    });

    infoFinder.getData().then(function(info) {
        apps.github = info.data.github;
    })
    $scope.redirect = function(url) {
        $window.open(url);
    }

    // Test function to examine the applist's content
    // apps.getItem = function(id) {
    //     return apps.applist[id];
    // }

    // Show/Hide Function
    // $scope.toggleFilter = function(apps) {
    //     apps.toggle = !apps.toggle;
    // }
}]);
