(function() {
  'use strict';

  angular
    .module('respondon')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar(Auth) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '=',
          user: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
      Auth.subcrive(function(user) {
        vm.user = user;
      });
    }
  }

})();
