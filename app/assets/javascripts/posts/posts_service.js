
/**
 * Created by dvircohen on 12/31/15.
 */

app.factory('posts', function($http, $filter) {
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


        getById: function(postId) {
            return $http.get('/posts/' + postId).then(function(res) {
                return res.data;
            });
        },

        upvoteComment: function(post, comment){
            return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote').success(function(data) {
               comment.upvotes = data.upvotes;
            });
        },

        addComment: function(post, comment) {
            return $http.post('/posts/' + post.id + '/comments', comment).success(function(data) {
                post.comments.push(data);
            });
        },

        removeComment: function(post, comment) {
            return $http.delete('/posts/' + post.id + '/comments/' + comment.id).success(function() {
                var index = _.findIndex(post.comments, function(c) {
                    return c.id == comment.id;
                });
                post.comments.splice(index, 1);
            });
        }
    };

    return obj;
});