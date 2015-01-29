App.controller.define('CMain', {

	config : {
	
		views: [
			"VMain",
			"VAccueil",
			"VListeDomaine",
			"VFormRecherche",
			"VFormContact"
		],
		
		models: [	
			"getDomaine"
		],
				
		control: 
		{
			
			"VMain" : {
				show: "VMain_onShow"
			}
		}
		
		
	},
	
	// initialisation de l'interface
	init: function() {			
		App.init('VMain');		
    },
	
	
	// Evènements
	VMain_onShow: function()
	{
	
	}
	
});