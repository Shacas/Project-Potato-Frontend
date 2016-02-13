'use strict';

describe('Controller: AdminProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('potatoApp'));

  var AdminProductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminProductsCtrl = $controller('AdminProductsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminProductsCtrl.awesomeThings.length).toBe(3);
  });
});
