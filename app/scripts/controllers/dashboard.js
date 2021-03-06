'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('DashboardCtrl', function ($scope, $http, $sessionStorage, ngCart, $sails, $window) {
    $scope.orders = [];
    $scope.products = [];

    var $userSession = $sessionStorage.user;

    $sails.get("/order")
        .success(function (data, status, headers, jwr) {
          data.forEach (function(order) {
            if (order.user.id === $userSession.user.id){
              $scope.orders.push(order);

              var orderId = order.id

              order.products.forEach(function(product){
                var prodId = product.id;
                var name = product.name;
                var price = product.price;

                order.quantity.forEach(function(quantity){

                  var qtyId = quantity.id;
                  if (prodId == qtyId){
                    var product = {"orderId": orderId, "name": name, "price": price, "qty": quantity.quantity};
                    $scope.products.push(product);
                  }
                });
              });
            }
          });
      })
        .error(function (data, status, headers, jwr) {
          console.log(status);
      });

      $scope.getItems = function() {
        return $scope.items;
      };
  });
