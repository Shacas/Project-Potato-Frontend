'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('CheckoutCtrl', function (ngCart, $sessionStorage, $sails, $location, Auth) {
    $scope.submitOrder = function (){

      if (!Auth.isAuthenticated()) {
        window.location = '#/login';
      }

      var itemsId = [];
      var items = ngCart.getCart().items;

      items.forEach (function(item) {
        var idObj = {"id": item._id};
        itemsId.push(idObj);
      });

      var $userSession = $sessionStorage.user;

       // Getting CSRF Token
       $sails.get("/csrfToken")
         .success(function (data, status, headers, jwr) {
           // Sending request to backend
           $sails.post("/order", {
             products: itemsId,
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

     };
  });
