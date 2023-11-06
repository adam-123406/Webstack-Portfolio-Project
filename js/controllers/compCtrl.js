angular.module("myApp")
.controller("compCtrl",function ($scope,$rootScope,$http,$state , $st) {
    $scope.flightsData={}
    $scope.plainsData={}
    $scope.insertFlights=function () {
        $scope.flightsData.plain_id=$rootScope.id


        $http.post("api/insertFlights.php",$scope.flightsData)
            .then(function (resp) {
                if(resp.data.status){
                    $st.succ()
                    $scope.flightsData={}
                }
                else{
                    $st.error()
                }
            })
    }
   $scope.insertPlains=function () {
       $scope.plainsData.com_id=$rootScope.id
       $http.post("api/insertPlains.php",$scope.plainsData)
           .then(function (resp) {
               if(resp.data.status){
                   $st.succ()
                   $scope.plainsData={}
               }
               else{
                   $st.error()
               }
           })


   }


})