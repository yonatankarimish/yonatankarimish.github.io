angular.module('instagular')
    .directive('photoAlbum', function(){
        return{
            scope:{},
            bindToController: {
              token: "@"
            },
            restrict: 'E',
            replace: true,
            controller: 'albumCtrl',
            controllerAs: 'album',
            templateUrl: 'sources/photo-album/photo-album.html',
        };
    })
    .directive('tagHistory', function(){
        return{
            scope: {},
            bindToController: {
                findAll: "&",
                findByTag: "&"
            },
            restrict: 'E',
            replace: true,
            controller: 'tagCtrl',
            controllerAs: 'tags',
            templateUrl: 'sources/tag-history/tag-history.html',
        };
    });