App.controller.define('CListeRechercheAppelOffre', {

	config : {
	
		views: [
			"VListeRechercheAppelOffre",
			"VFormRechercheOffre"
		],
		
		models: [
			"getRechercheAppelOffre",
			"getAppelOffreById"
		],
				
		control: 
		{
			"VListeRechercheAppelOffre" : {
				show: "VListeRechercheAppelOffre_onShow",
				itemtap: "listeRechercheAppelOffre_onTap"
			}
		}
		
		
	},
		
	// évènements
	VListeRechercheAppelOffre_onShow: function()
	{

		var paramoffre = '%' + REPONSE.recherche + '%'
		App.get('list#vueDeListeRechercheAppelOffre').getStore().getProxy().config.extraParams.extraParamFormulaireAppelOffre = paramoffre;
		App.get('list#vueDeListeRechercheAppelOffre').getStore().load();
		
	},
	listeRechercheAppelOffre_onTap: function(cpt, index, target, record, e, eOpts)
	{
		REPONSE.appeloffre=record.data.IdAppelOffre;
		// console.log(REPONSE.appeloffre);
		App.get('VFormRecherche').push(App.view.create('VFormRechercheOffre'));
	}
	
	
		
});