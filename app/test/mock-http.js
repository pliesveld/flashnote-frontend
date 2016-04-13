describe('flashnoteApp.view.nav module', function() {
    beforeEach(module('flashnoteApp'));
    var $httpBackend, $controller;

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $controller = $injector.get('$controller');
    }));

    afterEach(function() {
   //     $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })

    it("loads navigation controller", function() {
        var controller = $controller('navigation');
    })

    it("says Hello Test when controller loads", function() {

    var $scope = {};
    $httpBackend.expectPOST(/.*\/auth/).respond(200, {
      token : 'Super Secret JWT Token',
    });

    var controller = $controller('LoginController', {
      $scope : $scope
    });

    //expect($scope.greeting.content).toEqual('Hello Test');
 //   $httpBackend.flush();
  });

});
