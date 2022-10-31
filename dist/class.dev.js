"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function Car(name, year) {
  _classCallCheck(this, Car);

  this.name = name;
  this.year = year;
};

var myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML = myCar.name + " " + myCar.year;