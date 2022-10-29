"use strict";

function convert() {
  var nbrCv = document.getElementById("nbr").value;
  var result;
  result = Number(nbrCv).toString(2);
  document.getElementById("result").innerHTML = "Binary (base 2):" + result;
  result = Number(nbrCv).toString(8);
  document.getElementById("result1").innerHTML = "octal (base 8):" + result;
  result = Number(nbrCv).toString(16);
  document.getElementById("result2").innerHTML = "hexadecimal (base 16):" + result;
}