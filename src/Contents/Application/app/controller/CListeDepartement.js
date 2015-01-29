App.controller.define('CListeDepartement', {

	config : {
	
		views: [
			"VListeDepartement",
			"VListeAppelOffre"
		],
		
		models: [
			"getDepartement",
			"getAppelOffre"
		],
				
		control: 
		{
			"VListeDepartement": {
				show: "VListeDepartement_onShow",
				itemtap : "listeDepartement_onTap"
			}
		}	
	},
		
	// évènements
	VListeDepartement_onShow: function()
	{
		// alert('x');
		// console.log("REPONSE.domaine CListeDepartement:" + REPONSE.domaine);
		App.get('list#vueDeListeDepartement').getStore().getProxy().config.extraParams.extraParamDomaine=REPONSE.domaine;
		App.get('list#vueDeListeDepartement').getStore().getProxy().config.extraParams.extraParamThematique=REPONSE.thematique;
		App.get('list#vueDeListeDepartement').getStore().getProxy().config.extraParams.extraParamNature=REPONSE.nature;
		App.get('list#vueDeListeDepartement').getStore().load();
	},
	
	listeDepartement_onTap: function (cpt, index, target, record, e, eOpts )
	{
		REPONSE.departement=record.data.IdDepartement;
		App.get('VListeDomaine').push(App.view.create('VListeAppelOffre'));			
	}
	
	
		
});