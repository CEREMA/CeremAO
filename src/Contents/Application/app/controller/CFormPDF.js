App.controller.define('CFormPDF', {

	config : {
	//Déclaration des controllers
		views: [
		"VFormPDF"
		],
		
		models: [
		"getAppelOffreById",
		"getPDFviewer"
		],
				
		control: 
		{
			"VFormOffre" : {
				show: "VFormOffre_onShow"
			},
			"VFormOffre button#boutonPDF": {
				tap: 'boutonPDF_onTap'
			}
		}
	},

	// Evènements
	VFormPDF_onShow: function()
	{
			// console.log("Il ne se passe rien!!");
			// App.gestion.getAppelOffreById;
			console.log(REPONSE);
			App.gestionao.getPDFviewer(REPONSE.appeloffre, function(err, response){
			// console.log("Le PDF est lu!");
			console.log(response);
		});
	}
	
		
});