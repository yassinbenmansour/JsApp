"use strict";

function myFunction() {
  var message = document.getElementById("p01");
  message.innerHTML = "";
  var x = document.getElementById("demo").value;

  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}