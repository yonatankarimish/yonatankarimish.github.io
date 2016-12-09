angular.module('instagular', ["ngRoute"]);

angular.module('instagular').constant("clientID", "c46ca01523264d949df297d6bd4b06f9");

angular.module('instagular')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/photos", {
            templateUrl : "watchdox/resources/html/photos.html",
            //controller: photoCtrl,
            //controllerAs: photos
        })
        .when("/auth", {
            templateUrl : "watchdox/resources/html/auth.html",
            //controller: authCtrl,
            //controllerAs: auth
        })
        .otherwise({
            templateUrl : "watchdox/resources/html/auth.html"
        })
    $locationProvider.html5Mode(true);
}]);