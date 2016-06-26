
describe('flashnoteApp.navigation module', function() {
  beforeEach(module('flashnoteApp.navigation'));
  beforeEach(module('flashnoteApp'));

  var $controller;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
  }));

  it("loads navigation login", function() {
    var controller = $controller('LoginCtrl');
  })

  it("loads navigation welcome", function() {
    var controller = $controller('WelcomeCtrl');
  })

  it("loads navigation signup", function() {
    var controller = $controller('SignupCtrl');
  })
});

describe('flashnoteApp.author module', function() {
  beforeEach(module('flashnoteApp.author'));
  beforeEach(module('flashnoteApp'));

  var $controller;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
  }));

  it("loads author controller", function() {
    var controller = $controller('AuthorCtrl');
  })

  it("loads author questionbank create", function() {
    var controller = $controller('QuestionBankCreateCtrl');
  })

  it("loads author deck create", function() {
    var controller = $controller('DeckCreateCtrl');
  })
});

describe('flashnoteApp.playback module', function() {
  beforeEach(module('flashnoteApp.playback'));

  var mockBankRepository;

  beforeEach(module('flashnoteApp.playback', function($provide) {
    $provide.value('API_ENDPOINT', 'http://lalmec.no-ip.info:9000');
    $provide.value('questionbank', mockBankRepository = {id: 90000, description: 'mocked repo', questions:[{content:'something'}]});
  }));

  var $controller;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
  }));

  it("loads deck controller", function() {
    var controller = $controller('PlaybackDeckCtrl');
  })

  it("loads bank controller", function() {
    var controller = $controller('PlaybackBankCtrl');
  })

});






describe('flashnoteApp module', function() {
  beforeEach(module('flashnoteApp.navigation'));
  beforeEach(module('flashnoteApp'));

  var $controller;
  beforeEach(inject(function($injector) {
      $controller = $injector.get('$controller');
  }));

  it("loads navigation controller", function() {
    var controller = $controller('NavigationCtrl');
  });
});


describe('flashnoteApp.profile module', function() {
  beforeEach(module('flashnoteApp.profile'));
  beforeEach(module('flashnoteApp'));

  var $controller;
  beforeEach(inject(function($injector) {
      $controller = $injector.get('$controller');
  }));

  it('loads profile main controller', function() {
    $controller = $controller('ProfileMainCtrl');
  });

  it('loads profile details controller', function() {
    $controller = $controller('ProfileDetailsCtrl');
  });

  it('loads profile pw reset controller', function() {
    $controller = $controller('ProfileChangePasswordCtrl');
  });

  it('loads profile home controller', function() {
    $controller = $controller('ProfileHomeCtrl');
  });
   
})


