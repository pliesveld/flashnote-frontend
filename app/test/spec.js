describe('flashnoteApp.view.nav module', function() {
    beforeEach(module('flashnoteApp.view.nav'));
    beforeEach(module('flashnoteApp.view.home'));
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
