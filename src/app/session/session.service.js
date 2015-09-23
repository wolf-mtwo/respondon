(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Session', service);

  function service($resource, Global) {
    var url = Global.PATH + '/rest/session/';
     return $resource(url + 'login', {
       id: '@id'
     }, {
       login: {
         method: 'POST'
       }
     });
  }

})();
