angular.module('instagular').controller('authCtrl', ['$scope', '$http', '$window', "clientID", function($scope, $http, $window, clientID){
    var auth = this;

    auth.address = {
        redirect_uri: "http://localhost:63342/watchdox/index.html",
    }
    auth.address.login = "https://api.instagram.com/oauth/authorize/?client_id="+clientID+"&redirect_uri="+auth.address.redirect_uri+"&response_type=token";

    auth.getToken = function(){
        console.log(auth.address);
        $window.location.href = auth.address.login;
    }
}]);