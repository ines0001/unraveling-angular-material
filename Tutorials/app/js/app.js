
var ngApp = angular.module('myApp',['ngMaterial','ngForms','ngAutocomplete','ngRouting','ngGrid','ngDatatable','ngMenu'])
.config(function($mdIconProvider){
        $mdIconProvider.iconSet('my', './assets/ic_home_black_24px.svg');
        $mdIconProvider.icon('computer', './icons/ic_computer_24px.svg');
        $mdIconProvider.defaultIconSet('./assets/ic_home_black_24px.svg', 24)
      })
.controller('MainCtrl',function($scope,$mdSidenav){
  $scope.items_menu =[
    { 
      title: 'Forms and Controls',
      icon:'home',
      detail:'Examples divers autour des contrôles',
      topics:
      [
        {
          disabled:false,
          title:"form simple",
          detail:"Formulaire intégrant plusieurs contrôles",
          url:"#!/forms"
        },
        {
          disabled:false,
          title:"Autocomplete controller",
          detail:"Controleur list avec autocompletion",
          url:"#!/autocomplete"
        },
        { 
          disabled:false,
          title:"Icons",
          detail:"Jeux icones Material Icon",
          icon:"fiber_manual_record",
          url:"#!/icons",
          color:"md-primary"
        }
      ]
    },
    { 
      title: 'Menu',
      icon:'menu',
      detail:'Solutions d\'implémention sur les menus',
      topics:
      [
        {
          disabled:false,
          title:"menu",
          detail:"Liste à niveau condensé ou non",
          url:"#!/menu"
        },
        {
          disabled:false,
          title:"Menu drop",
          url:"#!/menudrop"
        }
      ]
    },
    { 
      title: 'Modules externe',
      icon:'timeline',
      detail:'Ensemble de solution divers du marché',
      topics:
      [
        {
          disabled:false,
          title:"md-table-toolbar",
          url:"#!/datatable"
        }
      ]
    },/*,
    { 
      disabled:false,
      title:"Autocomplete controller",
      icon:"search",
      url:"autocomplete"
    },
    { 
      disabled:false,
      title:"Menu",
      icon:"menu",
      url:"menu",
      color:"md-warn"
    },
    { 
      disabled:false,
      title:"Data table",
      icon:"timeline",
      url:"datatable"
    },
    { 
      disabled:false,
      title:"Icons",
      icon:"fiber_manual_record",
      url:"icons",
      color:"md-primary"
    },
    { 
      disabled:false,
      title:"Menu drop",
      icon:"arrow_drop_down_circle",
      url:"menudrop"
    },
    { 
      disabled:false,
      title:"Grid",
      icon:"",
      url:"grid"
    },*/
    
  ];
  
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
  
  $scope.expandOrCollapse = function(item) {
      item.expanded = !item.expanded;
  };
  

  
  
  $scope.dividerBefore = function(index) {
      return index > 0
        && $scope.items_menu[index].expanded
        && !$scope.items_menu[index-1].expanded
  }

  $scope.dividerAfter = function(index) {
    return index < $scope.items_menu.length - 1
      && $scope.items_menu[index].expanded;
  }

})