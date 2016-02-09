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
    },
    completeTask: function(task) {
      return $http.put("/tasks/" + task.id, task)
      .then(function(response) {
        return response.data;
      });
    },
    deleteCompletedTasks: function(tasks) {
      var tasksToDelete = tasks.filter(function(task) {
        return task.is_completed;
      });
      var task_ids = [];
      angular.forEach(tasksToDelete, function(value, key) {
        this.push(value.id);
      }, task_ids);
      return $http.put("/tasks/delete_all", {ids: task_ids})
      .then(function(response) {
        return task_ids;
      });
    },
    newTask: function(task) {
      return $http.post("/tasks", task)
      .then(function(response) {
        Task.tasks.push(response.data);
      });
    },
    deleteTask: function(task) {
      return $http.delete("/tasks/" + task.id)
      .then(function(response) {
        return task;
      });
    }
  };
  return Task;
}]);
