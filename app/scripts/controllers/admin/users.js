'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:AdminUsersCtrl
 * @description
 * # AdminUsersCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('AdminUsersCtrl', function ($scope, $http, $sessionStorage, ngCart, $sails, $window) {
    $scope.users = [];

    $sails.get("/user")
        .success(function (data, status, headers, jwr) {
          data.forEach (function(user) {
              $scope.users.push(user);

          });
      })
        .error(function (data, status, headers, jwr) {
          console.log(status);
      });

      $scope.getUser = function() {
        return $scope.users;
      };
  });
