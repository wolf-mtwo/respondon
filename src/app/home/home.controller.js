(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('HomeController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, Books, toastr) {
    $scope.init = function() {
      Books.query(function(response) {
        $scope.books = response;
      });
    }
  }
})();
