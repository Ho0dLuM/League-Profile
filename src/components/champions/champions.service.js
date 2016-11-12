(function() {

  'use strict';

  angular
    .module('leagueApp.components.champions')
    .service('champService', champService);

  champService.$inject = ['$http'];

  const baseUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/';
  const spellsApi = 'champion?champData=spells';
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
          if (results.hasOwnProperty(name)) {
            this.champions.push(results[name].image.full);
            this.champions.push(results[name].lore);
            this.champions.push(results[name].passive.description);
            this.champions.push(results[name].passive.image.full);
            this.champions.push(results[name].passive.name);
            this.champions.push(results[name].title);
            results[name].skins.forEach((skin) => {
              this.champions.push(skin.name);
            });
            results[name].spells.forEach((spell) => {
              this.spells.push(spell.image.full);
              this.spells.push(spell.description);
              this.spells.push(spell.name);
            });
          }
        }
      });
    };
  }

})();
