'use strict';

describe('Service: infoFinder', function () {

  // load the service's module
  beforeEach(module('personalSiteApp'));

  // instantiate service
  var infoFinder;
  beforeEach(inject(function (_infoFinder_) {
    infoFinder = _infoFinder_;
  }));

  it('should do something', function () {
    expect(!!infoFinder).toBe(true);
  });

});
