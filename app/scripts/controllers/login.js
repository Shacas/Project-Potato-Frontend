'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('LoginCtrl', function ($http, $scope, $sails) {

  // set-up loading state
  $scope.loginForm = {
    loading: false
  }

 $scope.submitLoginForm = function (){

    // Set the loading state (i.e. show loading spinner)
    $scope.loginForm.loading = true;

    // Getting CSRF Token
    $sails.get("/csrfToken")
      .success(function (data, status, headers, jwr) {
        // Sending request to backend
        $sails.post("/login", {
          username: $scope.loginForm.username,
          password: $scope.loginForm.password,
          _csrf: data._csrf
        })
        .success(function (data, status, headers, jwr) {
          $scope.loginForm.loading = true;
          window.location = '/';
      })
        .error(function (data, status, headers, jwr) {
          $scope.loginForm.loading = true;
          // Check if respond email/username check
      });
    })
      .error(function (data, status, headers, jwr) {
        $scope.loginForm.loading = true;
        // Output Token invalid message
    });

  };

  });
