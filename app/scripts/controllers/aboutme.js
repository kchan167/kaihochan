'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:AboutmeCtrl
 * @description
 * # AboutmeCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
  .controller('AboutmeCtrl', ['$scope', '$window','infoFinder', function ($scope, $window, info, $http) {
      var about = this;
      info.getData().then(function(info){
          about.data = info.data;
      });
      about.openResume = function(url) {
          $window.open(url);
      }
      about.openLinkedin = function(url) {
          $window.open(url);
      }
      $scope.toggleFilter = function(item) {
          item.toggle = !item.toggle;
      }
  }]);
