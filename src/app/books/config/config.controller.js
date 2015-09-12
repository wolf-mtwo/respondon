(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksConfigController', controller);

  /** @ngInject */
  function controller($scope, $state, Books, Config, toastr) {

    Books.getById({id: $state.params.bookId}, function(response) {
      $scope.book = response;
      var chapters = generaterChapters($scope.book.chapters);
      $scope.chapters =  loadLocalConfiguration(chapters);
    });

    function loadLocalConfiguration(chapters) {
      var localConfig = Config.get($scope.book.id);
      chapters.forEach(function(item) {
        localConfig.forEach(function(id) {
          if (id == item.id) {
            item.state = true;
          }
        });
      });
      return chapters;
    }

    $scope.changeState = function(chapter) {
      if (!chapter) {
        throw new Error('chapter is not defined');
      }
      chapter.state = !chapter.state;
      $scope.saveConfiguration();
    }

    $scope.saveConfiguration = function () {
      var result = [];
      $scope.chapters.forEach(function(item) {
        if (item.state) {
          //TODO: Change it.
          result.push(item.id);
        }
      });
      Config.set($scope.book.id, result);
      console.log(Config.get($scope.book.id));
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
          id: i,
          title: i,
          state: false
        })
      }
      return result;
    }

  }
})();
