"use strict";

var count = 0;
var value = document.querySelector("#value");
var btns = document.querySelectorAll('.btn');
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    }

    value.textContent = count;

    if (styles.contains('reset')) {
      count = 0;
    }

    value.textContent = count;

    if (styles.contains('increase')) {
      count++;
    }

    value.textContent = count;
  });
});