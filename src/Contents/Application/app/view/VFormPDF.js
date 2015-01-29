App.view.define('VFormPDF', {

	extend: 'Ext.Panel',
	
	fullscreen: true,	
	alias: "widget.VFormOffre",
	
	requires: [

    ],
	
	config: {	
		scrollable : {
			direction : 'vertical',
			directionLock : true
		},
		title: 'PDF',
		style: 'background-color:white',
		items: [
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'panel',						
						html: '<embed type="documents/pieces_jointes/2015/49/b613b3d6-f593-25b3-1be9-20ff9062037f" width="800px" height="800px" src="plaquette_v7_sans_hirondelles_cle0f4197.pdf" />',
						style: 'padding: 0 10px; background-color: white;'
					}
            ]}

    ]
		
		
		
	}
			
			
});

	// itemId: "DetailAppelOffre",
		// itemTpl: '{IdAppelOffre}{Client}{DateLimite}{Objet}'
		// store: App.store.create('getAppelOffreById',{
			// autoLoad: true,
			// indexBar: true,
			// grouped : true
		// })