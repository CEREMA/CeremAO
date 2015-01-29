App.view.define('VListeRechercheAppelOffre', {

	extend: 'Ext.List',
	fullscreen: true,
	
	alias: "widget.VListeRechercheAppelOffre",
	
	requires: [
    ],
	
	config: {
	
		autoDestroy: true,	
		title: 'Liste appels d\'offres',
		itemId: "vueDeListeRechercheAppelOffre",
		itemTpl: '{Objet} { Client} { DateLimite} {LibelleDepartement}',
		style: "background-color:white",
		store: App.store.create('getRechercheAppelOffre',{
			autoLoad: true,
			indexBar: true,
			grouped : true
		})		  
	}
	
});

