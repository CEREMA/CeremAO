App.controller.define('CListeDomaine', {

	config : {
	
		views: [
			"VListeDomaine"
		],
		
		models: [
			"getDomaine"
		],
				
		control: 
		{
			"VListeDomaine" : {
				show: "VListeDomaine_onShow"
			},
			"VListeDomaine list#vueDeListeDomaine": {
				itemtap : "listeDomaine_onTap"
			}
		}
		
	},
		
	// évènements
	VListeDomaine_onShow: function()
	{
		REPONSE={};
	},
	listeDomaine_onTap: function (cpt, index, target, record, e, eOpts )
	{
		// console.log("Record.data.id_domaine:" + record.data.id_domaine);
		console.log(record);
		REPONSE.domaine=record.data.id_domaine;
		// console.log("REPONSE.domaine CListeDomaine:" + REPONSE.domaine);
		// App.gestionao.getDomaine(REPONSE.domaine,function(response){
			// console.log("response :" + response);
			// App.get('VMain').push(App.view.create('VListeThematique'));		
		// });
		App.get('VListeDomaine').push(App.view.create('VListeThematique'));
	}
	
	
		
});