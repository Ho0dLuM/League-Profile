(function() {

  'use strict';

  angular
    .module('leagueApp.components.champions')
    .service('champService', champService);

  champService.$inject = ['$http'];

  const baseUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/';
  const champApi = 'champion?champData=all&';
  const customUrl = 'http://localhost:8080/api/v1/champions';

  function champService($http) {
    /*jshint validthis: true */
    this.champs = [];

    this.getChamps = () => {
      return $http.get(baseUrl + champApi + apiKey);
    };

    this.customChamps = () => {
      return $http.get(customUrl + '/1')
      .then((data) => {
        const results = data;
        window.results = results;
        this.champs.push(results);
      });
    };

  }

})();
