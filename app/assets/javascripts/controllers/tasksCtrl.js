app.controller("TasksCtrl", ["$scope", "TasksService", "task", function($scope, TasksService, task) {
  $scope.tasks = TasksService.tasks;
  $scope.task = task;
}]);
