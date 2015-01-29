App.controller.define('CAccueil', {

	config : {
	
		views: [
			"VAccueil"
		],
		
		models: [
		"getNombreOffres"
		],
				
		control: 
		{
			"panel#panelAccueil" : {
				show: "panelAccueil_onShow"
			}
		}
		
	},
		
	// évènements
	panelAccueil_onShow: function(p)
	{
		App.gestionao.getNombreOffres(-1,function(err,response) {
			p.setHtml(p.getHtml().join('').replace('(Nombre)',response._result.data[0]['nombretotalappeloffre']));
			// console.log(response._result.data[0]['nombretotalappeloffre']);
		});
	}
	
	
		
});