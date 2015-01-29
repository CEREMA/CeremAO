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
						html: 'Hello', 
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