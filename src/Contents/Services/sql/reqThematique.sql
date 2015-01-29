/*
requete de gestion Thematique
*/

select IdThematique, nom_thematique, 
count(IdAppelOffre) as NombreOffresThematique
from appelsoffres 
inner join thematiques
on id_thematique = IdThematique 
where appelsoffres.Id_domaine = {domaine}
&& DateLimite >= now()
group by nom_thematique

/*inner join domaine
on domaine.id_domaine = thematiques.id_domaine*/
/*inner join appelsoffres
on appelsoffres.IdDomaine = thematiques.id_domaine*/
/*WHERE appelsoffres.DateLimite >= now()*/
/*WHERE appelsoffres.DateLimite >= 21/02/2014*/
/*&& appelsoffres.IdDomaine = 1*/
/*group by IdAppelOffre && nom_thematique*/