'use strict';

describe('Controller: MyAppCtrl', function () {

  // load the controller's module
  beforeEach(module('personalSiteApp'));

  var MyAppCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyAppCtrl = $controller('MyAppCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AppCtrl.awesomeThings.length).toBe(3);
  });
});
