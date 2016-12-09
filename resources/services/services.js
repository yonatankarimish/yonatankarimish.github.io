angular.module('instagular')
    .factory('urlResolver', function(){
        function resolveHost(){
            return window.location.hostname == "localhost" ? "http://" + window.location.host+"/watchdox" : "https://" + window.location.host;
        }

        return {
            resolveHost: resolveHost
        };
    })
    .factory('InstagramAPI', ['$http', 'urlResolver', 'clientID', function($http, urlResolver, clientID) {
        var image_count = 20;
        return {
            getToken: function(){

                var address = {};
                address.redirect_uri = urlResolver.resolveHost()+"/photos/";
                address.login = "https://api.instagram.com/oauth/authorize/?client_id="+clientID+"&redirect_uri="+address.redirect_uri+"&response_type=token";

                $http.jsonp(address.login)
                .success(function(response) {
                    console.log('success');
                    console.log(response.data);
                })
                .error(function(xhr, status, err) {
                    console.log('error');
                    console.error(status, err);
                });
            },
            fetchPhotos : function(access_token, callback) {
                var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?count='+image_count+'&callback=JSON_CALLBACK&access_token='+access_token;
                $http.jsonp(endpoint)
                .success(function(response) {
                  callback(response.data);
                })
                .error(function(xhr, status, err) {
                  console.error(status, err);
                });
            },
            fetchPhotosByTag : function(access_token, tag, callback) {
                var endpoint = 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?count='+image_count+'&callback=JSON_CALLBACK&access_token='+access_token;
                $http.jsonp(endpoint)
                .success(function(response) {
                  callback(response.data);
                })
                .error(function(xhr, status, err) {
                  console.error(status, err);
                });
            }
        }
    }]);