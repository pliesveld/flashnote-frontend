angular.module('backend', []).service('backend', function($log) {
    var self = this;
    //self.baseURL = 'http://localhost:9000';
    self.baseURL = 'http://lalmec.no-ip.info:9000';
    $log.debug("baseURL: ", self.baseURL);
});
