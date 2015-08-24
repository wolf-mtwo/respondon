(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Books', Books);

  /** @ngInject */
  function Books() {
    var service = {
      getAll: getAll,
      getById: getById
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

    function getAll() {
      return [
        {
          _id: 1000,
          chapters: 10,
          title: 'El buey Adventista',
          description: 'orttitor amet ac pulvinar augue ut a magna, egestas placerat scelerisque mid dapibus dis ac lorem parturient dictumst? Duis rhoncus, ultricies urna, enim, hab'
        },
        {
          _id: 1001,
          chapters: 3,
          title: 'Cursus ac sagittis nunc eu',
          description: 'orttitor amet ac pulvinar augue ut a magna, egestas placerat scelerisque mid dapibus dis ac lorem parturient dictumst? Duis rhoncus, ultricies urna, enim, hab'
        }
      ];
    }
  }
})();
