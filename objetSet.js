const monSet = new Set();

monSet.add(1);          // { 1 }
monSet.add(5);          // { 1, 5 }
monSet.add(5);          // { 1, 5 }
monSet.add('du texte'); // { 1, 5, 'du texte' }

const o = {a: 1, b: 2};
monSet.add(o);

monSet.add({a: 1, b: 2});
// o fait référence à un objet différent
// il n'y a pas de problème pour cet ajout

monSet.has(1); // true
monSet.has(3); // false, 3 n'a pas été ajouté à l'ensemble
monSet.has(5);              // true
monSet.has(Math.sqrt(25));  // true
monSet.has('Du Texte'.toLowerCase()); // true
monSet.has(o); // true

monSet.size; // 5

monSet.delete(5); // retire 5 du set
monSet.has(5);    // false, 5 a été retiré de l'ensemble

monSet.size; // 4, on a retiré une valeur de l'ensemble
console.log(monSet);
// affiche Set(4) [ 1, "du texte", {…}, {…} ] pour Firefox
// affiche Set(4) { 1, "du texte", {…}, {…} } pour Chrome
