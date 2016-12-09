angular.module('instagular').controller('authCtrl', ['$scope', '$http', '$window', "clientID", function($scope, $http, $window, clientID){
    var auth = this;

    auth.getHost = function(){
        return window.location.hostname == "localhost" ? "http://" + window.location.host+"/watchdox" : "https://" + window.location.host;
    }

    auth.address = {};
    auth.address.redirect_uri = auth.getHost()+"/photos";
    auth.address.login = "https://api.instagram.com/oauth/authorize/?client_id="+clientID+"&redirect_uri="+auth.address.redirect_uri+"&response_type=token";

    auth.message = "Logging in with Instagram..."

    $window.location.href = auth.address.login;

}]);