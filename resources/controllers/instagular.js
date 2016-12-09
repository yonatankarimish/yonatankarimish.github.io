angular.module('instagular', ["ui.router"]);

angular.module('instagular').constant("clientID", "c46ca01523264d949df297d6bd4b06f9");

angular.module('instagular')
    .config(function($stateProvider) {
      $stateProvider
          .state({
            name: 'hello',
            url: '/',
            templateUrl : "/resources/html/auth.html",
            controller: 'authCtrl',
            controllerAs: 'auth'
          })
          .state({
            name: 'photos',
            url: '/photos',
            templateUrl : "/resources/html/photos.html",
            controller: 'photoCtrl',
            controllerAs: 'photos'
          });
    });
    /*.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/photos/:token", {
            templateUrl : "/resources/html/photos.html",
            //controller: photoCtrl,
            //controllerAs: photos
        })
        .when("/auth", {
            templateUrl : "/resources/html/auth.html",
            //controller: authCtrl,
            //controllerAs: auth
        })
        .otherwise({
            templateUrl : "/resources/html/auth.html"
        })
    $locationProvider.html5Mode(true);
}]);*/