App.view.define('VAccueil', {

	extend: 'Ext.navigation.View',
	//extend: 'Ext.Panel',
	alias: "widget.VAccueil",
	
	requires: [

    ],
	
	config: {	
	
		autoDestroy: true,	
		//layout: "card",	
		title: 'Accueil',	
		iconCls: 'home',
		items: [
			{
				xtype: "panel",
				title: 'CeremAO',
				itemId: "panelAccueil",
				scrollable : {
					direction     : 'vertical',
					directionLock : true
				},
				style: "background-color:white",
				html:[
					'<div class=CEREMA1></div>',
					'<br><div class=TEXTO>CEREMAO vous permet de consulter les appels d\'offres sélectionnés par l\'équipe de veille de la DTERMED, classés par domaines qui peuvent vous intéresser.</div>',
					'<br><div class=TEXTO>Il y a actuellement <b>(Nombre)</b> appels d\'offres proposés. </div>'
				]
			}
		]
	}
});

