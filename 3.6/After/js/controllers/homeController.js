app.controller("HomeController",
[
    "$scope", "Posts",
    function ($scope, posts) {

        $scope.posts = posts.getPosts();
    }
]);