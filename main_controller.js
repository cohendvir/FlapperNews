/**
 * Created by dvircohen on 12/31/15.
 */
app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {

    $scope.posts = posts.posts;

    $scope.addPost = function() {

        if (!$scope.title || $scope.title == '')
            return false;

        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
        });

        $scope.title = '';
        $scope.link = '';

    };

    $scope.upvote = function(post) {
        post.upvotes++;
    };
}]);