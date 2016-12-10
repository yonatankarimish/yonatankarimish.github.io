angular.module('instagular').controller('photoCtrl', ['$scope', '$http', '$cookies', '$stateParams', 'InstagramAPI', function($scope, $http, $cookies, $stateParams, InstagramAPI){
    var photos = this;
    console.log("$stateParams: "+$stateParams);

    //scope variables
    photos.token = $cookies.get('access_token');
    photos.data = [];
    photos.tag = "";
    photos.history = $cookies.get('tag_history')? $cookies.get('tag_history').split(',') : [];
    console.log("photos.history: "+photos.history);

    //load script
    InstagramAPI.fetchPhotos(photos.token, function(responseData){
         photos.data = responseData;
         console.log(responseData);
    });

    //functions
    photos.addTagToHistory = function(){
        photos.history.unshift(photos.tag);
        photos.history.splice(5,1);
        photos.findByTag();
    }

    photos.tagClicked = function(elem){
        photos.tag = elem.tag;
        photos.findByTag();
    }

    photos.findByTag = function(){
        var nextYear = new Date();
        nextYear.setFullYear(nextYear.getFullYear()+1);
        $cookies.put('tag_history', photos.history, {'expires': nextYear});
        InstagramAPI.fetchPhotosByTag(photos.token, photos.tag, function(responseData){
                 photos.data = responseData;
                 console.log(responseData);
        });
    }
}]);