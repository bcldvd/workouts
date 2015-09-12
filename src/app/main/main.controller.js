(function() {
  'use strict';

  angular
    .module('angular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(workouts) {
    var vm = this;

    vm.lastWorkout = {};
    vm.currentLevelId = 0;
    vm.continue = false;
    vm.level = {};
    vm.currentExercise = {};
    vm.currentExerciseIndex = 0;

    vm.continueLevel = continueLevel;
    vm.nextExercise = nextExercise;

    ////////////

    activate();

    function activate() {
      workouts.getWorkout().then(function (workout) {
        vm.lastWorkout = workout;
        vm.currentLevelId = getCurentLevelId();
        vm.level = workouts.getLevel(vm.currentLevelId);
      });
    }

    function getCurentLevelId() {
      return 0;
    }

    function continueLevel() {
      vm.continue = true;
      vm.currentExercise = vm.level.exercises[0];
    }

    function nextExercise() {
      //vm.
    }

  }
})();
