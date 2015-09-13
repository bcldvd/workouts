(function () {
'use strict';

  angular
    .module('angular')
    .factory('translateLoader', translateLoader);

  /** @ngInject */
  function translateLoader ($http, $log) {
    var translationsPath = 'assets/translations/',
        translationsExtension = 'json';

    return angularTranslate;

    function angularTranslate (options) {
      return $http.get(translationsPath + options.key + '.' + translationsExtension)
        .then(getTranslationSuccess)
        .catch(getTranslationFailed);

      function getTranslationSuccess (response) {
        return response.data;
      }

      function getTranslationFailed (error) {
        $log.error('XHR Failed for getWorkout.\n' + angular.toJson(error.data, true));
      }
    }

  }
})();
