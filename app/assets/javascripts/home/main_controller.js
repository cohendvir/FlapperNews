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

    $scope.upvotePost = function(post) {
        post.upvotes++;
    };
});