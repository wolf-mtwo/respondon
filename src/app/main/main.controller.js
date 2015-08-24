(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, Books, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.books = Books.getAll();
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
