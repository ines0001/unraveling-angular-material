'use strict'

angular.module('ngRouting',['ngRoute']).config(function($routeProvider,$httpProvider){
  $routeProvider
    //.when('/posts/:id/update',{templateUrl:'/modules/admin/views/admin-update-post.html',controller:'PostUpdateController'})
    .when('/forms',{templateUrl:'views/forms-tuto.html',controller:'formCtrl'})
    .when('/autocomplete',{templateUrl:'views/autocomplete.html',controller:'autocompleteCtrl'})
    .when('/grid',{templateUrl:'views/grid_01.html',controller:'gridCtrl'})
    .when('/datatable',{templateUrl:'views/design-datatable.html',controller:'nutritionController'})
    .when('/menu',{templateUrl:'views/menu.html',controller:'menuController'})
    .when('/menudrop',{templateUrl:'views/menu_dropdown.html',controller:'MenuDropdownCtrl'})
    .when('/icons',{templateUrl:'views/icons.html'})
    .otherwise({redirectTo:'/'});
  
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  
})