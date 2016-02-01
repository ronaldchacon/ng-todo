app.controller("TasksCtrl", ["$scope", "TasksService", function($scope, TasksService) {
  $scope.tasks = TasksService.tasks;
}]);
