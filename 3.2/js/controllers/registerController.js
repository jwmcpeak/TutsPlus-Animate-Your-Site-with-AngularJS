app.controller("RegisterController",
[
    "$scope", "$location", 
    function($scope, $location) {
        $scope.registerForm = {
            name: "John Doe",
            email: "john@doe.com",
            password: "foobar",
            confirmPassword: "foobar"
        };
    }
]);

