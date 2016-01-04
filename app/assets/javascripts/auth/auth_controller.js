/**
 * Created by dvircohen on 1/4/16.
 */
app.controller('AuthCtrl', function($scope, $state, Auth) {
    $scope.login = function() {
        Auth.login($scope.user).then(function(){
            $state.go('home');
        });
    };

    $scope.register = function() {
        Auth.register($scope.user).then(function(){
            $state.go('home');
        });
    };
});
