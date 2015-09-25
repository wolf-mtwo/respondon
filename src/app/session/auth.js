(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Auth', service);

  function service($rootScope, Store, $http) {

    var saveUser = function(user) {
      if (!user) {
        throw new Error('user is undefined');
      }
      if (!user.token) {
        throw new Error('token is undefined');
      }

      var token = user.token;
      // Saving on local storage
      delete user['token'];
      Store.save('token', token, true);
      Store.save('user', user);
      $http.defaults.headers.common['x-access-token'] = token;

      loadUser();
    }

    var subcriptors = [];
    var loadUser = function() {
      service.user = Store.load('user');
      subcriptors.forEach(function(item) {
        item(service.user);
      })
    }

    var subcrive = function(func) {
      subcriptors.push(func);
      loadUser();
    }

    var removeUser = function() {
      Store.remove('token');
      delete $http.defaults.headers.common['x-access-token'];
      Store.remove('user');
    }

    var service = {
      user: Store.load('user'),
      saveUser: saveUser,
      loadUser: loadUser,
      removeUser: removeUser,
      subcrive: subcrive
    };

    return service;
  }

})();
