/*
requete de gestion Nature Prestations
*/

SELECT appelsoffres.IdNaturePrestation, LibelleNaturePrestation, 
COUNT(IdAppelOffre) as NombreOffresThematique 
	FROM appelsoffres 
	inner join naturesprestations
	on naturesprestations.IdNaturePrestation = appelsoffres.IdNaturePrestation
	where appelsoffres.Id_domaine = {domaine} 
	&& appelsoffres.IdThematique = {thematique}
  /* where appelsoffres.id_domaine = 2
	&& appelsoffres.IdThematique = 6*/
	&& DateLimite >= now()
group by LibelleNaturePrestation