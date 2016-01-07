/**
 * Created by dvircohen on 1/4/16.
 */
app.factory('comments', function($http) {
    var obj = {

        upvoteComment: function(post, comment){
            return $http.put('/posts/' + post.id + '/comments/' + comment._id + '/upvote').success(function(data) {
                comment.upvotes = data.upvotes;
            });
        },

        addComment: function(post, comment) {
            return $http.post('/posts/' + post.id + '/comments', comment).success(function(data) {
                data._id = data.id;
                delete data.id;
                post.comments.push(data);
            });
        },

        removeComment: function(post, comment) {
            return $http.delete('/posts/' + post.id + '/comments/' + comment._id).success(function() {
                var index = _.findIndex(post.comments, function(c) {
                    return c._id == comment._id;
                });
                post.comments.splice(index, 1);
            });
        }
    };

    return obj;
});
