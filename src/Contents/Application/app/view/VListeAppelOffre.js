App.view.define('VListeAppelOffre', {

	extend: 'Ext.List',
	fullscreen: true,
	
	alias: "widget.VListeAppelOffre",
	
	requires: [
    ],
	
	config: {
	
		autoDestroy: true,	
		title: 'Liste appels d\'offres',
		itemId: "vueDeListeAppelOffre",
		style: "background-color:white",
		itemTpl: '{Client} {Objet} {DateLimite}',
		store: App.store.create('getAppelOffre',{
			autoLoad: true,
			indexBar: true,
			grouped : true
		})		  
	}
	
});

