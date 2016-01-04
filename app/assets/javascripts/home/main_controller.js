/**
 * Created by dvircohen on 12/31/15.
 */
// @ngInject
app.controller('MainCtrl', function($scope, posts) {

    $scope.posts = posts.posts;
    $scope.addPost = function() {

        if (!$scope.title || $scope.title == '')
            return false;

        posts.create({
            title: $scope.title,
            link: $scope.link
        });

        $scope.title = '';
        $scope.link = '';

    };

    $scope.removePost = function(post) {
        posts.remove(post);
    };

    $scope.upvotePost = function(post) {
        posts.upvote(post);
    };

    $scope.downvotePost = function(post) {
        posts.downvote(post);
    };
});