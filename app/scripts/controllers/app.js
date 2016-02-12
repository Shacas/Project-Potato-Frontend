'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:AppctrlCtrl
 * @description
 * # AppctrlCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('AppCtrl', function ($scope, $sessionStorage) {

    $scope.$storage = $sessionStorage;

  });
