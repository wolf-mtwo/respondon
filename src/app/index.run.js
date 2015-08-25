(function() {
  'use strict';

  angular
    .module('respondon')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
