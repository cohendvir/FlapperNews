/**
 * Created by dvircohen on 12/31/15.
 */
// @ngInject
app.controller('MainCtrl', function($scope, posts) {

    $scope.posts = posts.posts;

    $scope.addPost = function() {

        if (!$scope.title || $scope.title == '')
            return false;

        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                {author: "dvir cohen", body: "first comment", upvotes: 0},
                {author: "noy shefer", body: "second comment", upvotes: 0}
            ]
        });

        $scope.title = '';
        $scope.link = '';

    };

    $scope.upvotePost = function(post) {
        post.upvotes++;
    };
});