(function() {

  'use strict';

  angular
    .module('leagueApp.components.champions')
    .service('champService', champService);

  champService.$inject = ['$http'];

  const baseUrl = 'https://global.api.pvp.net';
  const champApi = '/api/lol/static-data/na/v1.2/champion?champData=spells';
  const apiKey = '&api_key=RGAPI-de0e9e3f-1825-4657-8c2b-0aef77152596';

  function champService($http) {
    /*jshint validthis: true */
    this.champions = {};
    this.getChamps = () => {
      return $http.get(baseUrl + champApi + apiKey)
      .then((data) => {
        this.champions.data = data.data.data;
        console.log(this.champions.data);
      });
    };
  }

})();
