"use strict";

function convert() {
  var nbrCv = document.getElementById("nbr").value;
  var result;
  result = Number(nbrCv).toString(2);
  document.getElementById("result").innerHTML = "Binary (base 2):" + result;
}

function confirmer() {
  var res = confirm("Êtes-vous sûr de vouloir supprimer?");

  if (res) {//..................;LOGIQUE
  }
}