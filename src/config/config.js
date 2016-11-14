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
        templateUrl: 'components/champions/views/champions.view.html'
      })
      .state('create', {
        url: '/create',
        controller: 'createController',
        controllerAs: 'createCtrl',
        templateUrl: 'components/create/views/create.view.html'
      });

    // $urlRouterProvider
    //   .otherwise('/home');
  }

})();
