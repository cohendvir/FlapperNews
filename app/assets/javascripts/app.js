/**
 * Created by dvircohen on 12/30/15.
 */
var app = angular.module('flapperNews', ['ui.router', 'templates', 'Devise']);

// @ngInject
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/_home.html',
            controller: 'MainCtrl',
            resolve: {
                postPromise: function(posts) {
                    return posts.getAll();
                }
            }
        })
        .state('posts', {
            url: '/posts/{id}',
            templateUrl: 'posts/_posts.html',
            controller: 'PostsCtrl',
            resolve: {
                post: function($stateParams, posts) {
                    return posts.getById($stateParams.id);
                }
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'auth/_login.html',
            controller: 'AuthCtrl',
            onEnter: function($state, Auth) {
                Auth.currentUser().then(function (){
                    $state.go('home');
                });
            }
        })
        .state('register', {
            url: '/register',
            templateUrl: 'auth/_register.html',
            controller: 'AuthCtrl',
            onEnter: function($state, Auth) {
                Auth.currentUser().then(function (){
                    $state.go('home');
                });
            }
        });

    $urlRouterProvider.otherwise('home');
});