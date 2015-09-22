(function() {
  'use strict';

  angular
    .module('angular')
    .constant('workoutsStates', {
      EXERCISE: 0,
      REST: 1,
      DONE: 2
    })
    .constant('workoutApi','assets/mock/lafay/data.json')
    .constant('levelsApi','/levels.json')
    .constant('exercisesApi','/exercises.json');

})();
