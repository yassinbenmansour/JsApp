"use strict";

function fibonacci(nbr) {
  var n1 = 0;
  var n2 = 1;
  var somme = 0;

  for (var i = 2; i <= nbr; i++) {
    //somme des deux derniers nombres
    somme = n1 + n2; //assigner la dernière valeur à la première

    n1 = n2; //attribuer la somme au dernier

    n2 = somme;
  }

  return nbr ? n2 : n1;
}

console.log(fibonacci(8));