angular.module('instagular').controller('photoCtrl', ['$scope', '$http', '$cookies', '$stateParams', 'InstagramAPI', function($scope, $http, $cookies, $stateParams, InstagramAPI){
    var photos = this;
    console.log($stateParams);

    photos.token = $cookies.get('access_token');
    photos.data = [];
    InstagramAPI.fetchPhotos(photos.token, function(responseData){
         photos.data = responseData;
         console.log(responseData);
    });

    photos.tag = "";
    photos.findByTag = function(){
        InstagramAPI.fetchPhotosByTag(photos.token, photos.tag, function(responseData){
                 photos.data = responseData;
                 console.log(responseData);
        });
    }
}]);