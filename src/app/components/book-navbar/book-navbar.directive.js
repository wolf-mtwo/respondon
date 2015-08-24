(function() {
  'use strict';

  angular
    .module('respondon')
    .directive('bookNavbar', bookNavbar);

  /** @ngInject */
  function bookNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/book-navbar/book-navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
    }
  }

})();
