App.view.define('VMain', {

	// extend: 'Ext.navigation.View',
	extend: 'Ext.tab.Panel',
	fullscreen: true,
	
	alias: "widget.VMain",
	
	requires: [

    ],
	
	config: {
		autoDestroy: true,	
		//layout: 'card',
		activeItem: 0,
		tabBarPosition: 'bottom',
//		navigationBar: {ui: 'black',
		items: [{ 
				xtype: 'VAccueil'
				},
				{ 
				xtype: 'VListeDomaine'
				},
				{ 
				xtype: 'VFormRecherche'				
				},
				{
				xtype: 'VFormContact'
				}
			]
	}							   
});

/*,											Autre types de boutons: 
											{ xtype: 'spacer' },
											{ iconCls: 'action' },
											{ iconCls: 'add' },
											{ iconCls: 'arrow_down' },
											{ iconCls: 'arrow_left' },
											{ iconCls: 'arrow_up' },
											{ iconCls: 'compose' },
											{ iconCls: 'delete' },
											{ iconCls: 'organize' },
											{ iconCls: 'refresh' },
											{ iconCls: 'info' }*/