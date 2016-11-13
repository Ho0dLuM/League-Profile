(function() {

  'use strict';

  angular
    .module('leagueApp.components.champions')
    .directive('loreDirective', () => {
      return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: ['$scope',
        function tabsController($scope) {
          const panes = $scope.panes = [];

          $scope.select = (pane) => {
            angular.forEach(panes, (pane) => {
              pane.selected = false;
            });
            pane.selected = true;
          };

          this.addPane = (pane) => {
            if (panes.length === 0) {
              $scope.select(pane);
            }
            panes.push(pane);
          };
        }],
        templateUrl: 'components/champions/views/partials/lore.tab.html'
      };
    })
    .directive('myPane', () => {
      return {
        require: '^^loreDirective',
        restrict: 'E',
        transclude: true,
        scope: {
          title: '@'
        },
        link: (scope, element, attrs, tabsCtrl) => {
          tabsCtrl.addPane(scope);
        },
        templateUrl: 'components/champions/views/partials/my.tab.html'
      };
    });

})();
