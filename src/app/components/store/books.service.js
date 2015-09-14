(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Books', service);

  function service($resource, Global) {

    var url = Global.PATH + '/api/persist/books';
    var storeResourse = $resource(url, {
      id: '@id'
      }, {
         get: {
           url: url + '/id/:id',
           method: 'GET'
         }
      });
    var service = {
      getAll: storeResourse.query,
      getById: storeResourse.get,
      get: storeResourse.get
    };

    return service;

    function getById(id) {
      if (!id) {
        throw new Error('id is undefined');
      }
      var items = getAll();
      var result = null;
      items.forEach(function(item) {
        if (item._id == id) {
          result = item;
        }
      })
      return result;
    }
  }
})();
