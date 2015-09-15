(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('SessionsController', controller);

  /** @ngInject */
  function controller($scope, $state, Global, Session, Users, Store) {

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
      Store.save('session', user);
      Global.user = user;
      $state.go('home', {}, {reload: true});
    }
  }

})();
