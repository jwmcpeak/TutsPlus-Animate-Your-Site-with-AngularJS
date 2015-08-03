app.controller("UserController",
[
    "$scope", "Users", function($scope, users) {
        users.getUsers()
            .then(function(res) {
                $scope.users = res;
            }, function(res) {
                
            });
    }
]);