angular.module('instagular').controller('tagCtrl', ['$scope', '$http', '$cookies', function($scope, $http, $cookies){
    var tags = this;

    tags.current = "";
    tags.history = localStorage.getItem('tag_history') != null ? JSON.parse(localStorage.getItem('tag_history')) : [];
    
    tags.addTagToHistory = function(){
        var tagIndex = tags.history.indexOf(tags.current);
        if(tagIndex>-1)
            tags.history.splice(tagIndex,1);
        tags.history.unshift(tags.current);
        tags.history.splice(5,1);

        localStorage.setItem('tag_history', JSON.stringify(tags.history));

        tags.current == "" ? tags.findAll({sortCache:true}) : tags.findByTag({searchTag: tags.current, sortCache:true});
    }

    tags.tagClicked = function(elem){
        tags.current = elem.tag;
        tags.current == "" ? tags.findAll({sortCache:false}) : tags.findByTag({searchTag: tags.current, sortCache:false});
    }
}]);