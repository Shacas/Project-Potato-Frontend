'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('MainCtrl', function ($scope, $http, ngCart, $sails, $window) {
    ngCart.setTaxRate(13.0);
    ngCart.setShipping(5.99);

    $scope.items = [];
    $sails.get("/product")
        .success(function (data, status, headers, jwr) {
          $scope.items = data;
      })
        .error(function (data, status, headers, jwr) {
          console.log(status);
      });

      $scope.getItems = function() {
        return $scope.items;
      };

  });
