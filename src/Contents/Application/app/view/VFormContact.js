App.view.define('VFormContact', {

	extend: 'Ext.navigation.View',
	
	// fullscreen: true,	
	alias: "widget.VFormContact",
	
	requires: [

    ],
	
	config: {	
	autoDestroy: true,	
	
		layout: "card",	
		// style: 'background-color: blue;'
		style: "background-color:white",
		title: 'Contact',	
		iconCls: 'info',
		items: [
			{
				title: 'Contact',
				scrollable : {
				direction     : 'vertical',
				directionLock : true
				},
				style: "background-color:white",
				items:[
				{
					html:['<div class=CEREMA2></div>',
					'<br><div>Centre d\'études et d\'expertise sur les risques\, l\'environnement\, la mobilité et l\'aménagement Cité des mobilités.</div>',
					'<br><div>Pôle d\'activités Les Milles. </div>',
					'<br><div>Avenue Albert Einstein.</div>',
					'<br><div>CS 70499, 13593 - FRANCE - Aix en Provence Cedex 3.</div>',
					'<br><div>Télécopie : 04 42 24 77 77</div>',
					'<br><div>Téléphone : 04 42 24 76 76</div>',
					'<br><div>Mail: <a href="cete-mediterranee@developpement-durable.gouv.fr">cete-mediterranee@developpement-durable.gouv.fr</a></div>',
					'<br><div>Dévellopeur: Pierre Pellegrini</div>',
					'<br><div>Site du Cerema: <a href= "www.cerema.fr">www.cerema.fr</a></div>']
					
				}
				]
			}
				
		]
	}		
			
});