'use strict'

angular.module('ngRouting',['ngRoute']).config(function($routeProvider,$httpProvider){
  $routeProvider
    //.when('/posts/:id/update',{templateUrl:'/modules/admin/views/admin-update-post.html',controller:'PostUpdateController'})
    .when('/',{templateUrl:'views/forms-tuto.html',controller:'formCtrl'})
    .when('/autocomplete',{templateUrl:'views/autocomplete.html',controller:'autocompleteCtrl'})
    .otherwise({redirectTo:'/'});
  
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  
})