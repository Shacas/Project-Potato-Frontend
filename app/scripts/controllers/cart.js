'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('CartCtrl', function ($scope, $http, ngCart) {
    ngCart.setTaxRate(13.0);
    ngCart.setShipping(5.99);
  });
