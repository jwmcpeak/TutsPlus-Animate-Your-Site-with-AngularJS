app.controller("PostController",
[
    "$scope", "$routeParams", "Posts",
    function ($scope, $routeParams, posts) {

        var id = parseInt($routeParams.id, 10);
        var data = posts.getPosts();
        $scope.post = data[id - 1];
    }
]);