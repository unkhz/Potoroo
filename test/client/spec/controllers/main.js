'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('potorooApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/items')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of items to the scope', function () {
    expect(scope.items).toBeUndefined();
    $httpBackend.flush();
    expect(scope.items.length).toBe(4);
  });
});
