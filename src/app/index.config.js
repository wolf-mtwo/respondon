(function() {
  'use strict';

  angular
    .module('respondon')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, highchartsNGProvider, $httpProvider) {

    // Session
   $httpProvider.interceptors.push('authInterceptor');

    // Enable log
    $logProvider.debugEnabled(true);

    // Loading token
    $httpProvider.defaults.headers.common['x-access-token'] = localStorage.getItem('token');

    // Set options third-party lib
    toastr.options.timeOut = 1000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    highchartsNGProvider.lazyLoad([highchartsNGProvider.HIGHCHART]);
    highchartsNGProvider.basePath("/assets/lib/");

  }

})();
