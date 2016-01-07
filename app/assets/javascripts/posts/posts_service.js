
/**
 * Created by dvircohen on 12/31/15.
 */

app.factory('posts', function($http) {
    var obj = {

        posts: [],

        getAll: function() {
            return $http.get('/posts').success(function(data) {
               angular.copy(data, obj.posts);
            });
        },

        create: function(post) {
            return $http.post('/posts', post).success(function(post) {
               obj.posts.push(post);
            });
        },

        remove: function(post) {
            return $http.delete('/posts/' + post.id).success(function() {
                var index = _.findIndex(obj.posts, function(p) {
                    return p.id == post.id;
                });
                obj.posts.splice(index, 1);
            });
        },

        upvote: function(post) {
            return $http.put('/posts/' + post.id + '/upvote').success(function(p) {
               post.upvotes = p.upvotes;
            });
        },

        downvote: function(post) {
            return $http.put('/posts/' + post.id + '/downvote').success(function(p) {
                post.downvotes = p.downvotes;
            });
        },

        getById: function(postId) {
            return $http.get('/posts/' + postId).then(function(res) {
                return res.data;
            });
        }
    };

    return obj;
});