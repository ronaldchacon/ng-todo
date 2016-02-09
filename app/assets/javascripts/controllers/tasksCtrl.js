app.controller("TasksCtrl", ["$scope", "$timeout", "$filter", "TasksService", "task", function($scope, $timeout, $filter, TasksService, task) {
  $scope.tasks = TasksService.tasks;
  $scope.task = task;

  $scope.filters = {};

  $scope.$watch('tasks', function() {
    $scope.remainingCount = $filter('filter')($scope.tasks, {is_completed: false}).length;
    $scope.completedCount = $scope.tasks.length - $scope.remainingCount;
  }, true);

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
    .then(function(data) {
      $scope.tasks = $scope.tasks.filter(function(task) {
        return data.indexOf(task.id) === -1;
      });
    });
  };

  $scope.deleteTask = function(task) {
    TasksService.deleteTask(task)
    .then(function(data) {
      $scope.tasks.splice($scope.tasks.indexOf(data), 1);
    });
  };

  $scope.showDelete = function() {
    this.showDeleteOption = true;
  };

  $scope.hideDelete = function() {
    this.showDeleteOption = false;
  };
}]);
