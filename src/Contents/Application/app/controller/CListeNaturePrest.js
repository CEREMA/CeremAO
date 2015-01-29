App.controller.define('CListeNaturePrest', {

	config : {
	
		views: [
			"VListeNaturePrest",
			"VListeDepartement"
		],
		
		models: [
			"getNaturePrest",
			"getDepartement"
		],
				
		control: 
		{
			"VListeNaturePrest" : {
				show: "VListeNaturePrest_onShow",
				itemtap : "listeNaturePrest_onTap"
			}
		}
		
	},
		
	// évènements
	VListeNaturePrest_onShow: function()
	{
		// alert('x');
		// console.log("REPONSE.domaine CListeNaturePrest:" + REPONSE.domaine);
		App.get('list#vueDeListeNaturePrestation').getStore().getProxy().config.extraParams.extraParamDomaine = REPONSE.domaine;
		App.get('list#vueDeListeNaturePrestation').getStore().getProxy().config.extraParams.extraParamThematique = REPONSE.thematique;
		App.get('list#vueDeListeNaturePrestation').getStore().load();
	},
	listeNaturePrest_onTap: function (cpt, index, target, record, e, eOpts )
	{
		// console.log(record);
		// console.log(target);
		REPONSE.nature=record.data.IdNaturePrestation;
		// App.gestionao.getDepartement(REPONSE.nature,function(response){
			// console.log(response);
			// App.get('VMain').push(App.view.create('VListeDepartement'));		
		// });
		App.get('VListeDomaine').push(App.view.create('VListeDepartement'));	
	}
	
	
		
});