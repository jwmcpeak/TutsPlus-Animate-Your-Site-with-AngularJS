var app = angular.module("app", ["ngRoute", "ngAnimate", "ui.bootstrap", "ngSanitize"]);

app.controller("SoundBoardController",
[
    "$scope", "Account", "Session",
    function ($scope, account, session) {
        $scope.toggle = true;

        $scope.models = {
            pageTitle: "Welcome to Sound Board!"
        };

        $scope.toggleSidebar = function () {
            $scope.toggle = !$scope.toggle;
        };
}]);