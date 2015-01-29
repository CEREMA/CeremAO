/*
requete de gestion appelsoffres
*/

SELECT Objet, Client , DateLimite, IdAppelOffre
FROM appelsoffres 
where 	id_domaine = {domaine}
			&& IdThematique = {thematique}
			&& IdNaturePrestation = {natureprestation}
			&& IdDepartement = {departement}
			&& DateLimite >= now()
/*where appelsoffres.id_domaine = 2
			&& appelsoffres.IdThematique = 4
			&& IdNaturePrestation = 2
			&& IdDepartement = 3*/