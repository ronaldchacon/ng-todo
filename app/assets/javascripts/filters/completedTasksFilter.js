app.filter('completedTasks', function() {
  return function(input) {
    var completedTasks = [];
    angular.forEach(input, function(task) {
      if (task.is_completed === true) {
        completedTasks.unshift(task);
      }
    });
    return completedTasks;
  };
});
