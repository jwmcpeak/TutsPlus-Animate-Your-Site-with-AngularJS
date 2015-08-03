var app = angular.module("app", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

app.controller("SoundBoardController",
[
    "$scope",
    function ($scope) {
        $scope.toggle = true;

        $scope.models = {
            pageTitle: "Welcome to Sound Board!"
        };

        $scope.toggleSidebar = function () {
            $scope.toggle = !$scope.toggle;
        };
}]);