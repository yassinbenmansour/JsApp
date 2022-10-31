"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AfficherEnfants() {
  var _person;

  var person = (_person = {
    "personnne": {
      "id": "1100",
      "name": "yassine",
      "Enfants": [{
        "prenom": "aya",
        "age": "12"
      }, {
        "prenom": "ali",
        "age": "2"
      }, {
        "prenom": "Amine",
        "age": "15"
      }]
    }
  }, _defineProperty(_person, "personnne", {
    "id": "1101",
    "name": "hamid",
    "Enfants": [{
      "prenom": "safae",
      "age": "12"
    }, {
      "prenom": "ali",
      "age": "2"
    }, {
      "prenom": "Amine",
      "age": "15"
    }]
  }), _defineProperty(_person, "personnne", {
    "id": "1102",
    "name": "hossin",
    "Enfants": [{
      "prenom": "achraf",
      "age": "32"
    }, {
      "prenom": "ahmed",
      "age": "29"
    }, {
      "prenom": "Amine",
      "age": "45"
    }]
  }), _person);
  var name = document.getElementById("p").value;
  var msg = "Lister les enfants :" + "</br>";

  if (person.personnne.name == name) {
    for (var i = 0; i < 3; i++) {
      msg += "nom : " + person.personnne.Enfants[i].prenom + " , " + "age : " + person.personnne.Enfants[i].age + "<br>";
    }

    document.getElementById("output").innerHTML = msg;
  } else {
    document.write("error Nom n'existe pas");
  }
}