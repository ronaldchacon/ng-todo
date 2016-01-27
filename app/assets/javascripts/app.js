var app = angular.module("todo", ["ngRoute", "Devise", "templates"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "TodoCtrl",
      templateUrl: "todo/index.html"
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
