(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Books', Books);

  /** @ngInject */
  function Books() {
    var service = {
      getAll: getAll
    };

    return service;

    function getAll() {
      return [
        {
          _id: 1000,
          title: 'El buey Adventista',
          description: 'orttitor amet ac pulvinar augue ut a magna, egestas placerat scelerisque mid dapibus dis ac lorem parturient dictumst? Duis rhoncus, ultricies urna, enim, hab'
        },
        {
          _id: 1001,
          title: 'Cursus ac sagittis nunc eu',
          description: 'orttitor amet ac pulvinar augue ut a magna, egestas placerat scelerisque mid dapibus dis ac lorem parturient dictumst? Duis rhoncus, ultricies urna, enim, hab'
        }
      ];
    }
  }
})();
