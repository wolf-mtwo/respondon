(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('ChartsController', controller);

  /** @ngInject */
  function controller($scope, $state, Books, Config, Participants) {

    $scope.chartConfig = {
      options: {
          chart: {
              type: 'column'
          }
      },
      xAxis: {
       categories: ['Apples', 'Oranges', 'Pears', 'Grapes']
     },
      series: [{
          data: [10, 15, 12, 8]
      }],
      title: {
          text: 'Notas'
      },
      loading: false
    };

    $scope.participants = [];
    setInterval(function() {
      Participants.query(function(response) {
        $scope.participants = response;
        var scores = $scope.getScores($scope.participants);
        var namesList = $scope.getNames($scope.participants);
        $scope.chartConfig.xAxis.categories = namesList;
        $scope.removeSeries();
        $scope.addSeries(scores);
      });
    }, 2000);

    $scope.addSeries = function (scores) {
       $scope.chartConfig.series.push({
           data: scores
       })
     }

   $scope.removeSeries = function () {
      var seriesArray = $scope.chartConfig.series;
      seriesArray.splice(0, 1);
    }

    $scope.getScores = function(participants) {
      var scores = [];
      participants.forEach(function(item) {
        scores.push(parseInt(item.score));
      });
      return scores;
    }

    $scope.getNames = function(participants) {
      var scores = [];
      participants.forEach(function(item) {
        scores.push(item.name);
      });
      return scores;
    }
  }
})();
