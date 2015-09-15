(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Store', service);

  function service() {

    var validateKey = function(key) {
      if (!key) {
        throw new Error('key is undefined');
      }
    }

    return {
      save: function(key, value) {
        validateKey(key);
        if (!value) {
          throw new Error('value is undefined');
        }
        localStorage.setItem(key, JSON.stringify(value));
      },
      get: function(key) {
        validateKey(key);
        return JSON.parse(localStorage.getItem(key));
      },
      remove: function(key) {
        validateKey(key);
        localStorage.removeItem(key);
      }
    }
  }
})();
