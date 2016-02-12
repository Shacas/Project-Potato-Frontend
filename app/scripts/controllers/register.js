'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('RegisterCtrl', function ($http, $scope, $sails, $location) {

  $scope.signupForm = {
    loading: false
  }

  $scope.submitSignupForm = function(){

    // Set the loading state (i.e. show loading spinner)
    $scope.signupForm.loading = true;

    // Getting CSRF Token
    $sails.get("/csrfToken")
      .success(function (data, status, headers, jwr) {
        // Sending request to backend
        $sails.post("/user", {
          username: $scope.signupForm.username,
          email: $scope.signupForm.email,
          password: $scope.signupForm.password,
          _csrf: data._csrf
        })
        .success(function (data, status, headers, jwr) {
          $location.path( "/login" );
      })
        .error(function (data, status, headers, jwr) {
          $scope.signupForm.loading = true;
          // Check if respond email/username check
      });
    })
      .error(function (data, status, headers, jwr) {
        $scope.signupForm.loading = true;
        // Output Token invalid message
    });

    }

  });
