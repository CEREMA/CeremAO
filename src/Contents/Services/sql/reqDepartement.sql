/*
requete de gestion des departements
*/

SELECT appelsoffres.IdDepartement, NumDepartement , LibelleDepartement, 
COUNT(IdAppelOffre) as NombreOffresDepartement 
FROM appelsoffres 
inner join departements
on departements.IdDepartement = appelsoffres.IdDepartement
where id_domaine = {domaine}
			&& IdThematique = {thematique}
			&& IdNaturePrestation = {natureprestation}
/*where appelsoffres.id_domaine = 2
			&& appelsoffres.IdThematique = 4
			&& IdNaturePrestation = 3*/
			&& DateLimite >= now()
group by LibelleDepartement