app.controller("TasksCtrl", ["$scope", "TasksService", "task", function($scope, TasksService, task) {
  $scope.tasks = TasksService.tasks;
  $scope.task = task;

  $scope.completeTask = function(task) {
    TasksService.completeTask(task)
    .then(function() {
      return TasksService.all()
      .then(function(response) {
        angular.copy(response.data, $scope.tasks);
      });
    });
  };
}]);
