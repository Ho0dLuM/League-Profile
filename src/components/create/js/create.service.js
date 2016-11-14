(function() {

  'use strict';

  angular
    .module('leagueApp.components.create')
    .service('createService', createService);

  createService.$inject = ['$http'];

  const baseUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/';
  const champApi = 'champion?champData=all&';
  const customUrl = 'http://localhost:8080/api/v1/champions';

  function createService($http) {
    /*jshint validthis: true */

    this.getSpells = () => {
      return $http.get(baseUrl + champApi + apiKey);
    };

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
