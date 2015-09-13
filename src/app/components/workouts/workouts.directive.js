(function() {
  'use strict';

  angular
    .module('angular')
    .directive('workouts', workouts);

  /** @ngInject */
  function workouts() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/workouts/workouts.html',
      scope: {
        creationDate: '=',
        exercises: '='
      },
      controller: workoutsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function workoutsController($scope, workoutsStates, workouts) {
      var vm = this;

      vm.workouts               = workouts;
      vm.workoutStates          = workoutsStates;
      vm.currentExercise        = {};
      vm.currentExerciseIndex   = null;
      vm.nextExercise           = {};
      vm.actualReps             = null;

      vm.exerciseDone       = exerciseDone;
      vm.restDone           = restDone;
      vm.decreaseActualReps = decreaseActualReps;
      vm.increaseActualReps = increaseActualReps;

      //////////

      init();

      function init() {
        workouts.setCurrentState(workoutsStates.EXERCISE);
        vm.currentExerciseIndex = 0;
        setCurrentExercise();
      }

      function exerciseDone() {
        workouts.setCurrentState(workoutsStates.REST);
        vm.actualReps = vm.currentExercise.reps;
      }

      function restDone() {
        if (vm.nextExercise) {
          workouts.setCurrentState(workoutsStates.EXERCISE);
          vm.currentExerciseIndex ++;
          setCurrentExercise();
        } else {
          workouts.setCurrentState(workoutsStates.DONE);
        }

        vm.actualReps = null;
        $scope.$apply();
      }

      function setCurrentExercise () {
        vm.currentExercise = vm.exercises[vm.currentExerciseIndex];
        if (vm.exercises.length > vm.currentExerciseIndex + 1) {
          vm.nextExercise = vm.exercises[vm.currentExerciseIndex + 1];
        } else {
          vm.nextExercise = null;
        }
      }

      function decreaseActualReps() {
        vm.actualReps --;
      }
      function increaseActualReps() {
        vm.actualReps ++;
      }

    }
  }

})();
