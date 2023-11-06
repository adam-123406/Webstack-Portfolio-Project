angular.module("myApp")
    .controller("homeCtrl",function ($scope,$rootScope,$http,$state) {
        $scope.data={}
        $scope.loginData={}


        $scope.login=function () {
            $http.post("api/login.php",$scope.loginData)
                .then(function (resp) {
                    if(resp.data.status){
                        console.log($scope.loginData)
                        toastr.success("Welcome "+$scope.loginData.user, 'Success', {timeOut: 2000})
                        $rootScope.id=resp.data.id
                        $rootScope.user=$scope.loginData.user
                        if($scope.loginData.type=='cust')
                            $state.go("app.cust")
                        else
                            $state.go("app.comp")
                    }
                    else{
                        toastr.error("Wrong Username or Password", 'Error !', {timeOut: 2000})
                        $scope.loginData={}
                    }
                })
        }


        $scope.register=function () {
            $http.post("api/reg.php",$scope.data).then(function (resp) {
                if(resp.data.status){
                    toastr.success("Thank you "+$scope.name+" for registering with travel agency app", 'Success', {timeOut: 2000})
                    $rootScope.id=resp.data.id
                    $rootScope.user=$scope.data.user
                    if($scope.data.type=='cust')
                        $state.go("app.cust")
                    else
                        $state.go("app.comp")
                }
                else{
                    toastr.error("User already exists", 'Error !', {timeOut: 2000})
                    $scope.data={}
                }
            })
        }
    })