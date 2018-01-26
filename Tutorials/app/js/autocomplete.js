'use strict'

angular.module('ngAutocomplete',[]).controller('autocompleteCtrl',function($scope,$http,$q,$timeout){
  
  $scope.cities = [];
  
  $http
    .get('/competitions')
    .then(function(response) {
        // Map the response object to the data object.
          
        $scope.competitions = response.data.sort(function(a,b){
          return (a.name > b.name)
                  ? 1
                  : (a.name < b.name) ? -1 : 0;
        //$scope.cities;
    });
  });
    
  $http
    .get('/cities')
    .then(function(response) {
        // Map the response object to the data object.

        $scope.cities = response.data.sort();
        //$scope.cities;
  });
 
  $scope.getMatchingCities = function(searchKey) {
    var deferred = $q.defer();
    
    $timeout( function(){
      var result = $scope.cities; 
      // la consultation est simulé uniquement si champ de recherche présent
      if(searchKey) {
          result = $scope.cities.filter(function(item) {
            var key = searchKey.toLowerCase();
            return item.toLowerCase().indexOf(key) >= 0;
          });
          deferred.resolve(result);
      }
      
    }, 2000);
    
    return deferred.promise;
  }
  
  $scope.getMatchingCompetitions = function(searchKey) {
    var deferred = $q.defer();
    
    if (!searchKey) return $scope.competitions;
    
    $timeout( function(){
      var result = $scope.competitions; 
      // la consultation est simulé uniquement si champ de recherche présent
      if(searchKey) {
          result = $scope.competitions.filter(function(item) {
            var key = searchKey.toLowerCase();
            return item.name.toLowerCase().indexOf(key) >= 0;
          });
          deferred.resolve(result);
      }
      
    }, 1);
    
    return deferred.promise;
  }


});