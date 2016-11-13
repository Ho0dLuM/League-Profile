(function() {

  'use strict';

  angular
    .module('leagueApp.components.champions', [])
    .controller('champController', champController);

  champController.$inject = ['champService'];

  function champController(champService) {
    /*jshint validthis: true */
    champService.getChamps().then(() => {
      this.riotChamps = champService.champions;
    });
    this.filter = 'name';
  }

})();
