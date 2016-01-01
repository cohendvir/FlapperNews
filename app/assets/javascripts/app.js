/**
 * Created by dvircohen on 12/30/15.
 */
var app = angular.module('flapperNews', ['ui.router', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/_home.html',
            controller: 'MainCtrl'
        })
        .state('posts', {
            url: '/posts/{id}',
            templateUrl: 'posts/_posts.html',
            controller: 'PostsCtrl'
        });

    $urlRouterProvider.otherwise('home');
}]);