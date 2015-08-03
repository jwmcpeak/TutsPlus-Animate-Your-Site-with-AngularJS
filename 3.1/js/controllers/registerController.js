app.controller("RegisterController",
[
    "$scope", "$location", "Account", "Session", 
    function($scope, $location, account, session) {
        
        $scope.registerForm = {
            name: undefined,
            email: undefined,
            password: undefined,
            confirmPassword: undefined,
            errorMessage: undefined
        };

        $scope.register = function() {
            account.register($scope.registerForm.name, $scope.registerForm.email, $scope.registerForm.password, $scope.registerForm.confirmPassword)
                .then(function(res) {
                    session.setUserData(res);
                    $location.path("/");
                }, function(response) {
                    $scope.registerForm.errorMessage = response.message;
                });
        };
    }
]);

