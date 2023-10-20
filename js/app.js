angular.module("myApp",["ngAnimate","ngSanitize","ui.bootstrap","ui.router"])
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("app",{
            url:"/app",
            templateUrl:"templates/main.html",
            controller:"appCtrl"
        })

        .state("app.home",{
            url:"/home",
            views:{
                "sub":{
                    templateUrl:"templates/home.html",
                    controller:"homeCtrl"
                }
            }
        })
        .state("app.cust",{
            url:"/cust",
            views:{
                "sub":{
                    templateUrl:"templates/cust.html",
                    controller:"custCtrl"
                }
            }
        })
        .state("app.comp",{
            url:"/comp",
            views:{
                "sub":{
                    templateUrl:"templates/comp.html",
                    controller:"compCtrl"
                }
            }
        })

    $urlRouterProvider.otherwise("/app/home")
})

.service("$st",function ($rootScope) {
    this.succ=function () {
        toastr.success("Done Successfully","Success",{timeout:1500})
    }
    this.err=function () {
        toastr.error("Something went wrong","Error",{timeout:1500})

    }
})

