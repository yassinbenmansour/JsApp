"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var a = "1",
    b = "2";
c = a + b;
document.writeln("Type et valeur des variables:");
document.writeln("<br>");
document.writeln("-----------------------------");
document.writeln("<br>");
document.writeln("  a: (" + _typeof(a) + ") " + a);
document.writeln("<br>");
document.writeln("  b: (" + _typeof(b) + ") " + b);
document.writeln("<br>");
document.writeln("  c: (" + (typeof c === "undefined" ? "undefined" : _typeof(c)) + ") " + c);
document.writeln("<br>");
a = parseInt(a);
b = parseInt(b);
c = a + b;
document.writeln("<br>");
document.writeln("<br>");
document.writeln("Type et valeur des variables:");
document.writeln("<br>");
document.writeln("-----------------------------");
document.writeln("<br>");
document.writeln("  a: (" + _typeof(a) + ") " + a);
document.writeln("<br>");
document.writeln("  b: (" + _typeof(b) + ") " + b);
document.writeln("<br>");
document.writeln("  c: (" + (typeof c === "undefined" ? "undefined" : _typeof(c)) + ") " + c);
document.writeln("<br>");