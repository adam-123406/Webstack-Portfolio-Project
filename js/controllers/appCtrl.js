angular.module("myApp")
    .controller("appCtrl",function ($scope,$rootScope,$http,$state) {
        $scope.logout=function () {
            $rootScope.id=undefined
            $state.go("app.home")

        }




    })