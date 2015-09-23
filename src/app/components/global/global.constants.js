(function() {
  'use strict';

  angular
    .module('respondon')
    .constant('Global', {
      user: null,
      role: null,
      // PATH: ''
      PATH: 'http://localhost:8080/respondon-api'
    });

})();
