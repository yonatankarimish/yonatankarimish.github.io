angular.module('instagular').controller('authCtrl', ['$scope', '$http', '$state', '$window', "urlResolver", "clientID", '$cookies', 'InstagramAPI', function($scope, $http, $state, $window, urlResolver, clientID, $cookies, InstagramAPI){
    var auth = this;

    auth.login = function(){
        $window.location.href = auth.address.login;
    }

    auth.getTokenFromUrl = function(){
        try{
            return $window.location.href.split('#')[1].split('=')[1];
        }catch(err){
            console.log("INFO: Instagram has not returned an access token");
            return null;
        }
    }

    auth.address = {};
    auth.address.redirect_uri = urlResolver.resolveHost()+"/"; //+ "/photos/";
    auth.address.login = "https://api.instagram.com/oauth/authorize/?client_id="+clientID+"&redirect_uri="+auth.address.redirect_uri+"&scope=public_content&response_type=token";
    auth.token = auth.getTokenFromUrl();
    auth.isAuthenticated = false;

    if(auth.token != null){
        auth.isAuthenticated = true;
    }
}]);