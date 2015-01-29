App.controller.define('CListeThematique', {

	config : {
	
		views: [
			"VListeThematique",
			"VListeNaturePrest"
		],
		
		models: [
			"getThematique",
			"getNaturePrest"
		],
				
		control: 
		{
			"VListeThematique" : {
				show: "VListeThematique_onShow",
				itemtap : "listeThematique_onTap"
			}
		}
		
	},
	
	// évènements
	VListeThematique_onShow: function()
	{
		// console.log("record:" + record);
		// console.log("REPONSE.domaine CListeThematique:" + REPONSE.domaine);
		App.get('list#vueDeListeThematique').getStore().getProxy().config.extraParams.extraParamDomaine=REPONSE.domaine;
		App.get('list#vueDeListeThematique').getStore().load();
		// console.log("REPONSE.domaine CListeThematique:" + REPONSE.domaine);
	},
	
	listeThematique_onTap: function (cpt, index, target, record, e, eOpts )
	{
		// console.log(record.data);
		REPONSE.thematique=record.data.IdThematique;
		// console.log("REPONSE.thematique CListeThematique:" + REPONSE.thematique);
		// console.log("REPONSE.domaine CListeDomaine:" + REPONSE.domaine);
		// console.log(REPONSE.thematique);
		// App.gestionao.getThematique(REPONSE.Thematique,function(response){
			// console.log(response);
		App.get('VListeDomaine').push(App.view.create('VListeNaturePrest'));				
	}
	
	
		
});