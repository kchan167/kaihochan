'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
// this vs $scope http://www.alloyteam.com/2015/04/angularjs-this-yu-scope/
  .controller('ContactCtrl', ['$scope', '$window','infoFinder', function ($scope, $window, info) {
      var contact = this;
      info.getData().then(function(info){
          contact.contacts = info.data;
      });
      // https://stackoverflow.com/questions/49149946/angularjs-open-default-mail-application-and-populate-to-and-subject-via-link
      // https://www.phpflow.com/jquery/difference-between-window-open-and-window-location-href/
      contact.mailWithLocation = function (email) {
         var emailString = "mailto:" + email + "?+subject=test&email=fggf";
         location.href = emailString;
      }
      contact.mailWithWindowOpen = function(email) {
          var emailString = "mailto:" + email + "?+subject=test&email=fggf";
          $window.open(emailString, "_self");
      }
  }]);
