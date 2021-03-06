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
    vm.workouts = workouts;

    vm.continueLevel = continueLevel;

    ////////////

    activate();

    function activate() {
      workouts.getWorkout().then(function (workout) {
        vm.lastWorkout = workout;
        vm.currentLevelId = getCurrentLevelId();
        vm.level = workouts.getLevel(vm.currentLevelId);
      });
    }

    function getCurrentLevelId() {
      return 0;
    }

    function continueLevel() {
      vm.continue = true;
      vm.currentExercise = vm.level.exercises[0];
    }

  }
})();
