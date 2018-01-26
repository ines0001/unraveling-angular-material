'use strict'

angular.module('ngMenu',[]).controller('menuController',function($scope,$mdDialog){

  var travelInfo = [
      {
        title: "Travel",
        icon: "airplanemode_active",
        topics: [
          "Cyprus",
          "Egypt",
          "Mauritius"
        ]
      },
      {
        title: "Hotel",
        icon: "local_hotel",
        topics: [
          "Dive bungalows",
          "Tents",
          "Hostels",
          "Hotels"
        ]
      },
      {
        title: "Car rental",
        icon: "card_travel",
        topics: [
          "Small cars",
          "Family cars",
          "Vans"
        ]
      },
      {
        title: "Dive sites",
        icon: "library_books",
        topics: [
          "Shallow dives",
          "Wreck dives",
          "Night dives",
          "Cave dives"
        ]
      }
    ];

    $scope.travelInfo = travelInfo;

    $scope.expandOrCollapse = function(item) {
      item.expanded = !item.expanded;
    };

    $scope.dividerBefore = function(index) {
      return index > 0
        && $scope.travelInfo[index].expanded
        && !$scope.travelInfo[index-1].expanded
    }

    $scope.dividerAfter = function(index) {
      return index < $scope.travelInfo.length - 1
        && $scope.travelInfo[index].expanded;
    }

    $scope.displayTopic = function(ev, item) {
      var dialog = $mdDialog.alert()
        .title('Topic info')
        .textContent('Information about "'
        + item + '".')
        .ariaLabel('topic info')
        .ok('OK')
        .targetEvent(ev);
      $mdDialog.show(dialog);
    }
    
})
.config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
})
.controller('MenuDropdownCtrl', function DemoCtrl($mdDialog) {
    var originatorEv;

    this.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

    this.notificationsEnabled = true;
    this.toggleNotifications = function() {
      this.notificationsEnabled = !this.notificationsEnabled;
    };

    this.redial = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('Suddenly, a redial')
          .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
          .ok('That was easy')
      );

      originatorEv = null;
    };

    this.checkVoicemail = function() {
      // This never happens.
    };
  });