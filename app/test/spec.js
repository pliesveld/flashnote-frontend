describe('flashnoteApp.navigation module', function() {
    beforeEach(module('flashnoteApp.navigation'));

    var $controller;

    beforeEach(inject(function($injector) {
        $controller = $injector.get('$controller');
    }));

    it("loads navigation home", function() {
        var controller = $controller('HomeCtrl');
        console.log(controller);
    })

    it("loads navigation welcome", function() {
        var controller = $controller('WelcomeCtrl');
        console.log(controller);
    })

    it("loads navigation signup", function() {
        var controller = $controller('SignupCtrl');
        console.log(controller);
    })




});
