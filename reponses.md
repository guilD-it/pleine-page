Q1 {{ hello, pleine plage }}
Q2 Aucun component n'est chargé sous la navbar
Q3 app.ts
Q4 On a maintenant un component qui est chargé
Q5 Il apparait dans la liste des livres affichés
Q6 computed(() =>
    LIVRES.filter(l => l.auteur.toLowerCase()
      .includes(this.filtre().toLowerCase()))
  );
  C'est le signal calculés qui ajuste l'affichage dynamiquement selon l'auteur du livre
Q7 toLowerCase()
Q8 Message d'erreur qui indique qu'on a besoin forcément de withCOmponenetInputsBindinds pour passer des informations dans l'url, faire des requetes, faire circuler la data
Q9 Le changement d'id n'est pas prit en compte à ce moment là donc l'affichage reste le même
Q10 l'état/la donnée du panier n'est pas sauvegardé
Q11 on ajoute un tableau de livre dans fiche
Q12 404 Not Found, il connait que pleine-page donc si on ne la charge pas de base on aura cette erreur
Q13 on retourne sur pleine-page