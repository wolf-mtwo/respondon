(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Users', service);

  function service($resource, Global) {
    var url = Global.PATH + '/rest/p1/users';
     return $resource(url, {
       id: '@id'
     }, {
       update: {
         url: url + '/id/:id',
         method: 'PUT'
       }
     });
  }

})();
