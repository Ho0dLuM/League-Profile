(function() {

  'use strict';

  angular
    .module('leagueApp.components.champions', [])
    .controller('champController', champController);

  champController.$inject = ['champService'];

  function champController(champService) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
    champService.getChamps();

  }

})();
