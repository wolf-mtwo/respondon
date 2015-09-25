(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('SessionsController', controller);

  /** @ngInject */
  function controller($scope, $state, Global, Session, Users, Auth) {

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
      Auth.removeUser();
      $state.go('home', {}, {reload: true});
    }

    $scope.changeToSessionMaster = function(user) {
      Auth.saveUser(user);
      $state.go('home', {}, {reload: true});
    }
  }

})();
