(function() {

  'use strict';

  angular
    .module('leagueApp.config', [])
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'champController',
        controllerAs: 'champCtrl',
        templateUrl: 'components/champions/champions.view.html'
      });

    $urlRouterProvider
      .otherwise('/home');
  }

})();
