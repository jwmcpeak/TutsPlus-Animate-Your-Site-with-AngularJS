app.controller("LoginController", [
    "$scope", "$location", 
    function ($scope, $location) {
        $scope.loginForm = {
            username: "john@doe.com",
            password: "foobar"
        };
    }
]);