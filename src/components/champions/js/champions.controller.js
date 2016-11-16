(function() {

  'use strict';

  angular
    .module('leagueApp.components.champions', [])
    .controller('champController', champController);

  champController.$inject = ['champService'];

  function champController(champService) {
    /*jshint validthis: true */
    this.filter = 'name';
    this.champions = [];
    this.spells = [];

    champService.getChamps()
    .then((data) => {
      const results = data.data.data;
      for (let name in results) {
        this.champions.push(results[name]);
        this.spells.push(results[name].passive);
        this.spells.push(results[name].spells);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  }

})();
