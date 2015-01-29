App.view.define('VListeDepartement', {

	extend: 'Ext.List',
	fullscreen: true,
	
	alias: "widget.VListeDepartement",
	
	requires: [

    ],
	
	config: {
		autoDestroy: true,
		title: 'Département',
		itemId: "vueDeListeDepartement",
		style: "background-color:white",
		itemTpl: '{NumDepartement} {LibelleDepartement} <b><i>({NombreOffresDepartement})<b><i>',
		store: App.store.create('getDepartement',{
			autoLoad: true,
			indexBar: true,
			grouped : true
		})
											
	}
										
									
            
});

