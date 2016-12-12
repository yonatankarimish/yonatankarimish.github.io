angular.module('instagular').controller('tagCtrl', ['$scope', '$http', '$cookies', function($scope, $http, $cookies){
    var tags = this;

    tags.current = "";
    tags.history = $cookies.get('tag_history')? $cookies.get('tag_history').split(',') : [];
    
    tags.addTagToHistory = function(){
        var tagIndex = tags.history.indexOf(tags.current);
        if(tagIndex>-1)
            tags.history.splice(tagIndex,1);
        tags.history.unshift(tags.current);
        tags.history.splice(5,1);
        $cookies.put('tag_history', tags.history, {'expires': nextYear});
        tags.current == "" ? tags.findAll() : tags.findByTag({searchTag: tags.current});
    }

    tags.tagClicked = function(elem){
        tags.current = elem.tag;
        tags.current == "" ? tags.findAll() : tags.findByTag({searchTag: tags.current});
    }
}]);