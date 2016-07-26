angular.module('flashnoteApp.debug.controllers', ['hljs'])
  .controller('CacheController', ['CategoryCache', function(CategoryCache) {
    var self = this;

    self.keys = [];
    self.cache = CategoryCache;
		self.put = function(key, value) {
			if (angular.isUndefined(self.cache.get(key))) {
				self.keys.push(key);
			}
			self.cache.put(key, angular.isUndefined(value) ? null : value);
		};

    self.debug = function() { CategoryCache.debug(); };
  }
  ]).controller('HighlightController', function() {
    var self = this;
  });
