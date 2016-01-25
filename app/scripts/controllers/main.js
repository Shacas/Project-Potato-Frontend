'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('MainCtrl', function ($scope, $http, ngCart) {
    ngCart.setTaxRate(13.0);
    ngCart.setShipping(5.99);
  });
