"use strict";

ValidationForm = function ValidationForm() {
  var testname = document.forms["form"]["nom"].value;

  if (testname == "") {
    alert("error");
    return false;
  }
};

function upperCase() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}