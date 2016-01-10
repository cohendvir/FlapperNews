/**
 * Created by dvircohen on 1/10/16.
 */
app.directive('comment', function() {
   return {
        restrict: 'E',
        templateUrl: 'posts/partials/_comment.html'
   };
});