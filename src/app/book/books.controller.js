(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BookController', BookController);

  /** @ngInject */
  function BookController($timeout, Books, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.awesomeThings = Books.getAll();
    vm.classAnimation = '';
    vm.creationDate = 1440358344770;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      // vm.awesomeThings = webDevTec.getTec();
      //
      // angular.forEach(vm.awesomeThings, function(awesomeThing) {
      //   awesomeThing.rank = Math.random();
      // });
    }
  }
})();
