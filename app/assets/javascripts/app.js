var app = angular.module("todo", ["ngRoute", "ngAnimate", "Devise", "templates"]);

app.config(function($routeProvider) {
  'use strict';

  $routeProvider
    .when("/", {
      controller: "TasksCtrl",
      templateUrl: "tasks/index.html",
      resolve: {
        tasks: ['TasksService', function(TasksService) {
          return TasksService.all();
        }],
        task: function() {}
      }
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
});
