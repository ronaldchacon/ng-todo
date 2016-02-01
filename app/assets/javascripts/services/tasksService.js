app.factory("TasksService", ["$http", function($http) {
  var Task = {
    tasks: [],
    all: function() {
      return $http.get('/tasks.json')
      .success(function(data) {
        angular.copy(data, Task.tasks);
      });
    }
  };
  return Task;
}]);
