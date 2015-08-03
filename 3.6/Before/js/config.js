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
    }).when("/post/:id", {
        templateUrl: "/views/post.html",
        controller: "PostController"
    });
}]).run(['$rootScope', function ($rootScope) {
    $rootScope.records = [
      {
          id: 1,
          title: "First Message",
          message: "This is the first message.",
          displayName: "John Doe",
          dateCreated: new Date(2015, 3, 24)
      }, {
          id: 2,
          title: "Second Message",
          message: "This is the second message.",
          displayName: "Jane Doe",
          dateCreated: new Date(2015, 4, 20)
      }, {
          id: 3,
          title: "Third Message",
          message: "This is the third message.",
          displayName: "Jim Doe",
          dateCreated: new Date(2015, 4, 24)
      }, {
          id: 4,
          title: "Fourth Message",
          message: "This is the fourth message.",
          displayName: "James Doe",
          dateCreated: new Date(2015, 5, 10)
      }
    ];
}]);