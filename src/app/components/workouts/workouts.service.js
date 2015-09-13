(function() {
  'use strict';

  angular
    .module('angular')
    .factory('workouts', workouts);

  /** @ngInject */
  function workouts(data, $http, $log, $q, _) {

    var workout     = null,
      exercises     = [],
      levels        = [],
      currentState  = null,
      service       = {
        getWorkout      : getWorkout,
        getLevel        : getLevel,
        getCurrentState : getCurrentState,
        setCurrentState : setCurrentState
    };

    return service;

    function getWorkout() {

      var deferred = $q.defer();

      if (workout === null) {
        return $http.get(data)
          .then(getWorkoutComplete)
          .catch(getWorkoutFailed);
      } else {
        deferred.resolve(workout);
        return deferred.promise;
      }

      function getWorkoutComplete(response) {
        workout = response.data;
        exercises = response.data.exercises;
        levels = response.data.levels;
        $log.log(workout);
        return workout;
      }

      function getWorkoutFailed(error) {
        $log.error('XHR Failed for getWorkout.\n' + angular.toJson(error.data, true));
      }
    }

    function getLevel(levelId) {
      var level =  _.find(levels, {'levelId': levelId});
      level.exercises.forEach(function (exercise) {
        exercise = _.assign(exercise, _.find(exercises, {exerciseId: exercise.exerciseId}));
      });
      return level;
    }

    function getCurrentState() {
      return currentState;
    }

    function setCurrentState(state) {
     currentState = state;
    }


  }
})();
