app.controller("TasksCtrl", ["$scope", "$timeout", "TasksService", "task", function($scope, $timeout, TasksService, task) {
  $scope.tasks = TasksService.tasks;
  $scope.task = task;

  $scope.filters = {};

  $scope.newTask = function() {
    TasksService.newTask({
      name: $scope.title,
      due_date: $scope.due_date
    });
    $scope.name = '';
    $scope.due_date = '';
  };

  $scope.completeTask = function(task) {
    TasksService.completeTask(task);
  };

  $scope.deleteCompletedTasks = function(tasks) {
    TasksService.deleteCompletedTasks(tasks)
    .then(function() {
      TasksService.all();
    });
  };
}]);
