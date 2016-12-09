angular.module('instagular').controller('authCtrl', ['$scope', '$http', '$state', '$window', "urlResolver", "clientID", '$cookies', 'InstagramAPI', function($scope, $http, $state, $window, urlResolver, clientID, $cookies, InstagramAPI){
    var auth = this;

    auth.address = {};
    auth.address.redirect_uri = urlResolver.resolveHost()+"/photos/";
    auth.address.login = "https://api.instagram.com/oauth/authorize/?client_id="+clientID+"&redirect_uri="+auth.address.redirect_uri+"&scope=public_content&response_type=token";

    auth.message = "Logging in with Instagram..."

    if($cookies.get('access_token')){
        console.log($cookies.get('access_token'));
        $state.go('auth');
    }
    else{
        window.location.href = auth.address.login;
    }
}]);