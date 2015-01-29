App.controller.define('CFormRecherche', {

	config : {
	
		views: [
		"VFormRecherche",
		"VListeRechercheAppelOffre"
		],
		
		models: [
		"getRechercheAppelOffre"
		],
				
		control: 
		{
			"VFormRecherche" : {
				show: "VFormRecherche_onShow"
			},
			"VFormRecherche button#boutonValider": {
				tap: "boutonValider_onTap"
			}
				
		}
		
		 
	},
		
	// évènements
	VFormRecherche_onShow: function()
	{
	REPONSE={};

	
	},
	boutonValider_onTap: function()
	{
	var search = App.get('searchfield#search').getValue();
	// console.log(search);
	REPONSE.recherche = search;
	// console.log(REPONSE.recherche);
		// App.gestionao.getRechercheAppelOffre(App.get('searchfield#search').getValue(),function(err,response) {
			// console.log(response._result.data);
			// console.log(response._result.metaData);
			// if(){
			// }
			App.get('VFormRecherche').push(App.view.create('VListeRechercheAppelOffre'));
		// });
	
	}
	
		
});