/**
 * Created by dvircohen on 12/31/15.
 */
// @ngInject
app.controller('PostsCtrl', function($scope, posts, post) {

    $scope.post = post;

    $scope.removeComment = function(comment) {
        posts.removeComment($scope.post, comment);
    };

    $scope.upvoteComment = function(comment) {
        posts.upvoteComment($scope.post, comment);
    };

    $scope.addComment = function() {
        if (!$scope.body || $scope.body == '')
            return;

        var comment = {
            author: 'user',
            body: $scope.body
        };

        posts.addComment($scope.post, comment);

        $scope.body = '';
    };

});
