var app = angular.module("todo", ["ngRoute", "Devise", "templates"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "TasksCtrl",
      templateUrl: "tasks/index.html",
      resolve: ['TasksService', function(TasksService) {
        return TasksService.all();
      }]
    })
    .when("/tasks/:id", {
      controller: "TasksCtrl",
      templateUrl: "tasks/show.html",
      resolve: {
        task: ["$route", "TasksService", function($route, TasksService) {
          return TasksService.getTask($route.current.params.id);
        }]
      }
    })
    .when("/login", {
      controller: "AuthCtrl",
      templateUrl: "auth/login.html",
      resolve: ["$location", "Auth", function($location, Auth) {
        Auth.currentUser().then(function() {
          $location.path("/");
        });
      }]
    })
    .when("/register", {
      controller: "AuthCtrl",
      templateUrl: "auth/register.html",
      resolve: ["$location", "Auth", function($location, Auth) {
        Auth.currentUser().then(function() {
          $location.path("/");
        });
      }]
    })
    .otherwise("/");
}]);
