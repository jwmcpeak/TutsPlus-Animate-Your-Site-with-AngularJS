app.controller("HomeController",
[
    "$scope", "Posts",
    function ($scope, posts) {
        posts.getPosts().then(function (response) {
            $scope.posts = response;
        });
    }
]);