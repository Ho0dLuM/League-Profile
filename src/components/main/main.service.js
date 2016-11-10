(function() {

  'use strict';

  angular
    .module('leagueApp.components.main')
    .service('mainService', mainService);

  mainService.$inject = ['$http'];

  function mainService($http) {
    /*jshint validthis: true */
    console.log('mainService');
  }

})();
