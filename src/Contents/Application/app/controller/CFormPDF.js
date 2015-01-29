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
			"VFormPDF" : {
				show: "VFormPDF_onShow"
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