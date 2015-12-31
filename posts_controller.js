/**
 * Created by dvircohen on 12/31/15.
 */
app.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
    $scope.post = posts.posts[$stateParams.id];

    $scope.upvoteComment = function(comment) {
        comment.upvotes++;
    };

    $scope.addComment = function() {
        if (!$scope.body || $scope.body == '')
            return;

        $scope.post.comments.push({
            author: 'user',
            body: $scope.body,
            upvotes: 0
        });

        $scope.body = '';
    };

}]);
