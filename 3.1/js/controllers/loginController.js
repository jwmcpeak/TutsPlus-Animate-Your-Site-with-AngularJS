app.controller("LoginController", [
    "$scope", "$location", "Account", "Session", 
    function ($scope, $location, account, session) {
        $scope.loginForm = {
            username: undefined,
            password: undefined,
            errorMessage: undefined
        };

        $scope.login = function() {
            account.login($scope.loginForm.username, $scope.loginForm.password)
                .then(function(user) {
                    session.setUserData(user);
                    $location.path("/");
                }, function(err) {
                    $scope.loginForm.errorMessage = err.message;
                });
        }
    }
]);