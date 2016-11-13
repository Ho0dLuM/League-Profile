(function() {

  'use strict';

  angular
    .module('leagueApp.components.champions')
    .service('champService', champService);

  champService.$inject = ['$http'];

  const baseUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/';
  const champApi = 'champion?champData=all&';
  const apiKey = 'api_key=RGAPI-de0e9e3f-1825-4657-8c2b-0aef77152596';

  function champService($http) {
    /*jshint validthis: true */
    this.champions = [];
    this.spells = [];

    this.getChamps = () => {
      return $http.get(baseUrl + champApi + apiKey)
      .then((data) => {
        const results = data.data.data;
        window.results = results;
        for (let name in results) {
          this.champions.push(results[name]);
          this.spells.push(results[name].passive);
          this.spells.push(results[name].spells);
        }
      });
    };
  }

})();
