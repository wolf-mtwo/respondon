(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('OneController', controller);

  /** @ngInject */
  function controller(
    $scope,
    $state,
    Participants,
    Books,
    Questions,
    toastr,
    ResponseSerializer,
    ParticipantLocal,
    QuestionsLocal
  ) {

    $scope.participant = {};

    // cantities
    $scope.answered = [];
    $scope.total = 0;
    $scope.isQuerstionEnable = true;

    Books.get({id: $state.params.bookId}, function(response) {
      $scope.book = response;
    });

    QuestionsLocal.query({bookId: $state.params.bookId}, function(response) {
      $scope.questions = restore(response);
      $scope.total = $scope.questions.length;
      $scope.selectQuestion();
    });

    $scope.nextQuestion = function() {
      $scope.selectQuestion();
      $scope.isQuerstionEnable = true;
    }

    $scope.selectQuestion = function() {
      var limit = preProcesorRandom();
      var question = $scope.questions.splice(limit, 1);
      $scope.question = question[0];
      $scope.question.options = buildAnswerOptions($scope.question);
    }

    $scope.validateAnswer = function(option) {
      var toastrType = {};
      if (option.response == true) {
        option.state = true;
        toastrType.state = 'success';
        toastrType.response = 'Correcto!!';
      } else {
        option.state = false;
        toastrType.state = 'error';
        toastrType.response = 'Incorrecto!!';
      }
      // display results
      toastr[toastrType.state](toastrType.response, option.value, {
        positionClass: 'toast-top-full-width',
      });

      if ($scope.isQuerstionEnable) {
        if (option.response) {
          $scope.participant.score++;
          $scope.participant.$update(function(item) {
            console.log(item);
          });
        }
        $scope.answered.push({
          question: $scope.question,
          result: option
        });
        //changes state to not validate answers after the first
        $scope.isQuerstionEnable = false;
      }
    }

    function preProcesorRandom() {
      var limit = $scope.questions.length;
      return getRandom(limit);
    }

    function getRandom(limit) {
      if (!limit) {
        throw new Error('limit is not defined');
      }
      return Math.floor(Math.random() * limit);
    }

    function buildAnswerOptions(question) {
      if (!question) {
        throw new Error('question is not defined');
      }
      if (!question.response) {
        throw new Error('question.response is not defined');
      }
      var options = [];
      question.response.forEach(function(item) {
        if (!item.value) {
            throw new Error('value is not defined');
        }
        options.push({
          value: item.value,
          response: item.response,
          state: null
        });
      });
      return options;
    }

    var restore = function(questions) {
      questions.forEach(function(item) {
        item.response = ResponseSerializer.toJSON(item.response);
      });
      return questions;
    }

    var validateParticipant = function(participant) {
      if (!participant.id) {
        throw new Error('participant.id is not defined');
      }
      if (!participant.name) {
        throw new Error('participant.name is not defined');
      }
      if (!participant.score) {
        throw new Error('participant.score is not defined');
      }
      return participant;
    }

    // select participant area
    $scope.loadParticipant = function() {
      ParticipantLocal.load(function(response) {
          $scope.participant = response;
      });
    }

    $scope.removeSelectedParticipant = function() {
      ParticipantLocal.remove();
    }
  }

})();
