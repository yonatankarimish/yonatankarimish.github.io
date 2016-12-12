angular.module('instagular').controller('albumCtrl', ['$scope', '$http', '$cookies', 'InstagramAPI', function($scope, $http, $cookies, InstagramAPI){
    var album = this;

    album.data = [];

    album.findAll = function(){
        InstagramAPI.fetchPhotos(album.token, function(responseData){
             album.data = responseData;
             console.log(responseData);
        });
    }

    album.findByTag = function(searchTag){
        InstagramAPI.fetchPhotosByTag(album.token, searchTag, function(responseData){
             album.data = responseData;
             console.log(responseData);
        });
    }

    album.findAll();
}]);