"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Car =
/*#__PURE__*/
function () {
  function Car(name, year) {
    _classCallCheck(this, Car);

    this.name = name;
    this.year = year;
  }

  _createClass(Car, [{
    key: "age",
    value: function age() {
      var date = new Date();
      return date.getFullYear() - this.year;
    }
  }]);

  return Car;
}();

var myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years old.";