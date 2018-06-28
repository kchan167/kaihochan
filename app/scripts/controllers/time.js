'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:TimeCtrl
 * @description
 * # TimeCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
  .controller('TimeCtrl', function ($scope, $interval) {
      var tick = function() {
          $scope.clock = Date.now();
      }
      tick();
      $interval(tick, 1000);
  });
