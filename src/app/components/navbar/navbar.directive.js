(function() {
  'use strict';

  angular
    .module('respondon')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar(Auth) {

    var user = null;

    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          user: '=',
          options: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
      vm.links = vm.options;
      vm.user = user;
      Auth.subcrive(function(user) {
        vm.user = user;
      });
    }
  }

})();
