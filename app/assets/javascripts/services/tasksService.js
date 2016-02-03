app.factory("TasksService", ["$http", "$location", function($http, $location) {
  var Task = {
    tasks: [],
    all: function() {
      return $http.get('/tasks.json')
      .success(function(data) {
        angular.copy(data, Task.tasks);
      });
    },
    getTask: function(id) {
      return $http.get("/tasks/" + id)
      .then(function(response) {
        return response.data;
      });
    }
  };
  return Task;
}]);
