(function() {

  'use strict';

  angular
    .module('leagueApp.config', [])
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        templateUrl: 'components/main/main.view.html'
      });

    $urlRouterProvider
      .otherwise('/home');
  }

})();
