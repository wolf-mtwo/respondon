(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('ResponseSerializer', service);

  function service($resource) {

    var service = {
      toString: toString,
      toJSON: toJSON
    };

    return service;

    function toString(responseArray) {
      var newValues = [];
      if (!responseArray) {
        throw new Error('responseArray is not defined');
      }
      responseArray.forEach(function(item) {
        if (!item.value) {
          throw new Error('item.value is not defined');
        }
        newValues.push({
          value: item.value,
          response: item.response
        });
      });
      return JSON.stringify(newValues);
    }

    function toJSON(str) {
      return JSON.parse(str);
    }
  }
})();
