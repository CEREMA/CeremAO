
gestionao = {
	getDomaine: function(o,cb)
	{
		var db=gestionao.using('db');
		db.model('gestionao',db.sql('reqDomaine'), cb);
	},
	getThematique : function(o,cb)
	{
		var db=gestionao.using('db');
		db.model('gestionao', db.sql('reqThematique', {domaine: o.extraParamDomaine}), cb);
	},
	getNaturePrest: function(o,cb)
	{
		var db=gestionao.using('db');
		db.model('gestionao',db.sql('reqNaturePrestation', {domaine: o.extraParamDomaine, thematique: o.extraParamThematique}),cb);
	},
	getDepartement: function(o,cb)
	{
		var db=gestionao.using('db');
		db.model('gestionao',db.sql('reqDepartement', {domaine: o.extraParamDomaine, thematique: o.extraParamThematique, natureprestation: o.extraParamNature}),cb);
	},
	getAppelOffre: function(o, cb)
	{
		var db=gestionao.using('db');	
		db.model('gestionao',db.sql('reqAppelOffre', {domaine: o.extraParamDomaine, thematique: o.extraParamThematique, natureprestation: o.extraParamNature, departement: o.extraParamAppelOffre}),cb);
	},
	getAppelOffreById: function(id,cb)
	{
		var db=gestionao.using('db');
		db.model('gestionao',db.sql('reqAppelOffreById', {appeloffre: id}),cb);
	},
	getRechercheAppelOffre: function(o, cb)
	{
		var db=gestionao.using('db');
		db.model('gestionao', db.sql('reqRechercheAppelOffre',{recherche: o.extraParamFormulaireAppelOffre}), cb);
	},
	getNombreOffres: function(o,cb)
	{
		var db=gestionao.using('db');
		db.model('gestionao',db.sql('reqNombreOffres'), cb);
	},
	getPDFviewer: function(o, cb)
	{
		var db=gestionao.using('db');
		db.model('gestionao', db.sql('reqPDF', {pdf : id}), cb);
	}
};

module.exports=gestionao;