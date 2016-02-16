var app = angular.module("todo", ["ngRoute", "ngAnimate", "Devise", "templates"]);

app.config(function($routeProvider) {
  'use strict';

  $routeProvider
    .when("/", {
      controller: "TasksCtrl",
      templateUrl: "tasks/index.html",
      resolve: function(TasksService) {
        return TasksService.all();
      }
    })
    .when("/login", {
      controller: "AuthCtrl",
      templateUrl: "auth/login.html",
      resolve: function($location, Auth) {
        Auth.currentUser().then(function() {
          $location.path("/");
        });
      }
    })
    .when("/register", {
      controller: "AuthCtrl",
      templateUrl: "auth/register.html",
      resolve: function($location, Auth) {
        Auth.currentUser().then(function() {
          $location.path("/");
        });
      }
    })
    .otherwise("/");
});
