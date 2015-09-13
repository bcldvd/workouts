(function() {
  'use strict';

  angular
    .module('angular')
    .constant('workoutsStates', {
      EXERCISE: 0,
      REST: 1,
      DONE: 2
    });

})();
