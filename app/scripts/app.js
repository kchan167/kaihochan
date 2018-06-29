'use strict';

/**
 * @ngdoc overview
 * @name personalSiteApp
 * @description
 * # personalSiteApp
 *
 * Main module of the application.
 */
 var scrollContent = function($rootScope, $anchorScroll) {
     $rootScope.$on("$locationChangeSuccess", function() {
         $anchorScroll();
     });
 };

 if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('https://kchan167.github.io/kaihochan/service_worker.js').then(function(registration) {
         //Registration was successful
         console.log('ServiceWorker registration successful with scope: ', registration.scope);
     }).catch(function(err) {
         //registration failed :(
         console.log('ServiceWorker registration failed: ', err);
     });
 }

angular.module('app', []).config(function($locationProvider) {
      $locationProvider.html5Mode(true);
    });

angular
  .module('personalSiteApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl as contact'
        })
        .state('myApp', {
            url: '/myapp',
            templateUrl: 'views/myapp.html',
            controller: 'MyAppCtrl as apps'
        })
        .state('myApp.details', {
            url: '/detail/:id',
            templateUrl: 'views/details.html',
            controller: 'DetailsCtrl as details',
            onEnter: scrollContent
        })
        .state('aboutme', {
            url: '/',
            templateUrl: 'views/aboutme.html',
            controller: 'AboutmeCtrl as about',
            resolve: function(){
                console.log("testing");
            }
        });
 }]);
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});
