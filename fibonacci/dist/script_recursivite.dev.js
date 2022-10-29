"use strict";

function fibonacci(nbr) {
  if (nbr < 2) {
    return nbr;
  }

  return fibonacci(nbr - 1) + fibonacci(nbr - 2);
}

console.log(fibonacci(8));