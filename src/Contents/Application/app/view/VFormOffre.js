App.view.define('VFormOffre', {

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
		title: 'Appel d\'offre detaillé',
		style: 'background-color:white',
		items: [
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{	
						xtype: 'container',
						html: 'Date de Parution: ',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',						
						html: 'Ok', 
						itemId: 'panelDateParution',
						style: 'padding: 0 10px; background-color: white;'
					}
            ]},
        
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'container',
						html: 'Date limite: ',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',
						itemId: 'panelDateLimite',
						html: 'Ok', 
						style: 'padding: 0 10px; background-color: white;'
					}
				]},
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'container',
						html: 'Client:',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',
						itemId: 'panelClient',
						html: 'Ok', 
						style: 'padding: 0 10px; background-color: white;'
					}
				]},
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'container',
						html: 'Objet:',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',
						itemId: 'panelObjet',
						html: 'Ok', 
						style: 'padding: 0 10px; background-color: white;'
					}
				]},
			{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'container',
						html: 'Observation:',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',
						itemId: 'panelObservation',
						html: 'Ok', 
						style: 'padding: 0 10px; background-color: white;'
					}
				]},
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'container',
						html: 'Département:',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',
						itemId: 'panelDepartement',
						html: 'Ok', 
						style: 'padding: 0 10px; background-color: white;'
					}
				]},
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'container',
						html: 'Domaine:',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',
						itemId: 'panelDomaine',
						html: 'Ok', 
						style: 'padding: 0 10px; background-color: white;'
					}
				]},
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'container',
						html: 'Thématique:',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',
						itemId: 'panelThematique',
						html: 'Ok', 
						style: 'padding: 0 10px; background-color: white;'
					}
				]},
		// {
			// style: 'background-color: #8bc0d3;',
				// items: [
					// {
						// xtype: 'container',
						// html: 'Code de la Prestation:',
						// style: 'padding: 0 10px;'
					// },
					// {
						// xtype: 'panel',
						// itemId: 'panelCodePrestation',
						// html: 'Ok', 
						// style: 'padding: 0 10px; background-color: white;'
					// }
				// ]},
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'container',
						html: 'Numéro de semaine:',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',
						itemId: 'panelSemaine',
						html: 'Ok', 
						style: 'padding: 0 10px; background-color: white;'
					}
				]},
		{
			style: 'background-color: #8bc0d3;',
				items: [
					{
						xtype: 'container',
						html: 'Récupérer sous forme de PDF:',
						style: 'padding: 0 10px;'
					},
					{
						xtype: 'panel',
						style: 'background-color: white;',
						items: [{
						xtype: 'button', 
						text: 'PDF', 
						margin: 2,
						itemId: 'boutonPDF', 
						width: '25%'						
						}]
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