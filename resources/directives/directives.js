angular.module('instagular').directive('tagHistory', function(){
    return{
        /*scope: {
            history:'=history'
        },*/
        //scope:true,
        restrict: 'E',
        replace: true,
        templateUrl: 'resources/templates/history.html',
        /*controller: function($scope, $compile, $cookies) {
            var history = this;
            history.addTagToHistory = function(tag){
                photos.history.unshift(tag);
                photos.history.splice(5,1);
            }
        },
        controllerAs: 'history',*/
        link: function($scope, elem, attrs) {
            console.log('$scope.history: '+$scope.history);
        }
    };
});