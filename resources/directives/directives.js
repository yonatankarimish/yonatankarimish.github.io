angular.module('instagular')
    .directive('instagularAuth', function(){
        return{
            restrict: 'E',
            replace: true,
            controller: 'authCtrl',
            controllerAs: 'auth',
            bindToController: true,
            templateUrl: 'resources/templates/auth.html',
        };
    })
    .directive('photoAlbum', function(){
        return{
            scope:{
                token: "@"
            },
            restrict: 'E',
            replace: true,
            require: ['^instagularAuth'],
            controller: 'albumCtrl',
            controllerAs: 'album',
            bindToController: true,
            templateUrl: 'resources/templates/album.html',
        };
    })
    .directive('tagHistory', function(){
        return{
            scope: {
                findAll: "&",
                findByTag: "&"
            },
            restrict: 'E',
            replace: true,
            require: ['^photoAlbum'],
            controller: 'tagCtrl',
            controllerAs: 'tags',
            bindToController: true,
            templateUrl: 'resources/templates/tags.html',
        };
    });