'use strict';

/**
 * @ngdoc directive
 * @name potatoApp.directive:compareTo
 * @description
 * # compareTo
 */
angular.module('potatoApp')
  .directive('compareTo', function compareTo() {
    return {
      require: 'ngModel',
      scope: {
        otherModelValue: '=compareTo'
      },
      link: function(scope, element, attributes, ngModel) {

      ngModel.$validators.compareTo = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch('otherModelValue', function() {
        ngModel.$validate();
      });
    }
  };


  });
