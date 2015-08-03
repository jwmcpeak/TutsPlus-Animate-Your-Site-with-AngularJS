app.controller("HomeController",
[
    "$scope", "Posts",
    function ($scope, posts) {
        
        $scope.addForm = {
            id: undefined,
            postTitle: undefined,
            postMessage: undefined,
            itemIndex: undefined,
            success: undefined
        };
        
        posts.getPosts().then(function (response) {
            $scope.posts = response;
        });
        
        $scope.save = function () {
            $scope.addForm.success = undefined;
            
            posts.savePost($scope.addForm.id, $scope.addForm.postTitle, $scope.addForm.postMessage)
                .then(function (response) {
                if ($scope.addForm.id === undefined) {
                    $scope.posts.unshift(response);
                } else {
                    $scope.posts[$scope.addForm.itemIndex] = response;
                }
                
                $scope.addForm.id = undefined;
                $scope.addForm.postTitle = undefined;
                $scope.addForm.postMessage = undefined;
                $scope.addForm.itemIndex = undefined;
                $scope.addForm.success = true;
            });
        };
        
        $scope.edit = function (post) {
            $scope.addForm.id = post._id;
            $scope.addForm.postTitle = post.title;
            $scope.addForm.postMessage = post.message;
            $scope.addForm.itemIndex = $scope.posts.indexOf(post);
        };
    }
]);