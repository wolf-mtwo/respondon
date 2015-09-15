(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Global, $timeout, Books, toastr) {

    /**
     * Autentication state
     */
    $scope.user = Global.user;

    var vm = this;

    vm.awesomeThings = [];
    Books.query(function(response) {
       vm.books = response;
    });
    vm.classAnimation = '';
    vm.creationDate = 1440358344770;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
  }
})();
