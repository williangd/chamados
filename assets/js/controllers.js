(function () {

    'use strict';

    angular
    	.module('zdesk')
    	.controller('IndexCtrl', IndexCtrl);

    function IndexCtrl() {

    	var vm = this;
    	vm.tickets = [
        { "ID": "1",
    		"titulo": "Liberar site",
        "desc": "Liberar o site www.terra.com.br",
    		"solicitante": "Willian Oliveira",
    		"empresa": "WNO" },
        { "ID": "2",
    		"titulo": "Cadastrar equipamento",
        "desc": "Cadastrar equipamento com o MAC ff:ff:ff:aa:aa:aa",
    		"solicitante": "Rodrigo da Silva",
    		"empresa": "Terra" }
      ];
    };


})();
