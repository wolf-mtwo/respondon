(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Config', configuration);

  /** @ngInject */
  function configuration() {

    function loadLocalConfiguration(bookId) {
      var result = [];
      var localConfig = get(bookId);
      localConfig.forEach(function(item) {
        result.push({
          id: item,
          title: item,
          state: true
        })
      });
      return result;
    }

    var service = {
      get: get,
      set: set,
      load: loadLocalConfiguration
    };

    return service;

    function get(value) {
      if (!value) {
        throw new Error('value is not defined');
      }
      var result = [];
      var value = localStorage.getItem(value);
      value = value || '';
      var items = value.split(',');
      items.forEach(function (item) {
        var number = parseInt(item);
        if (number) {
          result.push(number);
        }
      })
      return result;
    }

    function set(key, value) {
      if (!key) {
        throw new Error('key is not defined');
      }
      if (!value) {
        throw new Error('value is not defined');
      }
      localStorage.setItem(key, value);
    }
  }
})();
