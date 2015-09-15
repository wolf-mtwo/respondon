(function() {
  'use strict';

  angular
    .module('respondon')
    .directive('bookNavbar', bookNavbar);

  /** @ngInject */
  function bookNavbar(Global) {
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

      /**
       * Autentication state
       */
      vm.user = Global.user;
    }
  }

})();
