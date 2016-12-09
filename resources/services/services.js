angular.module('instagular').factory('urlResolver', function(){
    function resolveHost(){
        return window.location.hostname == "localhost" ? "http://" + window.location.host+"/watchdox" : "https://" + window.location.host;
    }

    return {
        resolveHost: resolveHost
    };
});