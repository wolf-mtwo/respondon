(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('authInterceptor', service);

  function service($rootScope, $q, $location) {
    return {
      responseError: function(response) {
        if (response.status === 401) {
          // handle the case where the user is not authenticated
          $location.path('/login');
        }
        return $q.reject(response);
      }
    };
  }

})();
