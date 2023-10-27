/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

console.log();
console.log("------ESERCIZIO 1------");
console.log();

const crazySum = function (a, b) {
  if (a === b) {
    return 3 * (a + b);
  }
  return a + b;
};
console.log(crazySum(10, 10) + " (questo è il risultato per a=10 e b=10)");
console.log(crazySum(5, 10) + " (questo è il risultato per a=5 e b=10)");

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

console.log();
console.log("------ESERCIZIO 2------");
console.log();

const boundary = function (n) {
  return n === 400 || (n > 20 && n <= 100);
};
console.log(boundary(400) + " (questo è il risultato per n=400)");
console.log(boundary(50) + " (questo è il risultato per n=50)");
console.log(boundary(320) + " (questo è il risultato per n=320)");

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

console.log();
console.log("------ESERCIZIO 3------");
console.log();

const reverseString = function (string) {
  let arrayString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    arrayString.push(string[i]);
  }
  return arrayString.join("");
};
console.log(reverseString("BIRRA"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

console.log();
console.log("------ESERCIZIO 4------");
console.log();

// let upperFirst = function (string) {
//   let arrayUpperFirst = [];

//   for (let i = 0; i < string.length; i++) {
//     let currentLetter = string[i];

//     if (currentLetter === " ") {
//     } else if ((currentLetter !== " " && string[i - 1] === " ") || i === 0) {
//       currentLetter = currentLetter.toUpperCase();
//     }
//     arrayUpperFirst.push(currentLetter);
//   }
//   return arrayUpperFirst.join("");
// };
// console.log(
//   upperFirst("questo esercizio era meno complicato di quanto credevo..")
// );

let upperFirst = function (string) {
  let arrayUpperFirst = [];

  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];

    if (i === 0 || string[i - 1] === " ") {
      currentLetter = currentLetter.toUpperCase();
    }
    arrayUpperFirst.push(currentLetter);
  }
  return arrayUpperFirst.join("");
};
console.log(
  upperFirst(
    "ma ho dovuto ragionare parecchio nonostante la logica fosse abbastanza chiara"
  )
);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

console.log();
console.log("------ESERCIZIO 5------");
console.log();

const giveMeRandom = function (n) {
  let arrayRandomNumbers = [];

  for (let i = 0; i < n; i++) {
    arrayRandomNumbers.push(Math.floor(Math.random() * 11));
  }
  return arrayRandomNumbers;
};

console.log(giveMeRandom(20));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
