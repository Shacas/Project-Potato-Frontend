'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:AdminProductsCtrl
 * @description
 * # AdminProductsCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('AdminProductsCtrl', function ($scope, $http, $sessionStorage, ngCart, $sails, $window) {
    $scope.products = [];

    $sails.get("/product")
        .success(function (data, status, headers, jwr) {
          data.forEach (function(product) {
              $scope.products.push(product);

          });
      })
        .error(function (data, status, headers, jwr) {
          console.log(status);
      });

      $scope.getProduct = function() {
        return $scope.products;
      };
  });
