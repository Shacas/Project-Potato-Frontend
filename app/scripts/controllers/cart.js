'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('CartCtrl', function ($scope, $http, ngCart, $sessionStorage, $sails, $location, Auth) {
    ngCart.setTaxRate(13.0);
    ngCart.setShipping(5.99);

    $scope.submitOrder = function (){

      if (!Auth.isAuthenticated()) {
        window.location = '#/login';
      }else{
        if (ngCart.getTotalItems() === 0){
          // Message buy
          $location.path('/');
        }else{
          var itemsId = [];
          var items = ngCart.getCart().items;

          var itemsQty = [];

          items.forEach (function(item) {
            var idObj = {"id": item._id};
            var qty = {"id": item._id, "quantity": item._quantity};

            itemsId.push(idObj);
            itemsQty.push(qty);
          });

          var $userSession = $sessionStorage.user;

           // Getting CSRF Token
           $sails.get("/csrfToken")
             .success(function (data, status, headers, jwr) {
               // Sending request to backend
               $sails.post("/order", {
                 products: itemsId,
                 quantity: itemsQty,
                 user: $userSession.user.id,
                 _csrf: data._csrf
               })
               .success(function (data, status, headers, jwr) {
                 ngCart.empty();
                 $location.path( "/" );
             })
               .error(function (data, status, headers, jwr) {
                 // Check if respond error
             });
           })
             .error(function (data, status, headers, jwr) {
               // Output Token invalid message
           });
        }
      }

     };
  });
