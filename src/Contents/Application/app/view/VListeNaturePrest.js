App.view.define('VListeNaturePrest', {

	extend: 'Ext.List',
	// fullscreen: true,
	
	alias: "widget.VListeNaturePrest",
	
	requires: [

    ],
	
	config: {
		autoDestroy: true,		
		useTitleForBackButtonText: true,
				title: 'Nature Prestation',
				itemId: "vueDeListeNaturePrestation",
				style: "background-color:white",
				itemTpl: '{LibelleNaturePrestation} <b><i> ({NombreOffresThematique}) </b></i>',
				store: App.store.create('getNaturePrest',{
					autoLoad: false,
					indexBar: true,
					grouped : true
				})				
	}
										
									
            
});

