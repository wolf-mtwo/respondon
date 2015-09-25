(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('QuestionsLocal', service);

  function service($state, Participants, Store, Questions, Config) {

    var isValidChapter = function(chapter) {
      var validChapter = Config.load($state.params.bookId);
      var result = false;
      validChapter.forEach(function(item) {
        if (chapter == item.id) {
          result = true;
        }
      });
      return result;
    }

    var filter = function(questions) {
      var result = [];
      questions.forEach(function(item) {
        if (isValidChapter(item.chapter)) {
          result.push(item);
        }
      });
      return result;
    }

    return {
      query: function(params, func) {
        Questions.query(params, function(response) {
          func(filter(response));
        });
      }
    }
  }

})();
