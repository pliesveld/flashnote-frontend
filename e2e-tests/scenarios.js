'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/welcome");
  });


  describe('login', function() {

    beforeEach(function() {
      browser.get('index.html#/login');
    });


    it('should render login when user navigates to /login', function() {
      expect(element.all(by.css('[ui-view] form label')).first().getText()).
        toMatch(/Username/);
    });

  });

});
