App.view.define('VFormRecherche', {

	extend: 'Ext.navigation.View',	
	alias: "widget.VFormRecherche",
	
	requires: [

    ],
	
	config: {
		layout: 'card',
		// fullscreen: true,
		title: 'Recherche',
		iconCls: 'search',
		
			items: [
				{
					xtype: 'panel',
					title: 'Recherche',
					style: "background-color:white",
					
					items: [{
						xtype: 'fieldset',
						title: 'Recherche par mots clés:',		
						// style: "background-color:white",						
						items: [
							// style: "background-color:white",
							{
								
								xtype: 'searchfield',	
								itemId: 'search',
								name: 'Requete'
							},
							{
								xtype: 'button',
								itemId: 'boutonValider',
								text: 'Valider'
							}
						]
						
					}]
				}
			]
						
	}
	
});

