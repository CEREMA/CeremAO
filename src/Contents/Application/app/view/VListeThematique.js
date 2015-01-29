App.view.define('VListeThematique', {

	extend: 'Ext.List',	
	// extend: 'Ext.navigation.View',
	alias: "widget.VListeThematique",
	
	requires: [

    ],
	
	config: {	
		autoDestroy: true,	
		layout: "fit",		
		title: "Thématiques",
		itemId: "vueDeListeThematique",
		itemTpl: '{nom_thematique} <b><i>({NombreOffresThematique})</b></i>',
		style: "background-color:white",
		store: App.store.create('getThematique',{
				autoLoad: true,
				indexBar: true,
				grouped : true
		})
	}
	
});

