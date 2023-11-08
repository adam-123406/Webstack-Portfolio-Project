angular.module("myApp")
    .controller("custCtrl",function ($scope,$rootScope,$state,$http,$uibModal,$st) {
        if(!$rootScope.id)
            $state.go("app.home")
        $scope.reservation={}

        $scope.reservationPlainFinal=function () {
            $http.post("api/orderReservations.php",{
                flight_id:selectedFlightId,
                com_id:$rootScope.id,
                price:$scope.reservation.price,
                date_of_reservation:$scope.reservation.date_of_reservation,

            }).then(function (resp) {
                if(resp.data.status){
                    x.close()
                    $st.succ()
                }
                else
                    $st.err()
            })
        }

        $scope.orderPlain=function (plain) {
            plain.price=parseFloat(plain.price)
            $scope.selectedPlain=plain
            x=$uibModal.open({
                templateUrl:"templates/orderReservation.html",
                scope:$scope
            })

        }

        $http.get("api/getComp.php")
            .then(function (resp) {
                $scope.company=resp.data
            })

        $scope.getFlights=function (id) {
            selectedComId=id
            $http.post("api/getFlights.php",{plain_id:id})
                .then(function (resp) {
                    $scope.flights=resp.data
                })
        }
    })