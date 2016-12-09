angular.module('instagular').controller('authCtrl', ['$scope', '$http', '$window', "urlResolver", "clientID", function($scope, $http, $window, urlResolver, clientID){
    var auth = this;

    auth.address = {};
    auth.address.redirect_uri = urlResolver.resolveHost()+"/photos";
    auth.address.login = "https://api.instagram.com/oauth/authorize/?client_id="+clientID+"&redirect_uri="+auth.address.redirect_uri+"&response_type=token";

    auth.message = "Logging in with Instagram..."

    $window.location.href = auth.address.login;

}]);