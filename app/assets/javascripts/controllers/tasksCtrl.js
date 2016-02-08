app.controller("TasksCtrl", ["$scope", "$timeout", "TasksService", "task", function($scope, $timeout, TasksService, task) {
  $scope.tasks = TasksService.tasks;
  $scope.task = task;

  $scope.filters = {};

  $scope.completeTask = function(task) {
    TasksService.completeTask(task);
  };

  $scope.deleteCompletedTasks = function(tasks) {
    TasksService.deleteCompletedTasks(tasks)
    .then(function() {
      TasksService.all;
    });
  };
}]);
