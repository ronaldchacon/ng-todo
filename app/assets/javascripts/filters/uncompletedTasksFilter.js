app.filter('uncompletedTasks', function() {
  'use strict';
  return function(input) {
    var uncompletedTasks = [];
    angular.forEach(input, function(task) {
      if (task.is_completed === false) {
        uncompletedTasks.unshift(task);
      }
    });
    return uncompletedTasks;
  };
});
