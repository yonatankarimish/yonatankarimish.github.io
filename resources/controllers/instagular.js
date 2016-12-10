angular.module('instagular', ["ui.router", "ngCookies"]);

angular.module('instagular').constant("clientID", "c46ca01523264d949df297d6bd4b06f9");

angular.module('instagular')
    .config(function($stateProvider, $locationProvider) {
      //$locationProvider.html5Mode(true);
      $stateProvider
          .state({
            name: 'auth',
            url: '/',
            templateUrl : "resources/templates/auth.html",
            controller: 'authCtrl',
            controllerAs: 'auth'
          })
          .state({
            name: 'photos',
            url: '/photos/',
            templateUrl : "resources/templates/photos.html",
            controller: 'photoCtrl',
            controllerAs: 'photos'
          });
    }).run(function($state){
      $state.go('auth');
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