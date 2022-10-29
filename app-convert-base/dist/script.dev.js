"use strict";

function convert() {
  var nbrCv = document.getElementById("nbr").value;
  var result;
  result = Number(nbrCv).toString(2);
  document.getElementById("result").innerHTML = result;
}