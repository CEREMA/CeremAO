App.controller.define('CListeAppelOffre', {

	config : {
	
		views: [
			"VListeAppelOffre",
			"VFormOffre"
		],
		
		models: [
			"getAppelOffre",
			"getAppelOffreById"
		],
				
		control: 
		{
			"VListeAppelOffre" : {
				show: "VListeAppelOffre_onShow",
				itemtap: "listeAppelOffre_onTap"
			}
		}
		
		
	},
		
	// évènements
	VListeAppelOffre_onShow: function()
	{
		// console.log("REPONSE.domaine CListeAppelOffre:" + REPONSE.domaine);
		App.get('list#vueDeListeAppelOffre').getStore().getProxy().config.extraParams.extraParamDomaine = REPONSE.domaine;
		App.get('list#vueDeListeAppelOffre').getStore().getProxy().config.extraParams.extraParamThematique = REPONSE.thematique;
		App.get('list#vueDeListeAppelOffre').getStore().getProxy().config.extraParams.extraParamNature = REPONSE.nature;
		App.get('list#vueDeListeAppelOffre').getStore().getProxy().config.extraParams.extraParamAppelOffre = REPONSE.departement;
		App.get('list#vueDeListeAppelOffre').getStore().load();
	},
	listeAppelOffre_onTap: function(cpt, index, target, record, e, eOpts)
	{
		REPONSE.appeloffre=record.data.IdAppelOffre;
		App.get('VListeDomaine').push(App.view.create('VFormOffre'));
	}
	
	
		
});