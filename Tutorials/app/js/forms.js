'use strict'

angular.module('ngForms',['ngMessages']).controller('formCtrl',function($scope,$q,$timeout){
  $scope.registeredUser ={};
  var listNames = [
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
];
  $scope.diveTypes = [
      {id: 0, name: "Normal"},
      {id: 1, name: "Wreck dive"},
      {id: 2, name: "Night dive"},
      {id: 3, name: "Cave dive"},
      {id: 4, name: "Deep dive"}
    ];

    $scope.altitudeTypes = [
      { category: 'Low', levels: [
          "Sea level",
          "Under 300 feet",
          "300-600 feet"
        ],
        explain: "Between sea level and 600 feet"},
      { category: 'High', levels: [
        "600-1200 feet",
        "1200-1800 feet",
        "1800-2400 feet"
        ],
        explain: "Between 600 and 2400 feet"},
      { category: 'Extreme', levels: [
        "2400-4800 feet",
        "Over 4800 feet"
        ],
        explain: "Above 2400 feet"}
    ];
  $scope.References = null;

  
  $scope.register= function(user){
    $scope.registeredUser = user;
    $scope.References = null;
  }
  
  $scope.InitListReferent = function(){
    if($scope.References) return;
    
    var deferred = $q.defer();
    
    // asynchrounus afeter 2s callback
    setTimeout(function(){
      $scope.References = listNames;
      deferred.resolve();
    
    },2000);
    return deferred.promise;
    
  }
  
});