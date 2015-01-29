/*
requete de gestion des PDF
*/

SELECT *
FROM appelsoffres 
inner join fichiers
on appelsoffres.IdAppelOffre = fichiers.IdAO
/*where IdAppelOffre = {pdf}*/
where IdAppelOffre = 8883
/*where appelsoffres.id_domaine = 2
			&& appelsoffres.IdThematique = 4
			&& IdNaturePrestation = 2
			&& IdDepartement = 3*/