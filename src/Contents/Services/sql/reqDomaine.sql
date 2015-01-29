/*
requete de gestion Domaines
*/

select domaine.id_domaine, nom_domaine, 
COUNT(appelsoffres.IdAppelOffre) AS NombreOffresDomaine 
from (appelsoffres left join domaine 
on domaine.id_domaine = appelsoffres.Id_domaine) 
where appelsoffres.Id_domaine in (select appelsoffres.Id_domaine)
	&& DateLimite >= now()
/*	&& DateLimite >= 21/02/2014*/
group by nom_domaine
