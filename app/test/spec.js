describe('flashnoteApp.view.nav module', function() {
    beforeEach(module('flashnoteApp'));
    var $controller;

    beforeEach(inject(function($injector) {
        $controller = $injector.get('$controller');
    }));

    it("loads navigation controller", function() {
        var controller = $controller('navigation');
    })


});
