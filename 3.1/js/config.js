app.config(["$routeProvider", "$locationProvider", function ($routes, $location) {
    $location.hashPrefix("!").html5Mode({
        enabled: true,
        requireBase: false
    });
    
    $routes
    .when("/", {
        templateUrl: "views/home.html",
        controller: "HomeController"
    }).when("/login", {
        templateUrl: "/views/login.html",
        controller: "LoginController"
    }).when("/register", {
        templateUrl: "/views/register.html",
        controller: "RegisterController"
    }).when("/users", {
        templateUrl: "/views/admin/users.html",
        controller: "UserController",
        requiresAuth : true
    });
}]).run(function($rootScope, Session) {
  $rootScope.$on("$routeChangeStart", function(event, next, current) {
     if (next.requiresAuth && !Session.getIsAdmin()) {
         alert("You are not authorized");
         
         event.preventDefault();
     } 
  });
});