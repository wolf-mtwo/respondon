(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('HomeController', MainController);

  /** @ngInject */
  function MainController(Store, $scope, $timeout, Books, toastr) {
    $scope.navbar = [];
    $scope.init = function() {
      Books.query(function(response) {
        $scope.books = response;
      });

      Store.remove('participant');
    }
  }
})();
