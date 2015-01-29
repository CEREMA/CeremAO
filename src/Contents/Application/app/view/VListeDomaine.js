App.view.define('VListeDomaine', {

	extend: 'Ext.navigation.View',
	alias: "widget.VListeDomaine",
	
	requires: [

    ],
	
	config: {	
		// autoDestroy: true,		
		title: 'A.O actives',
		iconCls: 'action',
		items: [{ xtype: "list",
			title: 'Domaines',
			itemId: "vueDeListeDomaine",
			style: "background-color:white",
			itemTpl: '{nom_domaine} <b><i>({NombreOffresDomaine})</b></i>',
			store: App.store.create('getDomaine',{
				autoLoad: true,
				indexBar: true,
				grouped : true
			})
			}]
	}
	
});

