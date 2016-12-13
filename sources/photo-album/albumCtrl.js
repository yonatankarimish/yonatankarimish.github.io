angular.module('instagular').controller('albumCtrl', ['$scope', '$http', '$cookies', 'InstagramAPI', function($scope, $http, $cookies, InstagramAPI){
    var album = this;

    album.data = [];
    album.cache = localStorage.getItem('album_cache') != null ? JSON.parse(localStorage.getItem('album_cache')) : [];
    album.loading = true;

    album.findAll = function(sortCache){
        album.loading = true;
        if(album.cacheContainsTag("")){
            album.data = album.retrieveDataForTag("");
            if(sortCache)
                album.insertIntoCache("", album.data); //this is done to sort the cache according to search order
        }
        InstagramAPI.fetchPhotos(album.token, function(responseData){
             album.insertIntoCache("", responseData);
             album.data = responseData;
             album.loading = false;
        });
    }

    album.findByTag = function(searchTag, sortCache){
        album.loading = true;
        if(album.cacheContainsTag(searchTag)){
            album.data = album.retrieveDataForTag(searchTag);
            if(sortCache)
                album.insertIntoCache(searchTag, album.data); //this is done to sort the cache according to search order
        }
        InstagramAPI.fetchPhotosByTag(album.token, searchTag, function(responseData){
             album.insertIntoCache(searchTag, responseData);
             album.data = responseData;
             album.loading = false;
        });
    }

    album.cacheContainsTag = function(searchTag){
        for(var record in album.cache)
            if(album.cache[record].tag == searchTag)
                return true;
        return false;
    }

    album.insertIntoCache = function(newTag, imgJson){
        console.log("cache at start: [")
        album.cache.forEach(function(item, index){
            console.log(item.tag+":"+item.data.length)
        });
        console.log("]")
        for(var record in album.cache){
            if(album.cache[record].tag == newTag){
                album.cache.splice(record,1);
                break;
            }
        }

        album.cache.unshift({tag: newTag, data: imgJson});
        album.cache.splice(5,1);
        console.log("cache at end: [")
        album.cache.forEach(function(item, index){
            console.log(item.tag+":"+item.data.length)
        });
        console.log("]")

        localStorage.setItem('album_cache', JSON.stringify(album.cache));
    }

    album.retrieveDataForTag = function(tag){
        for(var record in album.cache)
            if(album.cache[record].tag == tag)
                return album.cache[record].data;
        return null;
    }

    album.findAll();
}]);