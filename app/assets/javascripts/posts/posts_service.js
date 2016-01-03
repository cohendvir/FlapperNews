
/**
 * Created by dvircohen on 12/31/15.
 */

app.factory('posts', function($http) {
    var obj = {

        posts: [],

        getAll: function() {
            return $http.get('/posts.json').success(function(data) {
               angular.copy(data, obj.posts);
            });
        },

        create: function(post) {
            return $http.post('/posts.json', post).success(function(post) {
               obj.posts.push(post);
            });
        }
    };

    return obj;
});