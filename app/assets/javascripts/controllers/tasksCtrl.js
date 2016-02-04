app.controller("TasksCtrl", ["$scope", "TasksService", "task", function($scope, TasksService, task) {
  $scope.tasks = TasksService.tasks;
  $scope.task = task;
  $scope.completed = [];

  $scope.completeTask = function(task) {
    TasksService.completeTask(task)
    .then(function() {
      $scope.completed.push(task);
    });
  };
}]);
