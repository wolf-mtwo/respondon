(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('SessionsController', controller);

  /** @ngInject */
  function controller($scope, $state, Global, Session, Users, Store, $http) {

    $scope.item = {
      email: 'wolf@wolf.com',
      password: 'wolf'
    };

    $scope.login = function(item) {
      Session.login(item, function(response) {
        $scope.changeToSessionMaster(response);
      });
    }

    $scope.register = function(item) {
      item.name = 'Lorem';
      Users.save(item, function(response) {
        $scope.changeToSessionMaster(response);
      });
    }

    $scope.logout = function() {
      Store.remove('session');
      Global.user = null;
      $state.go('home', {}, {reload: true});
    }

    $scope.changeToSessionMaster = function(user) {
      if (!user) {
        throw new Error('user is undefined');
      }

      var token = user.token;
      // Saving on local storage
      localStorage.setItem('token', token);

      delete user['token'];
      Store.save('session', user);
      Global.user = user;
      $http.defaults.headers.common['x-access-token'] = token;

      $state.go('home', {}, {reload: true});
    }
  }

})();
