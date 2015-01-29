/*
requete de comptage du nombre d'offres.
*/

select count(IdAppelOffre) as nombretotalappeloffre from appelsoffres where DateLimite >= now()
