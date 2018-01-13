// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

var myApp=angular.module("myApp",['ngMaterial','ngMessages']);

myApp.controller('MainCtrl',function($scope){
  $scope.registeredUser ={};
  $scope.listNames = [
  {
    "id": 0,
    "name": "Ray Michael"
  },
  {
    "id": 1,
    "name": "Cline Moody"
  },
  {
    "id": 2,
    "name": "Candy Underwood"
  },
  {
    "id": 3,
    "name": "Aurelia Sparks"
  },
  {
    "id": 4,
    "name": "Ramona Bauer"
  }
]

  
  $scope.register= function(user){
    $scope.registeredUser = user;
  }
  
})