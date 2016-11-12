(function() {

  'use strict';

  angular
    .module('leagueApp.components.champions', [])
    .controller('champController', champController);

  champController.$inject = ['champService'];

  function champController(champService) {
    /*jshint validthis: true */
    champService.getChamps().then(() => {
      console.log(this.riotChamps = champService.champions);
      console.log(this.champSpells = champService.spells);
    })


  }

})();
