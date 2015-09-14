(function() {
  'use strict';

  angular
    .module('respondon')
    .constant('Global', {
      user: null,
      role: null,
      PATH: 'http://localhost:8080/pregunton-api'
    });

})();
