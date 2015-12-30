/**
 * Created by dvircohen on 12/30/15.
 */
angular.module('flapperNews', []).controller('MainCtrl', ['$scope', function($scope) {

    $scope.posts = [
        { title: "dvir", upvotes: 5 },
        { title: "noy", upvotes: 10 },
        { title: "tamir", upvotes: 8 },
    ];

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