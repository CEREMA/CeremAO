App.controller.define('CFormRechercheOffre', {

	config : {
	//Déclaration des controllers
		views: [
		"VFormRechercheOffre"
		],
		
		models: [
		"getAppelOffreById"
		],
				
		control: 
		{
			"VFormRechercheOffre" : {
				show: "VFormRechercheOffre_onShow"
			},
			"VFormRechercheOffre button#boutonPDF": {
				tap: 'boutonPDF_onTap'
			}
		}
	},

	// Evènements
	VFormRechercheOffre_onShow: function()
	{
			App.gestionao.getAppelOffreById(REPONSE.appeloffre,function(err,response){
				// response._result.data[0]['Objet'];
				// =
				// response._result.data[0].Objet;
				// console.log(response._result);
				App.get('panel#panelDateParution').setHtml(response._result.data[0].DateParution);
				App.get('panel#panelDateLimite').setHtml(response._result.data[0].DateLimite);
				App.get('panel#panelClient').setHtml(response._result.data[0].Client);
				App.get('panel#panelObjet').setHtml(response._result.data[0].Objet);
				App.get('panel#panelObservation').setHtml(response._result.data[0].Observation);
				App.get('panel#panelDepartement').setHtml(response._result.data[0].Departement);
				App.get('panel#panelDomaine').setHtml(response._result.data[0].Domaine);
				App.get('panel#panelThematique').setHtml(response._result.data[0].Thematique);
				// App.get('panel#panelCodePrestation').setHtml(response._result.data[0].CodePrestation);
				App.get('panel#panelSemaine').setHtml(response._result.data[0].Semaine);			
			});
	},
	
	boutonPDF_onTap: function()
	{
		console.log("Pas encore implémenté!!");
	}
	
	
		
});