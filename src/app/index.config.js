(function() {
  'use strict';

  angular
    .module('respondon')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, highchartsNGProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 1000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    highchartsNGProvider.lazyLoad([highchartsNGProvider.HIGHCHART]);
    highchartsNGProvider.basePath("/assets/lib/");

  }

})();
