/*
requete de gestion appelsoffres
*/

SELECT Objet, Client, IdAppelOffre, DateLimite, LibelleDepartement
FROM appelsoffres
INNER JOIN departements on departements.IdDepartement = appelsoffres.IdDepartement
WHERE (Objet LIKE {recherche}
OR Client LIKE {recherche}
OR LibelleDepartement LIKE {recherche})
AND appelsoffres.DateLimite >= now()
ORDER BY DateLimite desc