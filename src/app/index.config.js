(function() {
  'use strict';

  angular
    .module('angular')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $mdThemingProvider, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('red');

    $translateProvider
      .preferredLanguage('en')
      .useLoader('translateLoader')
      .fallbackLanguage(['en'])
      .useSanitizeValueStrategy('escaped');

  }

})();
