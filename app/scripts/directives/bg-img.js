'use strict';

/**
 * @ngdoc directive
 * @name personalSiteApp.directive:bgImg
 * @description
 * # bgImg
 */
angular.module('personalSiteApp')
  .directive('bgImg', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          var url = attrs.bgImg;
          element.css({
              'background-image': 'url(' + url + ')',
              'background-size': 'cover'
          });
      }
    };
  });
