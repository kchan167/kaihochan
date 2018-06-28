'use strict';

/**
 * @ngdoc service
 * @name personalSiteApp.infoFinder
 * @description
 * # infoFinder
 * Service in the personalSiteApp.
 */
angular.module('personalSiteApp')
  .service('infoFinder', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getData = function() {
        return $http.get( 'data/personal_info.json' );
    };
    this.getApp = function(id) {
        var appFile = 'data/' + id + '.json';
        return $.get(appFile);
    };
  });
