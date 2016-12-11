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

    //functions
    photos.addTagToHistory = function(){
        var tagIndex = photos.history.indexOf(photos.tag);
        if(tagIndex>-1)
            photos.history.splice(tagIndex,1);
        photos.history.unshift(photos.tag);
        photos.history.splice(5,1);
        photos.tag == ""? photos.findAll() : photos.findByTag();
    }

    photos.tagClicked = function(elem){
        photos.tag = elem.tag;
        photos.tag == ""? photos.findAll() : photos.findByTag();
    }

    photos.findAll = function(){
        InstagramAPI.fetchPhotos(photos.token, function(responseData){
             photos.data = responseData;
             console.log(responseData);
        });
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

    photos.findAll();
}]);