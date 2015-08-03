app.controller("PostController",
[
    "$scope", "$routeParams", "$rootScope",
    function ($scope, $routeParams, $rootScope) {

        var id = parseInt($routeParams.id, 10);

        $scope.post = $rootScope.records[id - 1];

    }
]);