(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksConfigController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Books, Questions, toastr) {
    var vm = this;
    vm.params = $state.params;
    vm.chapters = generaterChapters($scope.book.chapters);
    vm.changeState = changeState;

    function changeState(chapter) {
      if (!chapter) {
        throw new Error('chapter is not defined');
      }
      chapter.state = !chapter.state;
      save();
    }

    function save() {
      var result = [];
      vm.chapters.forEach(function(item) {
        if (item.state) {
          //TODO: Change it.
          result.push(item._id);
        }
      });
      localStorage.setItem($scope.book._id, result);
      console.log(localStorage.getItem($scope.book._id).split(','));
    }

    function generaterChapters(chapters) {
      if (!chapters) {
        throw new Error('chapters is not defined');
      }
      if (!chapters > 0) {
        throw new Error('chapters should be mayor that CERO');
      }
      var result = [];
      for (var i = 1; i <= chapters; i++) {
        result.push({
          _id: i,
          title: i,
          state: false
        })
      }
      console.log(result);
      return result;
    }

  }
})();
