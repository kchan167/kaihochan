'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
  .controller('DetailsCtrl', ['$stateParams', 'infoFinder', '$window', function ($stateParams, infoFinder, $window) {
     var details = this;
     // Using service infoFinder to retrieve app details from json files
     infoFinder.getApp($stateParams.id).then(function(data){
         details.data = data;
     });

     this.slideIndex = 1;


     this.showSlides = function(n) {
         var i;
         this.slides = document.getElementsByClassName("mySlides");
         this.dots = document.getElementsByClassName("dot");
         if (n > this.slides.length) {
             this.slideIndex = 1;
        }
         if (n < 1) {
             this.slideIndex = this.slides.length;
         }
         for (i = 0; i < this.slides.length; i++) {
             this.slides[i].style.display = "none";
         }
         for (i = 0; i < this.dots.length; i++) {
             this.dots[i].className = this.dots[i].className.replace(" active", "");
         }
         this.slides[this.slideIndex-1].style.display = "block";
         this.dots[this.slideIndex-1].className += " active";
     }
     // Next/previous controls
     this.plusSlides = function (n) {
         this.showSlides(this.slideIndex += n);
     }
     // Thumbnail image controls
     this.currentSlide = function(n) {
         this.showSlides(this.slideIndex = n);
     }
  }]);
