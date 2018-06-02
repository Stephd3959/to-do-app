(function (){
    angular.module('app',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/',{
            template:'<welcome></welcome>'
        })
        .when('/app',{
            template: '<taskform></taskform>'
        })
        .otherwise({
            // redirectTo:'/'
            template:'<notfound></notfound>'
        });
    });
 
})();