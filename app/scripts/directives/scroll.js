'use strict';

/**
 * @ngdoc directive
 * @name personalSiteApp.directive:scroll
 * @description
 * # scroll
 */
angular.module('personalSiteApp')
  .directive('scroll', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          var items = element;

          // check if an element is in viewport
          // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
          function isElementInViewport(el) {
              var rect = el.getBoundingClientRect();
              return (
                  rect.top >= 0 &&
                  rect.left >= 0 &&
                  rect.bottom / 1.25 <= (window.innerHeight || document.documentElement.clientHeight) &&
                  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
              );
          }

          function callbackFunc() {
              for (var i = 0; i < items.length; i++) {
                  if (isElementInViewport(items[i])) {
                      items[i].classList.add("in-view");
                  }
              }
          }

          // listen for events
          document.body.addEventListener("load", callbackFunc);
          document.body.addEventListener("scroll", callbackFunc);
          document.body.addEventListener('resize', callbackFunc);
          document.body.addEventListener('focus', callbackFunc);
      }
    };
  });
