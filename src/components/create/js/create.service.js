(function() {

  'use strict';

  angular
    .module('leagueApp.components.create')
    .service('createService', createService);

  createService.$inject = ['$http'];

  const customUrl = 'http://localhost:8080/api/v1/champions';

  function createService($http) {
    /*jshint validthis: true */

    this.addChampion = function(champObj) {
      return $http({
        method: 'POST',
        url: customUrl,
        data: champObj,
        headers: {'Content-Type': 'application/json'}
      });
    };

  }

})();
