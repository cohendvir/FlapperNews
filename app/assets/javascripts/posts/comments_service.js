/**
 * Created by dvircohen on 1/4/16.
 */
app.factory('comments', function($http) {
    var obj = {

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
